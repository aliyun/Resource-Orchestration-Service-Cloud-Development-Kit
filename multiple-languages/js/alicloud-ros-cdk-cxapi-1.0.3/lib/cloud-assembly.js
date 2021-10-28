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
    return outdir !== null && outdir !== void 0 ? outdir : fs.mkdtempSync(path.join(os.tmpdir(), "cdk.out"));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYXNzZW1ibHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC1hc3NlbWJseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEQ7QUFDOUQseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsdUVBQWtFO0FBQ2xFLCtGQUF5RjtBQUN6Rix5RUFBb0U7QUFDcEUscURBQWlEO0FBQ2pELHlDQUE2QztBQUU3Qzs7R0FFRztBQUNILE1BQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQztBQUV0Qzs7R0FFRztBQUNILE1BQWEsYUFBYTtJQTBCeEI7OztPQUdHO0lBQ0gsWUFBWSxTQUFpQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUUzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRTFELG1FQUFtRTtRQUNuRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxjQUFjLENBQUMsRUFBVTtRQUM5QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0ksY0FBYyxDQUFDLFNB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O0FBQ3JFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjeHNjaGVtYSBmcm9tIFwiQGFsaWNsb3VkL3Jvcy1jZGstYXNzZW1ibHktc2NoZW1hXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCAqIGFzIG9zIGZyb20gXCJvc1wiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgUm9zU3RhY2tBcnRpZmFjdCB9IGZyb20gXCIuL2FydGlmYWN0cy9yb3Mtc3RhY2stYXJ0aWZhY3RcIjtcbmltcG9ydCB7IE5lc3RlZENsb3VkQXNzZW1ibHlBcnRpZmFjdCB9IGZyb20gXCIuL2FydGlmYWN0cy9uZXN0ZWQtY2xvdWQtYXNzZW1ibHktYXJ0aWZhY3RcIjtcbmltcG9ydCB7IFRyZWVDbG91ZEFydGlmYWN0IH0gZnJvbSBcIi4vYXJ0aWZhY3RzL3RyZWUtY2xvdWQtYXJ0aWZhY3RcIjtcbmltcG9ydCB7IENsb3VkQXJ0aWZhY3QgfSBmcm9tIFwiLi9jbG91ZC1hcnRpZmFjdFwiO1xuaW1wb3J0IHsgdG9wb2xvZ2ljYWxTb3J0IH0gZnJvbSBcIi4vdG9wb3NvcnRcIjtcblxuLyoqXG4gKiBUaGUgbmFtZSBvZiB0aGUgcm9vdCBtYW5pZmVzdCBmaWxlIG9mIHRoZSBhc3NlbWJseS5cbiAqL1xuY29uc3QgTUFOSUZFU1RfRklMRSA9IFwibWFuaWZlc3QuanNvblwiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBkZXBsb3lhYmxlIGNsb3VkIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgQ2xvdWRBc3NlbWJseSB7XG4gIC8qKlxuICAgKiBUaGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIGNsb3VkIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGRpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc2NoZW1hIHZlcnNpb24gb2YgdGhlIGFzc2VtYmx5IG1hbmlmZXN0LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZztcblxuICAvKipcbiAgICogQWxsIGFydGlmYWN0cyBpbmNsdWRlZCBpbiB0aGlzIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGFydGlmYWN0czogQ2xvdWRBcnRpZmFjdFtdO1xuXG4gIC8qKlxuICAgKiBSdW50aW1lIGluZm9ybWF0aW9uIHN1Y2ggYXMgbW9kdWxlIHZlcnNpb25zIHVzZWQgdG8gc3ludGhlc2l6ZSB0aGlzIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHJ1bnRpbWU6IGN4c2NoZW1hLlJ1bnRpbWVJbmZvO1xuXG4gIC8qKlxuICAgKiBUaGUgcmF3IGFzc2VtYmx5IG1hbmlmZXN0LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG1hbmlmZXN0OiBjeHNjaGVtYS5Bc3NlbWJseU1hbmlmZXN0O1xuXG4gIC8qKlxuICAgKiBSZWFkcyBhIGNsb3VkIGFzc2VtYmx5IGZyb20gdGhlIHNwZWNpZmllZCBkaXJlY3RvcnkuXG4gICAqIEBwYXJhbSBkaXJlY3RvcnkgVGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBhc3NlbWJseS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRpcmVjdG9yeTogc3RyaW5nKSB7XG4gICAgdGhpcy5kaXJlY3RvcnkgPSBkaXJlY3Rvcnk7XG5cbiAgICB0aGlzLm1hbmlmZXN0ID0gY3hzY2hlbWEuTWFuaWZlc3QubG9hZChwYXRoLmpvaW4oZGlyZWN0b3J5LCBNQU5JRkVTVF9GSUxFKSk7XG4gICAgdGhpcy52ZXJzaW9uID0gdGhpcy5tYW5pZmVzdC52ZXJzaW9uO1xuICAgIHRoaXMuYXJ0aWZhY3RzID0gdGhpcy5yZW5kZXJBcnRpZmFjdHMoKTtcbiAgICB0aGlzLnJ1bnRpbWUgPSB0aGlzLm1hbmlmZXN0LnJ1bnRpbWUgfHwgeyBsaWJyYXJpZXM6IHt9IH07XG5cbiAgICAvLyBmb3JjZSB2YWxpZGF0aW9uIG9mIGRlcHMgYnkgYWNjZXNzaW5nICdkZXBlbmRzJyBvbiBhbGwgYXJ0aWZhY3RzXG4gICAgdGhpcy52YWxpZGF0ZURlcHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byBmaW5kIGFuIGFydGlmYWN0IHdpdGggYSBzcGVjaWZpYyBpZGVudGl0eS5cbiAgICogUmV0dXJucyBBICdDbG91ZEFydGlmYWN0JyBvYmplY3Qgb3IgJ3VuZGVmaW5lZCcgaWYgdGhlIGFydGlmYWN0IGRvZXMgbm90IGV4aXN0IGluIHRoaXMgYXNzZW1ibHkuXG4gICAqIFBhcmFtIGlkIFRoZSBhcnRpZmFjdCBJRFxuICAgKi9cbiAgcHVibGljIHRyeUdldEFydGlmYWN0KGlkOiBzdHJpbmcpOiBDbG91ZEFydGlmYWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5hcnRpZmFjdHMuZmluZCgoYSkgPT4gYS5pZCA9PT0gaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBST1Mgc3RhY2sgYXJ0aWZhY3QgZnJvbSB0aGlzIGFzc2VtYmx5LlxuICAgKlxuICAgKiBXaWxsIG9ubHkgc2VhcmNoIHRoZSBjdXJyZW50IGFzc2VtYmx5LlxuICAgKlxuICAgKiBQYXJhbSBzdGFja05hbWUgdGhlIG5hbWUgb2YgdGhlIFJPUyBzdGFjay5cbiAgICogVGhyb3dzIGlmIHRoZXJlIGlzIG5vIHN0YWNrIGFydGlmYWN0IGJ5IHRoYXQgbmFtZVxuICAgKiBUaHJvd3MgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBzdGFjayB3aXRoIHRoZSBzYW1lIHN0YWNrIG5hbWUuIFlvdSBjYW5cbiAgICogdXNlICdnZXRTdGFja0FydGlmYWN0IC0gc3RhY2suYXJ0aWZhY3RJZCcgaW5zdGVhZC5cbiAgICogUmV0dXJucyBhICdSb3NTdGFja0FydGlmYWN0JyBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lOiBzdHJpbmcpOiBSb3NTdGFja0FydGlmYWN0IHtcbiAgICBjb25zdCBhcnRpZmFjdHMgPSB0aGlzLmFydGlmYWN0cy5maWx0ZXIoXG4gICAgICAoYSkgPT4gYSBpbnN0YW5jZW9mIFJvc1N0YWNrQXJ0aWZhY3QgJiYgYS5zdGFja05hbWUgPT09IHN0YWNrTmFtZVxuICAgICk7XG4gICAgaWYgKCFhcnRpZmFjdHMgfHwgYXJ0aWZhY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCBzdGFjayB3aXRoIHN0YWNrIG5hbWUgXCIke3N0YWNrTmFtZX1cImApO1xuICAgIH1cblxuICAgIGlmIChhcnRpZmFjdHMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVGhlcmUgYXJlIG11bHRpcGxlIHN0YWNrcyB3aXRoIHRoZSBzdGFjayBuYW1lIFwiJHtzdGFja05hbWV9XCIgKCR7YXJ0aWZhY3RzXG4gICAgICAgICAgLm1hcCgoYSkgPT4gYS5pZClcbiAgICAgICAgICAuam9pbihcIixcIil9KS4gVXNlIFwiZ2V0U3RhY2tBcnRpZmFjdChpZClcIiBpbnN0ZWFkYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJ0aWZhY3RzWzBdIGFzIFJvc1N0YWNrQXJ0aWZhY3Q7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIFJPUyBzdGFjayBhcnRpZmFjdCBieSBuYW1lIGZyb20gdGhpcyBhc3NlbWJseS5cbiAgICogRGVwcmVjYXRlZCByZW5hbWVkIHRvICdnZXRTdGFja0J5TmFtZScgKG9yICdnZXRTdGFja0FydGlmYWN0KGlkKScpXG4gICAqL1xuICBwdWJsaWMgZ2V0U3RhY2soc3RhY2tOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGFja0J5TmFtZShzdGFja05hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBST1Mgc3RhY2sgYXJ0aWZhY3QgZnJvbSB0aGlzIGFzc2VtYmx5LlxuICAgKlxuICAgKiBQYXJhbSBhcnRpZmFjdElkIHRoZSBhcnRpZmFjdCBpZCBvZiB0aGUgc3RhY2sgKGNhbiBiZSBvYnRhaW5lZCB0aHJvdWdoICdzdGFjay5hcnRpZmFjdElkJykuXG4gICAqIFRocm93cyBpZiB0aGVyZSBpcyBubyBzdGFjayBhcnRpZmFjdCB3aXRoIHRoYXQgaWRcbiAgICogUmV0dXJucyBhICdSb3NTdGFja0FydGlmYWN0JyBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0U3RhY2tBcnRpZmFjdChhcnRpZmFjdElkOiBzdHJpbmcpOiBSb3NTdGFja0FydGlmYWN0IHtcbiAgICBjb25zdCBhcnRpZmFjdCA9IHRoaXMudHJ5R2V0QXJ0aWZhY3QoYXJ0aWZhY3RJZCk7XG4gICAgaWYgKCFhcnRpZmFjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCBhcnRpZmFjdCB3aXRoIGlkIFwiJHthcnRpZmFjdElkfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCEoYXJ0aWZhY3QgaW5zdGFuY2VvZiBSb3NTdGFja0FydGlmYWN0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBcnRpZmFjdCAke2FydGlmYWN0SWR9IGlzIG5vdCBhIFJPUyBzdGFja2ApO1xuICAgIH1cblxuICAgIHJldHVybiBhcnRpZmFjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbmVzdGVkIGFzc2VtYmx5IGFydGlmYWN0LlxuICAgKlxuICAgKiBAcGFyYW0gYXJ0aWZhY3RJZCBUaGUgYXJ0aWZhY3QgSUQgb2YgdGhlIG5lc3RlZCBhc3NlbWJseVxuICAgKi9cbiAgcHVibGljIGdldE5lc3RlZEFzc2VtYmx5QXJ0aWZhY3QoXG4gICAgYXJ0aWZhY3RJZDogc3RyaW5nXG4gICk6IE5lc3RlZENsb3VkQXNzZW1ibHlBcnRpZmFjdCB7XG4gICAgY29uc3QgYXJ0aWZhY3QgPSB0aGlzLnRyeUdldEFydGlmYWN0KGFydGlmYWN0SWQpO1xuICAgIGlmICghYXJ0aWZhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgYXJ0aWZhY3Qgd2l0aCBpZCBcIiR7YXJ0aWZhY3RJZH1cImApO1xuICAgIH1cblxuICAgIGlmICghKGFydGlmYWN0IGluc3RhbmNlb2YgTmVzdGVkQ2xvdWRBc3NlbWJseUFydGlmYWN0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRm91bmQgYXJ0aWZhY3QgJyR7YXJ0aWZhY3RJZH0nIGJ1dCBpdCdzIG5vdCBhIG5lc3RlZCBjbG91ZCBhc3NlbWJseWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFydGlmYWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXN0ZWQgYXNzZW1ibHkuXG4gICAqXG4gICAqIEBwYXJhbSBhcnRpZmFjdElkIFRoZSBhcnRpZmFjdCBJRCBvZiB0aGUgbmVzdGVkIGFzc2VtYmx5XG4gICAqL1xuICBwdWJsaWMgZ2V0TmVzdGVkQXNzZW1ibHkoYXJ0aWZhY3RJZDogc3RyaW5nKTogQ2xvdWRBc3NlbWJseSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmVzdGVkQXNzZW1ibHlBcnRpZmFjdChhcnRpZmFjdElkKS5uZXN0ZWRBc3NlbWJseTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0cmVlIG1ldGFkYXRhIGFydGlmYWN0IGZyb20gdGhpcyBhc3NlbWJseS5cbiAgICogVGhyb3dzIGlmIHRoZXJlIGlzIG5vIG1ldGFkYXRhIGFydGlmYWN0IGJ5IHRoYXQgbmFtZVxuICAgKiBSZXR1cm5zIGEgJ1RyZWVDbG91ZEFydGlmYWN0JyBvYmplY3QgaWYgdGhlcmUgaXMgb25lIGRlZmluZWQgaW4gdGhlIG1hbmlmZXN0LCAndW5kZWZpbmVkJyBvdGhlcndpc2UuXG4gICAqL1xuICBwdWJsaWMgdHJlZSgpOiBUcmVlQ2xvdWRBcnRpZmFjdCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgdHJlZXMgPSB0aGlzLmFydGlmYWN0cy5maWx0ZXIoXG4gICAgICAoYSkgPT4gYS5tYW5pZmVzdC50eXBlID09PSBjeHNjaGVtYS5BcnRpZmFjdFR5cGUuQ0RLX1RSRUVcbiAgICApO1xuICAgIGlmICh0cmVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICh0cmVlcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBNdWx0aXBsZSBhcnRpZmFjdHMgb2YgdHlwZSAke2N4c2NoZW1hLkFydGlmYWN0VHlwZS5DREtfVFJFRX0gZm91bmQgaW4gbWFuaWZlc3RgXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCB0cmVlID0gdHJlZXNbMF07XG5cbiAgICBpZiAoISh0cmVlIGluc3RhbmNlb2YgVHJlZUNsb3VkQXJ0aWZhY3QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiVHJlZVwiIGFydGlmYWN0IGlzIG5vdCBvZiBleHBlY3RlZCB0eXBlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgYWxsIHRoZSBST1Mgc3RhY2sgYXJ0aWZhY3RzIHRoYXQgYXJlIGluY2x1ZGVkIGluIHRoaXMgYXNzZW1ibHkuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHN0YWNrcygpOiBSb3NTdGFja0FydGlmYWN0W10ge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxSb3NTdGFja0FydGlmYWN0PigpO1xuICAgIGZvciAoY29uc3QgYSBvZiB0aGlzLmFydGlmYWN0cykge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBSb3NTdGFja0FydGlmYWN0KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZURlcHMoKSB7XG4gICAgZm9yIChjb25zdCBhcnRpZmFjdCBvZiB0aGlzLmFydGlmYWN0cykge1xuICAgICAgaWdub3JlKGFydGlmYWN0LmRlcGVuZGVuY2llcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJBcnRpZmFjdHMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PENsb3VkQXJ0aWZhY3Q+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgYXJ0aWZhY3RdIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgICAgdGhpcy5tYW5pZmVzdC5hcnRpZmFjdHMgfHwge31cbiAgICApKSB7XG4gICAgICBjb25zdCBjbG91ZGFydGlmYWN0ID0gQ2xvdWRBcnRpZmFjdC5mcm9tTWFuaWZlc3QodGhpcywgbmFtZSwgYXJ0aWZhY3QpO1xuICAgICAgaWYgKGNsb3VkYXJ0aWZhY3QpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goY2xvdWRhcnRpZmFjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG9sb2dpY2FsU29ydChcbiAgICAgIHJlc3VsdCxcbiAgICAgICh4KSA9PiB4LmlkLFxuICAgICAgKHgpID0+IHguX2RlcGVuZGVuY3lJRHNcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogQ2FuIGJlIHVzZWQgdG8gYnVpbGQgYSBjbG91ZCBhc3NlbWJseS5cbiAqL1xuZXhwb3J0IGNsYXNzIENsb3VkQXNzZW1ibHlCdWlsZGVyIHtcbiAgLyoqXG4gICAqIFRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgcmVzdWx0aW5nIGNsb3VkIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG91dGRpcjogc3RyaW5nO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgYXJ0aWZhY3RzOiB7IFtpZDogc3RyaW5nXTogY3hzY2hlbWEuQXJ0aWZhY3RNYW5pZmVzdCB9ID0ge307XG4gIHByaXZhdGUgcmVhZG9ubHkgbWlzc2luZyA9IG5ldyBBcnJheTxjeHNjaGVtYS5NaXNzaW5nQ29udGV4dD4oKTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYSBjbG91ZCBhc3NlbWJseSBidWlsZGVyLlxuICAgKiBAcGFyYW0gb3V0ZGlyIFRoZSBvdXRwdXQgZGlyZWN0b3J5LCB1c2VzIHRlbXBvcmFyeSBkaXJlY3RvcnkgaWYgdW5kZWZpbmVkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvdXRkaXI/OiBzdHJpbmcpIHtcbiAgICB0aGlzLm91dGRpciA9IGRldGVybWluZU91dHB1dERpcmVjdG9yeShvdXRkaXIpO1xuXG4gICAgLy8gd2UgbGV2ZXJhZ2UgdGhlIGZhY3QgdGhhdCBvdXRkaXIgaXMgbG9uZy1saXZlZCB0byBhdm9pZCBzdGFnaW5nIGFzc2V0cyBpbnRvIGl0XG4gICAgLy8gdGhhdCB3ZXJlIGFscmVhZHkgc3RhZ2VkIChjb3B5aW5nIGNhbiBiZSBleHBlbnNpdmUpLiB0aGlzIGlzIGFjaGlldmVkIGJ5IHRoZSBmYWN0XG4gICAgLy8gdGhhdCBhc3NldHMgdXNlIGEgc291cmNlIGhhc2ggYXMgdGhlaXIgbmFtZS4gb3RoZXIgYXJ0aWZhY3RzLCBhbmQgdGhlIG1hbmlmZXN0IGl0c2VsZixcbiAgICAvLyB3aWxsIG92ZXJ3cml0ZSBleGlzdGluZyBmaWxlcyBhcyBuZWVkZWQuXG5cbiAgICBpZiAoZnMuZXhpc3RzU3luYyh0aGlzLm91dGRpcikpIHtcbiAgICAgIGlmICghZnMuc3RhdFN5bmModGhpcy5vdXRkaXIpLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RoaXMub3V0ZGlyfSBtdXN0IGJlIGEgZGlyZWN0b3J5YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZzLm1rZGlyU3luYyh0aGlzLm91dGRpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gYXJ0aWZhY3QgaW50byB0aGUgY2xvdWQgYXNzZW1ibHkuXG4gICAqIEBwYXJhbSBpZCBUaGUgSUQgb2YgdGhlIGFydGlmYWN0LlxuICAgKiBAcGFyYW0gbWFuaWZlc3QgVGhlIGFydGlmYWN0IG1hbmlmZXN0XG4gICAqL1xuICBwdWJsaWMgYWRkQXJ0aWZhY3QoaWQ6IHN0cmluZywgbWFuaWZlc3Q6IGN4c2NoZW1hLkFydGlmYWN0TWFuaWZlc3QpIHtcbiAgICB0aGlzLmFydGlmYWN0c1tpZF0gPSBmaWx0ZXJVbmRlZmluZWQobWFuaWZlc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydHMgdGhhdCBzb21lIGNvbnRleHQgaXMgbWlzc2luZyBpbiBvcmRlciBmb3IgdGhpcyBjbG91ZCBhc3NlbWJseSB0byBiZSBmdWxseSBzeW50aGVzaXplZC5cbiAgICogQHBhcmFtIG1pc3NpbmcgTWlzc2luZyBjb250ZXh0IGluZm9ybWF0aW9uLlxuICAgKi9cbiAgcHVibGljIGFkZE1pc3NpbmcobWlzc2luZzogY3hzY2hlbWEuTWlzc2luZ0NvbnRleHQpIHtcbiAgICBpZiAodGhpcy5taXNzaW5nLmV2ZXJ5KChtKSA9PiBtLmtleSAhPT0gbWlzc2luZy5rZXkpKSB7XG4gICAgICB0aGlzLm1pc3NpbmcucHVzaChtaXNzaW5nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluYWxpemVzIHRoZSBjbG91ZCBhc3NlbWJseSBpbnRvIHRoZSBvdXRwdXQgZGlyZWN0b3J5IHJldHVybnMgYVxuICAgKiAnQ2xvdWRBc3NlbWJseScgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gaW5zcGVjdCB0aGUgYXNzZW1ibHkuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgYnVpbGRBc3NlbWJseShvcHRpb25zOiBBc3NlbWJseUJ1aWxkT3B0aW9ucyA9IHt9KTogQ2xvdWRBc3NlbWJseSB7XG4gICAgLy8gZXhwbGljaXRseSBpbml0aWFsaXppbmcgdGhpcyB0eXBlIHdpbGwgaGVscCB1cyBkZXRlY3RcbiAgICAvLyBicmVha2luZyBjaGFuZ2VzLiAoRm9yIGV4YW1wbGUgYWRkaW5nIGEgcmVxdWlyZWQgcHJvcGVydHkgd2lsbCBicmVhayBjb21waWxhdGlvbikuXG4gICAgbGV0IG1hbmlmZXN0OiBjeHNjaGVtYS5Bc3NlbWJseU1hbmlmZXN0ID0ge1xuICAgICAgdmVyc2lvbjogY3hzY2hlbWEuTWFuaWZlc3QudmVyc2lvbigpLFxuICAgICAgYXJ0aWZhY3RzOiB0aGlzLmFydGlmYWN0cyxcbiAgICAgIHJ1bnRpbWU6IG9wdGlvbnMucnVudGltZUluZm8sXG4gICAgICBtaXNzaW5nOiB0aGlzLm1pc3NpbmcubGVuZ3RoID4gMCA/IHRoaXMubWlzc2luZyA6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgLy8gbm93IHdlIGNhbiBmaWx0ZXJcbiAgICBtYW5pZmVzdCA9IGZpbHRlclVuZGVmaW5lZChtYW5pZmVzdCk7XG5cbiAgICBjb25zdCBtYW5pZmVzdEZpbGVQYXRoID0gcGF0aC5qb2luKHRoaXMub3V0ZGlyLCBNQU5JRkVTVF9GSUxFKTtcbiAgICBjeHNjaGVtYS5NYW5pZmVzdC5zYXZlKG1hbmlmZXN0LCBtYW5pZmVzdEZpbGVQYXRoKTtcblxuICAgIC8vIFwiYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcIjogaW4gb3JkZXIgZm9yIHRoZSBvbGQgQ0xJIHRvIHRlbGwgdGhlIHVzZXIgdGhleVxuICAgIC8vIG5lZWQgYSBuZXcgdmVyc2lvbiwgd2UnbGwgZW1pdCB0aGUgbGVnYWN5IG1hbmlmZXN0IHdpdGggb25seSBcInZlcnNpb25cIi5cbiAgICAvLyB0aGlzIHdpbGwgcmVzdWx0IGluIGFuIGVycm9yIFwiQ0RLIFRvb2xraXQgPj0gQ0xPVURfQVNTRU1CTFlfVkVSU0lPTiBpcyByZXF1aXJlZCBpbiBvcmRlciB0byBpbnRlcmFjdCB3aXRoIHRoaXMgcHJvZ3JhbS5cIlxuICAgIGZzLndyaXRlRmlsZVN5bmMoXG4gICAgICBwYXRoLmpvaW4odGhpcy5vdXRkaXIsIFwiY2RrLm91dFwiKSxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgdmVyc2lvbjogbWFuaWZlc3QudmVyc2lvbiB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gbmV3IENsb3VkQXNzZW1ibHkodGhpcy5vdXRkaXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXN0ZWQgY2xvdWQgYXNzZW1ibHlcbiAgICovXG4gIHB1YmxpYyBjcmVhdGVOZXN0ZWRBc3NlbWJseShhcnRpZmFjdElkOiBzdHJpbmcsIGRpc3BsYXlOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gYXJ0aWZhY3RJZDtcbiAgICBjb25zdCBpbm5lckFzbURpciA9IHBhdGguam9pbih0aGlzLm91dGRpciwgZGlyZWN0b3J5TmFtZSk7XG5cbiAgICB0aGlzLmFkZEFydGlmYWN0KGFydGlmYWN0SWQsIHtcbiAgICAgIHR5cGU6IGN4c2NoZW1hLkFydGlmYWN0VHlwZS5ORVNURURfQ0xPVURfQVNTRU1CTFksXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGRpcmVjdG9yeU5hbWUsXG4gICAgICAgIGRpc3BsYXlOYW1lLFxuICAgICAgfSBhcyBjeHNjaGVtYS5OZXN0ZWRDbG91ZEFzc2VtYmx5UHJvcGVydGllcyxcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgQ2xvdWRBc3NlbWJseUJ1aWxkZXIoaW5uZXJBc21EaXIpO1xuICB9XG59XG5cbi8qKlxuICogQmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZm9yIHdoZW4gJ1J1bnRpbWVJbmZvJ1xuICogd2FzIGRlZmluZWQgaGVyZS4gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBpdHMgdXNlZCBhcyBhbiBpbnB1dCBpbiB0aGUgc3RhYmxlXG4gKiBAYWxpY2xvdWQvcm9zLWNkay1jb3JlIGxpYnJhcnkuXG4gKlxuICogQGRlcHJlY2F0ZWQgbW92ZWQgdG8gcGFja2FnZSAncm9zLWFzc2VtYmx5LXNjaGVtYSdcbiAqIEBzZWUgY29yZS5Db25zdHJ1Y3ROb2RlLnN5bnRoXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUnVudGltZUluZm8gZXh0ZW5kcyBjeHNjaGVtYS5SdW50aW1lSW5mbyB7fVxuXG4vKipcbiAqIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZvciB3aGVuICdNZXRhZGF0YUVudHJ5J1xuICogd2FzIGRlZmluZWQgaGVyZS4gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBpdHMgdXNlZCBhcyBhbiBpbnB1dCBpbiB0aGUgc3RhYmxlXG4gKiBAYWxpY2xvdWQvcm9zLWNkay1jb3JlIGxpYnJhcnkuXG4gKlxuICogQGRlcHJlY2F0ZWQgbW92ZWQgdG8gcGFja2FnZSAncm9zLWFzc2VtYmx5LXNjaGVtYSdcbiAqIEBzZWUgY29yZS5Db25zdHJ1Y3ROb2RlLm1ldGFkYXRhXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFFbnRyeSBleHRlbmRzIGN4c2NoZW1hLk1ldGFkYXRhRW50cnkge31cblxuLyoqXG4gKiBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmb3Igd2hlbiAnTWlzc2luZ0NvbnRleHQnXG4gKiB3YXMgZGVmaW5lZCBoZXJlLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGl0cyB1c2VkIGFzIGFuIGlucHV0IGluIHRoZSBzdGFibGVcbiAqIEBhbGljbG91ZC9yb3MtY2RrLWNvcmUgbGlicmFyeS5cbiAqXG4gKiBAZGVwcmVjYXRlZCBtb3ZlZCB0byBwYWNrYWdlICdyb3MtYXNzZW1ibHktc2NoZW1hJ1xuICogQHNlZSBjb3JlLlN0YWNrLnJlcG9ydE1pc3NpbmdDb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWlzc2luZ0NvbnRleHQge1xuICAvKipcbiAgICogVGhlIG1pc3NpbmcgY29udGV4dCBrZXkuXG4gICAqL1xuICByZWFkb25seSBrZXk6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHByb3ZpZGVyIGZyb20gd2hpY2ggd2UgZXhwZWN0IHRoaXMgY29udGV4dCBrZXkgdG8gYmUgb2J0YWluZWQuXG4gICAqXG4gICAqIChUaGlzIGlzIHRoZSBvbGQgdW50eXBlZCBkZWZpbml0aW9uLCB3aGljaCBpcyBuZWNlc3NhcnkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgKiBTZWUgY3hzY2hlbWEgZm9yIGEgdHlwZSBkZWZpbml0aW9uLilcbiAgICovXG4gIHJlYWRvbmx5IHByb3ZpZGVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIHByb3ZpZGVyLXNwZWNpZmljIG9wdGlvbnMuXG4gICAqXG4gICAqIChUaGlzIGlzIHRoZSBvbGQgdW50eXBlZCBkZWZpbml0aW9uLCB3aGljaCBpcyBuZWNlc3NhcnkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgKiBTZWUgY3hzY2hlbWEgZm9yIGEgdHlwZSBkZWZpbml0aW9uLilcbiAgICovXG4gIHJlYWRvbmx5IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFzc2VtYmx5QnVpbGRPcHRpb25zIHtcbiAgLyoqXG4gICAqIEluY2x1ZGUgdGhlIHNwZWNpZmllZCBydW50aW1lIGluZm9ybWF0aW9uIChtb2R1bGUgdmVyc2lvbnMpIGluIG1hbmlmZXN0LlxuICAgKiBAZGVmYXVsdCAtIGlmIHRoaXMgb3B0aW9uIGlzIG5vdCBzcGVjaWZpZWQsIHJ1bnRpbWUgaW5mbyB3aWxsIG5vdCBiZSBpbmNsdWRlZFxuICAgKi9cbiAgcmVhZG9ubHkgcnVudGltZUluZm8/OiBSdW50aW1lSW5mbztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgY29weSBvZiAnb2JqJyB3aXRob3V0IHVuZGVmaW5lZCB2YWx1ZXMgaW4gbWFwcyBvciBhcnJheXMuXG4gKi9cbmZ1bmN0aW9uIGZpbHRlclVuZGVmaW5lZChvYmo6IGFueSk6IGFueSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLmZpbHRlcigoeCkgPT4geCAhPT0gdW5kZWZpbmVkKS5tYXAoKHgpID0+IGZpbHRlclVuZGVmaW5lZCh4KSk7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIikge1xuICAgIGNvbnN0IHJldDogYW55ID0ge307XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXRba2V5XSA9IGZpbHRlclVuZGVmaW5lZCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBpZ25vcmUoX3g6IGFueSkge1xuICByZXR1cm47XG59XG5cbi8qKlxuICogVHVybiB0aGUgZ2l2ZW4gb3B0aW9uYWwgb3V0cHV0IGRpcmVjdG9yeSBpbnRvIGEgZml4ZWQgb3V0cHV0IGRpcmVjdG9yeVxuICovXG5mdW5jdGlvbiBkZXRlcm1pbmVPdXRwdXREaXJlY3Rvcnkob3V0ZGlyPzogc3RyaW5nKSB7XG4gIHJldHVybiBvdXRkaXIgPz8gZnMubWtkdGVtcFN5bmMocGF0aC5qb2luKG9zLnRtcGRpcigpLCBcImNkay5vdXRcIikpO1xufVxuIl19