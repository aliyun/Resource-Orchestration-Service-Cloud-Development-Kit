import { DockerCacheOption } from './assets';
/**
 * Methods to build Docker CLI arguments for builds using secrets.
 *
 * Docker BuildKit must be enabled to use build secrets.
 *
 * @see https://docs.docker.com/build/buildkit/
 */
export declare class DockerBuildSecret {
    /**
     * A Docker build secret from a file source
     * @param src The path to the source file, relative to the build directory.
     * @returns The latter half required for `--secret`
     */
    static fromSrc(src: string): string;
}
/**
 * Bundling options
 *
 */
export interface BundlingOptions {
    /**
     * The Docker image where the command will run.
     */
    readonly image: DockerImage;
    /**
     * The entrypoint to run in the Docker container.
     *
     * Example value: `['/bin/sh', '-c']`
     *
     * @see https://docs.docker.com/engine/reference/builder/#entrypoint
     *
     * @default - run the entrypoint defined in the image
     */
    readonly entrypoint?: string[];
    /**
     * The command to run in the Docker container.
     *
     * Example value: `['npm', 'install']`
     *
     * @see https://docs.docker.com/engine/reference/run/
     *
     * @default - run the command defined in the image
     */
    readonly command?: string[];
    /**
     * Additional Docker volumes to mount.
     *
     * @default - no additional volumes are mounted
     */
    readonly volumes?: DockerVolume[];
    /**
     * Where to mount the specified volumes from
     * @see https://docs.docker.com/engine/reference/commandline/run/#mount-volumes-from-container---volumes-from
     * @default - no containers are specified to mount volumes from
     */
    readonly volumesFrom?: string[];
    /**
     * The environment variables to pass to the Docker container.
     *
     * @default - no environment variables.
     */
    readonly environment?: {
        [key: string]: string;
    };
    /**
     * Working directory inside the Docker container.
     *
     * @default /asset-input
     */
    readonly workingDirectory?: string;
    /**
     * The user to use when running the Docker container.
     *
     *   user | user:group | uid | uid:gid | user:gid | uid:group
     *
     * @see https://docs.docker.com/engine/reference/run/#user
     *
     * @default - uid:gid of the current user or 1000:1000 on Windows
     */
    readonly user?: string;
    /**
     * Local bundling provider.
     *
     * The provider implements a method `tryBundle()` which should return `true`
     * if local bundling was performed. If `false` is returned, docker bundling
     * will be done.
     *
     * @default - bundling will only be performed in a Docker container
     *
     */
    readonly local?: ILocalBundling;
    /**
     * The type of output that this bundling operation is producing.
     *
     * @default BundlingOutput.AUTO_DISCOVER
     *
     */
    readonly outputType?: BundlingOutput;
    /**
     * [Security configuration](https://docs.docker.com/engine/reference/run/#security-configuration)
     * when running the docker container.
     *
     * @default - no security options
     */
    readonly securityOpt?: string;
    /**
     * Docker [Networking options](https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network)
     *
     * @default - no networking options
     */
    readonly network?: string;
    /**
     * The access mechanism used to make source files available to the bundling container and to return the bundling output back to the host.
     * @default - BundlingFileAccess.BIND_MOUNT
     */
    readonly bundlingFileAccess?: BundlingFileAccess;
    /**
     * Platform to build for. _Requires Docker Buildx_.
     *
     * Specify this property to build images on a specific platform.
     *
     * @default - no platform specified (the current machine architecture will be used)
     */
    readonly platform?: string;
}
/**
 * The type of output that a bundling operation is producing.
 *
 */
export declare enum BundlingOutput {
    /**
     * The bundling output directory includes a single .zip or .jar file which
     * will be used as the final bundle. If the output directory does not
     * include exactly a single archive, bundling will fail.
     */
    ARCHIVED = "archived",
    /**
     * The bundling output directory contains one or more files which will be
     * archived and uploaded as a .zip file to OSS bucket.
     */
    NOT_ARCHIVED = "not-archived",
    /**
     * If the bundling output directory contains a single archive file (zip or jar)
     * it will be used as the bundle output as-is. Otherwise, all the files in the bundling output directory will be zipped.
     */
    AUTO_DISCOVER = "auto-discover",
    /**
     * The bundling output directory includes a single file which
     * will be used as the final bundle. If the output directory does not
     * include exactly a single file, bundling will fail.
     *
     * Similar to ARCHIVED but for non-archive files
     */
    SINGLE_FILE = "single-file"
}
/**
 * Local bundling
 *
 */
export interface ILocalBundling {
    /**
     * This method is called before attempting docker bundling to allow the
     * bundler to be executed locally. If the local bundler exists, and bundling
     * was performed locally, return `true`. Otherwise, return `false`.
     *
     * @param outputDir the directory where the bundled asset should be output
     * @param options bundling options for this asset
     */
    tryBundle(outputDir: string, options: BundlingOptions): boolean;
}
/**
 * The access mechanism used to make source files available to the bundling container and to return the bundling output back to the host
 */
export declare enum BundlingFileAccess {
    /**
     * Creates temporary volumes and containers to copy files from the host to the bundling container and back.
     * This is slower, but works also in more complex situations with remote or shared docker sockets.
     */
    VOLUME_COPY = "VOLUME_COPY",
    /**
     * The source and output folders will be mounted as bind mount from the host system
     * This is faster and simpler, but less portable than `VOLUME_COPY`.
     */
    BIND_MOUNT = "BIND_MOUNT"
}
/**
 * A Docker image
 */
export declare class DockerImage {
    readonly image: string;
    private readonly _imageHash?;
    /**
     * Builds a Docker image
     *
     * @param path The path to the directory containing the Docker file
     * @param options Docker build options
     */
    static fromBuild(path: string, options?: DockerBuildOptions): DockerImage;
    /**
     * Reference an image on DockerHub or another online registry.
     *
     * @param image the image name
     */
    static fromRegistry(image: string): DockerImage;
    private static cacheOptionToFlag;
    constructor(image: string, _imageHash?: string | undefined);
    /**
     * Provides a stable representation of this image for JSON serialization.
     *
     * @return The overridden image name if set or image hash name in that order
     */
    toJSON(): string;
    /**
     * Runs a Docker image
     */
    run(options?: DockerRunOptions): void;
    /**
     * Copies a file or directory out of the Docker image to the local filesystem.
     *
     * If `outputPath` is omitted the destination path is a temporary directory.
     *
     * @param imagePath the path in the Docker image
     * @param outputPath the destination path for the copy operation
     * @returns the destination path
     */
    cp(imagePath: string, outputPath?: string): string;
}
/**
 * A Docker volume
 */
export interface DockerVolume {
    /**
     * The path to the file or directory on the host machine
     */
    readonly hostPath: string;
    /**
     * The path where the file or directory is mounted in the container
     */
    readonly containerPath: string;
    /**
     * Mount consistency. Only applicable for macOS
     *
     * @default DockerConsistency.DELEGATED
     * @see https://docs.docker.com/storage/bind-mounts/#configure-mount-consistency-for-macos
     */
    readonly consistency?: DockerVolumeConsistency;
}
/**
 * Supported Docker volume consistency types. Only valid on macOS due to the way file storage works on Mac
 */
export declare enum DockerVolumeConsistency {
    /**
     * Read/write operations inside the Docker container are applied immediately on the mounted host machine volumes
     */
    CONSISTENT = "consistent",
    /**
     * Read/write operations on mounted Docker volumes are first written inside the container and then synchronized to the host machine
     */
    DELEGATED = "delegated",
    /**
     * Read/write operations on mounted Docker volumes are first applied on the host machine and then synchronized to the container
     */
    CACHED = "cached"
}
/**
 * Docker run options
 */
export interface DockerRunOptions {
    /**
     * The entrypoint to run in the container.
     *
     * @default - run the entrypoint defined in the image
     */
    readonly entrypoint?: string[];
    /**
     * The command to run in the container.
     *
     * @default - run the command defined in the image
     */
    readonly command?: string[];
    /**
     * Docker volumes to mount.
     *
     * @default - no volumes are mounted
     */
    readonly volumes?: DockerVolume[];
    /**
     * Where to mount the specified volumes from
     * @see https://docs.docker.com/engine/reference/commandline/run/#mount-volumes-from-container---volumes-from
     * @default - no containers are specified to mount volumes from
     */
    readonly volumesFrom?: string[];
    /**
     * The environment variables to pass to the container.
     *
     * @default - no environment variables.
     */
    readonly environment?: {
        [key: string]: string;
    };
    /**
     * Working directory inside the container.
     *
     * @default - image default
     */
    readonly workingDirectory?: string;
    /**
     * The user to use when running the container.
     *
     * @default - root or image default
     */
    readonly user?: string;
    /**
     * [Security configuration](https://docs.docker.com/engine/reference/run/#security-configuration)
     * when running the docker container.
     *
     * @default - no security options
     */
    readonly securityOpt?: string;
    /**
     * Docker [Networking options](https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network)
     *
     * @default - no networking options
     */
    readonly network?: string;
    /**
     * Set platform if server is multi-platform capable. _Requires Docker Engine API v1.38+_.
     *
     * Example value: `linux/amd64`
     *
     * @default - no platform specified
     */
    readonly platform?: string;
}
/**
 * Docker build options
 */
export interface DockerBuildOptions {
    /**
     * Build args
     *
     * @default - no build args
     */
    readonly buildArgs?: {
        [key: string]: string;
    };
    /**
     * Name of the Dockerfile, must relative to the docker build path.
     *
     * @default `Dockerfile`
     */
    readonly file?: string;
    /**
     * Set platform if server is multi-platform capable. _Requires Docker Engine API v1.38+_.
     *
     * Example value: `linux/amd64`
     *
     * @default - no platform specified
     */
    readonly platform?: string;
    /**
     * Set build target for multi-stage container builds. Any stage defined afterwards will be ignored.
     *
     * Example value: `build-env`
     *
     * @default - Build all stages defined in the Dockerfile
     */
    readonly targetStage?: string;
    /**
     * Cache from options to pass to the `docker build` command.
     *
     * @default - no cache from args are passed
     */
    readonly cacheFrom?: DockerCacheOption[];
    /**
     * Cache to options to pass to the `docker build` command.
     *
     * @default - no cache to args are passed
     */
    readonly cacheTo?: DockerCacheOption;
    /**
     * Disable the cache and pass `--no-cache` to the `docker build` command.
     *
     * @default - cache is used
     */
    readonly cacheDisabled?: boolean;
}
