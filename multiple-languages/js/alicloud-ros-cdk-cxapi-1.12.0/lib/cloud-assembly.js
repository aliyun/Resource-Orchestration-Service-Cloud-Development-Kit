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
        const manifestPath = path.join(directory, MANIFEST_FILE);
        try {
            fs.accessSync(manifestPath, fs.constants.F_OK);
            this.manifest = cxschema.Manifest.loadAssemblyManifest(manifestPath);
        }
        catch (error) {
            if (error.code === 'ENOENT') {
                const errorMessage = `Unable to load cloud assembly manifest. File not found: ${manifestPath}\n` +
                    `Assembly directory: ${directory}\n` +
                    `Current working directory: ${process.cwd()}\n` +
                    `Available files in directory: ${fs.existsSync(directory) ? fs.readdirSync(directory).join(', ') : 'Directory does not exist'}\n` +
                    `Call stack:\n${new Error().stack}`;
                const newError = new Error(errorMessage);
                newError.stack = newError.message + '\nCaused by:\n' + error.stack;
                throw newError;
            }
            throw error;
        }
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
        return (0, toposort_1.topologicalSort)(result, (x) => x.id, (x) => x._dependencyIDs);
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
    constructor(outdir, props = {}) {
        this.artifacts = {};
        this.missing = new Array();
        this.outdir = determineOutputDirectory(outdir);
        this.assetOutdir = props.assetOutdir ?? this.outdir;
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
        return new CloudAssemblyBuilder(innerAsmDir, {
            // Reuse the same asset output directory as the current Casm builder
            assetOutdir: this.assetOutdir,
            parentBuilder: this,
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYXNzZW1ibHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC1hc3NlbWJseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEQ7QUFDOUQseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsdUVBQWtFO0FBQ2xFLCtGQUF5RjtBQUN6Rix5RUFBb0U7QUFDcEUscURBQWlEO0FBQ2pELHlDQUE2QztBQUU3Qzs7R0FFRztBQUNILE1BQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQztBQUV0Qzs7R0FFRztBQUNILE1BQWEsYUFBYTtJQTBCeEI7OztPQUdHO0lBQ0gsWUFBWSxTQUFpQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN6RCxJQUFJO1lBQ0YsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdEU7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLElBQUssS0FBYSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3BDLE1BQU0sWUFBWSxHQUFHLDJEQUEyRCxZQUFZLElBQUk7b0JBQzVGLHVCQUF1QixTQUFTLElBQUk7b0JBQ3BDLDhCQUE4QixPQUFPLENBQUMsR0FBRyxFQUFFLElBQUk7b0JBQy9DLGlDQUFpQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLElBQUk7b0JBQ2pJ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QUMsQ0FBQztBQUNyRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hzY2hlbWEgZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLWFzc2VtYmx5LXNjaGVtYVwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgKiBhcyBvcyBmcm9tIFwib3NcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IFJvc1N0YWNrQXJ0aWZhY3QgfSBmcm9tIFwiLi9hcnRpZmFjdHMvcm9zLXN0YWNrLWFydGlmYWN0XCI7XG5pbXBvcnQgeyBOZXN0ZWRDbG91ZEFzc2VtYmx5QXJ0aWZhY3QgfSBmcm9tIFwiLi9hcnRpZmFjdHMvbmVzdGVkLWNsb3VkLWFzc2VtYmx5LWFydGlmYWN0XCI7XG5pbXBvcnQgeyBUcmVlQ2xvdWRBcnRpZmFjdCB9IGZyb20gXCIuL2FydGlmYWN0cy90cmVlLWNsb3VkLWFydGlmYWN0XCI7XG5pbXBvcnQgeyBDbG91ZEFydGlmYWN0IH0gZnJvbSBcIi4vY2xvdWQtYXJ0aWZhY3RcIjtcbmltcG9ydCB7IHRvcG9sb2dpY2FsU29ydCB9IGZyb20gXCIuL3RvcG9zb3J0XCI7XG5cbi8qKlxuICogVGhlIG5hbWUgb2YgdGhlIHJvb3QgbWFuaWZlc3QgZmlsZSBvZiB0aGUgYXNzZW1ibHkuXG4gKi9cbmNvbnN0IE1BTklGRVNUX0ZJTEUgPSBcIm1hbmlmZXN0Lmpzb25cIjtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZGVwbG95YWJsZSBjbG91ZCBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIENsb3VkQXNzZW1ibHkge1xuICAvKipcbiAgICogVGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBjbG91ZCBhc3NlbWJseS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBkaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHNjaGVtYSB2ZXJzaW9uIG9mIHRoZSBhc3NlbWJseSBtYW5pZmVzdC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB2ZXJzaW9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFsbCBhcnRpZmFjdHMgaW5jbHVkZWQgaW4gdGhpcyBhc3NlbWJseS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhcnRpZmFjdHM6IENsb3VkQXJ0aWZhY3RbXTtcblxuICAvKipcbiAgICogUnVudGltZSBpbmZvcm1hdGlvbiBzdWNoIGFzIG1vZHVsZSB2ZXJzaW9ucyB1c2VkIHRvIHN5bnRoZXNpemUgdGhpcyBhc3NlbWJseS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBydW50aW1lOiBjeHNjaGVtYS5SdW50aW1lSW5mbztcblxuICAvKipcbiAgICogVGhlIHJhdyBhc3NlbWJseSBtYW5pZmVzdC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBtYW5pZmVzdDogY3hzY2hlbWEuQXNzZW1ibHlNYW5pZmVzdDtcblxuICAvKipcbiAgICogUmVhZHMgYSBjbG91ZCBhc3NlbWJseSBmcm9tIHRoZSBzcGVjaWZpZWQgZGlyZWN0b3J5LlxuICAgKiBAcGFyYW0gZGlyZWN0b3J5IFRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgYXNzZW1ibHkuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkaXJlY3Rvcnk6IHN0cmluZykge1xuICAgIHRoaXMuZGlyZWN0b3J5ID0gZGlyZWN0b3J5O1xuICAgIGNvbnN0IG1hbmlmZXN0UGF0aCA9IHBhdGguam9pbihkaXJlY3RvcnksIE1BTklGRVNUX0ZJTEUpO1xuICAgIHRyeSB7XG4gICAgICBmcy5hY2Nlc3NTeW5jKG1hbmlmZXN0UGF0aCwgZnMuY29uc3RhbnRzLkZfT0spO1xuICAgICAgdGhpcy5tYW5pZmVzdCA9IGN4c2NoZW1hLk1hbmlmZXN0LmxvYWRBc3NlbWJseU1hbmlmZXN0KG1hbmlmZXN0UGF0aCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmICgoZXJyb3IgYXMgYW55KS5jb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgVW5hYmxlIHRvIGxvYWQgY2xvdWQgYXNzZW1ibHkgbWFuaWZlc3QuIEZpbGUgbm90IGZvdW5kOiAke21hbmlmZXN0UGF0aH1cXG5gICtcbiAgICAgICAgICAgIGBBc3NlbWJseSBkaXJlY3Rvcnk6ICR7ZGlyZWN0b3J5fVxcbmAgK1xuICAgICAgICAgICAgYEN1cnJlbnQgd29ya2luZyBkaXJlY3Rvcnk6ICR7cHJvY2Vzcy5jd2QoKX1cXG5gICtcbiAgICAgICAgICAgIGBBdmFpbGFibGUgZmlsZXMgaW4gZGlyZWN0b3J5OiAke2ZzLmV4aXN0c1N5bmMoZGlyZWN0b3J5KSA/IGZzLnJlYWRkaXJTeW5jKGRpcmVjdG9yeSkuam9pbignLCAnKSA6ICdEaXJlY3RvcnkgZG9lcyBub3QgZXhpc3QnfVxcbmAgK1xuICAgICAgICAgICAgYENhbGwgc3RhY2s6XFxuJHtuZXcgRXJyb3IoKS5zdGFja31gO1xuICAgICAgICBjb25zdCBuZXdFcnJvciA9IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICBuZXdFcnJvci5zdGFjayA9IG5ld0Vycm9yLm1lc3NhZ2UgKyAnXFxuQ2F1c2VkIGJ5OlxcbicgKyAoZXJyb3IgYXMgYW55KS5zdGFjaztcbiAgICAgICAgdGhyb3cgbmV3RXJyb3I7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgICB0aGlzLm1hbmlmZXN0ID0gY3hzY2hlbWEuTWFuaWZlc3QubG9hZEFzc2VtYmx5TWFuaWZlc3QocGF0aC5qb2luKGRpcmVjdG9yeSwgTUFOSUZFU1RfRklMRSkpO1xuICAgIHRoaXMudmVyc2lvbiA9IHRoaXMubWFuaWZlc3QudmVyc2lvbjtcbiAgICB0aGlzLmFydGlmYWN0cyA9IHRoaXMucmVuZGVyQXJ0aWZhY3RzKCk7XG4gICAgdGhpcy5ydW50aW1lID0gdGhpcy5tYW5pZmVzdC5ydW50aW1lIHx8IHsgbGlicmFyaWVzOiB7fSB9O1xuXG4gICAgLy8gZm9yY2UgdmFsaWRhdGlvbiBvZiBkZXBzIGJ5IGFjY2Vzc2luZyAnZGVwZW5kcycgb24gYWxsIGFydGlmYWN0c1xuICAgIHRoaXMudmFsaWRhdGVEZXBzKCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gZmluZCBhbiBhcnRpZmFjdCB3aXRoIGEgc3BlY2lmaWMgaWRlbnRpdHkuXG4gICAqIFJldHVybnMgQSAnQ2xvdWRBcnRpZmFjdCcgb2JqZWN0IG9yICd1bmRlZmluZWQnIGlmIHRoZSBhcnRpZmFjdCBkb2VzIG5vdCBleGlzdCBpbiB0aGlzIGFzc2VtYmx5LlxuICAgKiBQYXJhbSBpZCBUaGUgYXJ0aWZhY3QgSURcbiAgICovXG4gIHB1YmxpYyB0cnlHZXRBcnRpZmFjdChpZDogc3RyaW5nKTogQ2xvdWRBcnRpZmFjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuYXJ0aWZhY3RzLmZpbmQoKGEpID0+IGEuaWQgPT09IGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgUk9TIHN0YWNrIGFydGlmYWN0IGZyb20gdGhpcyBhc3NlbWJseS5cbiAgICpcbiAgICogV2lsbCBvbmx5IHNlYXJjaCB0aGUgY3VycmVudCBhc3NlbWJseS5cbiAgICpcbiAgICogUGFyYW0gc3RhY2tOYW1lIHRoZSBuYW1lIG9mIHRoZSBST1Mgc3RhY2suXG4gICAqIFRocm93cyBpZiB0aGVyZSBpcyBubyBzdGFjayBhcnRpZmFjdCBieSB0aGF0IG5hbWVcbiAgICogVGhyb3dzIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgc3RhY2sgd2l0aCB0aGUgc2FtZSBzdGFjayBuYW1lLiBZb3UgY2FuXG4gICAqIHVzZSAnZ2V0U3RhY2tBcnRpZmFjdCAtIHN0YWNrLmFydGlmYWN0SWQnIGluc3RlYWQuXG4gICAqIFJldHVybnMgYSAnUm9zU3RhY2tBcnRpZmFjdCcgb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGdldFN0YWNrQnlOYW1lKHN0YWNrTmFtZTogc3RyaW5nKTogUm9zU3RhY2tBcnRpZmFjdCB7XG4gICAgY29uc3QgYXJ0aWZhY3RzID0gdGhpcy5hcnRpZmFjdHMuZmlsdGVyKFxuICAgICAgKGEpID0+IGEgaW5zdGFuY2VvZiBSb3NTdGFja0FydGlmYWN0ICYmIGEuc3RhY2tOYW1lID09PSBzdGFja05hbWVcbiAgICApO1xuICAgIGlmICghYXJ0aWZhY3RzIHx8IGFydGlmYWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgc3RhY2sgd2l0aCBzdGFjayBuYW1lIFwiJHtzdGFja05hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoYXJ0aWZhY3RzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRoZXJlIGFyZSBtdWx0aXBsZSBzdGFja3Mgd2l0aCB0aGUgc3RhY2sgbmFtZSBcIiR7c3RhY2tOYW1lfVwiICgke2FydGlmYWN0c1xuICAgICAgICAgIC5tYXAoKGEpID0+IGEuaWQpXG4gICAgICAgICAgLmpvaW4oXCIsXCIpfSkuIFVzZSBcImdldFN0YWNrQXJ0aWZhY3QoaWQpXCIgaW5zdGVhZGBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFydGlmYWN0c1swXSBhcyBSb3NTdGFja0FydGlmYWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBST1Mgc3RhY2sgYXJ0aWZhY3QgYnkgbmFtZSBmcm9tIHRoaXMgYXNzZW1ibHkuXG4gICAqIERlcHJlY2F0ZWQgcmVuYW1lZCB0byAnZ2V0U3RhY2tCeU5hbWUnIChvciAnZ2V0U3RhY2tBcnRpZmFjdChpZCknKVxuICAgKi9cbiAgcHVibGljIGdldFN0YWNrKHN0YWNrTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhY2tCeU5hbWUoc3RhY2tOYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgUk9TIHN0YWNrIGFydGlmYWN0IGZyb20gdGhpcyBhc3NlbWJseS5cbiAgICpcbiAgICogUGFyYW0gYXJ0aWZhY3RJZCB0aGUgYXJ0aWZhY3QgaWQgb2YgdGhlIHN0YWNrIChjYW4gYmUgb2J0YWluZWQgdGhyb3VnaCAnc3RhY2suYXJ0aWZhY3RJZCcpLlxuICAgKiBUaHJvd3MgaWYgdGhlcmUgaXMgbm8gc3RhY2sgYXJ0aWZhY3Qgd2l0aCB0aGF0IGlkXG4gICAqIFJldHVybnMgYSAnUm9zU3RhY2tBcnRpZmFjdCcgb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGdldFN0YWNrQXJ0aWZhY3QoYXJ0aWZhY3RJZDogc3RyaW5nKTogUm9zU3RhY2tBcnRpZmFjdCB7XG4gICAgY29uc3QgYXJ0aWZhY3QgPSB0aGlzLnRyeUdldEFydGlmYWN0KGFydGlmYWN0SWQpO1xuICAgIGlmICghYXJ0aWZhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgYXJ0aWZhY3Qgd2l0aCBpZCBcIiR7YXJ0aWZhY3RJZH1cImApO1xuICAgIH1cblxuICAgIGlmICghKGFydGlmYWN0IGluc3RhbmNlb2YgUm9zU3RhY2tBcnRpZmFjdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQXJ0aWZhY3QgJHthcnRpZmFjdElkfSBpcyBub3QgYSBST1Mgc3RhY2tgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJ0aWZhY3Q7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG5lc3RlZCBhc3NlbWJseSBhcnRpZmFjdC5cbiAgICpcbiAgICogQHBhcmFtIGFydGlmYWN0SWQgVGhlIGFydGlmYWN0IElEIG9mIHRoZSBuZXN0ZWQgYXNzZW1ibHlcbiAgICovXG4gIHB1YmxpYyBnZXROZXN0ZWRBc3NlbWJseUFydGlmYWN0KFxuICAgIGFydGlmYWN0SWQ6IHN0cmluZ1xuICApOiBOZXN0ZWRDbG91ZEFzc2VtYmx5QXJ0aWZhY3Qge1xuICAgIGNvbnN0IGFydGlmYWN0ID0gdGhpcy50cnlHZXRBcnRpZmFjdChhcnRpZmFjdElkKTtcbiAgICBpZiAoIWFydGlmYWN0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIGFydGlmYWN0IHdpdGggaWQgXCIke2FydGlmYWN0SWR9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoIShhcnRpZmFjdCBpbnN0YW5jZW9mIE5lc3RlZENsb3VkQXNzZW1ibHlBcnRpZmFjdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZvdW5kIGFydGlmYWN0ICcke2FydGlmYWN0SWR9JyBidXQgaXQncyBub3QgYSBuZXN0ZWQgY2xvdWQgYXNzZW1ibHlgXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBhcnRpZmFjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbmVzdGVkIGFzc2VtYmx5LlxuICAgKlxuICAgKiBAcGFyYW0gYXJ0aWZhY3RJZCBUaGUgYXJ0aWZhY3QgSUQgb2YgdGhlIG5lc3RlZCBhc3NlbWJseVxuICAgKi9cbiAgcHVibGljIGdldE5lc3RlZEFzc2VtYmx5KGFydGlmYWN0SWQ6IHN0cmluZyk6IENsb3VkQXNzZW1ibHkge1xuICAgIHJldHVybiB0aGlzLmdldE5lc3RlZEFzc2VtYmx5QXJ0aWZhY3QoYXJ0aWZhY3RJZCkubmVzdGVkQXNzZW1ibHk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdHJlZSBtZXRhZGF0YSBhcnRpZmFjdCBmcm9tIHRoaXMgYXNzZW1ibHkuXG4gICAqIFRocm93cyBpZiB0aGVyZSBpcyBubyBtZXRhZGF0YSBhcnRpZmFjdCBieSB0aGF0IG5hbWVcbiAgICogUmV0dXJucyBhICdUcmVlQ2xvdWRBcnRpZmFjdCcgb2JqZWN0IGlmIHRoZXJlIGlzIG9uZSBkZWZpbmVkIGluIHRoZSBtYW5pZmVzdCwgJ3VuZGVmaW5lZCcgb3RoZXJ3aXNlLlxuICAgKi9cbiAgcHVibGljIHRyZWUoKTogVHJlZUNsb3VkQXJ0aWZhY3QgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHRyZWVzID0gdGhpcy5hcnRpZmFjdHMuZmlsdGVyKFxuICAgICAgKGEpID0+IGEubWFuaWZlc3QudHlwZSA9PT0gY3hzY2hlbWEuQXJ0aWZhY3RUeXBlLkNES19UUkVFXG4gICAgKTtcbiAgICBpZiAodHJlZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAodHJlZXMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTXVsdGlwbGUgYXJ0aWZhY3RzIG9mIHR5cGUgJHtjeHNjaGVtYS5BcnRpZmFjdFR5cGUuQ0RLX1RSRUV9IGZvdW5kIGluIG1hbmlmZXN0YFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgdHJlZSA9IHRyZWVzWzBdO1xuXG4gICAgaWYgKCEodHJlZSBpbnN0YW5jZW9mIFRyZWVDbG91ZEFydGlmYWN0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIlRyZWVcIiBhcnRpZmFjdCBpcyBub3Qgb2YgZXhwZWN0ZWQgdHlwZScpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIGFsbCB0aGUgUk9TIHN0YWNrIGFydGlmYWN0cyB0aGF0IGFyZSBpbmNsdWRlZCBpbiB0aGlzIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIGdldCBzdGFja3MoKTogUm9zU3RhY2tBcnRpZmFjdFtdIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8Um9zU3RhY2tBcnRpZmFjdD4oKTtcbiAgICBmb3IgKGNvbnN0IGEgb2YgdGhpcy5hcnRpZmFjdHMpIHtcbiAgICAgIGlmIChhIGluc3RhbmNlb2YgUm9zU3RhY2tBcnRpZmFjdCkge1xuICAgICAgICByZXN1bHQucHVzaChhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVEZXBzKCkge1xuICAgIGZvciAoY29uc3QgYXJ0aWZhY3Qgb2YgdGhpcy5hcnRpZmFjdHMpIHtcbiAgICAgIGlnbm9yZShhcnRpZmFjdC5kZXBlbmRlbmNpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQXJ0aWZhY3RzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxDbG91ZEFydGlmYWN0PigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIGFydGlmYWN0XSBvZiBPYmplY3QuZW50cmllcyhcbiAgICAgIHRoaXMubWFuaWZlc3QuYXJ0aWZhY3RzIHx8IHt9XG4gICAgKSkge1xuICAgICAgY29uc3QgY2xvdWRhcnRpZmFjdCA9IENsb3VkQXJ0aWZhY3QuZnJvbU1hbmlmZXN0KHRoaXMsIG5hbWUsIGFydGlmYWN0KTtcbiAgICAgIGlmIChjbG91ZGFydGlmYWN0KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGNsb3VkYXJ0aWZhY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3BvbG9naWNhbFNvcnQoXG4gICAgICByZXN1bHQsXG4gICAgICAoeCkgPT4geC5pZCxcbiAgICAgICh4KSA9PiB4Ll9kZXBlbmRlbmN5SURzXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIENvbnN0cnVjdGlvbiBwcm9wZXJ0aWVzIGZvciBDbG91ZEFzc2VtYmx5QnVpbGRlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkQXNzZW1ibHlCdWlsZGVyUHJvcHMge1xuICAvKipcbiAgICogVXNlIHRoZSBnaXZlbiBhc3NldCBvdXRwdXQgZGlyZWN0b3J5XG4gICAqXG4gICAqIEBkZWZhdWx0IC0gU2FtZSBhcyB0aGUgbWFuaWZlc3Qgb3V0ZGlyXG4gICAqL1xuICByZWFkb25seSBhc3NldE91dGRpcj86IHN0cmluZztcblxuICAvKipcbiAgICogSWYgdGhpcyBidWlsZGVyIGlzIGZvciBhIG5lc3RlZCBhc3NlbWJseSwgdGhlIHBhcmVudCBhc3NlbWJseSBidWlsZGVyXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gVGhpcyBpcyBhIHJvb3QgYXNzZW1ibHlcbiAgICovXG4gIHJlYWRvbmx5IHBhcmVudEJ1aWxkZXI/OiBDbG91ZEFzc2VtYmx5QnVpbGRlcjtcbn1cblxuLyoqXG4gKiBDYW4gYmUgdXNlZCB0byBidWlsZCBhIGNsb3VkIGFzc2VtYmx5LlxuICovXG5leHBvcnQgY2xhc3MgQ2xvdWRBc3NlbWJseUJ1aWxkZXIge1xuICAvKipcbiAgICogVGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSByZXN1bHRpbmcgY2xvdWQgYXNzZW1ibHkuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgb3V0ZGlyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXJlY3Rvcnkgd2hlcmUgYXNzZXRzIG9mIHRoaXMgQ2xvdWQgQXNzZW1ibHkgc2hvdWxkIGJlIHN0b3JlZFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGFzc2V0T3V0ZGlyOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBhcnRpZmFjdHM6IHsgW2lkOiBzdHJpbmddOiBjeHNjaGVtYS5BcnRpZmFjdE1hbmlmZXN0IH0gPSB7fTtcbiAgcHJpdmF0ZSByZWFkb25seSBtaXNzaW5nID0gbmV3IEFycmF5PGN4c2NoZW1hLk1pc3NpbmdDb250ZXh0PigpO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIGNsb3VkIGFzc2VtYmx5IGJ1aWxkZXIuXG4gICAqIEBwYXJhbSBvdXRkaXIgVGhlIG91dHB1dCBkaXJlY3RvcnksIHVzZXMgdGVtcG9yYXJ5IGRpcmVjdG9yeSBpZiB1bmRlZmluZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKG91dGRpcj86IHN0cmluZywgcHJvcHM6IENsb3VkQXNzZW1ibHlCdWlsZGVyUHJvcHMgPSB7fSkge1xuICAgIHRoaXMub3V0ZGlyID0gZGV0ZXJtaW5lT3V0cHV0RGlyZWN0b3J5KG91dGRpcik7XG4gICAgdGhpcy5hc3NldE91dGRpciA9IHByb3BzLmFzc2V0T3V0ZGlyID8/IHRoaXMub3V0ZGlyO1xuXG4gICAgLy8gd2UgbGV2ZXJhZ2UgdGhlIGZhY3QgdGhhdCBvdXRkaXIgaXMgbG9uZy1saXZlZCB0byBhdm9pZCBzdGFnaW5nIGFzc2V0cyBpbnRvIGl0XG4gICAgLy8gdGhhdCB3ZXJlIGFscmVhZHkgc3RhZ2VkIChjb3B5aW5nIGNhbiBiZSBleHBlbnNpdmUpLiB0aGlzIGlzIGFjaGlldmVkIGJ5IHRoZSBmYWN0XG4gICAgLy8gdGhhdCBhc3NldHMgdXNlIGEgc291cmNlIGhhc2ggYXMgdGhlaXIgbmFtZS4gb3RoZXIgYXJ0aWZhY3RzLCBhbmQgdGhlIG1hbmlmZXN0IGl0c2VsZixcbiAgICAvLyB3aWxsIG92ZXJ3cml0ZSBleGlzdGluZyBmaWxlcyBhcyBuZWVkZWQuXG5cbiAgICBpZiAoZnMuZXhpc3RzU3luYyh0aGlzLm91dGRpcikpIHtcbiAgICAgIGlmICghZnMuc3RhdFN5bmModGhpcy5vdXRkaXIpLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RoaXMub3V0ZGlyfSBtdXN0IGJlIGEgZGlyZWN0b3J5YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZzLm1rZGlyU3luYyh0aGlzLm91dGRpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gYXJ0aWZhY3QgaW50byB0aGUgY2xvdWQgYXNzZW1ibHkuXG4gICAqIEBwYXJhbSBpZCBUaGUgSUQgb2YgdGhlIGFydGlmYWN0LlxuICAgKiBAcGFyYW0gbWFuaWZlc3QgVGhlIGFydGlmYWN0IG1hbmlmZXN0XG4gICAqL1xuICBwdWJsaWMgYWRkQXJ0aWZhY3QoaWQ6IHN0cmluZywgbWFuaWZlc3Q6IGN4c2NoZW1hLkFydGlmYWN0TWFuaWZlc3QpIHtcbiAgICB0aGlzLmFydGlmYWN0c1tpZF0gPSBmaWx0ZXJVbmRlZmluZWQobWFuaWZlc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydHMgdGhhdCBzb21lIGNvbnRleHQgaXMgbWlzc2luZyBpbiBvcmRlciBmb3IgdGhpcyBjbG91ZCBhc3NlbWJseSB0byBiZSBmdWxseSBzeW50aGVzaXplZC5cbiAgICogQHBhcmFtIG1pc3NpbmcgTWlzc2luZyBjb250ZXh0IGluZm9ybWF0aW9uLlxuICAgKi9cbiAgcHVibGljIGFkZE1pc3NpbmcobWlzc2luZzogY3hzY2hlbWEuTWlzc2luZ0NvbnRleHQpIHtcbiAgICBpZiAodGhpcy5taXNzaW5nLmV2ZXJ5KChtKSA9PiBtLmtleSAhPT0gbWlzc2luZy5rZXkpKSB7XG4gICAgICB0aGlzLm1pc3NpbmcucHVzaChtaXNzaW5nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluYWxpemVzIHRoZSBjbG91ZCBhc3NlbWJseSBpbnRvIHRoZSBvdXRwdXQgZGlyZWN0b3J5IHJldHVybnMgYVxuICAgKiAnQ2xvdWRBc3NlbWJseScgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gaW5zcGVjdCB0aGUgYXNzZW1ibHkuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgYnVpbGRBc3NlbWJseShvcHRpb25zOiBBc3NlbWJseUJ1aWxkT3B0aW9ucyA9IHt9KTogQ2xvdWRBc3NlbWJseSB7XG4gICAgLy8gZXhwbGljaXRseSBpbml0aWFsaXppbmcgdGhpcyB0eXBlIHdpbGwgaGVscCB1cyBkZXRlY3RcbiAgICAvLyBicmVha2luZyBjaGFuZ2VzLiAoRm9yIGV4YW1wbGUgYWRkaW5nIGEgcmVxdWlyZWQgcHJvcGVydHkgd2lsbCBicmVhayBjb21waWxhdGlvbikuXG4gICAgbGV0IG1hbmlmZXN0OiBjeHNjaGVtYS5Bc3NlbWJseU1hbmlmZXN0ID0ge1xuICAgICAgdmVyc2lvbjogY3hzY2hlbWEuTWFuaWZlc3QudmVyc2lvbigpLFxuICAgICAgYXJ0aWZhY3RzOiB0aGlzLmFydGlmYWN0cyxcbiAgICAgIHJ1bnRpbWU6IG9wdGlvbnMucnVudGltZUluZm8sXG4gICAgICBtaXNzaW5nOiB0aGlzLm1pc3NpbmcubGVuZ3RoID4gMCA/IHRoaXMubWlzc2luZyA6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgLy8gbm93IHdlIGNhbiBmaWx0ZXJcbiAgICBtYW5pZmVzdCA9IGZpbHRlclVuZGVmaW5lZChtYW5pZmVzdCk7XG5cbiAgICBjb25zdCBtYW5pZmVzdEZpbGVQYXRoID0gcGF0aC5qb2luKHRoaXMub3V0ZGlyLCBNQU5JRkVTVF9GSUxFKTtcbiAgICBjeHNjaGVtYS5NYW5pZmVzdC5zYXZlKG1hbmlmZXN0LCBtYW5pZmVzdEZpbGVQYXRoKTtcblxuICAgIC8vIFwiYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcIjogaW4gb3JkZXIgZm9yIHRoZSBvbGQgQ0xJIHRvIHRlbGwgdGhlIHVzZXIgdGhleVxuICAgIC8vIG5lZWQgYSBuZXcgdmVyc2lvbiwgd2UnbGwgZW1pdCB0aGUgbGVnYWN5IG1hbmlmZXN0IHdpdGggb25seSBcInZlcnNpb25cIi5cbiAgICAvLyB0aGlzIHdpbGwgcmVzdWx0IGluIGFuIGVycm9yIFwiQ0RLIFRvb2xraXQgPj0gQ0xPVURfQVNTRU1CTFlfVkVSU0lPTiBpcyByZXF1aXJlZCBpbiBvcmRlciB0byBpbnRlcmFjdCB3aXRoIHRoaXMgcHJvZ3JhbS5cIlxuICAgIGZzLndyaXRlRmlsZVN5bmMoXG4gICAgICBwYXRoLmpvaW4odGhpcy5vdXRkaXIsIFwiY2RrLm91dFwiKSxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgdmVyc2lvbjogbWFuaWZlc3QudmVyc2lvbiB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gbmV3IENsb3VkQXNzZW1ibHkodGhpcy5vdXRkaXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXN0ZWQgY2xvdWQgYXNzZW1ibHlcbiAgICovXG4gIHB1YmxpYyBjcmVhdGVOZXN0ZWRBc3NlbWJseShhcnRpZmFjdElkOiBzdHJpbmcsIGRpc3BsYXlOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gYXJ0aWZhY3RJZDtcbiAgICBjb25zdCBpbm5lckFzbURpciA9IHBhdGguam9pbih0aGlzLm91dGRpciwgZGlyZWN0b3J5TmFtZSk7XG5cbiAgICB0aGlzLmFkZEFydGlmYWN0KGFydGlmYWN0SWQsIHtcbiAgICAgIHR5cGU6IGN4c2NoZW1hLkFydGlmYWN0VHlwZS5ORVNURURfQ0xPVURfQVNTRU1CTFksXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGRpcmVjdG9yeU5hbWUsXG4gICAgICAgIGRpc3BsYXlOYW1lLFxuICAgICAgfSBhcyBjeHNjaGVtYS5OZXN0ZWRDbG91ZEFzc2VtYmx5UHJvcGVydGllcyxcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgQ2xvdWRBc3NlbWJseUJ1aWxkZXIoaW5uZXJBc21EaXIsIHtcbiAgICAgIC8vIFJldXNlIHRoZSBzYW1lIGFzc2V0IG91dHB1dCBkaXJlY3RvcnkgYXMgdGhlIGN1cnJlbnQgQ2FzbSBidWlsZGVyXG4gICAgICBhc3NldE91dGRpcjogdGhpcy5hc3NldE91dGRpcixcbiAgICAgIHBhcmVudEJ1aWxkZXI6IHRoaXMsXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmb3Igd2hlbiAnUnVudGltZUluZm8nXG4gKiB3YXMgZGVmaW5lZCBoZXJlLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGl0cyB1c2VkIGFzIGFuIGlucHV0IGluIHRoZSBzdGFibGVcbiAqIEBhbGljbG91ZC9yb3MtY2RrLWNvcmUgbGlicmFyeS5cbiAqXG4gKiBAZGVwcmVjYXRlZCBtb3ZlZCB0byBwYWNrYWdlICdyb3MtYXNzZW1ibHktc2NoZW1hJ1xuICogQHNlZSBjb3JlLkNvbnN0cnVjdE5vZGUuc3ludGhcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSdW50aW1lSW5mbyBleHRlbmRzIGN4c2NoZW1hLlJ1bnRpbWVJbmZvIHt9XG5cbi8qKlxuICogQmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZm9yIHdoZW4gJ01ldGFkYXRhRW50cnknXG4gKiB3YXMgZGVmaW5lZCBoZXJlLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGl0cyB1c2VkIGFzIGFuIGlucHV0IGluIHRoZSBzdGFibGVcbiAqIEBhbGljbG91ZC9yb3MtY2RrLWNvcmUgbGlicmFyeS5cbiAqXG4gKiBAZGVwcmVjYXRlZCBtb3ZlZCB0byBwYWNrYWdlICdyb3MtYXNzZW1ibHktc2NoZW1hJ1xuICogQHNlZSBjb3JlLkNvbnN0cnVjdE5vZGUubWV0YWRhdGFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YUVudHJ5IGV4dGVuZHMgY3hzY2hlbWEuTWV0YWRhdGFFbnRyeSB7fVxuXG4vKipcbiAqIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZvciB3aGVuICdNaXNzaW5nQ29udGV4dCdcbiAqIHdhcyBkZWZpbmVkIGhlcmUuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgaXRzIHVzZWQgYXMgYW4gaW5wdXQgaW4gdGhlIHN0YWJsZVxuICogQGFsaWNsb3VkL3Jvcy1jZGstY29yZSBsaWJyYXJ5LlxuICpcbiAqIEBkZXByZWNhdGVkIG1vdmVkIHRvIHBhY2thZ2UgJ3Jvcy1hc3NlbWJseS1zY2hlbWEnXG4gKiBAc2VlIGNvcmUuU3RhY2sucmVwb3J0TWlzc2luZ0NvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNaXNzaW5nQ29udGV4dCB7XG4gIC8qKlxuICAgKiBUaGUgbWlzc2luZyBjb250ZXh0IGtleS5cbiAgICovXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcHJvdmlkZXIgZnJvbSB3aGljaCB3ZSBleHBlY3QgdGhpcyBjb250ZXh0IGtleSB0byBiZSBvYnRhaW5lZC5cbiAgICpcbiAgICogKFRoaXMgaXMgdGhlIG9sZCB1bnR5cGVkIGRlZmluaXRpb24sIHdoaWNoIGlzIG5lY2Vzc2FyeSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAqIFNlZSBjeHNjaGVtYSBmb3IgYSB0eXBlIGRlZmluaXRpb24uKVxuICAgKi9cbiAgcmVhZG9ubHkgcHJvdmlkZXI6IHN0cmluZztcblxuICAvKipcbiAgICogQSBzZXQgb2YgcHJvdmlkZXItc3BlY2lmaWMgb3B0aW9ucy5cbiAgICpcbiAgICogKFRoaXMgaXMgdGhlIG9sZCB1bnR5cGVkIGRlZmluaXRpb24sIHdoaWNoIGlzIG5lY2Vzc2FyeSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAqIFNlZSBjeHNjaGVtYSBmb3IgYSB0eXBlIGRlZmluaXRpb24uKVxuICAgKi9cbiAgcmVhZG9ubHkgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXNzZW1ibHlCdWlsZE9wdGlvbnMge1xuICAvKipcbiAgICogSW5jbHVkZSB0aGUgc3BlY2lmaWVkIHJ1bnRpbWUgaW5mb3JtYXRpb24gKG1vZHVsZSB2ZXJzaW9ucykgaW4gbWFuaWZlc3QuXG4gICAqIEBkZWZhdWx0IC0gaWYgdGhpcyBvcHRpb24gaXMgbm90IHNwZWNpZmllZCwgcnVudGltZSBpbmZvIHdpbGwgbm90IGJlIGluY2x1ZGVkXG4gICAqL1xuICByZWFkb25seSBydW50aW1lSW5mbz86IFJ1bnRpbWVJbmZvO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBjb3B5IG9mICdvYmonIHdpdGhvdXQgdW5kZWZpbmVkIHZhbHVlcyBpbiBtYXBzIG9yIGFycmF5cy5cbiAqL1xuZnVuY3Rpb24gZmlsdGVyVW5kZWZpbmVkKG9iajogYW55KTogYW55IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmouZmlsdGVyKCh4KSA9PiB4ICE9PSB1bmRlZmluZWQpLm1hcCgoeCkgPT4gZmlsdGVyVW5kZWZpbmVkKHgpKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3QgcmV0OiBhbnkgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJldFtrZXldID0gZmlsdGVyVW5kZWZpbmVkKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZShfeDogYW55KSB7XG4gIHJldHVybjtcbn1cblxuLyoqXG4gKiBUdXJuIHRoZSBnaXZlbiBvcHRpb25hbCBvdXRwdXQgZGlyZWN0b3J5IGludG8gYSBmaXhlZCBvdXRwdXQgZGlyZWN0b3J5XG4gKi9cbmZ1bmN0aW9uIGRldGVybWluZU91dHB1dERpcmVjdG9yeShvdXRkaXI/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIG91dGRpciA/PyBmcy5ta2R0ZW1wU3luYyhwYXRoLmpvaW4ob3MudG1wZGlyKCksIFwiY2RrLm91dFwiKSk7XG59XG4iXX0=