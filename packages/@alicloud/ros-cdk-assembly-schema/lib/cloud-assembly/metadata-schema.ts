/**
 * Metadata Entry spec for stack tag.
 */
export interface Tag {
  /**
   * Tag key.
   */
  readonly key: string;

  /**
   * Tag value.
   */
  readonly value: string;
}

// Type aliases for metadata entries.
// Used simply to assign names to data types for more clarity.

/**
 * @see ArtifactMetadataEntryType.INFO
 * @see ArtifactMetadataEntryType.WARN
 * @see ArtifactMetadataEntryType.ERROR
 */
export type LogMessageMetadataEntry = string;

/**
 * @see ArtifactMetadataEntryType.LOGICAL_ID
 */
export type LogicalIdMetadataEntry = string;

/**
 * @see ArtifactMetadataEntryType.STACK_TAGS
 */
export type StackTagsMetadataEntry = Tag[];

/**
 * Union type for all metadata entries that might exist in the manifest.
 */
export type MetadataEntryData =
  | LogMessageMetadataEntry
  | LogicalIdMetadataEntry
  | StackTagsMetadataEntry;

/**
 * Type of artifact metadata entry.
 */
export enum ArtifactMetadataEntryType {
  /**
   * Asset in metadata.
   */
  ASSET = 'aliyun:ros:asset',

  /**
   * Metadata key used to print INFO-level messages by the toolkit when an app is syntheized.
   */
  INFO = "aliyun:ros:info",

  /**
   * Metadata key used to print WARNING-level messages by the toolkit when an app is syntheized.
   */
  WARN = "aliyun:ros:warning",

  /**
   * Metadata key used to print ERROR-level messages by the toolkit when an app is syntheized.
   */
  ERROR = "aliyun:ros:error",

  /**
   * Represents the ROS logical ID of a resource at a certain path.
   */
  LOGICAL_ID = "aliyun:ros:logicalId",

  /**
   * Represents tags of a stack.
   */
  STACK_TAGS = "aliyun:ros:stack-tags",
}

/**
 * A metadata entry in a cloud assembly artifact.
 */
export interface MetadataEntry {
  /**
   * The type of the metadata entry.
   */
  readonly type: string;

  /**
   * The data.
   *
   * @default - no data.
   */
  readonly data?: MetadataEntryData;

  /**
   * A stack trace for when the entry was created.
   *
   * @default - no trace.
   */
  readonly trace?: string[];
}

/**
 * Common properties for asset metadata.
 */
interface BaseAssetMetadataEntry {
  /**
   * Requested packaging style
   */
  readonly packaging: string;

  /**
   * Logical identifier for the asset
   */
  readonly id: string;

  /**
   * The hash of the asset source.
   */
  readonly sourceHash: string;

  /**
   * Path on disk to the asset
   */
  readonly path: string;
}

/**
 * Metadata Entry spec for files.
 *
 * @example
 * const entry = {
 *   packaging: 'file',
 *   ossBucketParameter: 'bucket-parameter',
 *   ossKeyParameter: 'key-parameter',
 *   artifactHashParameter: 'hash-parameter',
 * }
 */
export interface FileAssetMetadataEntry extends BaseAssetMetadataEntry {
  /**
   * Requested packaging style
   */
  readonly packaging: 'zip' | 'file';

  /**
   * Name of parameter where OSS bucket should be passed in
   */
  readonly ossBucketParameter: string;

  /**
   * Name of parameter where OSS object key should be passed in
   */
  readonly ossKeyParameter: string;

  /**
   * The name of the parameter where the hash of the bundled asset should be passed in.
   */
  readonly artifactHashParameter: string;
}
