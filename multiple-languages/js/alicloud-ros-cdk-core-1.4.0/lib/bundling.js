"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerVolumeConsistency = exports.DockerImage = exports.BundlingFileAccess = exports.BundlingOutput = exports.DockerBuildSecret = void 0;
const child_process_1 = require("child_process");
const crypto = require("crypto");
const path_1 = require("path");
const fs_1 = require("./fs");
const asset_staging_1 = require("./private/asset-staging");
/**
 * Methods to build Docker CLI arguments for builds using secrets.
 *
 * Docker BuildKit must be enabled to use build secrets.
 *
 * @see https://docs.docker.com/build/buildkit/
 */
class DockerBuildSecret {
    /**
     * A Docker build secret from a file source
     * @param src The path to the source file, relative to the build directory.
     * @returns The latter half required for `--secret`
     */
    static fromSrc(src) {
        return `src=${src}`;
    }
}
exports.DockerBuildSecret = DockerBuildSecret;
/**
 * The type of output that a bundling operation is producing.
 *
 */
var BundlingOutput;
(function (BundlingOutput) {
    /**
     * The bundling output directory includes a single .zip or .jar file which
     * will be used as the final bundle. If the output directory does not
     * include exactly a single archive, bundling will fail.
     */
    BundlingOutput["ARCHIVED"] = "archived";
    /**
     * The bundling output directory contains one or more files which will be
     * archived and uploaded as a .zip file to OSS bucket.
     */
    BundlingOutput["NOT_ARCHIVED"] = "not-archived";
    /**
     * If the bundling output directory contains a single archive file (zip or jar)
     * it will be used as the bundle output as-is. Otherwise, all the files in the bundling output directory will be zipped.
     */
    BundlingOutput["AUTO_DISCOVER"] = "auto-discover";
    /**
     * The bundling output directory includes a single file which
     * will be used as the final bundle. If the output directory does not
     * include exactly a single file, bundling will fail.
     *
     * Similar to ARCHIVED but for non-archive files
     */
    BundlingOutput["SINGLE_FILE"] = "single-file";
})(BundlingOutput = exports.BundlingOutput || (exports.BundlingOutput = {}));
/**
 * The access mechanism used to make source files available to the bundling container and to return the bundling output back to the host
 */
var BundlingFileAccess;
(function (BundlingFileAccess) {
    /**
     * Creates temporary volumes and containers to copy files from the host to the bundling container and back.
     * This is slower, but works also in more complex situations with remote or shared docker sockets.
     */
    BundlingFileAccess["VOLUME_COPY"] = "VOLUME_COPY";
    /**
     * The source and output folders will be mounted as bind mount from the host system
     * This is faster and simpler, but less portable than `VOLUME_COPY`.
     */
    BundlingFileAccess["BIND_MOUNT"] = "BIND_MOUNT";
})(BundlingFileAccess = exports.BundlingFileAccess || (exports.BundlingFileAccess = {}));
/**
 * A Docker image
 */
class DockerImage {
    constructor(image, _imageHash) {
        this.image = image;
        this._imageHash = _imageHash;
    }
    /**
     * Builds a Docker image
     *
     * @param path The path to the directory containing the Docker file
     * @param options Docker build options
     */
    static fromBuild(path, options = {}) {
        const buildArgs = options.buildArgs || {};
        if (options.file && path_1.isAbsolute(options.file)) {
            throw new Error(`"file" must be relative to the docker build directory. Got ${options.file}`);
        }
        // Image tag derived from path and build options
        const input = JSON.stringify({ path, ...options });
        const tagHash = crypto.createHash('sha256').update(input).digest('hex');
        const tag = `cdk-${tagHash}`;
        const dockerArgs = [
            'build', '-t', tag,
            ...(options.file ? ['-f', path_1.join(path, options.file)] : []),
            ...(options.platform ? ['--platform', options.platform] : []),
            ...(options.targetStage ? ['--target', options.targetStage] : []),
            ...(options.cacheFrom ? [...options.cacheFrom.map(cacheFrom => ['--cache-from', this.cacheOptionToFlag(cacheFrom)]).flat()] : []),
            ...(options.cacheTo ? ['--cache-to', this.cacheOptionToFlag(options.cacheTo)] : []),
            ...(options.cacheDisabled ? ['--no-cache'] : []),
            ...flatten(Object.entries(buildArgs).map(([k, v]) => ['--build-arg', `${k}=${v}`])),
            path,
        ];
        asset_staging_1.dockerExec(dockerArgs);
        // Fingerprints the directory containing the Dockerfile we're building and
        // differentiates the fingerprint based on build arguments. We do this so
        // we can provide a stable image hash. Otherwise, the image ID will be
        // different every time the Docker layer cache is cleared, due primarily to
        // timestamps.
        const hash = fs_1.FileSystem.fingerprint(path, { extraHash: JSON.stringify(options) });
        return new DockerImage(tag, hash);
    }
    /**
     * Reference an image on DockerHub or another online registry.
     *
     * @param image the image name
     */
    static fromRegistry(image) {
        return new DockerImage(image);
    }
    static cacheOptionToFlag(option) {
        let flag = `type=${option.type}`;
        if (option.params) {
            flag += ',' + Object.entries(option.params).map(([k, v]) => `${k}=${v}`).join(',');
        }
        return flag;
    }
    /**
     * Provides a stable representation of this image for JSON serialization.
     *
     * @return The overridden image name if set or image hash name in that order
     */
    toJSON() {
        return this._imageHash ?? this.image;
    }
    /**
     * Runs a Docker image
     */
    run(options = {}) {
        const volumes = options.volumes || [];
        const environment = options.environment || {};
        const entrypoint = options.entrypoint?.[0] || null;
        const command = [
            ...options.entrypoint?.[1]
                ? [...options.entrypoint.slice(1)]
                : [],
            ...options.command
                ? [...options.command]
                : [],
        ];
        const dockerArgs = [
            'run', '--rm',
            ...options.securityOpt
                ? ['--security-opt', options.securityOpt]
                : [],
            ...options.network
                ? ['--network', options.network]
                : [],
            ...options.platform
                ? ['--platform', options.platform]
                : [],
            ...options.user
                ? ['-u', options.user]
                : [],
            ...options.volumesFrom
                ? flatten(options.volumesFrom.map(v => ['--volumes-from', v]))
                : [],
            ...flatten(volumes.map(v => ['-v', `${v.hostPath}:${v.containerPath}:${isSeLinux() ? 'z,' : ''}${v.consistency ?? DockerVolumeConsistency.DELEGATED}`])),
            ...flatten(Object.entries(environment).map(([k, v]) => ['--env', `${k}=${v}`])),
            ...options.workingDirectory
                ? ['-w', options.workingDirectory]
                : [],
            ...entrypoint
                ? ['--entrypoint', entrypoint]
                : [],
            this.image,
            ...command,
        ];
        asset_staging_1.dockerExec(dockerArgs);
    }
    /**
     * Copies a file or directory out of the Docker image to the local filesystem.
     *
     * If `outputPath` is omitted the destination path is a temporary directory.
     *
     * @param imagePath the path in the Docker image
     * @param outputPath the destination path for the copy operation
     * @returns the destination path
     */
    cp(imagePath, outputPath) {
        const { stdout } = asset_staging_1.dockerExec(['create', this.image], {}); // Empty options to avoid stdout redirect here
        const match = stdout.toString().match(/([0-9a-f]{16,})/);
        if (!match) {
            throw new Error('Failed to extract container ID from Docker create output');
        }
        const containerId = match[1];
        const containerPath = `${containerId}:${imagePath}`;
        const destPath = outputPath ?? fs_1.FileSystem.mkdtemp('cdk-docker-cp-');
        try {
            asset_staging_1.dockerExec(['cp', containerPath, destPath]);
            return destPath;
        }
        catch (err) {
            throw new Error(`Failed to copy files from ${containerPath} to ${destPath}: ${err}`);
        }
        finally {
            asset_staging_1.dockerExec(['rm', '-v', containerId]);
        }
    }
}
exports.DockerImage = DockerImage;
/**
 * Supported Docker volume consistency types. Only valid on macOS due to the way file storage works on Mac
 */
var DockerVolumeConsistency;
(function (DockerVolumeConsistency) {
    /**
     * Read/write operations inside the Docker container are applied immediately on the mounted host machine volumes
     */
    DockerVolumeConsistency["CONSISTENT"] = "consistent";
    /**
     * Read/write operations on mounted Docker volumes are first written inside the container and then synchronized to the host machine
     */
    DockerVolumeConsistency["DELEGATED"] = "delegated";
    /**
     * Read/write operations on mounted Docker volumes are first applied on the host machine and then synchronized to the container
     */
    DockerVolumeConsistency["CACHED"] = "cached";
})(DockerVolumeConsistency = exports.DockerVolumeConsistency || (exports.DockerVolumeConsistency = {}));
function flatten(x) {
    return Array.prototype.concat([], ...x);
}
function isSeLinux() {
    if (process.platform != 'linux') {
        return false;
    }
    const prog = 'selinuxenabled';
    const proc = child_process_1.spawnSync(prog, [], {
        stdio: [
            'pipe',
            process.stderr,
            'inherit',
        ],
    });
    if (proc.error) {
        // selinuxenabled not a valid command, therefore not enabled
        return false;
    }
    if (proc.status == 0) {
        // selinux enabled
        return true;
    }
    else {
        // selinux not enabled
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidW5kbGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBMEM7QUFDMUMsaUNBQWlDO0FBQ2pDLCtCQUF3QztBQUV4Qyw2QkFBa0M7QUFDbEMsMkRBQXFEO0FBRXJEOzs7Ozs7R0FNRztBQUNILE1BQWEsaUJBQWlCO0lBQzVCOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQVc7UUFDL0IsT0FBTyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQVRELDhDQVNDO0FBMkhEOzs7R0FHRztBQUNILElBQVksY0E0Qlg7QUE1QkQsV0FBWSxjQUFjO0lBQ3hCOzs7O09BSUc7SUFDSCx1Q0FBcUIsQ0FBQTtJQUVyQjs7O09BR0c7SUFDSCwrQ0FBNkIsQ0FBQTtJQUU3Qjs7O09BR0c7SUFDSCxpREFBK0IsQ0FBQTtJQUUvQjs7Ozs7O09BTUc7SUFDSCw2Q0FBMkIsQ0FBQTtBQUM3QixDQUFDLEVBNUJXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBNEJ6QjtBQWtCRDs7R0FFRztBQUNILElBQVksa0JBWVg7QUFaRCxXQUFZLGtCQUFrQjtJQUM1Qjs7O09BR0c7SUFDSCxpREFBMkIsQ0FBQTtJQUUzQjs7O09BR0c7SUFDSCwrQ0FBeUIsQ0FBQTtBQUMzQixDQUFDLEVBWlcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFZN0I7QUFFRDs7R0FFRztBQUNILE1BQWEsV0FBVztJQTJEdEIsWUFBNEIsS0FBYSxFQUFtQixVQUFtQjtRQUFuRCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQW1CLGVBQVUsR0FBVixVQUFVLENBQVM7SUFBSSxDQUFDO0lBMURwRjs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBWSxFQUFFLFVBQThCLEVBQUU7UUFDcEUsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFB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Q0FBQztLQUNkO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNwYXduU3luYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgeyBpc0Fic29sdXRlLCBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBEb2NrZXJDYWNoZU9wdGlvbiB9IGZyb20gJy4vYXNzZXRzJztcbmltcG9ydCB7IEZpbGVTeXN0ZW0gfSBmcm9tICcuL2ZzJztcbmltcG9ydCB7IGRvY2tlckV4ZWMgfSBmcm9tICcuL3ByaXZhdGUvYXNzZXQtc3RhZ2luZyc7XG5cbi8qKlxuICogTWV0aG9kcyB0byBidWlsZCBEb2NrZXIgQ0xJIGFyZ3VtZW50cyBmb3IgYnVpbGRzIHVzaW5nIHNlY3JldHMuXG4gKlxuICogRG9ja2VyIEJ1aWxkS2l0IG11c3QgYmUgZW5hYmxlZCB0byB1c2UgYnVpbGQgc2VjcmV0cy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZG9jcy5kb2NrZXIuY29tL2J1aWxkL2J1aWxka2l0L1xuICovXG5leHBvcnQgY2xhc3MgRG9ja2VyQnVpbGRTZWNyZXQge1xuICAvKipcbiAgICogQSBEb2NrZXIgYnVpbGQgc2VjcmV0IGZyb20gYSBmaWxlIHNvdXJjZVxuICAgKiBAcGFyYW0gc3JjIFRoZSBwYXRoIHRvIHRoZSBzb3VyY2UgZmlsZSwgcmVsYXRpdmUgdG8gdGhlIGJ1aWxkIGRpcmVjdG9yeS5cbiAgICogQHJldHVybnMgVGhlIGxhdHRlciBoYWxmIHJlcXVpcmVkIGZvciBgLS1zZWNyZXRgXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb21TcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgc3JjPSR7c3JjfWA7XG4gIH1cbn1cblxuLyoqXG4gKiBCdW5kbGluZyBvcHRpb25zXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJ1bmRsaW5nT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgRG9ja2VyIGltYWdlIHdoZXJlIHRoZSBjb21tYW5kIHdpbGwgcnVuLlxuICAgKi9cbiAgcmVhZG9ubHkgaW1hZ2U6IERvY2tlckltYWdlO1xuXG4gIC8qKlxuICAgKiBUaGUgZW50cnlwb2ludCB0byBydW4gaW4gdGhlIERvY2tlciBjb250YWluZXIuXG4gICAqXG4gICAqIEV4YW1wbGUgdmFsdWU6IGBbJy9iaW4vc2gnLCAnLWMnXWBcbiAgICpcbiAgICogQHNlZSBodHRwczovL2RvY3MuZG9ja2VyLmNvbS9lbmdpbmUvcmVmZXJlbmNlL2J1aWxkZXIvI2VudHJ5cG9pbnRcbiAgICpcbiAgICogQGRlZmF1bHQgLSBydW4gdGhlIGVudHJ5cG9pbnQgZGVmaW5lZCBpbiB0aGUgaW1hZ2VcbiAgICovXG4gIHJlYWRvbmx5IGVudHJ5cG9pbnQ/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogVGhlIGNvbW1hbmQgdG8gcnVuIGluIHRoZSBEb2NrZXIgY29udGFpbmVyLlxuICAgKlxuICAgKiBFeGFtcGxlIHZhbHVlOiBgWyducG0nLCAnaW5zdGFsbCddYFxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vZG9jcy5kb2NrZXIuY29tL2VuZ2luZS9yZWZlcmVuY2UvcnVuL1xuICAgKlxuICAgKiBAZGVmYXVsdCAtIHJ1biB0aGUgY29tbWFuZCBkZWZpbmVkIGluIHRoZSBpbWFnZVxuICAgKi9cbiAgcmVhZG9ubHkgY29tbWFuZD86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIERvY2tlciB2b2x1bWVzIHRvIG1vdW50LlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vIGFkZGl0aW9uYWwgdm9sdW1lcyBhcmUgbW91bnRlZFxuICAgKi9cbiAgcmVhZG9ubHkgdm9sdW1lcz86IERvY2tlclZvbHVtZVtdO1xuXG4gIC8qKlxuICAgKiBXaGVyZSB0byBtb3VudCB0aGUgc3BlY2lmaWVkIHZvbHVtZXMgZnJvbVxuICAgKiBAc2VlIGh0dHBzOi8vZG9jcy5kb2NrZXIuY29tL2VuZ2luZS9yZWZlcmVuY2UvY29tbWFuZGxpbmUvcnVuLyNtb3VudC12b2x1bWVzLWZyb20tY29udGFpbmVyLS0tdm9sdW1lcy1mcm9tXG4gICAqIEBkZWZhdWx0IC0gbm8gY29udGFpbmVycyBhcmUgc3BlY2lmaWVkIHRvIG1vdW50IHZvbHVtZXMgZnJvbVxuICAgKi9cbiAgcmVhZG9ubHkgdm9sdW1lc0Zyb20/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogVGhlIGVudmlyb25tZW50IHZhcmlhYmxlcyB0byBwYXNzIHRvIHRoZSBEb2NrZXIgY29udGFpbmVyLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAgICovXG4gIHJlYWRvbmx5IGVudmlyb25tZW50PzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICAvKipcbiAgICogV29ya2luZyBkaXJlY3RvcnkgaW5zaWRlIHRoZSBEb2NrZXIgY29udGFpbmVyLlxuICAgKlxuICAgKiBAZGVmYXVsdCAvYXNzZXQtaW5wdXRcbiAgICovXG4gIHJlYWRvbmx5IHdvcmtpbmdEaXJlY3Rvcnk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB1c2VyIHRvIHVzZSB3aGVuIHJ1bm5pbmcgdGhlIERvY2tlciBjb250YWluZXIuXG4gICAqXG4gICAqICAgdXNlciB8IHVzZXI6Z3JvdXAgfCB1aWQgfCB1aWQ6Z2lkIHwgdXNlcjpnaWQgfCB1aWQ6Z3JvdXBcbiAgICpcbiAgICogQHNlZSBodHRwczovL2RvY3MuZG9ja2VyLmNvbS9lbmdpbmUvcmVmZXJlbmNlL3J1bi8jdXNlclxuICAgKlxuICAgKiBAZGVmYXVsdCAtIHVpZDpnaWQgb2YgdGhlIGN1cnJlbnQgdXNlciBvciAxMDAwOjEwMDAgb24gV2luZG93c1xuICAgKi9cbiAgcmVhZG9ubHkgdXNlcj86IHN0cmluZztcblxuICAvKipcbiAgICogTG9jYWwgYnVuZGxpbmcgcHJvdmlkZXIuXG4gICAqXG4gICAqIFRoZSBwcm92aWRlciBpbXBsZW1lbnRzIGEgbWV0aG9kIGB0cnlCdW5kbGUoKWAgd2hpY2ggc2hvdWxkIHJldHVybiBgdHJ1ZWBcbiAgICogaWYgbG9jYWwgYnVuZGxpbmcgd2FzIHBlcmZvcm1lZC4gSWYgYGZhbHNlYCBpcyByZXR1cm5lZCwgZG9ja2VyIGJ1bmRsaW5nXG4gICAqIHdpbGwgYmUgZG9uZS5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBidW5kbGluZyB3aWxsIG9ubHkgYmUgcGVyZm9ybWVkIGluIGEgRG9ja2VyIGNvbnRhaW5lclxuICAgKlxuICAgKi9cbiAgcmVhZG9ubHkgbG9jYWw/OiBJTG9jYWxCdW5kbGluZztcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2Ygb3V0cHV0IHRoYXQgdGhpcyBidW5kbGluZyBvcGVyYXRpb24gaXMgcHJvZHVjaW5nLlxuICAgKlxuICAgKiBAZGVmYXVsdCBCdW5kbGluZ091dHB1dC5BVVRPX0RJU0NPVkVSXG4gICAqXG4gICAqL1xuICByZWFkb25seSBvdXRwdXRUeXBlPzogQnVuZGxpbmdPdXRwdXQ7XG5cbiAgLyoqXG4gICAqIFtTZWN1cml0eSBjb25maWd1cmF0aW9uXShodHRwczovL2RvY3MuZG9ja2VyLmNvbS9lbmdpbmUvcmVmZXJlbmNlL3J1bi8jc2VjdXJpdHktY29uZmlndXJhdGlvbilcbiAgICogd2hlbiBydW5uaW5nIHRoZSBkb2NrZXIgY29udGFpbmVyLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vIHNlY3VyaXR5IG9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHNlY3VyaXR5T3B0Pzogc3RyaW5nO1xuICAvKipcbiAgICogRG9ja2VyIFtOZXR3b3JraW5nIG9wdGlvbnNdKGh0dHBzOi8vZG9jcy5kb2NrZXIuY29tL2VuZ2luZS9yZWZlcmVuY2UvY29tbWFuZGxpbmUvcnVuLyNjb25uZWN0LWEtY29udGFpbmVyLXRvLWEtbmV0d29yay0tLW5ldHdvcmspXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gbmV0d29ya2luZyBvcHRpb25zXG4gICAqL1xuICByZWFkb25seSBuZXR3b3JrPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgYWNjZXNzIG1lY2hhbmlzbSB1c2VkIHRvIG1ha2Ugc291cmNlIGZpbGVzIGF2YWlsYWJsZSB0byB0aGUgYnVuZGxpbmcgY29udGFpbmVyIGFuZCB0byByZXR1cm4gdGhlIGJ1bmRsaW5nIG91dHB1dCBiYWNrIHRvIHRoZSBob3N0LlxuICAgKiBAZGVmYXVsdCAtIEJ1bmRsaW5nRmlsZUFjY2Vzcy5CSU5EX01PVU5UXG4gICAqL1xuICByZWFkb25seSBidW5kbGluZ0ZpbGVBY2Nlc3M/OiBCdW5kbGluZ0ZpbGVBY2Nlc3M7XG5cbiAgLyoqXG4gICAqIFBsYXRmb3JtIHRvIGJ1aWxkIGZvci4gX1JlcXVpcmVzIERvY2tlciBCdWlsZHhfLlxuICAgKlxuICAgKiBTcGVjaWZ5IHRoaXMgcHJvcGVydHkgdG8gYnVpbGQgaW1hZ2VzIG9uIGEgc3BlY2lmaWMgcGxhdGZvcm0uXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gcGxhdGZvcm0gc3BlY2lmaWVkICh0aGUgY3VycmVudCBtYWNoaW5lIGFyY2hpdGVjdHVyZSB3aWxsIGJlIHVzZWQpXG4gICAqL1xuICByZWFkb25seSBwbGF0Zm9ybT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBUaGUgdHlwZSBvZiBvdXRwdXQgdGhhdCBhIGJ1bmRsaW5nIG9wZXJhdGlvbiBpcyBwcm9kdWNpbmcuXG4gKlxuICovXG5leHBvcnQgZW51bSBCdW5kbGluZ091dHB1dCB7XG4gIC8qKlxuICAgKiBUaGUgYnVuZGxpbmcgb3V0cHV0IGRpcmVjdG9yeSBpbmNsdWRlcyBhIHNpbmdsZSAuemlwIG9yIC5qYXIgZmlsZSB3aGljaFxuICAgKiB3aWxsIGJlIHVzZWQgYXMgdGhlIGZpbmFsIGJ1bmRsZS4gSWYgdGhlIG91dHB1dCBkaXJlY3RvcnkgZG9lcyBub3RcbiAgICogaW5jbHVkZSBleGFjdGx5IGEgc2luZ2xlIGFyY2hpdmUsIGJ1bmRsaW5nIHdpbGwgZmFpbC5cbiAgICovXG4gIEFSQ0hJVkVEID0gJ2FyY2hpdmVkJyxcblxuICAvKipcbiAgICogVGhlIGJ1bmRsaW5nIG91dHB1dCBkaXJlY3RvcnkgY29udGFpbnMgb25lIG9yIG1vcmUgZmlsZXMgd2hpY2ggd2lsbCBiZVxuICAgKiBhcmNoaXZlZCBhbmQgdXBsb2FkZWQgYXMgYSAuemlwIGZpbGUgdG8gT1NTIGJ1Y2tldC5cbiAgICovXG4gIE5PVF9BUkNISVZFRCA9ICdub3QtYXJjaGl2ZWQnLFxuXG4gIC8qKlxuICAgKiBJZiB0aGUgYnVuZGxpbmcgb3V0cHV0IGRpcmVjdG9yeSBjb250YWlucyBhIHNpbmdsZSBhcmNoaXZlIGZpbGUgKHppcCBvciBqYXIpXG4gICAqIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgYnVuZGxlIG91dHB1dCBhcy1pcy4gT3RoZXJ3aXNlLCBhbGwgdGhlIGZpbGVzIGluIHRoZSBidW5kbGluZyBvdXRwdXQgZGlyZWN0b3J5IHdpbGwgYmUgemlwcGVkLlxuICAgKi9cbiAgQVVUT19ESVNDT1ZFUiA9ICdhdXRvLWRpc2NvdmVyJyxcblxuICAvKipcbiAgICogVGhlIGJ1bmRsaW5nIG91dHB1dCBkaXJlY3RvcnkgaW5jbHVkZXMgYSBzaW5nbGUgZmlsZSB3aGljaFxuICAgKiB3aWxsIGJlIHVzZWQgYXMgdGhlIGZpbmFsIGJ1bmRsZS4gSWYgdGhlIG91dHB1dCBkaXJlY3RvcnkgZG9lcyBub3RcbiAgICogaW5jbHVkZSBleGFjdGx5IGEgc2luZ2xlIGZpbGUsIGJ1bmRsaW5nIHdpbGwgZmFpbC5cbiAgICpcbiAgICogU2ltaWxhciB0byBBUkNISVZFRCBidXQgZm9yIG5vbi1hcmNoaXZlIGZpbGVzXG4gICAqL1xuICBTSU5HTEVfRklMRSA9ICdzaW5nbGUtZmlsZScsXG59XG5cbi8qKlxuICogTG9jYWwgYnVuZGxpbmdcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2FsQnVuZGxpbmcge1xuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSBhdHRlbXB0aW5nIGRvY2tlciBidW5kbGluZyB0byBhbGxvdyB0aGVcbiAgICogYnVuZGxlciB0byBiZSBleGVjdXRlZCBsb2NhbGx5LiBJZiB0aGUgbG9jYWwgYnVuZGxlciBleGlzdHMsIGFuZCBidW5kbGluZ1xuICAgKiB3YXMgcGVyZm9ybWVkIGxvY2FsbHksIHJldHVybiBgdHJ1ZWAuIE90aGVyd2lzZSwgcmV0dXJuIGBmYWxzZWAuXG4gICAqXG4gICAqIEBwYXJhbSBvdXRwdXREaXIgdGhlIGRpcmVjdG9yeSB3aGVyZSB0aGUgYnVuZGxlZCBhc3NldCBzaG91bGQgYmUgb3V0cHV0XG4gICAqIEBwYXJhbSBvcHRpb25zIGJ1bmRsaW5nIG9wdGlvbnMgZm9yIHRoaXMgYXNzZXRcbiAgICovXG4gIHRyeUJ1bmRsZShvdXRwdXREaXI6IHN0cmluZywgb3B0aW9uczogQnVuZGxpbmdPcHRpb25zKTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBUaGUgYWNjZXNzIG1lY2hhbmlzbSB1c2VkIHRvIG1ha2Ugc291cmNlIGZpbGVzIGF2YWlsYWJsZSB0byB0aGUgYnVuZGxpbmcgY29udGFpbmVyIGFuZCB0byByZXR1cm4gdGhlIGJ1bmRsaW5nIG91dHB1dCBiYWNrIHRvIHRoZSBob3N0XG4gKi9cbmV4cG9ydCBlbnVtIEJ1bmRsaW5nRmlsZUFjY2VzcyB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIHRlbXBvcmFyeSB2b2x1bWVzIGFuZCBjb250YWluZXJzIHRvIGNvcHkgZmlsZXMgZnJvbSB0aGUgaG9zdCB0byB0aGUgYnVuZGxpbmcgY29udGFpbmVyIGFuZCBiYWNrLlxuICAgKiBUaGlzIGlzIHNsb3dlciwgYnV0IHdvcmtzIGFsc28gaW4gbW9yZSBjb21wbGV4IHNpdHVhdGlvbnMgd2l0aCByZW1vdGUgb3Igc2hhcmVkIGRvY2tlciBzb2NrZXRzLlxuICAgKi9cbiAgVk9MVU1FX0NPUFkgPSAnVk9MVU1FX0NPUFknLFxuXG4gIC8qKlxuICAgKiBUaGUgc291cmNlIGFuZCBvdXRwdXQgZm9sZGVycyB3aWxsIGJlIG1vdW50ZWQgYXMgYmluZCBtb3VudCBmcm9tIHRoZSBob3N0IHN5c3RlbVxuICAgKiBUaGlzIGlzIGZhc3RlciBhbmQgc2ltcGxlciwgYnV0IGxlc3MgcG9ydGFibGUgdGhhbiBgVk9MVU1FX0NPUFlgLlxuICAgKi9cbiAgQklORF9NT1VOVCA9ICdCSU5EX01PVU5UJyxcbn1cblxuLyoqXG4gKiBBIERvY2tlciBpbWFnZVxuICovXG5leHBvcnQgY2xhc3MgRG9ja2VySW1hZ2Uge1xuICAvKipcbiAgICogQnVpbGRzIGEgRG9ja2VyIGltYWdlXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIFRoZSBwYXRoIHRvIHRoZSBkaXJlY3RvcnkgY29udGFpbmluZyB0aGUgRG9ja2VyIGZpbGVcbiAgICogQHBhcmFtIG9wdGlvbnMgRG9ja2VyIGJ1aWxkIG9wdGlvbnNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUJ1aWxkKHBhdGg6IHN0cmluZywgb3B0aW9uczogRG9ja2VyQnVpbGRPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBidWlsZEFyZ3MgPSBvcHRpb25zLmJ1aWxkQXJncyB8fCB7fTtcblxuICAgIGlmIChvcHRpb25zLmZpbGUgJiYgaXNBYnNvbHV0ZShvcHRpb25zLmZpbGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiZmlsZVwiIG11c3QgYmUgcmVsYXRpdmUgdG8gdGhlIGRvY2tlciBidWlsZCBkaXJlY3RvcnkuIEdvdCAke29wdGlvbnMuZmlsZX1gKTtcbiAgICB9XG5cbiAgICAvLyBJbWFnZSB0YWcgZGVyaXZlZCBmcm9tIHBhdGggYW5kIGJ1aWxkIG9wdGlvbnNcbiAgICBjb25zdCBpbnB1dCA9IEpTT04uc3RyaW5naWZ5KHsgcGF0aCwgLi4ub3B0aW9ucyB9KTtcbiAgICBjb25zdCB0YWdIYXNoID0gY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZShpbnB1dCkuZGlnZXN0KCdoZXgnKTtcbiAgICBjb25zdCB0YWcgPSBgY2RrLSR7dGFnSGFzaH1gO1xuXG4gICAgY29uc3QgZG9ja2VyQXJnczogc3RyaW5nW10gPSBbXG4gICAgICAnYnVpbGQnLCAnLXQnLCB0YWcsXG4gICAgICAuLi4ob3B0aW9ucy5maWxlID8gWyctZicsIGpvaW4ocGF0aCwgb3B0aW9ucy5maWxlKV0gOiBbXSksXG4gICAgICAuLi4ob3B0aW9ucy5wbGF0Zm9ybSA/IFsnLS1wbGF0Zm9ybScsIG9wdGlvbnMucGxhdGZvcm1dIDogW10pLFxuICAgICAgLi4uKG9wdGlvbnMudGFyZ2V0U3RhZ2UgPyBbJy0tdGFyZ2V0Jywgb3B0aW9ucy50YXJnZXRTdGFnZV0gOiBbXSksXG4gICAgICAuLi4ob3B0aW9ucy5jYWNoZUZyb20gPyBbLi4ub3B0aW9ucy5jYWNoZUZyb20ubWFwKGNhY2hlRnJvbSA9PiBbJy0tY2FjaGUtZnJvbScsIHRoaXMuY2FjaGVPcHRpb25Ub0ZsYWcoY2FjaGVGcm9tKV0pLmZsYXQoKV0gOiBbXSksXG4gICAgICAuLi4ob3B0aW9ucy5jYWNoZVRvID8gWyctLWNhY2hlLXRvJywgdGhpcy5jYWNoZU9wdGlvblRvRmxhZyhvcHRpb25zLmNhY2hlVG8pXSA6IFtdKSxcbiAgICAgIC4uLihvcHRpb25zLmNhY2hlRGlzYWJsZWQgPyBbJy0tbm8tY2FjaGUnXSA6IFtdKSxcbiAgICAgIC4uLmZsYXR0ZW4oT2JqZWN0LmVudHJpZXMoYnVpbGRBcmdzKS5tYXAoKFtrLCB2XSkgPT4gWyctLWJ1aWxkLWFyZycsIGAke2t9PSR7dn1gXSkpLFxuICAgICAgcGF0aCxcbiAgICBdO1xuXG4gICAgZG9ja2VyRXhlYyhkb2NrZXJBcmdzKTtcblxuICAgIC8vIEZpbmdlcnByaW50cyB0aGUgZGlyZWN0b3J5IGNvbnRhaW5pbmcgdGhlIERvY2tlcmZpbGUgd2UncmUgYnVpbGRpbmcgYW5kXG4gICAgLy8gZGlmZmVyZW50aWF0ZXMgdGhlIGZpbmdlcnByaW50IGJhc2VkIG9uIGJ1aWxkIGFyZ3VtZW50cy4gV2UgZG8gdGhpcyBzb1xuICAgIC8vIHdlIGNhbiBwcm92aWRlIGEgc3RhYmxlIGltYWdlIGhhc2guIE90aGVyd2lzZSwgdGhlIGltYWdlIElEIHdpbGwgYmVcbiAgICAvLyBkaWZmZXJlbnQgZXZlcnkgdGltZSB0aGUgRG9ja2VyIGxheWVyIGNhY2hlIGlzIGNsZWFyZWQsIGR1ZSBwcmltYXJpbHkgdG9cbiAgICAvLyB0aW1lc3RhbXBzLlxuICAgIGNvbnN0IGhhc2ggPSBGaWxlU3lzdGVtLmZpbmdlcnByaW50KHBhdGgsIHsgZXh0cmFIYXNoOiBKU09OLnN0cmluZ2lmeShvcHRpb25zKSB9KTtcbiAgICByZXR1cm4gbmV3IERvY2tlckltYWdlKHRhZywgaGFzaCk7XG4gIH1cblxuICAvKipcbiAgICogUmVmZXJlbmNlIGFuIGltYWdlIG9uIERvY2tlckh1YiBvciBhbm90aGVyIG9ubGluZSByZWdpc3RyeS5cbiAgICpcbiAgICogQHBhcmFtIGltYWdlIHRoZSBpbWFnZSBuYW1lXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb21SZWdpc3RyeShpbWFnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEb2NrZXJJbWFnZShpbWFnZSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBjYWNoZU9wdGlvblRvRmxhZyhvcHRpb246IERvY2tlckNhY2hlT3B0aW9uKTogc3RyaW5nIHtcbiAgICBsZXQgZmxhZyA9IGB0eXBlPSR7b3B0aW9uLnR5cGV9YDtcbiAgICBpZiAob3B0aW9uLnBhcmFtcykge1xuICAgICAgZmxhZyArPSAnLCcgKyBPYmplY3QuZW50cmllcyhvcHRpb24ucGFyYW1zKS5tYXAoKFtrLCB2XSkgPT4gYCR7a309JHt2fWApLmpvaW4oJywnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZsYWc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgaW1hZ2U6IHN0cmluZywgcHJpdmF0ZSByZWFkb25seSBfaW1hZ2VIYXNoPzogc3RyaW5nKSB7IH1cblxuICAvKipcbiAgICogUHJvdmlkZXMgYSBzdGFibGUgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBpbWFnZSBmb3IgSlNPTiBzZXJpYWxpemF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIFRoZSBvdmVycmlkZGVuIGltYWdlIG5hbWUgaWYgc2V0IG9yIGltYWdlIGhhc2ggbmFtZSBpbiB0aGF0IG9yZGVyXG4gICAqL1xuICBwdWJsaWMgdG9KU09OKCkge1xuICAgIHJldHVybiAgdGhpcy5faW1hZ2VIYXNoID8/IHRoaXMuaW1hZ2U7XG4gIH1cblxuICAvKipcbiAgICogUnVucyBhIERvY2tlciBpbWFnZVxuICAgKi9cbiAgcHVibGljIHJ1bihvcHRpb25zOiBEb2NrZXJSdW5PcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB2b2x1bWVzID0gb3B0aW9ucy52b2x1bWVzIHx8IFtdO1xuICAgIGNvbnN0IGVudmlyb25tZW50ID0gb3B0aW9ucy5lbnZpcm9ubWVudCB8fCB7fTtcbiAgICBjb25zdCBlbnRyeXBvaW50ID0gb3B0aW9ucy5lbnRyeXBvaW50Py5bMF0gfHwgbnVsbDtcbiAgICBjb25zdCBjb21tYW5kID0gW1xuICAgICAgLi4ub3B0aW9ucy5lbnRyeXBvaW50Py5bMV1cbiAgICAgICAgICA/IFsuLi5vcHRpb25zLmVudHJ5cG9pbnQuc2xpY2UoMSldXG4gICAgICAgICAgOiBbXSxcbiAgICAgIC4uLm9wdGlvbnMuY29tbWFuZFxuICAgICAgICAgID8gWy4uLm9wdGlvbnMuY29tbWFuZF1cbiAgICAgICAgICA6IFtdLFxuICAgIF07XG5cbiAgICBjb25zdCBkb2NrZXJBcmdzOiBzdHJpbmdbXSA9IFtcbiAgICAgICdydW4nLCAnLS1ybScsXG4gICAgICAuLi5vcHRpb25zLnNlY3VyaXR5T3B0XG4gICAgICAgICAgPyBbJy0tc2VjdXJpdHktb3B0Jywgb3B0aW9ucy5zZWN1cml0eU9wdF1cbiAgICAgICAgICA6IFtdLFxuICAgICAgLi4ub3B0aW9ucy5uZXR3b3JrXG4gICAgICAgICAgPyBbJy0tbmV0d29yaycsIG9wdGlvbnMubmV0d29ya11cbiAgICAgICAgICA6IFtdLFxuICAgICAgLi4ub3B0aW9ucy5wbGF0Zm9ybVxuICAgICAgICAgID8gWyctLXBsYXRmb3JtJywgb3B0aW9ucy5wbGF0Zm9ybV1cbiAgICAgICAgICA6IFtdLFxuICAgICAgLi4ub3B0aW9ucy51c2VyXG4gICAgICAgICAgPyBbJy11Jywgb3B0aW9ucy51c2VyXVxuICAgICAgICAgIDogW10sXG4gICAgICAuLi5vcHRpb25zLnZvbHVtZXNGcm9tXG4gICAgICAgICAgPyBmbGF0dGVuKG9wdGlvbnMudm9sdW1lc0Zyb20ubWFwKHYgPT4gWyctLXZvbHVtZXMtZnJvbScsIHZdKSlcbiAgICAgICAgICA6IFtdLFxuICAgICAgLi4uZmxhdHRlbih2b2x1bWVzLm1hcCh2ID0+IFsnLXYnLCBgJHt2Lmhvc3RQYXRofToke3YuY29udGFpbmVyUGF0aH06JHtpc1NlTGludXgoKSA/ICd6LCcgOiAnJ30ke3YuY29uc2lzdGVuY3kgPz8gRG9ja2VyVm9sdW1lQ29uc2lzdGVuY3kuREVMRUdBVEVEfWBdKSksXG4gICAgICAuLi5mbGF0dGVuKE9iamVjdC5lbnRyaWVzKGVudmlyb25tZW50KS5tYXAoKFtrLCB2XSkgPT4gWyctLWVudicsIGAke2t9PSR7dn1gXSkpLFxuICAgICAgLi4ub3B0aW9ucy53b3JraW5nRGlyZWN0b3J5XG4gICAgICAgICAgPyBbJy13Jywgb3B0aW9ucy53b3JraW5nRGlyZWN0b3J5XVxuICAgICAgICAgIDogW10sXG4gICAgICAuLi5lbnRyeXBvaW50XG4gICAgICAgICAgPyBbJy0tZW50cnlwb2ludCcsIGVudHJ5cG9pbnRdXG4gICAgICAgICAgOiBbXSxcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICAuLi5jb21tYW5kLFxuICAgIF07XG5cbiAgICBkb2NrZXJFeGVjKGRvY2tlckFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvcGllcyBhIGZpbGUgb3IgZGlyZWN0b3J5IG91dCBvZiB0aGUgRG9ja2VyIGltYWdlIHRvIHRoZSBsb2NhbCBmaWxlc3lzdGVtLlxuICAgKlxuICAgKiBJZiBgb3V0cHV0UGF0aGAgaXMgb21pdHRlZCB0aGUgZGVzdGluYXRpb24gcGF0aCBpcyBhIHRlbXBvcmFyeSBkaXJlY3RvcnkuXG4gICAqXG4gICAqIEBwYXJhbSBpbWFnZVBhdGggdGhlIHBhdGggaW4gdGhlIERvY2tlciBpbWFnZVxuICAgKiBAcGFyYW0gb3V0cHV0UGF0aCB0aGUgZGVzdGluYXRpb24gcGF0aCBmb3IgdGhlIGNvcHkgb3BlcmF0aW9uXG4gICAqIEByZXR1cm5zIHRoZSBkZXN0aW5hdGlvbiBwYXRoXG4gICAqL1xuICBwdWJsaWMgY3AoaW1hZ2VQYXRoOiBzdHJpbmcsIG91dHB1dFBhdGg/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgc3Rkb3V0IH0gPSBkb2NrZXJFeGVjKFsnY3JlYXRlJywgdGhpcy5pbWFnZV0sIHt9KTsgLy8gRW1wdHkgb3B0aW9ucyB0byBhdm9pZCBzdGRvdXQgcmVkaXJlY3QgaGVyZVxuICAgIGNvbnN0IG1hdGNoID0gc3Rkb3V0LnRvU3RyaW5nKCkubWF0Y2goLyhbMC05YS1mXXsxNix9KS8pO1xuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGV4dHJhY3QgY29udGFpbmVyIElEIGZyb20gRG9ja2VyIGNyZWF0ZSBvdXRwdXQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXJJZCA9IG1hdGNoWzFdO1xuICAgIGNvbnN0IGNvbnRhaW5lclBhdGggPSBgJHtjb250YWluZXJJZH06JHtpbWFnZVBhdGh9YDtcbiAgICBjb25zdCBkZXN0UGF0aCA9IG91dHB1dFBhdGggPz8gRmlsZVN5c3RlbS5ta2R0ZW1wKCdjZGstZG9ja2VyLWNwLScpO1xuICAgIHRyeSB7XG4gICAgICBkb2NrZXJFeGVjKFsnY3AnLCBjb250YWluZXJQYXRoLCBkZXN0UGF0aF0pO1xuICAgICAgcmV0dXJuIGRlc3RQYXRoO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gY29weSBmaWxlcyBmcm9tICR7Y29udGFpbmVyUGF0aH0gdG8gJHtkZXN0UGF0aH06ICR7ZXJyfWApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBkb2NrZXJFeGVjKFsncm0nLCAnLXYnLCBjb250YWluZXJJZF0pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEEgRG9ja2VyIHZvbHVtZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERvY2tlclZvbHVtZSB7XG4gIC8qKlxuICAgKiBUaGUgcGF0aCB0byB0aGUgZmlsZSBvciBkaXJlY3Rvcnkgb24gdGhlIGhvc3QgbWFjaGluZVxuICAgKi9cbiAgcmVhZG9ubHkgaG9zdFBhdGg6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBhdGggd2hlcmUgdGhlIGZpbGUgb3IgZGlyZWN0b3J5IGlzIG1vdW50ZWQgaW4gdGhlIGNvbnRhaW5lclxuICAgKi9cbiAgcmVhZG9ubHkgY29udGFpbmVyUGF0aDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNb3VudCBjb25zaXN0ZW5jeS4gT25seSBhcHBsaWNhYmxlIGZvciBtYWNPU1xuICAgKlxuICAgKiBAZGVmYXVsdCBEb2NrZXJDb25zaXN0ZW5jeS5ERUxFR0FURURcbiAgICogQHNlZSBodHRwczovL2RvY3MuZG9ja2VyLmNvbS9zdG9yYWdlL2JpbmQtbW91bnRzLyNjb25maWd1cmUtbW91bnQtY29uc2lzdGVuY3ktZm9yLW1hY29zXG4gICAqL1xuICByZWFkb25seSBjb25zaXN0ZW5jeT86IERvY2tlclZvbHVtZUNvbnNpc3RlbmN5O1xufVxuXG4vKipcbiAqIFN1cHBvcnRlZCBEb2NrZXIgdm9sdW1lIGNvbnNpc3RlbmN5IHR5cGVzLiBPbmx5IHZhbGlkIG9uIG1hY09TIGR1ZSB0byB0aGUgd2F5IGZpbGUgc3RvcmFnZSB3b3JrcyBvbiBNYWNcbiAqL1xuZXhwb3J0IGVudW0gRG9ja2VyVm9sdW1lQ29uc2lzdGVuY3kge1xuICAvKipcbiAgICogUmVhZC93cml0ZSBvcGVyYXRpb25zIGluc2lkZSB0aGUgRG9ja2VyIGNvbnRhaW5lciBhcmUgYXBwbGllZCBpbW1lZGlhdGVseSBvbiB0aGUgbW91bnRlZCBob3N0IG1hY2hpbmUgdm9sdW1lc1xuICAgKi9cbiAgQ09OU0lTVEVOVCA9ICdjb25zaXN0ZW50JyxcbiAgLyoqXG4gICAqIFJlYWQvd3JpdGUgb3BlcmF0aW9ucyBvbiBtb3VudGVkIERvY2tlciB2b2x1bWVzIGFyZSBmaXJzdCB3cml0dGVuIGluc2lkZSB0aGUgY29udGFpbmVyIGFuZCB0aGVuIHN5bmNocm9uaXplZCB0byB0aGUgaG9zdCBtYWNoaW5lXG4gICAqL1xuICBERUxFR0FURUQgPSAnZGVsZWdhdGVkJyxcbiAgLyoqXG4gICAqIFJlYWQvd3JpdGUgb3BlcmF0aW9ucyBvbiBtb3VudGVkIERvY2tlciB2b2x1bWVzIGFyZSBmaXJzdCBhcHBsaWVkIG9uIHRoZSBob3N0IG1hY2hpbmUgYW5kIHRoZW4gc3luY2hyb25pemVkIHRvIHRoZSBjb250YWluZXJcbiAgICovXG4gIENBQ0hFRCA9ICdjYWNoZWQnLFxufVxuXG4vKipcbiAqIERvY2tlciBydW4gb3B0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIERvY2tlclJ1bk9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGVudHJ5cG9pbnQgdG8gcnVuIGluIHRoZSBjb250YWluZXIuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gcnVuIHRoZSBlbnRyeXBvaW50IGRlZmluZWQgaW4gdGhlIGltYWdlXG4gICAqL1xuICByZWFkb25seSBlbnRyeXBvaW50Pzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFRoZSBjb21tYW5kIHRvIHJ1biBpbiB0aGUgY29udGFpbmVyLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIHJ1biB0aGUgY29tbWFuZCBkZWZpbmVkIGluIHRoZSBpbWFnZVxuICAgKi9cbiAgcmVhZG9ubHkgY29tbWFuZD86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBEb2NrZXIgdm9sdW1lcyB0byBtb3VudC5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBubyB2b2x1bWVzIGFyZSBtb3VudGVkXG4gICAqL1xuICByZWFkb25seSB2b2x1bWVzPzogRG9ja2VyVm9sdW1lW107XG5cbiAgLyoqXG4gICAqIFdoZXJlIHRvIG1vdW50IHRoZSBzcGVjaWZpZWQgdm9sdW1lcyBmcm9tXG4gICAqIEBzZWUgaHR0cHM6Ly9kb2NzLmRvY2tlci5jb20vZW5naW5lL3JlZmVyZW5jZS9jb21tYW5kbGluZS9ydW4vI21vdW50LXZvbHVtZXMtZnJvbS1jb250YWluZXItLS12b2x1bWVzLWZyb21cbiAgICogQGRlZmF1bHQgLSBubyBjb250YWluZXJzIGFyZSBzcGVjaWZpZWQgdG8gbW91bnQgdm9sdW1lcyBmcm9tXG4gICAqL1xuICByZWFkb25seSB2b2x1bWVzRnJvbT86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBUaGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIHRvIHBhc3MgdG8gdGhlIGNvbnRhaW5lci5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBubyBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gICAqL1xuICByZWFkb25seSBlbnZpcm9ubWVudD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgLyoqXG4gICAqIFdvcmtpbmcgZGlyZWN0b3J5IGluc2lkZSB0aGUgY29udGFpbmVyLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIGltYWdlIGRlZmF1bHRcbiAgICovXG4gIHJlYWRvbmx5IHdvcmtpbmdEaXJlY3Rvcnk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB1c2VyIHRvIHVzZSB3aGVuIHJ1bm5pbmcgdGhlIGNvbnRhaW5lci5cbiAgICpcbiAgICogQGRlZmF1bHQgLSByb290IG9yIGltYWdlIGRlZmF1bHRcbiAgICovXG4gIHJlYWRvbmx5IHVzZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFtTZWN1cml0eSBjb25maWd1cmF0aW9uXShodHRwczovL2RvY3MuZG9ja2VyLmNvbS9lbmdpbmUvcmVmZXJlbmNlL3J1bi8jc2VjdXJpdHktY29uZmlndXJhdGlvbilcbiAgICogd2hlbiBydW5uaW5nIHRoZSBkb2NrZXIgY29udGFpbmVyLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vIHNlY3VyaXR5IG9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IHNlY3VyaXR5T3B0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEb2NrZXIgW05ldHdvcmtpbmcgb3B0aW9uc10oaHR0cHM6Ly9kb2NzLmRvY2tlci5jb20vZW5naW5lL3JlZmVyZW5jZS9jb21tYW5kbGluZS9ydW4vI2Nvbm5lY3QtYS1jb250YWluZXItdG8tYS1uZXR3b3JrLS0tbmV0d29yaylcbiAgICpcbiAgICogQGRlZmF1bHQgLSBubyBuZXR3b3JraW5nIG9wdGlvbnNcbiAgICovXG4gIHJlYWRvbmx5IG5ldHdvcms/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCBwbGF0Zm9ybSBpZiBzZXJ2ZXIgaXMgbXVsdGktcGxhdGZvcm0gY2FwYWJsZS4gX1JlcXVpcmVzIERvY2tlciBFbmdpbmUgQVBJIHYxLjM4K18uXG4gICAqXG4gICAqIEV4YW1wbGUgdmFsdWU6IGBsaW51eC9hbWQ2NGBcbiAgICpcbiAgICogQGRlZmF1bHQgLSBubyBwbGF0Zm9ybSBzcGVjaWZpZWRcbiAgICovXG4gIHJlYWRvbmx5IHBsYXRmb3JtPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIERvY2tlciBidWlsZCBvcHRpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRG9ja2VyQnVpbGRPcHRpb25zIHtcbiAgLyoqXG4gICAqIEJ1aWxkIGFyZ3NcbiAgICpcbiAgICogQGRlZmF1bHQgLSBubyBidWlsZCBhcmdzXG4gICAqL1xuICByZWFkb25seSBidWlsZEFyZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBEb2NrZXJmaWxlLCBtdXN0IHJlbGF0aXZlIHRvIHRoZSBkb2NrZXIgYnVpbGQgcGF0aC5cbiAgICpcbiAgICogQGRlZmF1bHQgYERvY2tlcmZpbGVgXG4gICAqL1xuICByZWFkb25seSBmaWxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgcGxhdGZvcm0gaWYgc2VydmVyIGlzIG11bHRpLXBsYXRmb3JtIGNhcGFibGUuIF9SZXF1aXJlcyBEb2NrZXIgRW5naW5lIEFQSSB2MS4zOCtfLlxuICAgKlxuICAgKiBFeGFtcGxlIHZhbHVlOiBgbGludXgvYW1kNjRgXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gcGxhdGZvcm0gc3BlY2lmaWVkXG4gICAqL1xuICByZWFkb25seSBwbGF0Zm9ybT86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IGJ1aWxkIHRhcmdldCBmb3IgbXVsdGktc3RhZ2UgY29udGFpbmVyIGJ1aWxkcy4gQW55IHN0YWdlIGRlZmluZWQgYWZ0ZXJ3YXJkcyB3aWxsIGJlIGlnbm9yZWQuXG4gICAqXG4gICAqIEV4YW1wbGUgdmFsdWU6IGBidWlsZC1lbnZgXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gQnVpbGQgYWxsIHN0YWdlcyBkZWZpbmVkIGluIHRoZSBEb2NrZXJmaWxlXG4gICAqL1xuICByZWFkb25seSB0YXJnZXRTdGFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogQ2FjaGUgZnJvbSBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIGBkb2NrZXIgYnVpbGRgIGNvbW1hbmQuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gY2FjaGUgZnJvbSBhcmdzIGFyZSBwYXNzZWRcbiAgICovXG4gIHJlYWRvbmx5IGNhY2hlRnJvbT86IERvY2tlckNhY2hlT3B0aW9uW107XG5cbiAgLyoqXG4gICAqIENhY2hlIHRvIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgYGRvY2tlciBidWlsZGAgY29tbWFuZC5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBubyBjYWNoZSB0byBhcmdzIGFyZSBwYXNzZWRcbiAgICovXG4gIHJlYWRvbmx5IGNhY2hlVG8/OiBEb2NrZXJDYWNoZU9wdGlvbjtcblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgY2FjaGUgYW5kIHBhc3MgYC0tbm8tY2FjaGVgIHRvIHRoZSBgZG9ja2VyIGJ1aWxkYCBjb21tYW5kLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIGNhY2hlIGlzIHVzZWRcbiAgICovXG4gIHJlYWRvbmx5IGNhY2hlRGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKHg6IHN0cmluZ1tdW10pIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQoW10sIC4uLngpO1xufVxuXG5mdW5jdGlvbiBpc1NlTGludXgoKTogYm9vbGVhbiB7XG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9ICdsaW51eCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgcHJvZyA9ICdzZWxpbnV4ZW5hYmxlZCc7XG4gIGNvbnN0IHByb2MgPSBzcGF3blN5bmMocHJvZywgW10sIHtcbiAgICBzdGRpbzogWyAvLyBzaG93IHNlbGludXggc3RhdHVzIG91dHB1dFxuICAgICAgJ3BpcGUnLCAvLyBnZXQgdmFsdWUgb2Ygc3RkaW9cbiAgICAgIHByb2Nlc3Muc3RkZXJyLCAvLyByZWRpcmVjdCBzdGRvdXQgdG8gc3RkZXJyXG4gICAgICAnaW5oZXJpdCcsIC8vIGluaGVyaXQgc3RkZXJyXG4gICAgXSxcbiAgfSk7XG4gIGlmIChwcm9jLmVycm9yKSB7XG4gICAgLy8gc2VsaW51eGVuYWJsZWQgbm90IGEgdmFsaWQgY29tbWFuZCwgdGhlcmVmb3JlIG5vdCBlbmFibGVkXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChwcm9jLnN0YXR1cyA9PSAwKSB7XG4gICAgLy8gc2VsaW51eCBlbmFibGVkXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gc2VsaW51eCBub3QgZW5hYmxlZFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19