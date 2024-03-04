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
        this.manifest = cxschema.Manifest.loadAssemblyManifest(path.join(directory, MANIFEST_FILE));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYXNzZW1ibHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC1hc3NlbWJseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEQ7QUFDOUQseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsdUVBQWtFO0FBQ2xFLCtGQUF5RjtBQUN6Rix5RUFBb0U7QUFDcEUscURBQWlEO0FBQ2pELHlDQUE2QztBQUU3Qzs7R0FFRztBQUNILE1BQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQztBQUV0Qzs7R0FFRztBQUNILE1BQWEsYUFBYTtJQTBCeEI7OztPQUdHO0lBQ0gsWUFBWSxTQUFpQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUUzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFMUQsbUVBQW1FO1FBQ25FLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGNBQWMsQ0FBQyxFQUFVO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSSxjQUFjLENBQUMs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Y2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjeHNjaGVtYSBmcm9tIFwiQGFsaWNsb3VkL3Jvcy1jZGstYXNzZW1ibHktc2NoZW1hXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCAqIGFzIG9zIGZyb20gXCJvc1wiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgUm9zU3RhY2tBcnRpZmFjdCB9IGZyb20gXCIuL2FydGlmYWN0cy9yb3Mtc3RhY2stYXJ0aWZhY3RcIjtcbmltcG9ydCB7IE5lc3RlZENsb3VkQXNzZW1ibHlBcnRpZmFjdCB9IGZyb20gXCIuL2FydGlmYWN0cy9uZXN0ZWQtY2xvdWQtYXNzZW1ibHktYXJ0aWZhY3RcIjtcbmltcG9ydCB7IFRyZWVDbG91ZEFydGlmYWN0IH0gZnJvbSBcIi4vYXJ0aWZhY3RzL3RyZWUtY2xvdWQtYXJ0aWZhY3RcIjtcbmltcG9ydCB7IENsb3VkQXJ0aWZhY3QgfSBmcm9tIFwiLi9jbG91ZC1hcnRpZmFjdFwiO1xuaW1wb3J0IHsgdG9wb2xvZ2ljYWxTb3J0IH0gZnJvbSBcIi4vdG9wb3NvcnRcIjtcblxuLyoqXG4gKiBUaGUgbmFtZSBvZiB0aGUgcm9vdCBtYW5pZmVzdCBmaWxlIG9mIHRoZSBhc3NlbWJseS5cbiAqL1xuY29uc3QgTUFOSUZFU1RfRklMRSA9IFwibWFuaWZlc3QuanNvblwiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBkZXBsb3lhYmxlIGNsb3VkIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgQ2xvdWRBc3NlbWJseSB7XG4gIC8qKlxuICAgKiBUaGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIGNsb3VkIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGRpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc2NoZW1hIHZlcnNpb24gb2YgdGhlIGFzc2VtYmx5IG1hbmlmZXN0LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZztcblxuICAvKipcbiAgICogQWxsIGFydGlmYWN0cyBpbmNsdWRlZCBpbiB0aGlzIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGFydGlmYWN0czogQ2xvdWRBcnRpZmFjdFtdO1xuXG4gIC8qKlxuICAgKiBSdW50aW1lIGluZm9ybWF0aW9uIHN1Y2ggYXMgbW9kdWxlIHZlcnNpb25zIHVzZWQgdG8gc3ludGhlc2l6ZSB0aGlzIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHJ1bnRpbWU6IGN4c2NoZW1hLlJ1bnRpbWVJbmZvO1xuXG4gIC8qKlxuICAgKiBUaGUgcmF3IGFzc2VtYmx5IG1hbmlmZXN0LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG1hbmlmZXN0OiBjeHNjaGVtYS5Bc3NlbWJseU1hbmlmZXN0O1xuXG4gIC8qKlxuICAgKiBSZWFkcyBhIGNsb3VkIGFzc2VtYmx5IGZyb20gdGhlIHNwZWNpZmllZCBkaXJlY3RvcnkuXG4gICAqIEBwYXJhbSBkaXJlY3RvcnkgVGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBhc3NlbWJseS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRpcmVjdG9yeTogc3RyaW5nKSB7XG4gICAgdGhpcy5kaXJlY3RvcnkgPSBkaXJlY3Rvcnk7XG5cbiAgICB0aGlzLm1hbmlmZXN0ID0gY3hzY2hlbWEuTWFuaWZlc3QubG9hZEFzc2VtYmx5TWFuaWZlc3QocGF0aC5qb2luKGRpcmVjdG9yeSwgTUFOSUZFU1RfRklMRSkpO1xuICAgIHRoaXMudmVyc2lvbiA9IHRoaXMubWFuaWZlc3QudmVyc2lvbjtcbiAgICB0aGlzLmFydGlmYWN0cyA9IHRoaXMucmVuZGVyQXJ0aWZhY3RzKCk7XG4gICAgdGhpcy5ydW50aW1lID0gdGhpcy5tYW5pZmVzdC5ydW50aW1lIHx8IHsgbGlicmFyaWVzOiB7fSB9O1xuXG4gICAgLy8gZm9yY2UgdmFsaWRhdGlvbiBvZiBkZXBzIGJ5IGFjY2Vzc2luZyAnZGVwZW5kcycgb24gYWxsIGFydGlmYWN0c1xuICAgIHRoaXMudmFsaWRhdGVEZXBzKCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gZmluZCBhbiBhcnRpZmFjdCB3aXRoIGEgc3BlY2lmaWMgaWRlbnRpdHkuXG4gICAqIFJldHVybnMgQSAnQ2xvdWRBcnRpZmFjdCcgb2JqZWN0IG9yICd1bmRlZmluZWQnIGlmIHRoZSBhcnRpZmFjdCBkb2VzIG5vdCBleGlzdCBpbiB0aGlzIGFzc2VtYmx5LlxuICAgKiBQYXJhbSBpZCBUaGUgYXJ0aWZhY3QgSURcbiAgICovXG4gIHB1YmxpYyB0cnlHZXRBcnRpZmFjdChpZDogc3RyaW5nKTogQ2xvdWRBcnRpZmFjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuYXJ0aWZhY3RzLmZpbmQoKGEpID0+IGEuaWQgPT09IGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgUk9TIHN0YWNrIGFydGlmYWN0IGZyb20gdGhpcyBhc3NlbWJseS5cbiAgICpcbiAgICogV2lsbCBvbmx5IHNlYXJjaCB0aGUgY3VycmVudCBhc3NlbWJseS5cbiAgICpcbiAgICogUGFyYW0gc3RhY2tOYW1lIHRoZSBuYW1lIG9mIHRoZSBST1Mgc3RhY2suXG4gICAqIFRocm93cyBpZiB0aGVyZSBpcyBubyBzdGFjayBhcnRpZmFjdCBieSB0aGF0IG5hbWVcbiAgICogVGhyb3dzIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgc3RhY2sgd2l0aCB0aGUgc2FtZSBzdGFjayBuYW1lLiBZb3UgY2FuXG4gICAqIHVzZSAnZ2V0U3RhY2tBcnRpZmFjdCAtIHN0YWNrLmFydGlmYWN0SWQnIGluc3RlYWQuXG4gICAqIFJldHVybnMgYSAnUm9zU3RhY2tBcnRpZmFjdCcgb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZTogc3RyaW5nKTogUm9zU3RhY2tBcnRpZmFjdCB7XG4gICAgY29uc3QgYXJ0aWZhY3RzID0gdGhpcy5hcnRpZmFjdHMuZmlsdGVyKFxuICAgICAgKGEpID0+IGEgaW5zdGFuY2VvZiBSb3NTdGFja0FydGlmYWN0ICYmIGEuc3RhY2tOYW1lID09PSBzdGFja05hbWVcbiAgICApO1xuICAgIGlmICghYXJ0aWZhY3RzIHx8IGFydGlmYWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgc3RhY2sgd2l0aCBzdGFjayBuYW1lIFwiJHtzdGFja05hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoYXJ0aWZhY3RzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRoZXJlIGFyZSBtdWx0aXBsZSBzdGFja3Mgd2l0aCB0aGUgc3RhY2sgbmFtZSBcIiR7c3RhY2tOYW1lfVwiICgke2FydGlmYWN0c1xuICAgICAgICAgIC5tYXAoKGEpID0+IGEuaWQpXG4gICAgICAgICAgLmpvaW4oXCIsXCIpfSkuIFVzZSBcImdldFN0YWNrQXJ0aWZhY3QoaWQpXCIgaW5zdGVhZGBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFydGlmYWN0c1swXSBhcyBSb3NTdGFja0FydGlmYWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBST1Mgc3RhY2sgYXJ0aWZhY3QgYnkgbmFtZSBmcm9tIHRoaXMgYXNzZW1ibHkuXG4gICAqIERlcHJlY2F0ZWQgcmVuYW1lZCB0byAnZ2V0U3RhY2tCeU5hbWUnIChvciAnZ2V0U3RhY2tBcnRpZmFjdChpZCknKVxuICAgKi9cbiAgcHVibGljIGdldFN0YWNrKHN0YWNrTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgUk9TIHN0YWNrIGFydGlmYWN0IGZyb20gdGhpcyBhc3NlbWJseS5cbiAgICpcbiAgICogUGFyYW0gYXJ0aWZhY3RJZCB0aGUgYXJ0aWZhY3QgaWQgb2YgdGhlIHN0YWNrIChjYW4gYmUgb2J0YWluZWQgdGhyb3VnaCAnc3RhY2suYXJ0aWZhY3RJZCcpLlxuICAgKiBUaHJvd3MgaWYgdGhlcmUgaXMgbm8gc3RhY2sgYXJ0aWZhY3Qgd2l0aCB0aGF0IGlkXG4gICAqIFJldHVybnMgYSAnUm9zU3RhY2tBcnRpZmFjdCcgb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGdldFN0YWNrQXJ0aWZhY3QoYXJ0aWZhY3RJZDogc3RyaW5nKTogUm9zU3RhY2tBcnRpZmFjdCB7XG4gICAgY29uc3QgYXJ0aWZhY3QgPSB0aGlzLnRyeUdldEFydGlmYWN0KGFydGlmYWN0SWQpO1xuICAgIGlmICghYXJ0aWZhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgYXJ0aWZhY3Qgd2l0aCBpZCBcIiR7YXJ0aWZhY3RJZH1cImApO1xuICAgIH1cblxuICAgIGlmICghKGFydGlmYWN0IGluc3RhbmNlb2YgUm9zU3RhY2tBcnRpZmFjdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQXJ0aWZhY3QgJHthcnRpZmFjdElkfSBpcyBub3QgYSBST1Mgc3RhY2tgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJ0aWZhY3Q7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG5lc3RlZCBhc3NlbWJseSBhcnRpZmFjdC5cbiAgICpcbiAgICogQHBhcmFtIGFydGlmYWN0SWQgVGhlIGFydGlmYWN0IElEIG9mIHRoZSBuZXN0ZWQgYXNzZW1ibHlcbiAgICovXG4gIHB1YmxpYyBnZXROZXN0ZWRBc3NlbWJseUFydGlmYWN0KFxuICAgIGFydGlmYWN0SWQ6IHN0cmluZ1xuICApOiBOZXN0ZWRDbG91ZEFzc2VtYmx5QXJ0aWZhY3Qge1xuICAgIGNvbnN0IGFydGlmYWN0ID0gdGhpcy50cnlHZXRBcnRpZmFjdChhcnRpZmFjdElkKTtcbiAgICBpZiAoIWFydGlmYWN0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIGFydGlmYWN0IHdpdGggaWQgXCIke2FydGlmYWN0SWR9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoIShhcnRpZmFjdCBpbnN0YW5jZW9mIE5lc3RlZENsb3VkQXNzZW1ibHlBcnRpZmFjdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZvdW5kIGFydGlmYWN0ICcke2FydGlmYWN0SWR9JyBidXQgaXQncyBub3QgYSBuZXN0ZWQgY2xvdWQgYXNzZW1ibHlgXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBhcnRpZmFjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbmVzdGVkIGFzc2VtYmx5LlxuICAgKlxuICAgKiBAcGFyYW0gYXJ0aWZhY3RJZCBUaGUgYXJ0aWZhY3QgSUQgb2YgdGhlIG5lc3RlZCBhc3NlbWJseVxuICAgKi9cbiAgcHVibGljIGdldE5lc3RlZEFzc2VtYmx5KGFydGlmYWN0SWQ6IHN0cmluZyk6IENsb3VkQXNzZW1ibHkge1xuICAgIHJldHVybiB0aGlzLmdldE5lc3RlZEFzc2VtYmx5QXJ0aWZhY3QoYXJ0aWZhY3RJZCkubmVzdGVkQXNzZW1ibHk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdHJlZSBtZXRhZGF0YSBhcnRpZmFjdCBmcm9tIHRoaXMgYXNzZW1ibHkuXG4gICAqIFRocm93cyBpZiB0aGVyZSBpcyBubyBtZXRhZGF0YSBhcnRpZmFjdCBieSB0aGF0IG5hbWVcbiAgICogUmV0dXJucyBhICdUcmVlQ2xvdWRBcnRpZmFjdCcgb2JqZWN0IGlmIHRoZXJlIGlzIG9uZSBkZWZpbmVkIGluIHRoZSBtYW5pZmVzdCwgJ3VuZGVmaW5lZCcgb3RoZXJ3aXNlLlxuICAgKi9cbiAgcHVibGljIHRyZWUoKTogVHJlZUNsb3VkQXJ0aWZhY3QgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHRyZWVzID0gdGhpcy5hcnRpZmFjdHMuZmlsdGVyKFxuICAgICAgKGEpID0+IGEubWFuaWZlc3QudHlwZSA9PT0gY3hzY2hlbWEuQXJ0aWZhY3RUeXBlLkNES19UUkVFXG4gICAgKTtcbiAgICBpZiAodHJlZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAodHJlZXMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTXVsdGlwbGUgYXJ0aWZhY3RzIG9mIHR5cGUgJHtjeHNjaGVtYS5BcnRpZmFjdFR5cGUuQ0RLX1RSRUV9IGZvdW5kIGluIG1hbmlmZXN0YFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgdHJlZSA9IHRyZWVzWzBdO1xuXG4gICAgaWYgKCEodHJlZSBpbnN0YW5jZW9mIFRyZWVDbG91ZEFydGlmYWN0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIlRyZWVcIiBhcnRpZmFjdCBpcyBub3Qgb2YgZXhwZWN0ZWQgdHlwZScpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIGFsbCB0aGUgUk9TIHN0YWNrIGFydGlmYWN0cyB0aGF0IGFyZSBpbmNsdWRlZCBpbiB0aGlzIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIGdldCBzdGFja3MoKTogUm9zU3RhY2tBcnRpZmFjdFtdIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8Um9zU3RhY2tBcnRpZmFjdD4oKTtcbiAgICBmb3IgKGNvbnN0IGEgb2YgdGhpcy5hcnRpZmFjdHMpIHtcbiAgICAgIGlmIChhIGluc3RhbmNlb2YgUm9zU3RhY2tBcnRpZmFjdCkge1xuICAgICAgICByZXN1bHQucHVzaChhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVEZXBzKCkge1xuICAgIGZvciAoY29uc3QgYXJ0aWZhY3Qgb2YgdGhpcy5hcnRpZmFjdHMpIHtcbiAgICAgIGlnbm9yZShhcnRpZmFjdC5kZXBlbmRlbmNpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQXJ0aWZhY3RzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxDbG91ZEFydGlmYWN0PigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIGFydGlmYWN0XSBvZiBPYmplY3QuZW50cmllcyhcbiAgICAgIHRoaXMubWFuaWZlc3QuYXJ0aWZhY3RzIHx8IHt9XG4gICAgKSkge1xuICAgICAgY29uc3QgY2xvdWRhcnRpZmFjdCA9IENsb3VkQXJ0aWZhY3QuZnJvbU1hbmlmZXN0KHRoaXMsIG5hbWUsIGFydGlmYWN0KTtcbiAgICAgIGlmIChjbG91ZGFydGlmYWN0KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGNsb3VkYXJ0aWZhY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3BvbG9naWNhbFNvcnQoXG4gICAgICByZXN1bHQsXG4gICAgICAoeCkgPT4geC5pZCxcbiAgICAgICh4KSA9PiB4Ll9kZXBlbmRlbmN5SURzXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIENhbiBiZSB1c2VkIHRvIGJ1aWxkIGEgY2xvdWQgYXNzZW1ibHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDbG91ZEFzc2VtYmx5QnVpbGRlciB7XG4gIC8qKlxuICAgKiBUaGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIHJlc3VsdGluZyBjbG91ZCBhc3NlbWJseS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBvdXRkaXI6IHN0cmluZztcblxuICBwcml2YXRlIHJlYWRvbmx5IGFydGlmYWN0czogeyBbaWQ6IHN0cmluZ106IGN4c2NoZW1hLkFydGlmYWN0TWFuaWZlc3QgfSA9IHt9O1xuICBwcml2YXRlIHJlYWRvbmx5IG1pc3NpbmcgPSBuZXcgQXJyYXk8Y3hzY2hlbWEuTWlzc2luZ0NvbnRleHQ+KCk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGEgY2xvdWQgYXNzZW1ibHkgYnVpbGRlci5cbiAgICogQHBhcmFtIG91dGRpciBUaGUgb3V0cHV0IGRpcmVjdG9yeSwgdXNlcyB0ZW1wb3JhcnkgZGlyZWN0b3J5IGlmIHVuZGVmaW5lZFxuICAgKi9cbiAgY29uc3RydWN0b3Iob3V0ZGlyPzogc3RyaW5nKSB7XG4gICAgdGhpcy5vdXRkaXIgPSBkZXRlcm1pbmVPdXRwdXREaXJlY3Rvcnkob3V0ZGlyKTtcblxuICAgIC8vIHdlIGxldmVyYWdlIHRoZSBmYWN0IHRoYXQgb3V0ZGlyIGlzIGxvbmctbGl2ZWQgdG8gYXZvaWQgc3RhZ2luZyBhc3NldHMgaW50byBpdFxuICAgIC8vIHRoYXQgd2VyZSBhbHJlYWR5IHN0YWdlZCAoY29weWluZyBjYW4gYmUgZXhwZW5zaXZlKS4gdGhpcyBpcyBhY2hpZXZlZCBieSB0aGUgZmFjdFxuICAgIC8vIHRoYXQgYXNzZXRzIHVzZSBhIHNvdXJjZSBoYXNoIGFzIHRoZWlyIG5hbWUuIG90aGVyIGFydGlmYWN0cywgYW5kIHRoZSBtYW5pZmVzdCBpdHNlbGYsXG4gICAgLy8gd2lsbCBvdmVyd3JpdGUgZXhpc3RpbmcgZmlsZXMgYXMgbmVlZGVkLlxuXG4gICAgaWYgKGZzLmV4aXN0c1N5bmModGhpcy5vdXRkaXIpKSB7XG4gICAgICBpZiAoIWZzLnN0YXRTeW5jKHRoaXMub3V0ZGlyKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLm91dGRpcn0gbXVzdCBiZSBhIGRpcmVjdG9yeWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmcy5ta2RpclN5bmModGhpcy5vdXRkaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGFydGlmYWN0IGludG8gdGhlIGNsb3VkIGFzc2VtYmx5LlxuICAgKiBAcGFyYW0gaWQgVGhlIElEIG9mIHRoZSBhcnRpZmFjdC5cbiAgICogQHBhcmFtIG1hbmlmZXN0IFRoZSBhcnRpZmFjdCBtYW5pZmVzdFxuICAgKi9cbiAgcHVibGljIGFkZEFydGlmYWN0KGlkOiBzdHJpbmcsIG1hbmlmZXN0OiBjeHNjaGVtYS5BcnRpZmFjdE1hbmlmZXN0KSB7XG4gICAgdGhpcy5hcnRpZmFjdHNbaWRdID0gZmlsdGVyVW5kZWZpbmVkKG1hbmlmZXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBvcnRzIHRoYXQgc29tZSBjb250ZXh0IGlzIG1pc3NpbmcgaW4gb3JkZXIgZm9yIHRoaXMgY2xvdWQgYXNzZW1ibHkgdG8gYmUgZnVsbHkgc3ludGhlc2l6ZWQuXG4gICAqIEBwYXJhbSBtaXNzaW5nIE1pc3NpbmcgY29udGV4dCBpbmZvcm1hdGlvbi5cbiAgICovXG4gIHB1YmxpYyBhZGRNaXNzaW5nKG1pc3Npbmc6IGN4c2NoZW1hLk1pc3NpbmdDb250ZXh0KSB7XG4gICAgaWYgKHRoaXMubWlzc2luZy5ldmVyeSgobSkgPT4gbS5rZXkgIT09IG1pc3Npbmcua2V5KSkge1xuICAgICAgdGhpcy5taXNzaW5nLnB1c2gobWlzc2luZyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmFsaXplcyB0aGUgY2xvdWQgYXNzZW1ibHkgaW50byB0aGUgb3V0cHV0IGRpcmVjdG9yeSByZXR1cm5zIGFcbiAgICogJ0Nsb3VkQXNzZW1ibHknIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIGluc3BlY3QgdGhlIGFzc2VtYmx5LlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgcHVibGljIGJ1aWxkQXNzZW1ibHkob3B0aW9uczogQXNzZW1ibHlCdWlsZE9wdGlvbnMgPSB7fSk6IENsb3VkQXNzZW1ibHkge1xuICAgIC8vIGV4cGxpY2l0bHkgaW5pdGlhbGl6aW5nIHRoaXMgdHlwZSB3aWxsIGhlbHAgdXMgZGV0ZWN0XG4gICAgLy8gYnJlYWtpbmcgY2hhbmdlcy4gKEZvciBleGFtcGxlIGFkZGluZyBhIHJlcXVpcmVkIHByb3BlcnR5IHdpbGwgYnJlYWsgY29tcGlsYXRpb24pLlxuICAgIGxldCBtYW5pZmVzdDogY3hzY2hlbWEuQXNzZW1ibHlNYW5pZmVzdCA9IHtcbiAgICAgIHZlcnNpb246IGN4c2NoZW1hLk1hbmlmZXN0LnZlcnNpb24oKSxcbiAgICAgIGFydGlmYWN0czogdGhpcy5hcnRpZmFjdHMsXG4gICAgICBydW50aW1lOiBvcHRpb25zLnJ1bnRpbWVJbmZvLFxuICAgICAgbWlzc2luZzogdGhpcy5taXNzaW5nLmxlbmd0aCA+IDAgPyB0aGlzLm1pc3NpbmcgOiB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIC8vIG5vdyB3ZSBjYW4gZmlsdGVyXG4gICAgbWFuaWZlc3QgPSBmaWx0ZXJVbmRlZmluZWQobWFuaWZlc3QpO1xuXG4gICAgY29uc3QgbWFuaWZlc3RGaWxlUGF0aCA9IHBhdGguam9pbih0aGlzLm91dGRpciwgTUFOSUZFU1RfRklMRSk7XG4gICAgY3hzY2hlbWEuTWFuaWZlc3Quc2F2ZShtYW5pZmVzdCwgbWFuaWZlc3RGaWxlUGF0aCk7XG5cbiAgICAvLyBcImJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XCI6IGluIG9yZGVyIGZvciB0aGUgb2xkIENMSSB0byB0ZWxsIHRoZSB1c2VyIHRoZXlcbiAgICAvLyBuZWVkIGEgbmV3IHZlcnNpb24sIHdlJ2xsIGVtaXQgdGhlIGxlZ2FjeSBtYW5pZmVzdCB3aXRoIG9ubHkgXCJ2ZXJzaW9uXCIuXG4gICAgLy8gdGhpcyB3aWxsIHJlc3VsdCBpbiBhbiBlcnJvciBcIkNESyBUb29sa2l0ID49IENMT1VEX0FTU0VNQkxZX1ZFUlNJT04gaXMgcmVxdWlyZWQgaW4gb3JkZXIgdG8gaW50ZXJhY3Qgd2l0aCB0aGlzIHByb2dyYW0uXCJcbiAgICBmcy53cml0ZUZpbGVTeW5jKFxuICAgICAgcGF0aC5qb2luKHRoaXMub3V0ZGlyLCBcImNkay5vdXRcIiksXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IHZlcnNpb246IG1hbmlmZXN0LnZlcnNpb24gfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIG5ldyBDbG91ZEFzc2VtYmx5KHRoaXMub3V0ZGlyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmVzdGVkIGNsb3VkIGFzc2VtYmx5XG4gICAqL1xuICBwdWJsaWMgY3JlYXRlTmVzdGVkQXNzZW1ibHkoYXJ0aWZhY3RJZDogc3RyaW5nLCBkaXNwbGF5TmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGFydGlmYWN0SWQ7XG4gICAgY29uc3QgaW5uZXJBc21EaXIgPSBwYXRoLmpvaW4odGhpcy5vdXRkaXIsIGRpcmVjdG9yeU5hbWUpO1xuXG4gICAgdGhpcy5hZGRBcnRpZmFjdChhcnRpZmFjdElkLCB7XG4gICAgICB0eXBlOiBjeHNjaGVtYS5BcnRpZmFjdFR5cGUuTkVTVEVEX0NMT1VEX0FTU0VNQkxZLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBkaXJlY3RvcnlOYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZSxcbiAgICAgIH0gYXMgY3hzY2hlbWEuTmVzdGVkQ2xvdWRBc3NlbWJseVByb3BlcnRpZXMsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IENsb3VkQXNzZW1ibHlCdWlsZGVyKGlubmVyQXNtRGlyKTtcbiAgfVxufVxuXG4vKipcbiAqIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZvciB3aGVuICdSdW50aW1lSW5mbydcbiAqIHdhcyBkZWZpbmVkIGhlcmUuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgaXRzIHVzZWQgYXMgYW4gaW5wdXQgaW4gdGhlIHN0YWJsZVxuICogQGFsaWNsb3VkL3Jvcy1jZGstY29yZSBsaWJyYXJ5LlxuICpcbiAqIEBkZXByZWNhdGVkIG1vdmVkIHRvIHBhY2thZ2UgJ3Jvcy1hc3NlbWJseS1zY2hlbWEnXG4gKiBAc2VlIGNvcmUuQ29uc3RydWN0Tm9kZS5zeW50aFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJ1bnRpbWVJbmZvIGV4dGVuZHMgY3hzY2hlbWEuUnVudGltZUluZm8ge31cblxuLyoqXG4gKiBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmb3Igd2hlbiAnTWV0YWRhdGFFbnRyeSdcbiAqIHdhcyBkZWZpbmVkIGhlcmUuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgaXRzIHVzZWQgYXMgYW4gaW5wdXQgaW4gdGhlIHN0YWJsZVxuICogQGFsaWNsb3VkL3Jvcy1jZGstY29yZSBsaWJyYXJ5LlxuICpcbiAqIEBkZXByZWNhdGVkIG1vdmVkIHRvIHBhY2thZ2UgJ3Jvcy1hc3NlbWJseS1zY2hlbWEnXG4gKiBAc2VlIGNvcmUuQ29uc3RydWN0Tm9kZS5tZXRhZGF0YVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhRW50cnkgZXh0ZW5kcyBjeHNjaGVtYS5NZXRhZGF0YUVudHJ5IHt9XG5cbi8qKlxuICogQmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZm9yIHdoZW4gJ01pc3NpbmdDb250ZXh0J1xuICogd2FzIGRlZmluZWQgaGVyZS4gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBpdHMgdXNlZCBhcyBhbiBpbnB1dCBpbiB0aGUgc3RhYmxlXG4gKiBAYWxpY2xvdWQvcm9zLWNkay1jb3JlIGxpYnJhcnkuXG4gKlxuICogQGRlcHJlY2F0ZWQgbW92ZWQgdG8gcGFja2FnZSAncm9zLWFzc2VtYmx5LXNjaGVtYSdcbiAqIEBzZWUgY29yZS5TdGFjay5yZXBvcnRNaXNzaW5nQ29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1pc3NpbmdDb250ZXh0IHtcbiAgLyoqXG4gICAqIFRoZSBtaXNzaW5nIGNvbnRleHQga2V5LlxuICAgKi9cbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwcm92aWRlciBmcm9tIHdoaWNoIHdlIGV4cGVjdCB0aGlzIGNvbnRleHQga2V5IHRvIGJlIG9idGFpbmVkLlxuICAgKlxuICAgKiAoVGhpcyBpcyB0aGUgb2xkIHVudHlwZWQgZGVmaW5pdGlvbiwgd2hpY2ggaXMgbmVjZXNzYXJ5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICogU2VlIGN4c2NoZW1hIGZvciBhIHR5cGUgZGVmaW5pdGlvbi4pXG4gICAqL1xuICByZWFkb25seSBwcm92aWRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBwcm92aWRlci1zcGVjaWZpYyBvcHRpb25zLlxuICAgKlxuICAgKiAoVGhpcyBpcyB0aGUgb2xkIHVudHlwZWQgZGVmaW5pdGlvbiwgd2hpY2ggaXMgbmVjZXNzYXJ5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICogU2VlIGN4c2NoZW1hIGZvciBhIHR5cGUgZGVmaW5pdGlvbi4pXG4gICAqL1xuICByZWFkb25seSBwcm9wczogUmVjb3JkPHN0cmluZywgYW55Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBc3NlbWJseUJ1aWxkT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJbmNsdWRlIHRoZSBzcGVjaWZpZWQgcnVudGltZSBpbmZvcm1hdGlvbiAobW9kdWxlIHZlcnNpb25zKSBpbiBtYW5pZmVzdC5cbiAgICogQGRlZmF1bHQgLSBpZiB0aGlzIG9wdGlvbiBpcyBub3Qgc3BlY2lmaWVkLCBydW50aW1lIGluZm8gd2lsbCBub3QgYmUgaW5jbHVkZWRcbiAgICovXG4gIHJlYWRvbmx5IHJ1bnRpbWVJbmZvPzogUnVudGltZUluZm87XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGNvcHkgb2YgJ29iaicgd2l0aG91dCB1bmRlZmluZWQgdmFsdWVzIGluIG1hcHMgb3IgYXJyYXlzLlxuICovXG5mdW5jdGlvbiBmaWx0ZXJVbmRlZmluZWQob2JqOiBhbnkpOiBhbnkge1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5maWx0ZXIoKHgpID0+IHggIT09IHVuZGVmaW5lZCkubWFwKCh4KSA9PiBmaWx0ZXJVbmRlZmluZWQoeCkpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpIHtcbiAgICBjb25zdCByZXQ6IGFueSA9IHt9O1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmV0W2tleV0gPSBmaWx0ZXJVbmRlZmluZWQodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gaWdub3JlKF94OiBhbnkpIHtcbiAgcmV0dXJuO1xufVxuXG4vKipcbiAqIFR1cm4gdGhlIGdpdmVuIG9wdGlvbmFsIG91dHB1dCBkaXJlY3RvcnkgaW50byBhIGZpeGVkIG91dHB1dCBkaXJlY3RvcnlcbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5lT3V0cHV0RGlyZWN0b3J5KG91dGRpcj86IHN0cmluZykge1xuICByZXR1cm4gb3V0ZGlyID8/IGZzLm1rZHRlbXBTeW5jKHBhdGguam9pbihvcy50bXBkaXIoKSwgXCJjZGsub3V0XCIpKTtcbn1cbiJdfQ==