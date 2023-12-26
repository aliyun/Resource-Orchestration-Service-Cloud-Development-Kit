"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudAssemblyBuilder = exports.CloudAssembly = void 0;
const cxschema = require("@alicloud/ros-cdk-assembly-schema");
const fs = require("fs");
const os = require("os");
const path = require("path");
const ros_stack_artifact_1 = require("./artifacts/ros-stack-artifact");
const nested_cloud_assembly_artifact_1 = require("./artifacts/nested-cloud-assembly-artifact");
const tree_cloud_artifact_1 = require("./artifacts/tree-cloud-artifact");
const cloud_artifact_1 = require("./cloud-artifact");
const toposort_1 = require("./toposort");
/**
 * The name of the root manifest file of the assembly.
 */
const MANIFEST_FILE = "manifest.json";
/**
 * Represents a deployable cloud application.
 */
class CloudAssembly {
    /**
     * Reads a cloud assembly from the specified directory.
     * @param directory The root directory of the assembly.
     */
    constructor(directory) {
        this.directory = directory;
        this.manifest = cxschema.Manifest.load(path.join(directory, MANIFEST_FILE));
        this.version = this.manifest.version;
        this.artifacts = this.renderArtifacts();
        this.runtime = this.manifest.runtime || { libraries: {} };
        // force validation of deps by accessing 'depends' on all artifacts
        this.validateDeps();
    }
    /**
     * Attempts to find an artifact with a specific identity.
     * Returns A 'CloudArtifact' object or 'undefined' if the artifact does not exist in this assembly.
     * Param id The artifact ID
     */
    tryGetArtifact(id) {
        return this.artifacts.find((a) => a.id === id);
    }
    /**
     * Returns a ROS stack artifact from this assembly.
     *
     * Will only search the current assembly.
     *
     * Param stackName the name of the ROS stack.
     * Throws if there is no stack artifact by that name
     * Throws if there is more than one stack with the same stack name. You can
     * use 'getStackArtifact - stack.artifactId' instead.
     * Returns a 'RosStackArtifact' object.
     */
    getStackByName(stackName) {
        const artifacts = this.artifacts.filter((a) => a instanceof ros_stack_artifact_1.RosStackArtifact && a.stackName === stackName);
        if (!artifacts || artifacts.length === 0) {
            throw new Error(`Unable to find stack with stack name "${stackName}"`);
        }
        if (artifacts.length > 1) {
            throw new Error(`There are multiple stacks with the stack name "${stackName}" (${artifacts
                .map((a) => a.id)
                .join(",")}). Use "getStackArtifact(id)" instead`);
        }
        return artifacts[0];
    }
    /**
     * Returns a ROS stack artifact by name from this assembly.
     * Deprecated renamed to 'getStackByName' (or 'getStackArtifact(id)')
     */
    getStack(stackName) {
        return this.getStackByName(stackName);
    }
    /**
     * Returns a ROS stack artifact from this assembly.
     *
     * Param artifactId the artifact id of the stack (can be obtained through 'stack.artifactId').
     * Throws if there is no stack artifact with that id
     * Returns a 'RosStackArtifact' object.
     */
    getStackArtifact(artifactId) {
        const artifact = this.tryGetArtifact(artifactId);
        if (!artifact) {
            throw new Error(`Unable to find artifact with id "${artifactId}"`);
        }
        if (!(artifact instanceof ros_stack_artifact_1.RosStackArtifact)) {
            throw new Error(`Artifact ${artifactId} is not a ROS stack`);
        }
        return artifact;
    }
    /**
     * Returns a nested assembly artifact.
     *
     * @param artifactId The artifact ID of the nested assembly
     */
    getNestedAssemblyArtifact(artifactId) {
        const artifact = this.tryGetArtifact(artifactId);
        if (!artifact) {
            throw new Error(`Unable to find artifact with id "${artifactId}"`);
        }
        if (!(artifact instanceof nested_cloud_assembly_artifact_1.NestedCloudAssemblyArtifact)) {
            throw new Error(`Found artifact '${artifactId}' but it's not a nested cloud assembly`);
        }
        return artifact;
    }
    /**
     * Returns a nested assembly.
     *
     * @param artifactId The artifact ID of the nested assembly
     */
    getNestedAssembly(artifactId) {
        return this.getNestedAssemblyArtifact(artifactId).nestedAssembly;
    }
    /**
     * Returns the tree metadata artifact from this assembly.
     * Throws if there is no metadata artifact by that name
     * Returns a 'TreeCloudArtifact' object if there is one defined in the manifest, 'undefined' otherwise.
     */
    tree() {
        const trees = this.artifacts.filter((a) => a.manifest.type === cxschema.ArtifactType.CDK_TREE);
        if (trees.length === 0) {
            return undefined;
        }
        else if (trees.length > 1) {
            throw new Error(`Multiple artifacts of type ${cxschema.ArtifactType.CDK_TREE} found in manifest`);
        }
        const tree = trees[0];
        if (!(tree instanceof tree_cloud_artifact_1.TreeCloudArtifact)) {
            throw new Error('"Tree" artifact is not of expected type');
        }
        return tree;
    }
    /**
     * @returns all the ROS stack artifacts that are included in this assembly.
     */
    get stacks() {
        const result = new Array();
        for (const a of this.artifacts) {
            if (a instanceof ros_stack_artifact_1.RosStackArtifact) {
                result.push(a);
            }
        }
        return result;
    }
    validateDeps() {
        for (const artifact of this.artifacts) {
            ignore(artifact.dependencies);
        }
    }
    renderArtifacts() {
        const result = new Array();
        for (const [name, artifact] of Object.entries(this.manifest.artifacts || {})) {
            const cloudartifact = cloud_artifact_1.CloudArtifact.fromManifest(this, name, artifact);
            if (cloudartifact) {
                result.push(cloudartifact);
            }
        }
        return toposort_1.topologicalSort(result, (x) => x.id, (x) => x._dependencyIDs);
    }
}
exports.CloudAssembly = CloudAssembly;
/**
 * Can be used to build a cloud assembly.
 */
class CloudAssemblyBuilder {
    /**
     * Initializes a cloud assembly builder.
     * @param outdir The output directory, uses temporary directory if undefined
     */
    constructor(outdir) {
        this.artifacts = {};
        this.missing = new Array();
        this.outdir = determineOutputDirectory(outdir);
        // we leverage the fact that outdir is long-lived to avoid staging assets into it
        // that were already staged (copying can be expensive). this is achieved by the fact
        // that assets use a source hash as their name. other artifacts, and the manifest itself,
        // will overwrite existing files as needed.
        if (fs.existsSync(this.outdir)) {
            if (!fs.statSync(this.outdir).isDirectory()) {
                throw new Error(`${this.outdir} must be a directory`);
            }
        }
        else {
            fs.mkdirSync(this.outdir, { recursive: true });
        }
    }
    /**
     * Adds an artifact into the cloud assembly.
     * @param id The ID of the artifact.
     * @param manifest The artifact manifest
     */
    addArtifact(id, manifest) {
        this.artifacts[id] = filterUndefined(manifest);
    }
    /**
     * Reports that some context is missing in order for this cloud assembly to be fully synthesized.
     * @param missing Missing context information.
     */
    addMissing(missing) {
        if (this.missing.every((m) => m.key !== missing.key)) {
            this.missing.push(missing);
        }
    }
    /**
     * Finalizes the cloud assembly into the output directory returns a
     * 'CloudAssembly' object that can be used to inspect the assembly.
     * @param options
     */
    buildAssembly(options = {}) {
        // explicitly initializing this type will help us detect
        // breaking changes. (For example adding a required property will break compilation).
        let manifest = {
            version: cxschema.Manifest.version(),
            artifacts: this.artifacts,
            runtime: options.runtimeInfo,
            missing: this.missing.length > 0 ? this.missing : undefined,
        };
        // now we can filter
        manifest = filterUndefined(manifest);
        const manifestFilePath = path.join(this.outdir, MANIFEST_FILE);
        cxschema.Manifest.save(manifest, manifestFilePath);
        // "backwards compatibility": in order for the old CLI to tell the user they
        // need a new version, we'll emit the legacy manifest with only "version".
        // this will result in an error "CDK Toolkit >= CLOUD_ASSEMBLY_VERSION is required in order to interact with this program."
        fs.writeFileSync(path.join(this.outdir, "cdk.out"), JSON.stringify({ version: manifest.version }));
        return new CloudAssembly(this.outdir);
    }
    /**
     * Creates a nested cloud assembly
     */
    createNestedAssembly(artifactId, displayName) {
        const directoryName = artifactId;
        const innerAsmDir = path.join(this.outdir, directoryName);
        this.addArtifact(artifactId, {
            type: cxschema.ArtifactType.NESTED_CLOUD_ASSEMBLY,
            properties: {
                directoryName,
                displayName,
            },
        });
        return new CloudAssemblyBuilder(innerAsmDir);
    }
}
exports.CloudAssemblyBuilder = CloudAssemblyBuilder;
/**
 * Returns a copy of 'obj' without undefined values in maps or arrays.
 */
function filterUndefined(obj) {
    if (Array.isArray(obj)) {
        return obj.filter((x) => x !== undefined).map((x) => filterUndefined(x));
    }
    if (typeof obj === "object") {
        const ret = {};
        for (const [key, value] of Object.entries(obj)) {
            if (value === undefined) {
                continue;
            }
            ret[key] = filterUndefined(value);
        }
        return ret;
    }
    return obj;
}
function ignore(_x) {
    return;
}
/**
 * Turn the given optional output directory into a fixed output directory
 */
function determineOutputDirectory(outdir) {
    return outdir ?? fs.mkdtempSync(path.join(os.tmpdir(), "cdk.out"));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYXNzZW1ibHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC1hc3NlbWJseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEQ7QUFDOUQseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsdUVBQWtFO0FBQ2xFLCtGQUF5RjtBQUN6Rix5RUFBb0U7QUFDcEUscURBQWlEO0FBQ2pELHlDQUE2QztBQUU3Qzs7R0FFRztBQUNILE1BQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQztBQUV0Qzs7R0FFRztBQUNILE1BQWEsYUFBYTtJQTBCeEI7OztPQUdHO0lBQ0gsWUFBWSxTQUFpQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUUzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRTFELG1FQUFtRTtRQUNuRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxjQUFjLENBQUMsRUFBVTtRQUM5QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0ksY0FBYyxDQUFDLFNB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c0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hzY2hlbWEgZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLWFzc2VtYmx5LXNjaGVtYVwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgKiBhcyBvcyBmcm9tIFwib3NcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IFJvc1N0YWNrQXJ0aWZhY3QgfSBmcm9tIFwiLi9hcnRpZmFjdHMvcm9zLXN0YWNrLWFydGlmYWN0XCI7XG5pbXBvcnQgeyBOZXN0ZWRDbG91ZEFzc2VtYmx5QXJ0aWZhY3QgfSBmcm9tIFwiLi9hcnRpZmFjdHMvbmVzdGVkLWNsb3VkLWFzc2VtYmx5LWFydGlmYWN0XCI7XG5pbXBvcnQgeyBUcmVlQ2xvdWRBcnRpZmFjdCB9IGZyb20gXCIuL2FydGlmYWN0cy90cmVlLWNsb3VkLWFydGlmYWN0XCI7XG5pbXBvcnQgeyBDbG91ZEFydGlmYWN0IH0gZnJvbSBcIi4vY2xvdWQtYXJ0aWZhY3RcIjtcbmltcG9ydCB7IHRvcG9sb2dpY2FsU29ydCB9IGZyb20gXCIuL3RvcG9zb3J0XCI7XG5cbi8qKlxuICogVGhlIG5hbWUgb2YgdGhlIHJvb3QgbWFuaWZlc3QgZmlsZSBvZiB0aGUgYXNzZW1ibHkuXG4gKi9cbmNvbnN0IE1BTklGRVNUX0ZJTEUgPSBcIm1hbmlmZXN0Lmpzb25cIjtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZGVwbG95YWJsZSBjbG91ZCBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIENsb3VkQXNzZW1ibHkge1xuICAvKipcbiAgICogVGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBjbG91ZCBhc3NlbWJseS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBkaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHNjaGVtYSB2ZXJzaW9uIG9mIHRoZSBhc3NlbWJseSBtYW5pZmVzdC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB2ZXJzaW9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFsbCBhcnRpZmFjdHMgaW5jbHVkZWQgaW4gdGhpcyBhc3NlbWJseS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhcnRpZmFjdHM6IENsb3VkQXJ0aWZhY3RbXTtcblxuICAvKipcbiAgICogUnVudGltZSBpbmZvcm1hdGlvbiBzdWNoIGFzIG1vZHVsZSB2ZXJzaW9ucyB1c2VkIHRvIHN5bnRoZXNpemUgdGhpcyBhc3NlbWJseS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBydW50aW1lOiBjeHNjaGVtYS5SdW50aW1lSW5mbztcblxuICAvKipcbiAgICogVGhlIHJhdyBhc3NlbWJseSBtYW5pZmVzdC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBtYW5pZmVzdDogY3hzY2hlbWEuQXNzZW1ibHlNYW5pZmVzdDtcblxuICAvKipcbiAgICogUmVhZHMgYSBjbG91ZCBhc3NlbWJseSBmcm9tIHRoZSBzcGVjaWZpZWQgZGlyZWN0b3J5LlxuICAgKiBAcGFyYW0gZGlyZWN0b3J5IFRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgYXNzZW1ibHkuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkaXJlY3Rvcnk6IHN0cmluZykge1xuICAgIHRoaXMuZGlyZWN0b3J5ID0gZGlyZWN0b3J5O1xuXG4gICAgdGhpcy5tYW5pZmVzdCA9IGN4c2NoZW1hLk1hbmlmZXN0LmxvYWQocGF0aC5qb2luKGRpcmVjdG9yeSwgTUFOSUZFU1RfRklMRSkpO1xuICAgIHRoaXMudmVyc2lvbiA9IHRoaXMubWFuaWZlc3QudmVyc2lvbjtcbiAgICB0aGlzLmFydGlmYWN0cyA9IHRoaXMucmVuZGVyQXJ0aWZhY3RzKCk7XG4gICAgdGhpcy5ydW50aW1lID0gdGhpcy5tYW5pZmVzdC5ydW50aW1lIHx8IHsgbGlicmFyaWVzOiB7fSB9O1xuXG4gICAgLy8gZm9yY2UgdmFsaWRhdGlvbiBvZiBkZXBzIGJ5IGFjY2Vzc2luZyAnZGVwZW5kcycgb24gYWxsIGFydGlmYWN0c1xuICAgIHRoaXMudmFsaWRhdGVEZXBzKCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gZmluZCBhbiBhcnRpZmFjdCB3aXRoIGEgc3BlY2lmaWMgaWRlbnRpdHkuXG4gICAqIFJldHVybnMgQSAnQ2xvdWRBcnRpZmFjdCcgb2JqZWN0IG9yICd1bmRlZmluZWQnIGlmIHRoZSBhcnRpZmFjdCBkb2VzIG5vdCBleGlzdCBpbiB0aGlzIGFzc2VtYmx5LlxuICAgKiBQYXJhbSBpZCBUaGUgYXJ0aWZhY3QgSURcbiAgICovXG4gIHB1YmxpYyB0cnlHZXRBcnRpZmFjdChpZDogc3RyaW5nKTogQ2xvdWRBcnRpZmFjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuYXJ0aWZhY3RzLmZpbmQoKGEpID0+IGEuaWQgPT09IGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgUk9TIHN0YWNrIGFydGlmYWN0IGZyb20gdGhpcyBhc3NlbWJseS5cbiAgICpcbiAgICogV2lsbCBvbmx5IHNlYXJjaCB0aGUgY3VycmVudCBhc3NlbWJseS5cbiAgICpcbiAgICogUGFyYW0gc3RhY2tOYW1lIHRoZSBuYW1lIG9mIHRoZSBST1Mgc3RhY2suXG4gICAqIFRocm93cyBpZiB0aGVyZSBpcyBubyBzdGFjayBhcnRpZmFjdCBieSB0aGF0IG5hbWVcbiAgICogVGhyb3dzIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgc3RhY2sgd2l0aCB0aGUgc2FtZSBzdGFjayBuYW1lLiBZb3UgY2FuXG4gICAqIHVzZSAnZ2V0U3RhY2tBcnRpZmFjdCAtIHN0YWNrLmFydGlmYWN0SWQnIGluc3RlYWQuXG4gICAqIFJldHVybnMgYSAnUm9zU3RhY2tBcnRpZmFjdCcgb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZTogc3RyaW5nKTogUm9zU3RhY2tBcnRpZmFjdCB7XG4gICAgY29uc3QgYXJ0aWZhY3RzID0gdGhpcy5hcnRpZmFjdHMuZmlsdGVyKFxuICAgICAgKGEpID0+IGEgaW5zdGFuY2VvZiBSb3NTdGFja0FydGlmYWN0ICYmIGEuc3RhY2tOYW1lID09PSBzdGFja05hbWVcbiAgICApO1xuICAgIGlmICghYXJ0aWZhY3RzIHx8IGFydGlmYWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgc3RhY2sgd2l0aCBzdGFjayBuYW1lIFwiJHtzdGFja05hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoYXJ0aWZhY3RzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRoZXJlIGFyZSBtdWx0aXBsZSBzdGFja3Mgd2l0aCB0aGUgc3RhY2sgbmFtZSBcIiR7c3RhY2tOYW1lfVwiICgke2FydGlmYWN0c1xuICAgICAgICAgIC5tYXAoKGEpID0+IGEuaWQpXG4gICAgICAgICAgLmpvaW4oXCIsXCIpfSkuIFVzZSBcImdldFN0YWNrQXJ0aWZhY3QoaWQpXCIgaW5zdGVhZGBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFydGlmYWN0c1swXSBhcyBSb3NTdGFja0FydGlmYWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBST1Mgc3RhY2sgYXJ0aWZhY3QgYnkgbmFtZSBmcm9tIHRoaXMgYXNzZW1ibHkuXG4gICAqIERlcHJlY2F0ZWQgcmVuYW1lZCB0byAnZ2V0U3RhY2tCeU5hbWUnIChvciAnZ2V0U3RhY2tBcnRpZmFjdChpZCknKVxuICAgKi9cbiAgcHVibGljIGdldFN0YWNrKHN0YWNrTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgUk9TIHN0YWNrIGFydGlmYWN0IGZyb20gdGhpcyBhc3NlbWJseS5cbiAgICpcbiAgICogUGFyYW0gYXJ0aWZhY3RJZCB0aGUgYXJ0aWZhY3QgaWQgb2YgdGhlIHN0YWNrIChjYW4gYmUgb2J0YWluZWQgdGhyb3VnaCAnc3RhY2suYXJ0aWZhY3RJZCcpLlxuICAgKiBUaHJvd3MgaWYgdGhlcmUgaXMgbm8gc3RhY2sgYXJ0aWZhY3Qgd2l0aCB0aGF0IGlkXG4gICAqIFJldHVybnMgYSAnUm9zU3RhY2tBcnRpZmFjdCcgb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGdldFN0YWNrQXJ0aWZhY3QoYXJ0aWZhY3RJZDogc3RyaW5nKTogUm9zU3RhY2tBcnRpZmFjdCB7XG4gICAgY29uc3QgYXJ0aWZhY3QgPSB0aGlzLnRyeUdldEFydGlmYWN0KGFydGlmYWN0SWQpO1xuICAgIGlmICghYXJ0aWZhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgYXJ0aWZhY3Qgd2l0aCBpZCBcIiR7YXJ0aWZhY3RJZH1cImApO1xuICAgIH1cblxuICAgIGlmICghKGFydGlmYWN0IGluc3RhbmNlb2YgUm9zU3RhY2tBcnRpZmFjdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQXJ0aWZhY3QgJHthcnRpZmFjdElkfSBpcyBub3QgYSBST1Mgc3RhY2tgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJ0aWZhY3Q7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG5lc3RlZCBhc3NlbWJseSBhcnRpZmFjdC5cbiAgICpcbiAgICogQHBhcmFtIGFydGlmYWN0SWQgVGhlIGFydGlmYWN0IElEIG9mIHRoZSBuZXN0ZWQgYXNzZW1ibHlcbiAgICovXG4gIHB1YmxpYyBnZXROZXN0ZWRBc3NlbWJseUFydGlmYWN0KFxuICAgIGFydGlmYWN0SWQ6IHN0cmluZ1xuICApOiBOZXN0ZWRDbG91ZEFzc2VtYmx5QXJ0aWZhY3Qge1xuICAgIGNvbnN0IGFydGlmYWN0ID0gdGhpcy50cnlHZXRBcnRpZmFjdChhcnRpZmFjdElkKTtcbiAgICBpZiAoIWFydGlmYWN0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIGFydGlmYWN0IHdpdGggaWQgXCIke2FydGlmYWN0SWR9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoIShhcnRpZmFjdCBpbnN0YW5jZW9mIE5lc3RlZENsb3VkQXNzZW1ibHlBcnRpZmFjdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZvdW5kIGFydGlmYWN0ICcke2FydGlmYWN0SWR9JyBidXQgaXQncyBub3QgYSBuZXN0ZWQgY2xvdWQgYXNzZW1ibHlgXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBhcnRpZmFjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbmVzdGVkIGFzc2VtYmx5LlxuICAgKlxuICAgKiBAcGFyYW0gYXJ0aWZhY3RJZCBUaGUgYXJ0aWZhY3QgSUQgb2YgdGhlIG5lc3RlZCBhc3NlbWJseVxuICAgKi9cbiAgcHVibGljIGdldE5lc3RlZEFzc2VtYmx5KGFydGlmYWN0SWQ6IHN0cmluZyk6IENsb3VkQXNzZW1ibHkge1xuICAgIHJldHVybiB0aGlzLmdldE5lc3RlZEFzc2VtYmx5QXJ0aWZhY3QoYXJ0aWZhY3RJZCkubmVzdGVkQXNzZW1ibHk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdHJlZSBtZXRhZGF0YSBhcnRpZmFjdCBmcm9tIHRoaXMgYXNzZW1ibHkuXG4gICAqIFRocm93cyBpZiB0aGVyZSBpcyBubyBtZXRhZGF0YSBhcnRpZmFjdCBieSB0aGF0IG5hbWVcbiAgICogUmV0dXJucyBhICdUcmVlQ2xvdWRBcnRpZmFjdCcgb2JqZWN0IGlmIHRoZXJlIGlzIG9uZSBkZWZpbmVkIGluIHRoZSBtYW5pZmVzdCwgJ3VuZGVmaW5lZCcgb3RoZXJ3aXNlLlxuICAgKi9cbiAgcHVibGljIHRyZWUoKTogVHJlZUNsb3VkQXJ0aWZhY3QgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHRyZWVzID0gdGhpcy5hcnRpZmFjdHMuZmlsdGVyKFxuICAgICAgKGEpID0+IGEubWFuaWZlc3QudHlwZSA9PT0gY3hzY2hlbWEuQXJ0aWZhY3RUeXBlLkNES19UUkVFXG4gICAgKTtcbiAgICBpZiAodHJlZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAodHJlZXMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTXVsdGlwbGUgYXJ0aWZhY3RzIG9mIHR5cGUgJHtjeHNjaGVtYS5BcnRpZmFjdFR5cGUuQ0RLX1RSRUV9IGZvdW5kIGluIG1hbmlmZXN0YFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgdHJlZSA9IHRyZWVzWzBdO1xuXG4gICAgaWYgKCEodHJlZSBpbnN0YW5jZW9mIFRyZWVDbG91ZEFydGlmYWN0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIlRyZWVcIiBhcnRpZmFjdCBpcyBub3Qgb2YgZXhwZWN0ZWQgdHlwZScpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIGFsbCB0aGUgUk9TIHN0YWNrIGFydGlmYWN0cyB0aGF0IGFyZSBpbmNsdWRlZCBpbiB0aGlzIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIGdldCBzdGFja3MoKTogUm9zU3RhY2tBcnRpZmFjdFtdIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8Um9zU3RhY2tBcnRpZmFjdD4oKTtcbiAgICBmb3IgKGNvbnN0IGEgb2YgdGhpcy5hcnRpZmFjdHMpIHtcbiAgICAgIGlmIChhIGluc3RhbmNlb2YgUm9zU3RhY2tBcnRpZmFjdCkge1xuICAgICAgICByZXN1bHQucHVzaChhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVEZXBzKCkge1xuICAgIGZvciAoY29uc3QgYXJ0aWZhY3Qgb2YgdGhpcy5hcnRpZmFjdHMpIHtcbiAgICAgIGlnbm9yZShhcnRpZmFjdC5kZXBlbmRlbmNpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQXJ0aWZhY3RzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxDbG91ZEFydGlmYWN0PigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIGFydGlmYWN0XSBvZiBPYmplY3QuZW50cmllcyhcbiAgICAgIHRoaXMubWFuaWZlc3QuYXJ0aWZhY3RzIHx8IHt9XG4gICAgKSkge1xuICAgICAgY29uc3QgY2xvdWRhcnRpZmFjdCA9IENsb3VkQXJ0aWZhY3QuZnJvbU1hbmlmZXN0KHRoaXMsIG5hbWUsIGFydGlmYWN0KTtcbiAgICAgIGlmIChjbG91ZGFydGlmYWN0KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGNsb3VkYXJ0aWZhY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3BvbG9naWNhbFNvcnQoXG4gICAgICByZXN1bHQsXG4gICAgICAoeCkgPT4geC5pZCxcbiAgICAgICh4KSA9PiB4Ll9kZXBlbmRlbmN5SURzXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIENhbiBiZSB1c2VkIHRvIGJ1aWxkIGEgY2xvdWQgYXNzZW1ibHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDbG91ZEFzc2VtYmx5QnVpbGRlciB7XG4gIC8qKlxuICAgKiBUaGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIHJlc3VsdGluZyBjbG91ZCBhc3NlbWJseS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBvdXRkaXI6IHN0cmluZztcblxuICBwcml2YXRlIHJlYWRvbmx5IGFydGlmYWN0czogeyBbaWQ6IHN0cmluZ106IGN4c2NoZW1hLkFydGlmYWN0TWFuaWZlc3QgfSA9IHt9O1xuICBwcml2YXRlIHJlYWRvbmx5IG1pc3NpbmcgPSBuZXcgQXJyYXk8Y3hzY2hlbWEuTWlzc2luZ0NvbnRleHQ+KCk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGEgY2xvdWQgYXNzZW1ibHkgYnVpbGRlci5cbiAgICogQHBhcmFtIG91dGRpciBUaGUgb3V0cHV0IGRpcmVjdG9yeSwgdXNlcyB0ZW1wb3JhcnkgZGlyZWN0b3J5IGlmIHVuZGVmaW5lZFxuICAgKi9cbiAgY29uc3RydWN0b3Iob3V0ZGlyPzogc3RyaW5nKSB7XG4gICAgdGhpcy5vdXRkaXIgPSBkZXRlcm1pbmVPdXRwdXREaXJlY3Rvcnkob3V0ZGlyKTtcblxuICAgIC8vIHdlIGxldmVyYWdlIHRoZSBmYWN0IHRoYXQgb3V0ZGlyIGlzIGxvbmctbGl2ZWQgdG8gYXZvaWQgc3RhZ2luZyBhc3NldHMgaW50byBpdFxuICAgIC8vIHRoYXQgd2VyZSBhbHJlYWR5IHN0YWdlZCAoY29weWluZyBjYW4gYmUgZXhwZW5zaXZlKS4gdGhpcyBpcyBhY2hpZXZlZCBieSB0aGUgZmFjdFxuICAgIC8vIHRoYXQgYXNzZXRzIHVzZSBhIHNvdXJjZSBoYXNoIGFzIHRoZWlyIG5hbWUuIG90aGVyIGFydGlmYWN0cywgYW5kIHRoZSBtYW5pZmVzdCBpdHNlbGYsXG4gICAgLy8gd2lsbCBvdmVyd3JpdGUgZXhpc3RpbmcgZmlsZXMgYXMgbmVlZGVkLlxuXG4gICAgaWYgKGZzLmV4aXN0c1N5bmModGhpcy5vdXRkaXIpKSB7XG4gICAgICBpZiAoIWZzLnN0YXRTeW5jKHRoaXMub3V0ZGlyKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLm91dGRpcn0gbXVzdCBiZSBhIGRpcmVjdG9yeWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmcy5ta2RpclN5bmModGhpcy5vdXRkaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGFydGlmYWN0IGludG8gdGhlIGNsb3VkIGFzc2VtYmx5LlxuICAgKiBAcGFyYW0gaWQgVGhlIElEIG9mIHRoZSBhcnRpZmFjdC5cbiAgICogQHBhcmFtIG1hbmlmZXN0IFRoZSBhcnRpZmFjdCBtYW5pZmVzdFxuICAgKi9cbiAgcHVibGljIGFkZEFydGlmYWN0KGlkOiBzdHJpbmcsIG1hbmlmZXN0OiBjeHNjaGVtYS5BcnRpZmFjdE1hbmlmZXN0KSB7XG4gICAgdGhpcy5hcnRpZmFjdHNbaWRdID0gZmlsdGVyVW5kZWZpbmVkKG1hbmlmZXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBvcnRzIHRoYXQgc29tZSBjb250ZXh0IGlzIG1pc3NpbmcgaW4gb3JkZXIgZm9yIHRoaXMgY2xvdWQgYXNzZW1ibHkgdG8gYmUgZnVsbHkgc3ludGhlc2l6ZWQuXG4gICAqIEBwYXJhbSBtaXNzaW5nIE1pc3NpbmcgY29udGV4dCBpbmZvcm1hdGlvbi5cbiAgICovXG4gIHB1YmxpYyBhZGRNaXNzaW5nKG1pc3Npbmc6IGN4c2NoZW1hLk1pc3NpbmdDb250ZXh0KSB7XG4gICAgaWYgKHRoaXMubWlzc2luZy5ldmVyeSgobSkgPT4gbS5rZXkgIT09IG1pc3Npbmcua2V5KSkge1xuICAgICAgdGhpcy5taXNzaW5nLnB1c2gobWlzc2luZyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmFsaXplcyB0aGUgY2xvdWQgYXNzZW1ibHkgaW50byB0aGUgb3V0cHV0IGRpcmVjdG9yeSByZXR1cm5zIGFcbiAgICogJ0Nsb3VkQXNzZW1ibHknIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIGluc3BlY3QgdGhlIGFzc2VtYmx5LlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgcHVibGljIGJ1aWxkQXNzZW1ibHkob3B0aW9uczogQXNzZW1ibHlCdWlsZE9wdGlvbnMgPSB7fSk6IENsb3VkQXNzZW1ibHkge1xuICAgIC8vIGV4cGxpY2l0bHkgaW5pdGlhbGl6aW5nIHRoaXMgdHlwZSB3aWxsIGhlbHAgdXMgZGV0ZWN0XG4gICAgLy8gYnJlYWtpbmcgY2hhbmdlcy4gKEZvciBleGFtcGxlIGFkZGluZyBhIHJlcXVpcmVkIHByb3BlcnR5IHdpbGwgYnJlYWsgY29tcGlsYXRpb24pLlxuICAgIGxldCBtYW5pZmVzdDogY3hzY2hlbWEuQXNzZW1ibHlNYW5pZmVzdCA9IHtcbiAgICAgIHZlcnNpb246IGN4c2NoZW1hLk1hbmlmZXN0LnZlcnNpb24oKSxcbiAgICAgIGFydGlmYWN0czogdGhpcy5hcnRpZmFjdHMsXG4gICAgICBydW50aW1lOiBvcHRpb25zLnJ1bnRpbWVJbmZvLFxuICAgICAgbWlzc2luZzogdGhpcy5taXNzaW5nLmxlbmd0aCA+IDAgPyB0aGlzLm1pc3NpbmcgOiB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIC8vIG5vdyB3ZSBjYW4gZmlsdGVyXG4gICAgbWFuaWZlc3QgPSBmaWx0ZXJVbmRlZmluZWQobWFuaWZlc3QpO1xuXG4gICAgY29uc3QgbWFuaWZlc3RGaWxlUGF0aCA9IHBhdGguam9pbih0aGlzLm91dGRpciwgTUFOSUZFU1RfRklMRSk7XG4gICAgY3hzY2hlbWEuTWFuaWZlc3Quc2F2ZShtYW5pZmVzdCwgbWFuaWZlc3RGaWxlUGF0aCk7XG5cbiAgICAvLyBcImJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XCI6IGluIG9yZGVyIGZvciB0aGUgb2xkIENMSSB0byB0ZWxsIHRoZSB1c2VyIHRoZXlcbiAgICAvLyBuZWVkIGEgbmV3IHZlcnNpb24sIHdlJ2xsIGVtaXQgdGhlIGxlZ2FjeSBtYW5pZmVzdCB3aXRoIG9ubHkgXCJ2ZXJzaW9uXCIuXG4gICAgLy8gdGhpcyB3aWxsIHJlc3VsdCBpbiBhbiBlcnJvciBcIkNESyBUb29sa2l0ID49IENMT1VEX0FTU0VNQkxZX1ZFUlNJT04gaXMgcmVxdWlyZWQgaW4gb3JkZXIgdG8gaW50ZXJhY3Qgd2l0aCB0aGlzIHByb2dyYW0uXCJcbiAgICBmcy53cml0ZUZpbGVTeW5jKFxuICAgICAgcGF0aC5qb2luKHRoaXMub3V0ZGlyLCBcImNkay5vdXRcIiksXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IHZlcnNpb246IG1hbmlmZXN0LnZlcnNpb24gfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIG5ldyBDbG91ZEFzc2VtYmx5KHRoaXMub3V0ZGlyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmVzdGVkIGNsb3VkIGFzc2VtYmx5XG4gICAqL1xuICBwdWJsaWMgY3JlYXRlTmVzdGVkQXNzZW1ibHkoYXJ0aWZhY3RJZDogc3RyaW5nLCBkaXNwbGF5TmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGFydGlmYWN0SWQ7XG4gICAgY29uc3QgaW5uZXJBc21EaXIgPSBwYXRoLmpvaW4odGhpcy5vdXRkaXIsIGRpcmVjdG9yeU5hbWUpO1xuXG4gICAgdGhpcy5hZGRBcnRpZmFjdChhcnRpZmFjdElkLCB7XG4gICAgICB0eXBlOiBjeHNjaGVtYS5BcnRpZmFjdFR5cGUuTkVTVEVEX0NMT1VEX0FTU0VNQkxZLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBkaXJlY3RvcnlOYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZSxcbiAgICAgIH0gYXMgY3hzY2hlbWEuTmVzdGVkQ2xvdWRBc3NlbWJseVByb3BlcnRpZXMsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IENsb3VkQXNzZW1ibHlCdWlsZGVyKGlubmVyQXNtRGlyKTtcbiAgfVxufVxuXG4vKipcbiAqIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZvciB3aGVuICdSdW50aW1lSW5mbydcbiAqIHdhcyBkZWZpbmVkIGhlcmUuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgaXRzIHVzZWQgYXMgYW4gaW5wdXQgaW4gdGhlIHN0YWJsZVxuICogQGFsaWNsb3VkL3Jvcy1jZGstY29yZSBsaWJyYXJ5LlxuICpcbiAqIEBkZXByZWNhdGVkIG1vdmVkIHRvIHBhY2thZ2UgJ3Jvcy1hc3NlbWJseS1zY2hlbWEnXG4gKiBAc2VlIGNvcmUuQ29uc3RydWN0Tm9kZS5zeW50aFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJ1bnRpbWVJbmZvIGV4dGVuZHMgY3hzY2hlbWEuUnVudGltZUluZm8ge31cblxuLyoqXG4gKiBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmb3Igd2hlbiAnTWV0YWRhdGFFbnRyeSdcbiAqIHdhcyBkZWZpbmVkIGhlcmUuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgaXRzIHVzZWQgYXMgYW4gaW5wdXQgaW4gdGhlIHN0YWJsZVxuICogQGFsaWNsb3VkL3Jvcy1jZGstY29yZSBsaWJyYXJ5LlxuICpcbiAqIEBkZXByZWNhdGVkIG1vdmVkIHRvIHBhY2thZ2UgJ3Jvcy1hc3NlbWJseS1zY2hlbWEnXG4gKiBAc2VlIGNvcmUuQ29uc3RydWN0Tm9kZS5tZXRhZGF0YVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhRW50cnkgZXh0ZW5kcyBjeHNjaGVtYS5NZXRhZGF0YUVudHJ5IHt9XG5cbi8qKlxuICogQmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZm9yIHdoZW4gJ01pc3NpbmdDb250ZXh0J1xuICogd2FzIGRlZmluZWQgaGVyZS4gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBpdHMgdXNlZCBhcyBhbiBpbnB1dCBpbiB0aGUgc3RhYmxlXG4gKiBAYWxpY2xvdWQvcm9zLWNkay1jb3JlIGxpYnJhcnkuXG4gKlxuICogQGRlcHJlY2F0ZWQgbW92ZWQgdG8gcGFja2FnZSAncm9zLWFzc2VtYmx5LXNjaGVtYSdcbiAqIEBzZWUgY29yZS5TdGFjay5yZXBvcnRNaXNzaW5nQ29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1pc3NpbmdDb250ZXh0IHtcbiAgLyoqXG4gICAqIFRoZSBtaXNzaW5nIGNvbnRleHQga2V5LlxuICAgKi9cbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwcm92aWRlciBmcm9tIHdoaWNoIHdlIGV4cGVjdCB0aGlzIGNvbnRleHQga2V5IHRvIGJlIG9idGFpbmVkLlxuICAgKlxuICAgKiAoVGhpcyBpcyB0aGUgb2xkIHVudHlwZWQgZGVmaW5pdGlvbiwgd2hpY2ggaXMgbmVjZXNzYXJ5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICogU2VlIGN4c2NoZW1hIGZvciBhIHR5cGUgZGVmaW5pdGlvbi4pXG4gICAqL1xuICByZWFkb25seSBwcm92aWRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBwcm92aWRlci1zcGVjaWZpYyBvcHRpb25zLlxuICAgKlxuICAgKiAoVGhpcyBpcyB0aGUgb2xkIHVudHlwZWQgZGVmaW5pdGlvbiwgd2hpY2ggaXMgbmVjZXNzYXJ5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICogU2VlIGN4c2NoZW1hIGZvciBhIHR5cGUgZGVmaW5pdGlvbi4pXG4gICAqL1xuICByZWFkb25seSBwcm9wczogUmVjb3JkPHN0cmluZywgYW55Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBc3NlbWJseUJ1aWxkT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJbmNsdWRlIHRoZSBzcGVjaWZpZWQgcnVudGltZSBpbmZvcm1hdGlvbiAobW9kdWxlIHZlcnNpb25zKSBpbiBtYW5pZmVzdC5cbiAgICogQGRlZmF1bHQgLSBpZiB0aGlzIG9wdGlvbiBpcyBub3Qgc3BlY2lmaWVkLCBydW50aW1lIGluZm8gd2lsbCBub3QgYmUgaW5jbHVkZWRcbiAgICovXG4gIHJlYWRvbmx5IHJ1bnRpbWVJbmZvPzogUnVudGltZUluZm87XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGNvcHkgb2YgJ29iaicgd2l0aG91dCB1bmRlZmluZWQgdmFsdWVzIGluIG1hcHMgb3IgYXJyYXlzLlxuICovXG5mdW5jdGlvbiBmaWx0ZXJVbmRlZmluZWQob2JqOiBhbnkpOiBhbnkge1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5maWx0ZXIoKHgpID0+IHggIT09IHVuZGVmaW5lZCkubWFwKCh4KSA9PiBmaWx0ZXJVbmRlZmluZWQoeCkpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpIHtcbiAgICBjb25zdCByZXQ6IGFueSA9IHt9O1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmV0W2tleV0gPSBmaWx0ZXJVbmRlZmluZWQodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gaWdub3JlKF94OiBhbnkpIHtcbiAgcmV0dXJuO1xufVxuXG4vKipcbiAqIFR1cm4gdGhlIGdpdmVuIG9wdGlvbmFsIG91dHB1dCBkaXJlY3RvcnkgaW50byBhIGZpeGVkIG91dHB1dCBkaXJlY3RvcnlcbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5lT3V0cHV0RGlyZWN0b3J5KG91dGRpcj86IHN0cmluZykge1xuICByZXR1cm4gb3V0ZGlyID8/IGZzLm1rZHRlbXBTeW5jKHBhdGguam9pbihvcy50bXBkaXIoKSwgXCJjZGsub3V0XCIpKTtcbn1cbiJdfQ==