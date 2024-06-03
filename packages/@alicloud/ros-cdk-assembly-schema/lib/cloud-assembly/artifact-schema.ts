/**
 * Artifact properties for ROS stacks.
 */
export interface AliyunRosStackProperties {
  /**
   * A file relative to the assembly root which contains the ROS template for this stack.
   */
  readonly templateFile: string;

  /**
   * Values for ROS stack parameters that should be passed when the stack is deployed.
   *
   * @default - No parameters
   */
  readonly parameters?: { [id: string]: string };

  /**
   * Values for ROS stack tags that should be passed when the stack is deployed.
   *
   * @default - No tags
   */
  readonly tags?: { [id: string]: string };

  /**
   * The name to use for the ROS stack.
   * @default - name derived from artifact ID
   */
  readonly stackName?: string;
}

/**
 * Artifact properties for the Construct Tree Artifact
 */
export interface TreeArtifactProperties {
  /**
   * Filename of the tree artifact
   */
  readonly file: string;
}

/**
 * Artifact properties for nested cloud assemblies
 */
export interface NestedCloudAssemblyProperties {
  /**
   * Relative path to the nested cloud assembly
   */
  readonly directoryName: string;

  /**
   * Display name for the cloud assembly
   *
   * @default - The artifact ID
   */
  readonly displayName?: string;
}

/**
 * Configuration options for the Asset Manifest
 */
export interface AssetManifestOptions {
}

/**
 * Artifact properties for the Asset Manifest
 */
export interface AssetManifestProperties extends AssetManifestOptions {
  /**
   * Filename of the asset manifest
   */
  readonly file: string;
}

/**
 * Properties for manifest artifacts
 */
export type ArtifactProperties =
  | AliyunRosStackProperties
  | TreeArtifactProperties
  | NestedCloudAssemblyProperties;
