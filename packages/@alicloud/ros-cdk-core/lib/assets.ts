import { BundlingOptions } from './bundling';

/**
 * Common interface for all assets.
 */
export interface IAsset {
  /**
   * A hash of this asset, which is available at construction time. As this is a plain string, it
   * can be used in construct IDs in order to enforce creation of a new resource when the content
   * hash has changed.
   */
  readonly assetHash: string;
}

/**
 * Asset hash options
 */
export interface AssetOptions {
  /**
   * Specify a custom hash for this asset. If `assetHashType` is set it must
   * be set to `AssetHashType.CUSTOM`. For consistency, this custom hash will
   * be SHA256 hashed and encoded as hex. The resulting hash will be the asset
   * hash.
   *
   * NOTE: the hash is used in order to identify a specific revision of the asset, and
   * used for optimizing and caching deployment activities related to this asset such as
   * packaging, uploading to OSS bucket, etc. If you chose to customize the hash, you will
   * need to make sure it is updated every time the asset changes, or otherwise it is
   * possible that some deployments will not be invalidated.
   *
   * @default - based on `assetHashType`
   */
  readonly assetHash?: string;

  /**
   * Specifies the type of hash to calculate for this asset.
   *
   * If `assetHash` is configured, this option must be `undefined` or
   * `AssetHashType.CUSTOM`.
   *
   * @default - the default is `AssetHashType.SOURCE`, but if `assetHash` is
   * explicitly specified this value defaults to `AssetHashType.CUSTOM`.
   */
  readonly assetHashType?: AssetHashType;

  /**
   * Bundle the asset by executing a command in a Docker container or a custom bundling provider.
   *
   * The asset path will be mounted at `/asset-input`. The Docker
   * container is responsible for putting content at `/asset-output`.
   * The content at `/asset-output` will be zipped and used as the
   * final asset.
   *
   * @default - uploaded as-is to OSS bucket if the asset is a regular file or a .zip file,
   * archived into a .zip file and uploaded to OSS bucket otherwise.
   *
   */
  readonly bundling?: BundlingOptions;
}

/**
 * The type of asset hash
 *
 * NOTE: the hash is used in order to identify a specific revision of the asset, and
 * used for optimizing and caching deployment activities related to this asset such as
 * packaging, uploading to OSS bucket, etc.
 */
export enum AssetHashType {
  /**
   * Based on the content of the source path
   *
   * When bundling, use `SOURCE` when the content of the bundling output is not
   * stable across repeated bundling operations.
   */
  SOURCE = 'source',

  /**
   * Based on the content of the bundling output
   *
   * Use `OUTPUT` when the source of the asset is a top level folder containing
   * code and/or dependencies that are not directly linked to the asset.
   */
  OUTPUT = 'output',

  /**
   * Use a custom hash
   */
  CUSTOM = 'custom',
}

/**
 * Represents the source for a file asset.
 */
export interface FileAssetSource {
  /**
   * A hash on the content source. This hash is used to uniquely identify this
   * asset throughout the system. If this value doesn't change, the asset will
   * not be rebuilt or republished.
   */
  readonly sourceHash: string;

  /**
   * An external command that will produce the packaged asset.
   *
   * The command should produce the location of a ZIP file on `stdout`.
   *
   * @default - Exactly one of `fileName` and `executable` is required
   */
  readonly executable?: string[];

  /**
   * The path, relative to the root of the cloud assembly, in which this asset
   * source resides. This can be a path to a file or a directory, depending on the
   * packaging type.
   *
   * @default - Exactly one of `fileName` and `executable` is required
   */
  readonly fileName?: string;

  /**
   * Which type of packaging to perform.
   *
   * @default - Required if `fileName` is specified.
   */
  readonly packaging?: FileAssetPackaging;

  /**
   * Whether or not the asset needs to exist beyond deployment time; i.e.
   * are copied over to a different location and not needed afterwards.
   * Setting this property to true has an impact on the lifecycle of the asset,
   * because we will assume that it is safe to delete after the ROS
   * deployment succeeds.
   *
   * For example, FC Function assets are copied over to FC during
   * deployment. Therefore, it is not necessary to store the asset in OSS bucket, so
   * we consider those deployTime assets.
   *
   * @default false
   */
  readonly deployTime?: boolean;
}

/**
 * Options for configuring the Docker cache backend
 */
export interface DockerCacheOption {
  /**
   * The type of cache to use.
   * Refer to https://docs.docker.com/build/cache/backends/ for full list of backends.
   * @default - unspecified
   *
   * @example 'registry'
   */
  readonly type: string;
  /**
   * Any parameters to pass into the docker cache backend configuration.
   * Refer to https://docs.docker.com/build/cache/backends/ for cache backend configuration.
   * @default {} No options provided
   *
   */
  readonly params?: { [key: string]: string };
}


/**
 * The location of the published docker image. This is where the image can be
 * consumed at runtime.
 */
export interface DockerImageAssetLocation {
  /**
   * The URI of the image in Aliyun ACR (including a tag).
   */
  readonly imageUri: string;

  /**
   * The name of the ACR repository.
   */
  readonly repositoryName: string;

  /**
   * The tag of the image in Aliyun ACR.
   * @default - the hash of the asset, or the `dockerTagPrefix` concatenated with the asset hash if a `dockerTagPrefix` is specified in the stack synthesizer
   */
  readonly imageTag?: string;
}


export interface DockerImageAssetSource {
  /**
   * The hash of the contents of the docker build context. This hash is used
   * throughout the system to identify this image and avoid duplicate work
   * in case the source did not change.
   *
   * NOTE: this means that if you wish to update your docker image, you
   * must make a modification to the source (e.g. add some metadata to your Dockerfile).
   */
  readonly sourceHash: string;

  /**
   * An external command that will produce the packaged asset.
   *
   * The command should produce the name of a local Docker image on `stdout`.
   *
   * @default - Exactly one of `directoryName` and `executable` is required
   */
  readonly executable?: string[];

  /**
   * The directory where the Dockerfile is stored, must be relative
   * to the cloud assembly root.
   *
   * @default - Exactly one of `directoryName` and `executable` is required
   */
  readonly directoryName?: string;

  /**
   * Build args to pass to the `docker build` command.
   *
   * Since Docker build arguments are resolved before deployment, keys and
   * values cannot refer to unresolved tokens.
   *
   * Only allowed when `directoryName` is specified.
   *
   * @default - no build args are passed
   */
  readonly dockerBuildArgs?: { [key: string]: string };

  /**
   * Build sACRets to pass to the `docker build` command.
   *
   * Since Docker build sACRets are resolved before deployment, keys and
   * values cannot refer to unresolved tokens.
   *
   * Only allowed when `directoryName` is specified.
   *
   * @default - no build sACRets are passed
   */
  readonly dockerBuildSACRets?: { [key: string]: string };

  /**
   * SSH agent socket or keys to pass to the `docker buildx` command.
   *
   * @default - no ssh arg is passed
   */
  readonly dockerBuildSsh?: string;

  /**
   * Docker target to build to
   *
   * Only allowed when `directoryName` is specified.
   *
   * @default - no target
   */
  readonly dockerBuildTarget?: string;

  /**
   * Path to the Dockerfile (relative to the directory).
   *
   * Only allowed when `directoryName` is specified.
   *
   * @default - no file
   */
  readonly dockerFile?: string;

  /**
   * Networking mode for the RUN commands during build. _Requires Docker Engine API v1.25+_.
   *
   * Specify this property to build images on a specific networking mode.
   *
   * @default - no networking mode specified
   */
  readonly networkMode?: string;

  /**
   * Platform to build for. _Requires Docker Buildx_.
   *
   * Specify this property to build images on a specific platform.
   *
   * @default - no platform specified (the current machine architecture will be used)
   */
  readonly platform?: string;

  /**
   * Outputs to pass to the `docker build` command.
   *
   * @default - no build args are passed
   */
  readonly dockerOutputs?: string[];

  /**
   * Unique identifier of the docker image asset and its potential revisions.
   * Required if using AppScopedStagingSynthesizer.
   *
   * @default - no asset name
   */
  readonly assetName?: string;

  /**
   * Cache from options to pass to the `docker build` command.
   *
   * @default - no cache from args are passed
   */
  readonly dockerCacheFrom?: DockerCacheOption[];

  /**
   * Cache to options to pass to the `docker build` command.
   *
   * @default - no cache to args are passed
   */
  readonly dockerCacheTo?: DockerCacheOption;

  /**
   * Disable the cache and pass `--no-cache` to the `docker build` command.
   *
   * @default - cache is used
   */
  readonly dockerCacheDisabled?: boolean;
}

/**
 * Packaging modes for file assets.
 */
export enum FileAssetPackaging {
  /**
   * The asset source path points to a directory, which should be archived using
   * zip and and then uploaded to Aliyun OSS bucket.
   */
  ZIP_DIRECTORY = 'zip',

  /**
   * The asset source path points to a single file, which should be uploaded
   * to Aliyun OSS bucket.
   */
  FILE = 'file',
}

/**
 * The location of the published file asset. This is where the asset
 * can be consumed at runtime.
 */
export interface FileAssetLocation {
  /**
   * The name of the OSS bucket.
   */
  readonly bucketName: string;

  /**
   * The path of OSS object.
   */
  readonly objectKey: string;

  /**
   * The HTTP URL of this asset on OSS.
   *
   * This value suitable for inclusion in a ROS template, and
   * may be an encoded token.
   *
   * Example value: `https://${bucketName}.oss-${region}.aliyuncs.com/${objectKey}`
   */
  readonly httpUrl: string;

  /**
   * The region of the OSS bucket.
   */
  readonly region?: string;
}
