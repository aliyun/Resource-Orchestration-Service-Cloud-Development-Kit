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
})(BundlingOutput || (exports.BundlingOutput = BundlingOutput = {}));
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
})(BundlingFileAccess || (exports.BundlingFileAccess = BundlingFileAccess = {}));
/**
 * A Docker image
 */
class DockerImage {
    /**
     * Builds a Docker image
     *
     * @param path The path to the directory containing the Docker file
     * @param options Docker build options
     */
    static fromBuild(path, options = {}) {
        const buildArgs = options.buildArgs || {};
        if (options.file && (0, path_1.isAbsolute)(options.file)) {
            throw new Error(`"file" must be relative to the docker build directory. Got ${options.file}`);
        }
        // Image tag derived from path and build options
        const input = JSON.stringify({ path, ...options });
        const tagHash = crypto.createHash('sha256').update(input).digest('hex');
        const tag = `cdk-${tagHash}`;
        const dockerArgs = [
            'build', '-t', tag,
            ...(options.file ? ['-f', (0, path_1.join)(path, options.file)] : []),
            ...(options.platform ? ['--platform', options.platform] : []),
            ...(options.targetStage ? ['--target', options.targetStage] : []),
            ...(options.cacheFrom ? [...options.cacheFrom.map(cacheFrom => ['--cache-from', this.cacheOptionToFlag(cacheFrom)]).flat()] : []),
            ...(options.cacheTo ? ['--cache-to', this.cacheOptionToFlag(options.cacheTo)] : []),
            ...(options.cacheDisabled ? ['--no-cache'] : []),
            ...flatten(Object.entries(buildArgs).map(([k, v]) => ['--build-arg', `${k}=${v}`])),
            path,
        ];
        (0, asset_staging_1.dockerExec)(dockerArgs);
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
    constructor(image, _imageHash) {
        this.image = image;
        this._imageHash = _imageHash;
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
        (0, asset_staging_1.dockerExec)(dockerArgs);
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
        const { stdout } = (0, asset_staging_1.dockerExec)(['create', this.image], {}); // Empty options to avoid stdout redirect here
        const match = stdout.toString().match(/([0-9a-f]{16,})/);
        if (!match) {
            throw new Error('Failed to extract container ID from Docker create output');
        }
        const containerId = match[1];
        const containerPath = `${containerId}:${imagePath}`;
        const destPath = outputPath ?? fs_1.FileSystem.mkdtemp('cdk-docker-cp-');
        try {
            (0, asset_staging_1.dockerExec)(['cp', containerPath, destPath]);
            return destPath;
        }
        catch (err) {
            throw new Error(`Failed to copy files from ${containerPath} to ${destPath}: ${err}`);
        }
        finally {
            (0, asset_staging_1.dockerExec)(['rm', '-v', containerId]);
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
})(DockerVolumeConsistency || (exports.DockerVolumeConsistency = DockerVolumeConsistency = {}));
function flatten(x) {
    return Array.prototype.concat([], ...x);
}
function isSeLinux() {
    if (process.platform != 'linux') {
        return false;
    }
    const prog = 'selinuxenabled';
    const proc = (0, child_process_1.spawnSync)(prog, [], {
        stdio: [
            'pipe',
            process.stderr,
            'inherit', // inherit stderr
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidW5kbGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBMEM7QUFDMUMsaUNBQWlDO0FBQ2pDLCtCQUF3QztBQUV4Qyw2QkFBa0M7QUFDbEMsMkRBQXFEO0FBRXJEOzs7Ozs7R0FNRztBQUNILE1BQWEsaUJBQWlCO0lBQzVCOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQVc7UUFDL0IsT0FBTyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQVRELDhDQVNDO0FBMkhEOzs7R0FHRztBQUNILElBQVksY0E0Qlg7QUE1QkQsV0FBWSxjQUFjO0lBQ3hCOzs7O09BSUc7SUFDSCx1Q0FBcUIsQ0FBQTtJQUVyQjs7O09BR0c7SUFDSCwrQ0FBNkIsQ0FBQTtJQUU3Qjs7O09BR0c7SUFDSCxpREFBK0IsQ0FBQTtJQUUvQjs7Ozs7O09BTUc7SUFDSCw2Q0FBMkIsQ0FBQTtBQUM3QixDQUFDLEVBNUJXLGNBQWMsOEJBQWQsY0FBYyxRQTRCekI7QUFrQkQ7O0dBRUc7QUFDSCxJQUFZLGtCQVlYO0FBWkQsV0FBWSxrQkFBa0I7SUFDNUI7OztPQUdHO0lBQ0gsaURBQTJCLENBQUE7SUFFM0I7OztPQUdHO0lBQ0gsK0NBQXlCLENBQUE7QUFDM0IsQ0FBQyxFQVpXLGtCQUFrQixrQ0FBbEIsa0JBQWtCLFFBWTdCO0FBRUQ7O0dBRUc7QUFDSCxNQUFhLFdBQVc7SUFDdEI7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQVksRUFBRSxVQUE4QixFQUFFO1FBQ3BFLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1FBRTFDLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxJQUFBLGlCQUFVLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVDLE1BQU0sSUFBSSxLQUFLLENBQUMsOERBQThE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UUFDdEIsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcGF3blN5bmMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IHsgaXNBYnNvbHV0ZSwgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgRG9ja2VyQ2FjaGVPcHRpb24gfSBmcm9tICcuL2Fzc2V0cyc7XG5pbXBvcnQgeyBGaWxlU3lzdGVtIH0gZnJvbSAnLi9mcyc7XG5pbXBvcnQgeyBkb2NrZXJFeGVjIH0gZnJvbSAnLi9wcml2YXRlL2Fzc2V0LXN0YWdpbmcnO1xuXG4vKipcbiAqIE1ldGhvZHMgdG8gYnVpbGQgRG9ja2VyIENMSSBhcmd1bWVudHMgZm9yIGJ1aWxkcyB1c2luZyBzZWNyZXRzLlxuICpcbiAqIERvY2tlciBCdWlsZEtpdCBtdXN0IGJlIGVuYWJsZWQgdG8gdXNlIGJ1aWxkIHNlY3JldHMuXG4gKlxuICogQHNlZSBodHRwczovL2RvY3MuZG9ja2VyLmNvbS9idWlsZC9idWlsZGtpdC9cbiAqL1xuZXhwb3J0IGNsYXNzIERvY2tlckJ1aWxkU2VjcmV0IHtcbiAgLyoqXG4gICAqIEEgRG9ja2VyIGJ1aWxkIHNlY3JldCBmcm9tIGEgZmlsZSBzb3VyY2VcbiAgICogQHBhcmFtIHNyYyBUaGUgcGF0aCB0byB0aGUgc291cmNlIGZpbGUsIHJlbGF0aXZlIHRvIHRoZSBidWlsZCBkaXJlY3RvcnkuXG4gICAqIEByZXR1cm5zIFRoZSBsYXR0ZXIgaGFsZiByZXF1aXJlZCBmb3IgYC0tc2VjcmV0YFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tU3JjKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYHNyYz0ke3NyY31gO1xuICB9XG59XG5cbi8qKlxuICogQnVuZGxpbmcgb3B0aW9uc1xuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCdW5kbGluZ09wdGlvbnMge1xuICAvKipcbiAgICogVGhlIERvY2tlciBpbWFnZSB3aGVyZSB0aGUgY29tbWFuZCB3aWxsIHJ1bi5cbiAgICovXG4gIHJlYWRvbmx5IGltYWdlOiBEb2NrZXJJbWFnZTtcblxuICAvKipcbiAgICogVGhlIGVudHJ5cG9pbnQgdG8gcnVuIGluIHRoZSBEb2NrZXIgY29udGFpbmVyLlxuICAgKlxuICAgKiBFeGFtcGxlIHZhbHVlOiBgWycvYmluL3NoJywgJy1jJ11gXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9kb2NzLmRvY2tlci5jb20vZW5naW5lL3JlZmVyZW5jZS9idWlsZGVyLyNlbnRyeXBvaW50XG4gICAqXG4gICAqIEBkZWZhdWx0IC0gcnVuIHRoZSBlbnRyeXBvaW50IGRlZmluZWQgaW4gdGhlIGltYWdlXG4gICAqL1xuICByZWFkb25seSBlbnRyeXBvaW50Pzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFRoZSBjb21tYW5kIHRvIHJ1biBpbiB0aGUgRG9ja2VyIGNvbnRhaW5lci5cbiAgICpcbiAgICogRXhhbXBsZSB2YWx1ZTogYFsnbnBtJywgJ2luc3RhbGwnXWBcbiAgICpcbiAgICogQHNlZSBodHRwczovL2RvY3MuZG9ja2VyLmNvbS9lbmdpbmUvcmVmZXJlbmNlL3J1bi9cbiAgICpcbiAgICogQGRlZmF1bHQgLSBydW4gdGhlIGNvbW1hbmQgZGVmaW5lZCBpbiB0aGUgaW1hZ2VcbiAgICovXG4gIHJlYWRvbmx5IGNvbW1hbmQ/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQWRkaXRpb25hbCBEb2NrZXIgdm9sdW1lcyB0byBtb3VudC5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBubyBhZGRpdGlvbmFsIHZvbHVtZXMgYXJlIG1vdW50ZWRcbiAgICovXG4gIHJlYWRvbmx5IHZvbHVtZXM/OiBEb2NrZXJWb2x1bWVbXTtcblxuICAvKipcbiAgICogV2hlcmUgdG8gbW91bnQgdGhlIHNwZWNpZmllZCB2b2x1bWVzIGZyb21cbiAgICogQHNlZSBodHRwczovL2RvY3MuZG9ja2VyLmNvbS9lbmdpbmUvcmVmZXJlbmNlL2NvbW1hbmRsaW5lL3J1bi8jbW91bnQtdm9sdW1lcy1mcm9tLWNvbnRhaW5lci0tLXZvbHVtZXMtZnJvbVxuICAgKiBAZGVmYXVsdCAtIG5vIGNvbnRhaW5lcnMgYXJlIHNwZWNpZmllZCB0byBtb3VudCB2b2x1bWVzIGZyb21cbiAgICovXG4gIHJlYWRvbmx5IHZvbHVtZXNGcm9tPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgdG8gcGFzcyB0byB0aGUgRG9ja2VyIGNvbnRhaW5lci5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBubyBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gICAqL1xuICByZWFkb25seSBlbnZpcm9ubWVudD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgLyoqXG4gICAqIFdvcmtpbmcgZGlyZWN0b3J5IGluc2lkZSB0aGUgRG9ja2VyIGNvbnRhaW5lci5cbiAgICpcbiAgICogQGRlZmF1bHQgL2Fzc2V0LWlucHV0XG4gICAqL1xuICByZWFkb25seSB3b3JraW5nRGlyZWN0b3J5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdXNlciB0byB1c2Ugd2hlbiBydW5uaW5nIHRoZSBEb2NrZXIgY29udGFpbmVyLlxuICAgKlxuICAgKiAgIHVzZXIgfCB1c2VyOmdyb3VwIHwgdWlkIHwgdWlkOmdpZCB8IHVzZXI6Z2lkIHwgdWlkOmdyb3VwXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9kb2NzLmRvY2tlci5jb20vZW5naW5lL3JlZmVyZW5jZS9ydW4vI3VzZXJcbiAgICpcbiAgICogQGRlZmF1bHQgLSB1aWQ6Z2lkIG9mIHRoZSBjdXJyZW50IHVzZXIgb3IgMTAwMDoxMDAwIG9uIFdpbmRvd3NcbiAgICovXG4gIHJlYWRvbmx5IHVzZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExvY2FsIGJ1bmRsaW5nIHByb3ZpZGVyLlxuICAgKlxuICAgKiBUaGUgcHJvdmlkZXIgaW1wbGVtZW50cyBhIG1ldGhvZCBgdHJ5QnVuZGxlKClgIHdoaWNoIHNob3VsZCByZXR1cm4gYHRydWVgXG4gICAqIGlmIGxvY2FsIGJ1bmRsaW5nIHdhcyBwZXJmb3JtZWQuIElmIGBmYWxzZWAgaXMgcmV0dXJuZWQsIGRvY2tlciBidW5kbGluZ1xuICAgKiB3aWxsIGJlIGRvbmUuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gYnVuZGxpbmcgd2lsbCBvbmx5IGJlIHBlcmZvcm1lZCBpbiBhIERvY2tlciBjb250YWluZXJcbiAgICpcbiAgICovXG4gIHJlYWRvbmx5IGxvY2FsPzogSUxvY2FsQnVuZGxpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIG91dHB1dCB0aGF0IHRoaXMgYnVuZGxpbmcgb3BlcmF0aW9uIGlzIHByb2R1Y2luZy5cbiAgICpcbiAgICogQGRlZmF1bHQgQnVuZGxpbmdPdXRwdXQuQVVUT19ESVNDT1ZFUlxuICAgKlxuICAgKi9cbiAgcmVhZG9ubHkgb3V0cHV0VHlwZT86IEJ1bmRsaW5nT3V0cHV0O1xuXG4gIC8qKlxuICAgKiBbU2VjdXJpdHkgY29uZmlndXJhdGlvbl0oaHR0cHM6Ly9kb2NzLmRvY2tlci5jb20vZW5naW5lL3JlZmVyZW5jZS9ydW4vI3NlY3VyaXR5LWNvbmZpZ3VyYXRpb24pXG4gICAqIHdoZW4gcnVubmluZyB0aGUgZG9ja2VyIGNvbnRhaW5lci5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBubyBzZWN1cml0eSBvcHRpb25zXG4gICAqL1xuICByZWFkb25seSBzZWN1cml0eU9wdD86IHN0cmluZztcbiAgLyoqXG4gICAqIERvY2tlciBbTmV0d29ya2luZyBvcHRpb25zXShodHRwczovL2RvY3MuZG9ja2VyLmNvbS9lbmdpbmUvcmVmZXJlbmNlL2NvbW1hbmRsaW5lL3J1bi8jY29ubmVjdC1hLWNvbnRhaW5lci10by1hLW5ldHdvcmstLS1uZXR3b3JrKVxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vIG5ldHdvcmtpbmcgb3B0aW9uc1xuICAgKi9cbiAgcmVhZG9ubHkgbmV0d29yaz86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGFjY2VzcyBtZWNoYW5pc20gdXNlZCB0byBtYWtlIHNvdXJjZSBmaWxlcyBhdmFpbGFibGUgdG8gdGhlIGJ1bmRsaW5nIGNvbnRhaW5lciBhbmQgdG8gcmV0dXJuIHRoZSBidW5kbGluZyBvdXRwdXQgYmFjayB0byB0aGUgaG9zdC5cbiAgICogQGRlZmF1bHQgLSBCdW5kbGluZ0ZpbGVBY2Nlc3MuQklORF9NT1VOVFxuICAgKi9cbiAgcmVhZG9ubHkgYnVuZGxpbmdGaWxlQWNjZXNzPzogQnVuZGxpbmdGaWxlQWNjZXNzO1xuXG4gIC8qKlxuICAgKiBQbGF0Zm9ybSB0byBidWlsZCBmb3IuIF9SZXF1aXJlcyBEb2NrZXIgQnVpbGR4Xy5cbiAgICpcbiAgICogU3BlY2lmeSB0aGlzIHByb3BlcnR5IHRvIGJ1aWxkIGltYWdlcyBvbiBhIHNwZWNpZmljIHBsYXRmb3JtLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vIHBsYXRmb3JtIHNwZWNpZmllZCAodGhlIGN1cnJlbnQgbWFjaGluZSBhcmNoaXRlY3R1cmUgd2lsbCBiZSB1c2VkKVxuICAgKi9cbiAgcmVhZG9ubHkgcGxhdGZvcm0/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogVGhlIHR5cGUgb2Ygb3V0cHV0IHRoYXQgYSBidW5kbGluZyBvcGVyYXRpb24gaXMgcHJvZHVjaW5nLlxuICpcbiAqL1xuZXhwb3J0IGVudW0gQnVuZGxpbmdPdXRwdXQge1xuICAvKipcbiAgICogVGhlIGJ1bmRsaW5nIG91dHB1dCBkaXJlY3RvcnkgaW5jbHVkZXMgYSBzaW5nbGUgLnppcCBvciAuamFyIGZpbGUgd2hpY2hcbiAgICogd2lsbCBiZSB1c2VkIGFzIHRoZSBmaW5hbCBidW5kbGUuIElmIHRoZSBvdXRwdXQgZGlyZWN0b3J5IGRvZXMgbm90XG4gICAqIGluY2x1ZGUgZXhhY3RseSBhIHNpbmdsZSBhcmNoaXZlLCBidW5kbGluZyB3aWxsIGZhaWwuXG4gICAqL1xuICBBUkNISVZFRCA9ICdhcmNoaXZlZCcsXG5cbiAgLyoqXG4gICAqIFRoZSBidW5kbGluZyBvdXRwdXQgZGlyZWN0b3J5IGNvbnRhaW5zIG9uZSBvciBtb3JlIGZpbGVzIHdoaWNoIHdpbGwgYmVcbiAgICogYXJjaGl2ZWQgYW5kIHVwbG9hZGVkIGFzIGEgLnppcCBmaWxlIHRvIE9TUyBidWNrZXQuXG4gICAqL1xuICBOT1RfQVJDSElWRUQgPSAnbm90LWFyY2hpdmVkJyxcblxuICAvKipcbiAgICogSWYgdGhlIGJ1bmRsaW5nIG91dHB1dCBkaXJlY3RvcnkgY29udGFpbnMgYSBzaW5nbGUgYXJjaGl2ZSBmaWxlICh6aXAgb3IgamFyKVxuICAgKiBpdCB3aWxsIGJlIHVzZWQgYXMgdGhlIGJ1bmRsZSBvdXRwdXQgYXMtaXMuIE90aGVyd2lzZSwgYWxsIHRoZSBmaWxlcyBpbiB0aGUgYnVuZGxpbmcgb3V0cHV0IGRpcmVjdG9yeSB3aWxsIGJlIHppcHBlZC5cbiAgICovXG4gIEFVVE9fRElTQ09WRVIgPSAnYXV0by1kaXNjb3ZlcicsXG5cbiAgLyoqXG4gICAqIFRoZSBidW5kbGluZyBvdXRwdXQgZGlyZWN0b3J5IGluY2x1ZGVzIGEgc2luZ2xlIGZpbGUgd2hpY2hcbiAgICogd2lsbCBiZSB1c2VkIGFzIHRoZSBmaW5hbCBidW5kbGUuIElmIHRoZSBvdXRwdXQgZGlyZWN0b3J5IGRvZXMgbm90XG4gICAqIGluY2x1ZGUgZXhhY3RseSBhIHNpbmdsZSBmaWxlLCBidW5kbGluZyB3aWxsIGZhaWwuXG4gICAqXG4gICAqIFNpbWlsYXIgdG8gQVJDSElWRUQgYnV0IGZvciBub24tYXJjaGl2ZSBmaWxlc1xuICAgKi9cbiAgU0lOR0xFX0ZJTEUgPSAnc2luZ2xlLWZpbGUnLFxufVxuXG4vKipcbiAqIExvY2FsIGJ1bmRsaW5nXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbEJ1bmRsaW5nIHtcbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgYXR0ZW1wdGluZyBkb2NrZXIgYnVuZGxpbmcgdG8gYWxsb3cgdGhlXG4gICAqIGJ1bmRsZXIgdG8gYmUgZXhlY3V0ZWQgbG9jYWxseS4gSWYgdGhlIGxvY2FsIGJ1bmRsZXIgZXhpc3RzLCBhbmQgYnVuZGxpbmdcbiAgICogd2FzIHBlcmZvcm1lZCBsb2NhbGx5LCByZXR1cm4gYHRydWVgLiBPdGhlcndpc2UsIHJldHVybiBgZmFsc2VgLlxuICAgKlxuICAgKiBAcGFyYW0gb3V0cHV0RGlyIHRoZSBkaXJlY3Rvcnkgd2hlcmUgdGhlIGJ1bmRsZWQgYXNzZXQgc2hvdWxkIGJlIG91dHB1dFxuICAgKiBAcGFyYW0gb3B0aW9ucyBidW5kbGluZyBvcHRpb25zIGZvciB0aGlzIGFzc2V0XG4gICAqL1xuICB0cnlCdW5kbGUob3V0cHV0RGlyOiBzdHJpbmcsIG9wdGlvbnM6IEJ1bmRsaW5nT3B0aW9ucyk6IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhlIGFjY2VzcyBtZWNoYW5pc20gdXNlZCB0byBtYWtlIHNvdXJjZSBmaWxlcyBhdmFpbGFibGUgdG8gdGhlIGJ1bmRsaW5nIGNvbnRhaW5lciBhbmQgdG8gcmV0dXJuIHRoZSBidW5kbGluZyBvdXRwdXQgYmFjayB0byB0aGUgaG9zdFxuICovXG5leHBvcnQgZW51bSBCdW5kbGluZ0ZpbGVBY2Nlc3Mge1xuICAvKipcbiAgICogQ3JlYXRlcyB0ZW1wb3Jhcnkgdm9sdW1lcyBhbmQgY29udGFpbmVycyB0byBjb3B5IGZpbGVzIGZyb20gdGhlIGhvc3QgdG8gdGhlIGJ1bmRsaW5nIGNvbnRhaW5lciBhbmQgYmFjay5cbiAgICogVGhpcyBpcyBzbG93ZXIsIGJ1dCB3b3JrcyBhbHNvIGluIG1vcmUgY29tcGxleCBzaXR1YXRpb25zIHdpdGggcmVtb3RlIG9yIHNoYXJlZCBkb2NrZXIgc29ja2V0cy5cbiAgICovXG4gIFZPTFVNRV9DT1BZID0gJ1ZPTFVNRV9DT1BZJyxcblxuICAvKipcbiAgICogVGhlIHNvdXJjZSBhbmQgb3V0cHV0IGZvbGRlcnMgd2lsbCBiZSBtb3VudGVkIGFzIGJpbmQgbW91bnQgZnJvbSB0aGUgaG9zdCBzeXN0ZW1cbiAgICogVGhpcyBpcyBmYXN0ZXIgYW5kIHNpbXBsZXIsIGJ1dCBsZXNzIHBvcnRhYmxlIHRoYW4gYFZPTFVNRV9DT1BZYC5cbiAgICovXG4gIEJJTkRfTU9VTlQgPSAnQklORF9NT1VOVCcsXG59XG5cbi8qKlxuICogQSBEb2NrZXIgaW1hZ2VcbiAqL1xuZXhwb3J0IGNsYXNzIERvY2tlckltYWdlIHtcbiAgLyoqXG4gICAqIEJ1aWxkcyBhIERvY2tlciBpbWFnZVxuICAgKlxuICAgKiBAcGFyYW0gcGF0aCBUaGUgcGF0aCB0byB0aGUgZGlyZWN0b3J5IGNvbnRhaW5pbmcgdGhlIERvY2tlciBmaWxlXG4gICAqIEBwYXJhbSBvcHRpb25zIERvY2tlciBidWlsZCBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb21CdWlsZChwYXRoOiBzdHJpbmcsIG9wdGlvbnM6IERvY2tlckJ1aWxkT3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgYnVpbGRBcmdzID0gb3B0aW9ucy5idWlsZEFyZ3MgfHwge307XG5cbiAgICBpZiAob3B0aW9ucy5maWxlICYmIGlzQWJzb2x1dGUob3B0aW9ucy5maWxlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcImZpbGVcIiBtdXN0IGJlIHJlbGF0aXZlIHRvIHRoZSBkb2NrZXIgYnVpbGQgZGlyZWN0b3J5LiBHb3QgJHtvcHRpb25zLmZpbGV9YCk7XG4gICAgfVxuXG4gICAgLy8gSW1hZ2UgdGFnIGRlcml2ZWQgZnJvbSBwYXRoIGFuZCBidWlsZCBvcHRpb25zXG4gICAgY29uc3QgaW5wdXQgPSBKU09OLnN0cmluZ2lmeSh7IHBhdGgsIC4uLm9wdGlvbnMgfSk7XG4gICAgY29uc3QgdGFnSGFzaCA9IGNyeXB0by5jcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUoaW5wdXQpLmRpZ2VzdCgnaGV4Jyk7XG4gICAgY29uc3QgdGFnID0gYGNkay0ke3RhZ0hhc2h9YDtcblxuICAgIGNvbnN0IGRvY2tlckFyZ3M6IHN0cmluZ1tdID0gW1xuICAgICAgJ2J1aWxkJywgJy10JywgdGFnLFxuICAgICAgLi4uKG9wdGlvbnMuZmlsZSA/IFsnLWYnLCBqb2luKHBhdGgsIG9wdGlvbnMuZmlsZSldIDogW10pLFxuICAgICAgLi4uKG9wdGlvbnMucGxhdGZvcm0gPyBbJy0tcGxhdGZvcm0nLCBvcHRpb25zLnBsYXRmb3JtXSA6IFtdKSxcbiAgICAgIC4uLihvcHRpb25zLnRhcmdldFN0YWdlID8gWyctLXRhcmdldCcsIG9wdGlvbnMudGFyZ2V0U3RhZ2VdIDogW10pLFxuICAgICAgLi4uKG9wdGlvbnMuY2FjaGVGcm9tID8gWy4uLm9wdGlvbnMuY2FjaGVGcm9tLm1hcChjYWNoZUZyb20gPT4gWyctLWNhY2hlLWZyb20nLCB0aGlzLmNhY2hlT3B0aW9uVG9GbGFnKGNhY2hlRnJvbSldKS5mbGF0KCldIDogW10pLFxuICAgICAgLi4uKG9wdGlvbnMuY2FjaGVUbyA/IFsnLS1jYWNoZS10bycsIHRoaXMuY2FjaGVPcHRpb25Ub0ZsYWcob3B0aW9ucy5jYWNoZVRvKV0gOiBbXSksXG4gICAgICAuLi4ob3B0aW9ucy5jYWNoZURpc2FibGVkID8gWyctLW5vLWNhY2hlJ10gOiBbXSksXG4gICAgICAuLi5mbGF0dGVuKE9iamVjdC5lbnRyaWVzKGJ1aWxkQXJncykubWFwKChbaywgdl0pID0+IFsnLS1idWlsZC1hcmcnLCBgJHtrfT0ke3Z9YF0pKSxcbiAgICAgIHBhdGgsXG4gICAgXTtcblxuICAgIGRvY2tlckV4ZWMoZG9ja2VyQXJncyk7XG5cbiAgICAvLyBGaW5nZXJwcmludHMgdGhlIGRpcmVjdG9yeSBjb250YWluaW5nIHRoZSBEb2NrZXJmaWxlIHdlJ3JlIGJ1aWxkaW5nIGFuZFxuICAgIC8vIGRpZmZlcmVudGlhdGVzIHRoZSBmaW5nZXJwcmludCBiYXNlZCBvbiBidWlsZCBhcmd1bWVudHMuIFdlIGRvIHRoaXMgc29cbiAgICAvLyB3ZSBjYW4gcHJvdmlkZSBhIHN0YWJsZSBpbWFnZSBoYXNoLiBPdGhlcndpc2UsIHRoZSBpbWFnZSBJRCB3aWxsIGJlXG4gICAgLy8gZGlmZmVyZW50IGV2ZXJ5IHRpbWUgdGhlIERvY2tlciBsYXllciBjYWNoZSBpcyBjbGVhcmVkLCBkdWUgcHJpbWFyaWx5IHRvXG4gICAgLy8gdGltZXN0YW1wcy5cbiAgICBjb25zdCBoYXNoID0gRmlsZVN5c3RlbS5maW5nZXJwcmludChwYXRoLCB7IGV4dHJhSGFzaDogSlNPTi5zdHJpbmdpZnkob3B0aW9ucykgfSk7XG4gICAgcmV0dXJuIG5ldyBEb2NrZXJJbWFnZSh0YWcsIGhhc2gpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSBhbiBpbWFnZSBvbiBEb2NrZXJIdWIgb3IgYW5vdGhlciBvbmxpbmUgcmVnaXN0cnkuXG4gICAqXG4gICAqIEBwYXJhbSBpbWFnZSB0aGUgaW1hZ2UgbmFtZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tUmVnaXN0cnkoaW1hZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRG9ja2VySW1hZ2UoaW1hZ2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY2FjaGVPcHRpb25Ub0ZsYWcob3B0aW9uOiBEb2NrZXJDYWNoZU9wdGlvbik6IHN0cmluZyB7XG4gICAgbGV0IGZsYWcgPSBgdHlwZT0ke29wdGlvbi50eXBlfWA7XG4gICAgaWYgKG9wdGlvbi5wYXJhbXMpIHtcbiAgICAgIGZsYWcgKz0gJywnICsgT2JqZWN0LmVudHJpZXMob3B0aW9uLnBhcmFtcykubWFwKChbaywgdl0pID0+IGAke2t9PSR7dn1gKS5qb2luKCcsJyk7XG4gICAgfVxuICAgIHJldHVybiBmbGFnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGltYWdlOiBzdHJpbmcsIHByaXZhdGUgcmVhZG9ubHkgX2ltYWdlSGFzaD86IHN0cmluZykgeyB9XG5cbiAgLyoqXG4gICAqIFByb3ZpZGVzIGEgc3RhYmxlIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgaW1hZ2UgZm9yIEpTT04gc2VyaWFsaXphdGlvbi5cbiAgICpcbiAgICogQHJldHVybiBUaGUgb3ZlcnJpZGRlbiBpbWFnZSBuYW1lIGlmIHNldCBvciBpbWFnZSBoYXNoIG5hbWUgaW4gdGhhdCBvcmRlclxuICAgKi9cbiAgcHVibGljIHRvSlNPTigpIHtcbiAgICByZXR1cm4gIHRoaXMuX2ltYWdlSGFzaCA/PyB0aGlzLmltYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgYSBEb2NrZXIgaW1hZ2VcbiAgICovXG4gIHB1YmxpYyBydW4ob3B0aW9uczogRG9ja2VyUnVuT3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qgdm9sdW1lcyA9IG9wdGlvbnMudm9sdW1lcyB8fCBbXTtcbiAgICBjb25zdCBlbnZpcm9ubWVudCA9IG9wdGlvbnMuZW52aXJvbm1lbnQgfHwge307XG4gICAgY29uc3QgZW50cnlwb2ludCA9IG9wdGlvbnMuZW50cnlwb2ludD8uWzBdIHx8IG51bGw7XG4gICAgY29uc3QgY29tbWFuZCA9IFtcbiAgICAgIC4uLm9wdGlvbnMuZW50cnlwb2ludD8uWzFdXG4gICAgICAgICAgPyBbLi4ub3B0aW9ucy5lbnRyeXBvaW50LnNsaWNlKDEpXVxuICAgICAgICAgIDogW10sXG4gICAgICAuLi5vcHRpb25zLmNvbW1hbmRcbiAgICAgICAgICA/IFsuLi5vcHRpb25zLmNvbW1hbmRdXG4gICAgICAgICAgOiBbXSxcbiAgICBdO1xuXG4gICAgY29uc3QgZG9ja2VyQXJnczogc3RyaW5nW10gPSBbXG4gICAgICAncnVuJywgJy0tcm0nLFxuICAgICAgLi4ub3B0aW9ucy5zZWN1cml0eU9wdFxuICAgICAgICAgID8gWyctLXNlY3VyaXR5LW9wdCcsIG9wdGlvbnMuc2VjdXJpdHlPcHRdXG4gICAgICAgICAgOiBbXSxcbiAgICAgIC4uLm9wdGlvbnMubmV0d29ya1xuICAgICAgICAgID8gWyctLW5ldHdvcmsnLCBvcHRpb25zLm5ldHdvcmtdXG4gICAgICAgICAgOiBbXSxcbiAgICAgIC4uLm9wdGlvbnMucGxhdGZvcm1cbiAgICAgICAgICA/IFsnLS1wbGF0Zm9ybScsIG9wdGlvbnMucGxhdGZvcm1dXG4gICAgICAgICAgOiBbXSxcbiAgICAgIC4uLm9wdGlvbnMudXNlclxuICAgICAgICAgID8gWyctdScsIG9wdGlvbnMudXNlcl1cbiAgICAgICAgICA6IFtdLFxuICAgICAgLi4ub3B0aW9ucy52b2x1bWVzRnJvbVxuICAgICAgICAgID8gZmxhdHRlbihvcHRpb25zLnZvbHVtZXNGcm9tLm1hcCh2ID0+IFsnLS12b2x1bWVzLWZyb20nLCB2XSkpXG4gICAgICAgICAgOiBbXSxcbiAgICAgIC4uLmZsYXR0ZW4odm9sdW1lcy5tYXAodiA9PiBbJy12JywgYCR7di5ob3N0UGF0aH06JHt2LmNvbnRhaW5lclBhdGh9OiR7aXNTZUxpbnV4KCkgPyAneiwnIDogJyd9JHt2LmNvbnNpc3RlbmN5ID8/IERvY2tlclZvbHVtZUNvbnNpc3RlbmN5LkRFTEVHQVRFRH1gXSkpLFxuICAgICAgLi4uZmxhdHRlbihPYmplY3QuZW50cmllcyhlbnZpcm9ubWVudCkubWFwKChbaywgdl0pID0+IFsnLS1lbnYnLCBgJHtrfT0ke3Z9YF0pKSxcbiAgICAgIC4uLm9wdGlvbnMud29ya2luZ0RpcmVjdG9yeVxuICAgICAgICAgID8gWyctdycsIG9wdGlvbnMud29ya2luZ0RpcmVjdG9yeV1cbiAgICAgICAgICA6IFtdLFxuICAgICAgLi4uZW50cnlwb2ludFxuICAgICAgICAgID8gWyctLWVudHJ5cG9pbnQnLCBlbnRyeXBvaW50XVxuICAgICAgICAgIDogW10sXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgLi4uY29tbWFuZCxcbiAgICBdO1xuXG4gICAgZG9ja2VyRXhlYyhkb2NrZXJBcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3BpZXMgYSBmaWxlIG9yIGRpcmVjdG9yeSBvdXQgb2YgdGhlIERvY2tlciBpbWFnZSB0byB0aGUgbG9jYWwgZmlsZXN5c3RlbS5cbiAgICpcbiAgICogSWYgYG91dHB1dFBhdGhgIGlzIG9taXR0ZWQgdGhlIGRlc3RpbmF0aW9uIHBhdGggaXMgYSB0ZW1wb3JhcnkgZGlyZWN0b3J5LlxuICAgKlxuICAgKiBAcGFyYW0gaW1hZ2VQYXRoIHRoZSBwYXRoIGluIHRoZSBEb2NrZXIgaW1hZ2VcbiAgICogQHBhcmFtIG91dHB1dFBhdGggdGhlIGRlc3RpbmF0aW9uIHBhdGggZm9yIHRoZSBjb3B5IG9wZXJhdGlvblxuICAgKiBAcmV0dXJucyB0aGUgZGVzdGluYXRpb24gcGF0aFxuICAgKi9cbiAgcHVibGljIGNwKGltYWdlUGF0aDogc3RyaW5nLCBvdXRwdXRQYXRoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IHN0ZG91dCB9ID0gZG9ja2VyRXhlYyhbJ2NyZWF0ZScsIHRoaXMuaW1hZ2VdLCB7fSk7IC8vIEVtcHR5IG9wdGlvbnMgdG8gYXZvaWQgc3Rkb3V0IHJlZGlyZWN0IGhlcmVcbiAgICBjb25zdCBtYXRjaCA9IHN0ZG91dC50b1N0cmluZygpLm1hdGNoKC8oWzAtOWEtZl17MTYsfSkvKTtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBleHRyYWN0IGNvbnRhaW5lciBJRCBmcm9tIERvY2tlciBjcmVhdGUgb3V0cHV0Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVySWQgPSBtYXRjaFsxXTtcbiAgICBjb25zdCBjb250YWluZXJQYXRoID0gYCR7Y29udGFpbmVySWR9OiR7aW1hZ2VQYXRofWA7XG4gICAgY29uc3QgZGVzdFBhdGggPSBvdXRwdXRQYXRoID8/IEZpbGVTeXN0ZW0ubWtkdGVtcCgnY2RrLWRvY2tlci1jcC0nKTtcbiAgICB0cnkge1xuICAgICAgZG9ja2VyRXhlYyhbJ2NwJywgY29udGFpbmVyUGF0aCwgZGVzdFBhdGhdKTtcbiAgICAgIHJldHVybiBkZXN0UGF0aDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGNvcHkgZmlsZXMgZnJvbSAke2NvbnRhaW5lclBhdGh9IHRvICR7ZGVzdFBhdGh9OiAke2Vycn1gKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZG9ja2VyRXhlYyhbJ3JtJywgJy12JywgY29udGFpbmVySWRdKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBIERvY2tlciB2b2x1bWVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEb2NrZXJWb2x1bWUge1xuICAvKipcbiAgICogVGhlIHBhdGggdG8gdGhlIGZpbGUgb3IgZGlyZWN0b3J5IG9uIHRoZSBob3N0IG1hY2hpbmVcbiAgICovXG4gIHJlYWRvbmx5IGhvc3RQYXRoOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwYXRoIHdoZXJlIHRoZSBmaWxlIG9yIGRpcmVjdG9yeSBpcyBtb3VudGVkIGluIHRoZSBjb250YWluZXJcbiAgICovXG4gIHJlYWRvbmx5IGNvbnRhaW5lclBhdGg6IHN0cmluZztcblxuICAvKipcbiAgICogTW91bnQgY29uc2lzdGVuY3kuIE9ubHkgYXBwbGljYWJsZSBmb3IgbWFjT1NcbiAgICpcbiAgICogQGRlZmF1bHQgRG9ja2VyQ29uc2lzdGVuY3kuREVMRUdBVEVEXG4gICAqIEBzZWUgaHR0cHM6Ly9kb2NzLmRvY2tlci5jb20vc3RvcmFnZS9iaW5kLW1vdW50cy8jY29uZmlndXJlLW1vdW50LWNvbnNpc3RlbmN5LWZvci1tYWNvc1xuICAgKi9cbiAgcmVhZG9ubHkgY29uc2lzdGVuY3k/OiBEb2NrZXJWb2x1bWVDb25zaXN0ZW5jeTtcbn1cblxuLyoqXG4gKiBTdXBwb3J0ZWQgRG9ja2VyIHZvbHVtZSBjb25zaXN0ZW5jeSB0eXBlcy4gT25seSB2YWxpZCBvbiBtYWNPUyBkdWUgdG8gdGhlIHdheSBmaWxlIHN0b3JhZ2Ugd29ya3Mgb24gTWFjXG4gKi9cbmV4cG9ydCBlbnVtIERvY2tlclZvbHVtZUNvbnNpc3RlbmN5IHtcbiAgLyoqXG4gICAqIFJlYWQvd3JpdGUgb3BlcmF0aW9ucyBpbnNpZGUgdGhlIERvY2tlciBjb250YWluZXIgYXJlIGFwcGxpZWQgaW1tZWRpYXRlbHkgb24gdGhlIG1vdW50ZWQgaG9zdCBtYWNoaW5lIHZvbHVtZXNcbiAgICovXG4gIENPTlNJU1RFTlQgPSAnY29uc2lzdGVudCcsXG4gIC8qKlxuICAgKiBSZWFkL3dyaXRlIG9wZXJhdGlvbnMgb24gbW91bnRlZCBEb2NrZXIgdm9sdW1lcyBhcmUgZmlyc3Qgd3JpdHRlbiBpbnNpZGUgdGhlIGNvbnRhaW5lciBhbmQgdGhlbiBzeW5jaHJvbml6ZWQgdG8gdGhlIGhvc3QgbWFjaGluZVxuICAgKi9cbiAgREVMRUdBVEVEID0gJ2RlbGVnYXRlZCcsXG4gIC8qKlxuICAgKiBSZWFkL3dyaXRlIG9wZXJhdGlvbnMgb24gbW91bnRlZCBEb2NrZXIgdm9sdW1lcyBhcmUgZmlyc3QgYXBwbGllZCBvbiB0aGUgaG9zdCBtYWNoaW5lIGFuZCB0aGVuIHN5bmNocm9uaXplZCB0byB0aGUgY29udGFpbmVyXG4gICAqL1xuICBDQUNIRUQgPSAnY2FjaGVkJyxcbn1cblxuLyoqXG4gKiBEb2NrZXIgcnVuIG9wdGlvbnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEb2NrZXJSdW5PcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBlbnRyeXBvaW50IHRvIHJ1biBpbiB0aGUgY29udGFpbmVyLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIHJ1biB0aGUgZW50cnlwb2ludCBkZWZpbmVkIGluIHRoZSBpbWFnZVxuICAgKi9cbiAgcmVhZG9ubHkgZW50cnlwb2ludD86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBUaGUgY29tbWFuZCB0byBydW4gaW4gdGhlIGNvbnRhaW5lci5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBydW4gdGhlIGNvbW1hbmQgZGVmaW5lZCBpbiB0aGUgaW1hZ2VcbiAgICovXG4gIHJlYWRvbmx5IGNvbW1hbmQ/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogRG9ja2VyIHZvbHVtZXMgdG8gbW91bnQuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gdm9sdW1lcyBhcmUgbW91bnRlZFxuICAgKi9cbiAgcmVhZG9ubHkgdm9sdW1lcz86IERvY2tlclZvbHVtZVtdO1xuXG4gIC8qKlxuICAgKiBXaGVyZSB0byBtb3VudCB0aGUgc3BlY2lmaWVkIHZvbHVtZXMgZnJvbVxuICAgKiBAc2VlIGh0dHBzOi8vZG9jcy5kb2NrZXIuY29tL2VuZ2luZS9yZWZlcmVuY2UvY29tbWFuZGxpbmUvcnVuLyNtb3VudC12b2x1bWVzLWZyb20tY29udGFpbmVyLS0tdm9sdW1lcy1mcm9tXG4gICAqIEBkZWZhdWx0IC0gbm8gY29udGFpbmVycyBhcmUgc3BlY2lmaWVkIHRvIG1vdW50IHZvbHVtZXMgZnJvbVxuICAgKi9cbiAgcmVhZG9ubHkgdm9sdW1lc0Zyb20/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogVGhlIGVudmlyb25tZW50IHZhcmlhYmxlcyB0byBwYXNzIHRvIHRoZSBjb250YWluZXIuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuICAgKi9cbiAgcmVhZG9ubHkgZW52aXJvbm1lbnQ/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gIC8qKlxuICAgKiBXb3JraW5nIGRpcmVjdG9yeSBpbnNpZGUgdGhlIGNvbnRhaW5lci5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBpbWFnZSBkZWZhdWx0XG4gICAqL1xuICByZWFkb25seSB3b3JraW5nRGlyZWN0b3J5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdXNlciB0byB1c2Ugd2hlbiBydW5uaW5nIHRoZSBjb250YWluZXIuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gcm9vdCBvciBpbWFnZSBkZWZhdWx0XG4gICAqL1xuICByZWFkb25seSB1c2VyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBbU2VjdXJpdHkgY29uZmlndXJhdGlvbl0oaHR0cHM6Ly9kb2NzLmRvY2tlci5jb20vZW5naW5lL3JlZmVyZW5jZS9ydW4vI3NlY3VyaXR5LWNvbmZpZ3VyYXRpb24pXG4gICAqIHdoZW4gcnVubmluZyB0aGUgZG9ja2VyIGNvbnRhaW5lci5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBubyBzZWN1cml0eSBvcHRpb25zXG4gICAqL1xuICByZWFkb25seSBzZWN1cml0eU9wdD86IHN0cmluZztcblxuICAvKipcbiAgICogRG9ja2VyIFtOZXR3b3JraW5nIG9wdGlvbnNdKGh0dHBzOi8vZG9jcy5kb2NrZXIuY29tL2VuZ2luZS9yZWZlcmVuY2UvY29tbWFuZGxpbmUvcnVuLyNjb25uZWN0LWEtY29udGFpbmVyLXRvLWEtbmV0d29yay0tLW5ldHdvcmspXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gbmV0d29ya2luZyBvcHRpb25zXG4gICAqL1xuICByZWFkb25seSBuZXR3b3JrPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgcGxhdGZvcm0gaWYgc2VydmVyIGlzIG11bHRpLXBsYXRmb3JtIGNhcGFibGUuIF9SZXF1aXJlcyBEb2NrZXIgRW5naW5lIEFQSSB2MS4zOCtfLlxuICAgKlxuICAgKiBFeGFtcGxlIHZhbHVlOiBgbGludXgvYW1kNjRgXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gcGxhdGZvcm0gc3BlY2lmaWVkXG4gICAqL1xuICByZWFkb25seSBwbGF0Zm9ybT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEb2NrZXIgYnVpbGQgb3B0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIERvY2tlckJ1aWxkT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBCdWlsZCBhcmdzXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gYnVpbGQgYXJnc1xuICAgKi9cbiAgcmVhZG9ubHkgYnVpbGRBcmdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICAvKipcbiAgICogTmFtZSBvZiB0aGUgRG9ja2VyZmlsZSwgbXVzdCByZWxhdGl2ZSB0byB0aGUgZG9ja2VyIGJ1aWxkIHBhdGguXG4gICAqXG4gICAqIEBkZWZhdWx0IGBEb2NrZXJmaWxlYFxuICAgKi9cbiAgcmVhZG9ubHkgZmlsZT86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHBsYXRmb3JtIGlmIHNlcnZlciBpcyBtdWx0aS1wbGF0Zm9ybSBjYXBhYmxlLiBfUmVxdWlyZXMgRG9ja2VyIEVuZ2luZSBBUEkgdjEuMzgrXy5cbiAgICpcbiAgICogRXhhbXBsZSB2YWx1ZTogYGxpbnV4L2FtZDY0YFxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vIHBsYXRmb3JtIHNwZWNpZmllZFxuICAgKi9cbiAgcmVhZG9ubHkgcGxhdGZvcm0/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCBidWlsZCB0YXJnZXQgZm9yIG11bHRpLXN0YWdlIGNvbnRhaW5lciBidWlsZHMuIEFueSBzdGFnZSBkZWZpbmVkIGFmdGVyd2FyZHMgd2lsbCBiZSBpZ25vcmVkLlxuICAgKlxuICAgKiBFeGFtcGxlIHZhbHVlOiBgYnVpbGQtZW52YFxuICAgKlxuICAgKiBAZGVmYXVsdCAtIEJ1aWxkIGFsbCBzdGFnZXMgZGVmaW5lZCBpbiB0aGUgRG9ja2VyZmlsZVxuICAgKi9cbiAgcmVhZG9ubHkgdGFyZ2V0U3RhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENhY2hlIGZyb20gb3B0aW9ucyB0byBwYXNzIHRvIHRoZSBgZG9ja2VyIGJ1aWxkYCBjb21tYW5kLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vIGNhY2hlIGZyb20gYXJncyBhcmUgcGFzc2VkXG4gICAqL1xuICByZWFkb25seSBjYWNoZUZyb20/OiBEb2NrZXJDYWNoZU9wdGlvbltdO1xuXG4gIC8qKlxuICAgKiBDYWNoZSB0byBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIGBkb2NrZXIgYnVpbGRgIGNvbW1hbmQuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gY2FjaGUgdG8gYXJncyBhcmUgcGFzc2VkXG4gICAqL1xuICByZWFkb25seSBjYWNoZVRvPzogRG9ja2VyQ2FjaGVPcHRpb247XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGNhY2hlIGFuZCBwYXNzIGAtLW5vLWNhY2hlYCB0byB0aGUgYGRvY2tlciBidWlsZGAgY29tbWFuZC5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBjYWNoZSBpcyB1c2VkXG4gICAqL1xuICByZWFkb25seSBjYWNoZURpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbih4OiBzdHJpbmdbXVtdKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0KFtdLCAuLi54KTtcbn1cblxuZnVuY3Rpb24gaXNTZUxpbnV4KCk6IGJvb2xlYW4ge1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPSAnbGludXgnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHByb2cgPSAnc2VsaW51eGVuYWJsZWQnO1xuICBjb25zdCBwcm9jID0gc3Bhd25TeW5jKHByb2csIFtdLCB7XG4gICAgc3RkaW86IFsgLy8gc2hvdyBzZWxpbnV4IHN0YXR1cyBvdXRwdXRcbiAgICAgICdwaXBlJywgLy8gZ2V0IHZhbHVlIG9mIHN0ZGlvXG4gICAgICBwcm9jZXNzLnN0ZGVyciwgLy8gcmVkaXJlY3Qgc3Rkb3V0IHRvIHN0ZGVyclxuICAgICAgJ2luaGVyaXQnLCAvLyBpbmhlcml0IHN0ZGVyclxuICAgIF0sXG4gIH0pO1xuICBpZiAocHJvYy5lcnJvcikge1xuICAgIC8vIHNlbGludXhlbmFibGVkIG5vdCBhIHZhbGlkIGNvbW1hbmQsIHRoZXJlZm9yZSBub3QgZW5hYmxlZFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAocHJvYy5zdGF0dXMgPT0gMCkge1xuICAgIC8vIHNlbGludXggZW5hYmxlZFxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIHNlbGludXggbm90IGVuYWJsZWRcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==