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
     * @returns A `CloudArtifact` object or `undefined` if the artifact does not exist in this assembly.
     * @param id The artifact ID
     */
    tryGetArtifact(id) {
        return this.artifacts.find((a) => a.id === id);
    }
    /**
     * Returns a ROS stack artifact from this assembly.
     *
     * Will only search the current assembly.
     *
     * @param stackName the name of the ROS stack.
     * @throws if there is no stack artifact by that name
     * @throws if there is more than one stack with the same stack name. You can
     * use `getStackArtifact(stack.artifactId)` instead.
     * @returns a `RosStackArtifact` object.
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
     * @deprecated renamed to `getStackByName` (or `getStackArtifact(id)`)
     */
    getStack(stackName) {
        return this.getStackByName(stackName);
    }
    /**
     * Returns a ROS stack artifact from this assembly.
     *
     * @param artifactId the artifact id of the stack (can be obtained through `stack.artifactId`).
     * @throws if there is no stack artifact with that id
     * @returns a `RosStackArtifact` object.
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
     * @throws if there is no metadata artifact by that name
     * @returns a `TreeCloudArtifact` object if there is one defined in the manifest, `undefined` otherwise.
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
     * `CloudAssembly` object that can be used to inspect the assembly.
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
 * Returns a copy of `obj` without undefined values in maps or arrays.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYXNzZW1ibHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC1hc3NlbWJseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEQ7QUFDOUQseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsdUVBQWtFO0FBQ2xFLCtGQUF5RjtBQUN6Rix5RUFBb0U7QUFDcEUscURBQWlEO0FBQ2pELHlDQUE2QztBQUU3Qzs7R0FFRztBQUNILE1BQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQztBQUV0Qzs7R0FFRztBQUNILE1BQWEsYUFBYTtJQTBCeEI7OztPQUdHO0lBQ0gsWUFBWSxTQUFpQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUUzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRTFELG1FQUFtRTtRQUNuRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxjQUFjLENBQUMsRUFBVTtRQUM5QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0ksY0FBYyxDQUFDLFNB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O0FBQ3JFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjeHNjaGVtYSBmcm9tIFwiQGFsaWNsb3VkL3Jvcy1jZGstYXNzZW1ibHktc2NoZW1hXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCAqIGFzIG9zIGZyb20gXCJvc1wiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgUm9zU3RhY2tBcnRpZmFjdCB9IGZyb20gXCIuL2FydGlmYWN0cy9yb3Mtc3RhY2stYXJ0aWZhY3RcIjtcbmltcG9ydCB7IE5lc3RlZENsb3VkQXNzZW1ibHlBcnRpZmFjdCB9IGZyb20gXCIuL2FydGlmYWN0cy9uZXN0ZWQtY2xvdWQtYXNzZW1ibHktYXJ0aWZhY3RcIjtcbmltcG9ydCB7IFRyZWVDbG91ZEFydGlmYWN0IH0gZnJvbSBcIi4vYXJ0aWZhY3RzL3RyZWUtY2xvdWQtYXJ0aWZhY3RcIjtcbmltcG9ydCB7IENsb3VkQXJ0aWZhY3QgfSBmcm9tIFwiLi9jbG91ZC1hcnRpZmFjdFwiO1xuaW1wb3J0IHsgdG9wb2xvZ2ljYWxTb3J0IH0gZnJvbSBcIi4vdG9wb3NvcnRcIjtcblxuLyoqXG4gKiBUaGUgbmFtZSBvZiB0aGUgcm9vdCBtYW5pZmVzdCBmaWxlIG9mIHRoZSBhc3NlbWJseS5cbiAqL1xuY29uc3QgTUFOSUZFU1RfRklMRSA9IFwibWFuaWZlc3QuanNvblwiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBkZXBsb3lhYmxlIGNsb3VkIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgQ2xvdWRBc3NlbWJseSB7XG4gIC8qKlxuICAgKiBUaGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIGNsb3VkIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGRpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc2NoZW1hIHZlcnNpb24gb2YgdGhlIGFzc2VtYmx5IG1hbmlmZXN0LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZztcblxuICAvKipcbiAgICogQWxsIGFydGlmYWN0cyBpbmNsdWRlZCBpbiB0aGlzIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGFydGlmYWN0czogQ2xvdWRBcnRpZmFjdFtdO1xuXG4gIC8qKlxuICAgKiBSdW50aW1lIGluZm9ybWF0aW9uIHN1Y2ggYXMgbW9kdWxlIHZlcnNpb25zIHVzZWQgdG8gc3ludGhlc2l6ZSB0aGlzIGFzc2VtYmx5LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHJ1bnRpbWU6IGN4c2NoZW1hLlJ1bnRpbWVJbmZvO1xuXG4gIC8qKlxuICAgKiBUaGUgcmF3IGFzc2VtYmx5IG1hbmlmZXN0LlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG1hbmlmZXN0OiBjeHNjaGVtYS5Bc3NlbWJseU1hbmlmZXN0O1xuXG4gIC8qKlxuICAgKiBSZWFkcyBhIGNsb3VkIGFzc2VtYmx5IGZyb20gdGhlIHNwZWNpZmllZCBkaXJlY3RvcnkuXG4gICAqIEBwYXJhbSBkaXJlY3RvcnkgVGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBhc3NlbWJseS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRpcmVjdG9yeTogc3RyaW5nKSB7XG4gICAgdGhpcy5kaXJlY3RvcnkgPSBkaXJlY3Rvcnk7XG5cbiAgICB0aGlzLm1hbmlmZXN0ID0gY3hzY2hlbWEuTWFuaWZlc3QubG9hZChwYXRoLmpvaW4oZGlyZWN0b3J5LCBNQU5JRkVTVF9GSUxFKSk7XG4gICAgdGhpcy52ZXJzaW9uID0gdGhpcy5tYW5pZmVzdC52ZXJzaW9uO1xuICAgIHRoaXMuYXJ0aWZhY3RzID0gdGhpcy5yZW5kZXJBcnRpZmFjdHMoKTtcbiAgICB0aGlzLnJ1bnRpbWUgPSB0aGlzLm1hbmlmZXN0LnJ1bnRpbWUgfHwgeyBsaWJyYXJpZXM6IHt9IH07XG5cbiAgICAvLyBmb3JjZSB2YWxpZGF0aW9uIG9mIGRlcHMgYnkgYWNjZXNzaW5nICdkZXBlbmRzJyBvbiBhbGwgYXJ0aWZhY3RzXG4gICAgdGhpcy52YWxpZGF0ZURlcHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byBmaW5kIGFuIGFydGlmYWN0IHdpdGggYSBzcGVjaWZpYyBpZGVudGl0eS5cbiAgICogQHJldHVybnMgQSBgQ2xvdWRBcnRpZmFjdGAgb2JqZWN0IG9yIGB1bmRlZmluZWRgIGlmIHRoZSBhcnRpZmFjdCBkb2VzIG5vdCBleGlzdCBpbiB0aGlzIGFzc2VtYmx5LlxuICAgKiBAcGFyYW0gaWQgVGhlIGFydGlmYWN0IElEXG4gICAqL1xuICBwdWJsaWMgdHJ5R2V0QXJ0aWZhY3QoaWQ6IHN0cmluZyk6IENsb3VkQXJ0aWZhY3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmFydGlmYWN0cy5maW5kKChhKSA9PiBhLmlkID09PSBpZCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIFJPUyBzdGFjayBhcnRpZmFjdCBmcm9tIHRoaXMgYXNzZW1ibHkuXG4gICAqXG4gICAqIFdpbGwgb25seSBzZWFyY2ggdGhlIGN1cnJlbnQgYXNzZW1ibHkuXG4gICAqXG4gICAqIEBwYXJhbSBzdGFja05hbWUgdGhlIG5hbWUgb2YgdGhlIFJPUyBzdGFjay5cbiAgICogQHRocm93cyBpZiB0aGVyZSBpcyBubyBzdGFjayBhcnRpZmFjdCBieSB0aGF0IG5hbWVcbiAgICogQHRocm93cyBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIHN0YWNrIHdpdGggdGhlIHNhbWUgc3RhY2sgbmFtZS4gWW91IGNhblxuICAgKiB1c2UgYGdldFN0YWNrQXJ0aWZhY3Qoc3RhY2suYXJ0aWZhY3RJZClgIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIGEgYFJvc1N0YWNrQXJ0aWZhY3RgIG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBnZXRTdGFja0J5TmFtZShzdGFja05hbWU6IHN0cmluZyk6IFJvc1N0YWNrQXJ0aWZhY3Qge1xuICAgIGNvbnN0IGFydGlmYWN0cyA9IHRoaXMuYXJ0aWZhY3RzLmZpbHRlcihcbiAgICAgIChhKSA9PiBhIGluc3RhbmNlb2YgUm9zU3RhY2tBcnRpZmFjdCAmJiBhLnN0YWNrTmFtZSA9PT0gc3RhY2tOYW1lXG4gICAgKTtcbiAgICBpZiAoIWFydGlmYWN0cyB8fCBhcnRpZmFjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIHN0YWNrIHdpdGggc3RhY2sgbmFtZSBcIiR7c3RhY2tOYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKGFydGlmYWN0cy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGVyZSBhcmUgbXVsdGlwbGUgc3RhY2tzIHdpdGggdGhlIHN0YWNrIG5hbWUgXCIke3N0YWNrTmFtZX1cIiAoJHthcnRpZmFjdHNcbiAgICAgICAgICAubWFwKChhKSA9PiBhLmlkKVxuICAgICAgICAgIC5qb2luKFwiLFwiKX0pLiBVc2UgXCJnZXRTdGFja0FydGlmYWN0KGlkKVwiIGluc3RlYWRgXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBhcnRpZmFjdHNbMF0gYXMgUm9zU3RhY2tBcnRpZmFjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgUk9TIHN0YWNrIGFydGlmYWN0IGJ5IG5hbWUgZnJvbSB0aGlzIGFzc2VtYmx5LlxuICAgKiBAZGVwcmVjYXRlZCByZW5hbWVkIHRvIGBnZXRTdGFja0J5TmFtZWAgKG9yIGBnZXRTdGFja0FydGlmYWN0KGlkKWApXG4gICAqL1xuICBwdWJsaWMgZ2V0U3RhY2soc3RhY2tOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGFja0J5TmFtZShzdGFja05hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBST1Mgc3RhY2sgYXJ0aWZhY3QgZnJvbSB0aGlzIGFzc2VtYmx5LlxuICAgKlxuICAgKiBAcGFyYW0gYXJ0aWZhY3RJZCB0aGUgYXJ0aWZhY3QgaWQgb2YgdGhlIHN0YWNrIChjYW4gYmUgb2J0YWluZWQgdGhyb3VnaCBgc3RhY2suYXJ0aWZhY3RJZGApLlxuICAgKiBAdGhyb3dzIGlmIHRoZXJlIGlzIG5vIHN0YWNrIGFydGlmYWN0IHdpdGggdGhhdCBpZFxuICAgKiBAcmV0dXJucyBhIGBSb3NTdGFja0FydGlmYWN0YCBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0U3RhY2tBcnRpZmFjdChhcnRpZmFjdElkOiBzdHJpbmcpOiBSb3NTdGFja0FydGlmYWN0IHtcbiAgICBjb25zdCBhcnRpZmFjdCA9IHRoaXMudHJ5R2V0QXJ0aWZhY3QoYXJ0aWZhY3RJZCk7XG4gICAgaWYgKCFhcnRpZmFjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCBhcnRpZmFjdCB3aXRoIGlkIFwiJHthcnRpZmFjdElkfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCEoYXJ0aWZhY3QgaW5zdGFuY2VvZiBSb3NTdGFja0FydGlmYWN0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBcnRpZmFjdCAke2FydGlmYWN0SWR9IGlzIG5vdCBhIFJPUyBzdGFja2ApO1xuICAgIH1cblxuICAgIHJldHVybiBhcnRpZmFjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbmVzdGVkIGFzc2VtYmx5IGFydGlmYWN0LlxuICAgKlxuICAgKiBAcGFyYW0gYXJ0aWZhY3RJZCBUaGUgYXJ0aWZhY3QgSUQgb2YgdGhlIG5lc3RlZCBhc3NlbWJseVxuICAgKi9cbiAgcHVibGljIGdldE5lc3RlZEFzc2VtYmx5QXJ0aWZhY3QoXG4gICAgYXJ0aWZhY3RJZDogc3RyaW5nXG4gICk6IE5lc3RlZENsb3VkQXNzZW1ibHlBcnRpZmFjdCB7XG4gICAgY29uc3QgYXJ0aWZhY3QgPSB0aGlzLnRyeUdldEFydGlmYWN0KGFydGlmYWN0SWQpO1xuICAgIGlmICghYXJ0aWZhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgYXJ0aWZhY3Qgd2l0aCBpZCBcIiR7YXJ0aWZhY3RJZH1cImApO1xuICAgIH1cblxuICAgIGlmICghKGFydGlmYWN0IGluc3RhbmNlb2YgTmVzdGVkQ2xvdWRBc3NlbWJseUFydGlmYWN0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRm91bmQgYXJ0aWZhY3QgJyR7YXJ0aWZhY3RJZH0nIGJ1dCBpdCdzIG5vdCBhIG5lc3RlZCBjbG91ZCBhc3NlbWJseWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFydGlmYWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXN0ZWQgYXNzZW1ibHkuXG4gICAqXG4gICAqIEBwYXJhbSBhcnRpZmFjdElkIFRoZSBhcnRpZmFjdCBJRCBvZiB0aGUgbmVzdGVkIGFzc2VtYmx5XG4gICAqL1xuICBwdWJsaWMgZ2V0TmVzdGVkQXNzZW1ibHkoYXJ0aWZhY3RJZDogc3RyaW5nKTogQ2xvdWRBc3NlbWJseSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmVzdGVkQXNzZW1ibHlBcnRpZmFjdChhcnRpZmFjdElkKS5uZXN0ZWRBc3NlbWJseTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0cmVlIG1ldGFkYXRhIGFydGlmYWN0IGZyb20gdGhpcyBhc3NlbWJseS5cbiAgICogQHRocm93cyBpZiB0aGVyZSBpcyBubyBtZXRhZGF0YSBhcnRpZmFjdCBieSB0aGF0IG5hbWVcbiAgICogQHJldHVybnMgYSBgVHJlZUNsb3VkQXJ0aWZhY3RgIG9iamVjdCBpZiB0aGVyZSBpcyBvbmUgZGVmaW5lZCBpbiB0aGUgbWFuaWZlc3QsIGB1bmRlZmluZWRgIG90aGVyd2lzZS5cbiAgICovXG4gIHB1YmxpYyB0cmVlKCk6IFRyZWVDbG91ZEFydGlmYWN0IHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCB0cmVlcyA9IHRoaXMuYXJ0aWZhY3RzLmZpbHRlcihcbiAgICAgIChhKSA9PiBhLm1hbmlmZXN0LnR5cGUgPT09IGN4c2NoZW1hLkFydGlmYWN0VHlwZS5DREtfVFJFRVxuICAgICk7XG4gICAgaWYgKHRyZWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHRyZWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE11bHRpcGxlIGFydGlmYWN0cyBvZiB0eXBlICR7Y3hzY2hlbWEuQXJ0aWZhY3RUeXBlLkNES19UUkVFfSBmb3VuZCBpbiBtYW5pZmVzdGBcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHRyZWUgPSB0cmVlc1swXTtcblxuICAgIGlmICghKHRyZWUgaW5zdGFuY2VvZiBUcmVlQ2xvdWRBcnRpZmFjdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJUcmVlXCIgYXJ0aWZhY3QgaXMgbm90IG9mIGV4cGVjdGVkIHR5cGUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJlZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBhbGwgdGhlIFJPUyBzdGFjayBhcnRpZmFjdHMgdGhhdCBhcmUgaW5jbHVkZWQgaW4gdGhpcyBhc3NlbWJseS5cbiAgICovXG4gIHB1YmxpYyBnZXQgc3RhY2tzKCk6IFJvc1N0YWNrQXJ0aWZhY3RbXSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PFJvc1N0YWNrQXJ0aWZhY3Q+KCk7XG4gICAgZm9yIChjb25zdCBhIG9mIHRoaXMuYXJ0aWZhY3RzKSB7XG4gICAgICBpZiAoYSBpbnN0YW5jZW9mIFJvc1N0YWNrQXJ0aWZhY3QpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goYSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlRGVwcygpIHtcbiAgICBmb3IgKGNvbnN0IGFydGlmYWN0IG9mIHRoaXMuYXJ0aWZhY3RzKSB7XG4gICAgICBpZ25vcmUoYXJ0aWZhY3QuZGVwZW5kZW5jaWVzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckFydGlmYWN0cygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8Q2xvdWRBcnRpZmFjdD4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBhcnRpZmFjdF0gb2YgT2JqZWN0LmVudHJpZXMoXG4gICAgICB0aGlzLm1hbmlmZXN0LmFydGlmYWN0cyB8fCB7fVxuICAgICkpIHtcbiAgICAgIGNvbnN0IGNsb3VkYXJ0aWZhY3QgPSBDbG91ZEFydGlmYWN0LmZyb21NYW5pZmVzdCh0aGlzLCBuYW1lLCBhcnRpZmFjdCk7XG4gICAgICBpZiAoY2xvdWRhcnRpZmFjdCkge1xuICAgICAgICByZXN1bHQucHVzaChjbG91ZGFydGlmYWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9wb2xvZ2ljYWxTb3J0KFxuICAgICAgcmVzdWx0LFxuICAgICAgKHgpID0+IHguaWQsXG4gICAgICAoeCkgPT4geC5fZGVwZW5kZW5jeUlEc1xuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBDYW4gYmUgdXNlZCB0byBidWlsZCBhIGNsb3VkIGFzc2VtYmx5LlxuICovXG5leHBvcnQgY2xhc3MgQ2xvdWRBc3NlbWJseUJ1aWxkZXIge1xuICAvKipcbiAgICogVGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSByZXN1bHRpbmcgY2xvdWQgYXNzZW1ibHkuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgb3V0ZGlyOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBhcnRpZmFjdHM6IHsgW2lkOiBzdHJpbmddOiBjeHNjaGVtYS5BcnRpZmFjdE1hbmlmZXN0IH0gPSB7fTtcbiAgcHJpdmF0ZSByZWFkb25seSBtaXNzaW5nID0gbmV3IEFycmF5PGN4c2NoZW1hLk1pc3NpbmdDb250ZXh0PigpO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIGNsb3VkIGFzc2VtYmx5IGJ1aWxkZXIuXG4gICAqIEBwYXJhbSBvdXRkaXIgVGhlIG91dHB1dCBkaXJlY3RvcnksIHVzZXMgdGVtcG9yYXJ5IGRpcmVjdG9yeSBpZiB1bmRlZmluZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKG91dGRpcj86IHN0cmluZykge1xuICAgIHRoaXMub3V0ZGlyID0gZGV0ZXJtaW5lT3V0cHV0RGlyZWN0b3J5KG91dGRpcik7XG5cbiAgICAvLyB3ZSBsZXZlcmFnZSB0aGUgZmFjdCB0aGF0IG91dGRpciBpcyBsb25nLWxpdmVkIHRvIGF2b2lkIHN0YWdpbmcgYXNzZXRzIGludG8gaXRcbiAgICAvLyB0aGF0IHdlcmUgYWxyZWFkeSBzdGFnZWQgKGNvcHlpbmcgY2FuIGJlIGV4cGVuc2l2ZSkuIHRoaXMgaXMgYWNoaWV2ZWQgYnkgdGhlIGZhY3RcbiAgICAvLyB0aGF0IGFzc2V0cyB1c2UgYSBzb3VyY2UgaGFzaCBhcyB0aGVpciBuYW1lLiBvdGhlciBhcnRpZmFjdHMsIGFuZCB0aGUgbWFuaWZlc3QgaXRzZWxmLFxuICAgIC8vIHdpbGwgb3ZlcndyaXRlIGV4aXN0aW5nIGZpbGVzIGFzIG5lZWRlZC5cblxuICAgIGlmIChmcy5leGlzdHNTeW5jKHRoaXMub3V0ZGlyKSkge1xuICAgICAgaWYgKCFmcy5zdGF0U3luYyh0aGlzLm91dGRpcikuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGhpcy5vdXRkaXJ9IG11c3QgYmUgYSBkaXJlY3RvcnlgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZnMubWtkaXJTeW5jKHRoaXMub3V0ZGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBhcnRpZmFjdCBpbnRvIHRoZSBjbG91ZCBhc3NlbWJseS5cbiAgICogQHBhcmFtIGlkIFRoZSBJRCBvZiB0aGUgYXJ0aWZhY3QuXG4gICAqIEBwYXJhbSBtYW5pZmVzdCBUaGUgYXJ0aWZhY3QgbWFuaWZlc3RcbiAgICovXG4gIHB1YmxpYyBhZGRBcnRpZmFjdChpZDogc3RyaW5nLCBtYW5pZmVzdDogY3hzY2hlbWEuQXJ0aWZhY3RNYW5pZmVzdCkge1xuICAgIHRoaXMuYXJ0aWZhY3RzW2lkXSA9IGZpbHRlclVuZGVmaW5lZChtYW5pZmVzdCk7XG4gIH1cblxuICAvKipcbiAgICogUmVwb3J0cyB0aGF0IHNvbWUgY29udGV4dCBpcyBtaXNzaW5nIGluIG9yZGVyIGZvciB0aGlzIGNsb3VkIGFzc2VtYmx5IHRvIGJlIGZ1bGx5IHN5bnRoZXNpemVkLlxuICAgKiBAcGFyYW0gbWlzc2luZyBNaXNzaW5nIGNvbnRleHQgaW5mb3JtYXRpb24uXG4gICAqL1xuICBwdWJsaWMgYWRkTWlzc2luZyhtaXNzaW5nOiBjeHNjaGVtYS5NaXNzaW5nQ29udGV4dCkge1xuICAgIGlmICh0aGlzLm1pc3NpbmcuZXZlcnkoKG0pID0+IG0ua2V5ICE9PSBtaXNzaW5nLmtleSkpIHtcbiAgICAgIHRoaXMubWlzc2luZy5wdXNoKG1pc3NpbmcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5hbGl6ZXMgdGhlIGNsb3VkIGFzc2VtYmx5IGludG8gdGhlIG91dHB1dCBkaXJlY3RvcnkgcmV0dXJucyBhXG4gICAqIGBDbG91ZEFzc2VtYmx5YCBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byBpbnNwZWN0IHRoZSBhc3NlbWJseS5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIHB1YmxpYyBidWlsZEFzc2VtYmx5KG9wdGlvbnM6IEFzc2VtYmx5QnVpbGRPcHRpb25zID0ge30pOiBDbG91ZEFzc2VtYmx5IHtcbiAgICAvLyBleHBsaWNpdGx5IGluaXRpYWxpemluZyB0aGlzIHR5cGUgd2lsbCBoZWxwIHVzIGRldGVjdFxuICAgIC8vIGJyZWFraW5nIGNoYW5nZXMuIChGb3IgZXhhbXBsZSBhZGRpbmcgYSByZXF1aXJlZCBwcm9wZXJ0eSB3aWxsIGJyZWFrIGNvbXBpbGF0aW9uKS5cbiAgICBsZXQgbWFuaWZlc3Q6IGN4c2NoZW1hLkFzc2VtYmx5TWFuaWZlc3QgPSB7XG4gICAgICB2ZXJzaW9uOiBjeHNjaGVtYS5NYW5pZmVzdC52ZXJzaW9uKCksXG4gICAgICBhcnRpZmFjdHM6IHRoaXMuYXJ0aWZhY3RzLFxuICAgICAgcnVudGltZTogb3B0aW9ucy5ydW50aW1lSW5mbyxcbiAgICAgIG1pc3Npbmc6IHRoaXMubWlzc2luZy5sZW5ndGggPiAwID8gdGhpcy5taXNzaW5nIDogdW5kZWZpbmVkLFxuICAgIH07XG5cbiAgICAvLyBub3cgd2UgY2FuIGZpbHRlclxuICAgIG1hbmlmZXN0ID0gZmlsdGVyVW5kZWZpbmVkKG1hbmlmZXN0KTtcblxuICAgIGNvbnN0IG1hbmlmZXN0RmlsZVBhdGggPSBwYXRoLmpvaW4odGhpcy5vdXRkaXIsIE1BTklGRVNUX0ZJTEUpO1xuICAgIGN4c2NoZW1hLk1hbmlmZXN0LnNhdmUobWFuaWZlc3QsIG1hbmlmZXN0RmlsZVBhdGgpO1xuXG4gICAgLy8gXCJiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVwiOiBpbiBvcmRlciBmb3IgdGhlIG9sZCBDTEkgdG8gdGVsbCB0aGUgdXNlciB0aGV5XG4gICAgLy8gbmVlZCBhIG5ldyB2ZXJzaW9uLCB3ZSdsbCBlbWl0IHRoZSBsZWdhY3kgbWFuaWZlc3Qgd2l0aCBvbmx5IFwidmVyc2lvblwiLlxuICAgIC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYW4gZXJyb3IgXCJDREsgVG9vbGtpdCA+PSBDTE9VRF9BU1NFTUJMWV9WRVJTSU9OIGlzIHJlcXVpcmVkIGluIG9yZGVyIHRvIGludGVyYWN0IHdpdGggdGhpcyBwcm9ncmFtLlwiXG4gICAgZnMud3JpdGVGaWxlU3luYyhcbiAgICAgIHBhdGguam9pbih0aGlzLm91dGRpciwgXCJjZGsub3V0XCIpLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyB2ZXJzaW9uOiBtYW5pZmVzdC52ZXJzaW9uIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBuZXcgQ2xvdWRBc3NlbWJseSh0aGlzLm91dGRpcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5lc3RlZCBjbG91ZCBhc3NlbWJseVxuICAgKi9cbiAgcHVibGljIGNyZWF0ZU5lc3RlZEFzc2VtYmx5KGFydGlmYWN0SWQ6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBhcnRpZmFjdElkO1xuICAgIGNvbnN0IGlubmVyQXNtRGlyID0gcGF0aC5qb2luKHRoaXMub3V0ZGlyLCBkaXJlY3RvcnlOYW1lKTtcblxuICAgIHRoaXMuYWRkQXJ0aWZhY3QoYXJ0aWZhY3RJZCwge1xuICAgICAgdHlwZTogY3hzY2hlbWEuQXJ0aWZhY3RUeXBlLk5FU1RFRF9DTE9VRF9BU1NFTUJMWSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZGlyZWN0b3J5TmFtZSxcbiAgICAgICAgZGlzcGxheU5hbWUsXG4gICAgICB9IGFzIGN4c2NoZW1hLk5lc3RlZENsb3VkQXNzZW1ibHlQcm9wZXJ0aWVzLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBDbG91ZEFzc2VtYmx5QnVpbGRlcihpbm5lckFzbURpcik7XG4gIH1cbn1cblxuLyoqXG4gKiBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmb3Igd2hlbiBgUnVudGltZUluZm9gXG4gKiB3YXMgZGVmaW5lZCBoZXJlLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGl0cyB1c2VkIGFzIGFuIGlucHV0IGluIHRoZSBzdGFibGVcbiAqIEBhbGljbG91ZC9yb3MtY2RrLWNvcmUgbGlicmFyeS5cbiAqXG4gKiBAZGVwcmVjYXRlZCBtb3ZlZCB0byBwYWNrYWdlICdyb3MtYXNzZW1ibHktc2NoZW1hJ1xuICogQHNlZSBjb3JlLkNvbnN0cnVjdE5vZGUuc3ludGhcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSdW50aW1lSW5mbyBleHRlbmRzIGN4c2NoZW1hLlJ1bnRpbWVJbmZvIHt9XG5cbi8qKlxuICogQmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZm9yIHdoZW4gYE1ldGFkYXRhRW50cnlgXG4gKiB3YXMgZGVmaW5lZCBoZXJlLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGl0cyB1c2VkIGFzIGFuIGlucHV0IGluIHRoZSBzdGFibGVcbiAqIEBhbGljbG91ZC9yb3MtY2RrLWNvcmUgbGlicmFyeS5cbiAqXG4gKiBAZGVwcmVjYXRlZCBtb3ZlZCB0byBwYWNrYWdlICdyb3MtYXNzZW1ibHktc2NoZW1hJ1xuICogQHNlZSBjb3JlLkNvbnN0cnVjdE5vZGUubWV0YWRhdGFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YUVudHJ5IGV4dGVuZHMgY3hzY2hlbWEuTWV0YWRhdGFFbnRyeSB7fVxuXG4vKipcbiAqIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZvciB3aGVuIGBNaXNzaW5nQ29udGV4dGBcbiAqIHdhcyBkZWZpbmVkIGhlcmUuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgaXRzIHVzZWQgYXMgYW4gaW5wdXQgaW4gdGhlIHN0YWJsZVxuICogQGFsaWNsb3VkL3Jvcy1jZGstY29yZSBsaWJyYXJ5LlxuICpcbiAqIEBkZXByZWNhdGVkIG1vdmVkIHRvIHBhY2thZ2UgJ3Jvcy1hc3NlbWJseS1zY2hlbWEnXG4gKiBAc2VlIGNvcmUuU3RhY2sucmVwb3J0TWlzc2luZ0NvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNaXNzaW5nQ29udGV4dCB7XG4gIC8qKlxuICAgKiBUaGUgbWlzc2luZyBjb250ZXh0IGtleS5cbiAgICovXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcHJvdmlkZXIgZnJvbSB3aGljaCB3ZSBleHBlY3QgdGhpcyBjb250ZXh0IGtleSB0byBiZSBvYnRhaW5lZC5cbiAgICpcbiAgICogKFRoaXMgaXMgdGhlIG9sZCB1bnR5cGVkIGRlZmluaXRpb24sIHdoaWNoIGlzIG5lY2Vzc2FyeSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAqIFNlZSBjeHNjaGVtYSBmb3IgYSB0eXBlIGRlZmluaXRpb24uKVxuICAgKi9cbiAgcmVhZG9ubHkgcHJvdmlkZXI6IHN0cmluZztcblxuICAvKipcbiAgICogQSBzZXQgb2YgcHJvdmlkZXItc3BlY2lmaWMgb3B0aW9ucy5cbiAgICpcbiAgICogKFRoaXMgaXMgdGhlIG9sZCB1bnR5cGVkIGRlZmluaXRpb24sIHdoaWNoIGlzIG5lY2Vzc2FyeSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAqIFNlZSBjeHNjaGVtYSBmb3IgYSB0eXBlIGRlZmluaXRpb24uKVxuICAgKi9cbiAgcmVhZG9ubHkgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXNzZW1ibHlCdWlsZE9wdGlvbnMge1xuICAvKipcbiAgICogSW5jbHVkZSB0aGUgc3BlY2lmaWVkIHJ1bnRpbWUgaW5mb3JtYXRpb24gKG1vZHVsZSB2ZXJzaW9ucykgaW4gbWFuaWZlc3QuXG4gICAqIEBkZWZhdWx0IC0gaWYgdGhpcyBvcHRpb24gaXMgbm90IHNwZWNpZmllZCwgcnVudGltZSBpbmZvIHdpbGwgbm90IGJlIGluY2x1ZGVkXG4gICAqL1xuICByZWFkb25seSBydW50aW1lSW5mbz86IFJ1bnRpbWVJbmZvO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBjb3B5IG9mIGBvYmpgIHdpdGhvdXQgdW5kZWZpbmVkIHZhbHVlcyBpbiBtYXBzIG9yIGFycmF5cy5cbiAqL1xuZnVuY3Rpb24gZmlsdGVyVW5kZWZpbmVkKG9iajogYW55KTogYW55IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmouZmlsdGVyKCh4KSA9PiB4ICE9PSB1bmRlZmluZWQpLm1hcCgoeCkgPT4gZmlsdGVyVW5kZWZpbmVkKHgpKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3QgcmV0OiBhbnkgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJldFtrZXldID0gZmlsdGVyVW5kZWZpbmVkKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZShfeDogYW55KSB7XG4gIHJldHVybjtcbn1cblxuLyoqXG4gKiBUdXJuIHRoZSBnaXZlbiBvcHRpb25hbCBvdXRwdXQgZGlyZWN0b3J5IGludG8gYSBmaXhlZCBvdXRwdXQgZGlyZWN0b3J5XG4gKi9cbmZ1bmN0aW9uIGRldGVybWluZU91dHB1dERpcmVjdG9yeShvdXRkaXI/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIG91dGRpciA/PyBmcy5ta2R0ZW1wU3luYyhwYXRoLmpvaW4ob3MudG1wZGlyKCksIFwiY2RrLm91dFwiKSk7XG59XG4iXX0=