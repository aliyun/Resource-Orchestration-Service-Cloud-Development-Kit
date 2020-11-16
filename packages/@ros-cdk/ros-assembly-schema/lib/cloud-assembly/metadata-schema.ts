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
