/**
 * If this is set in the context, the ros:asset:xxx metadata entries will not be
 * added to the template. This is used, for example, when we run integrationt
 * tests.
 */
export declare const ASSET_RESOURCE_METADATA_ENABLED_CONTEXT = "ros:cdk:enable-asset-metadata";
/**
 * Metadata added to the ROS template entries that map local assets
 * to resources.
 */
export declare const ASSET_RESOURCE_METADATA_PATH_KEY = "ros:asset:path";
export declare const ASSET_RESOURCE_METADATA_PROPERTY_KEY = "ros:asset:property";
export declare const ASSET_RESOURCE_METADATA_IS_BUNDLED_KEY = "ros:asset:is-bundled";
/**
 * Separator string that separates the prefix separator from the object key separator.
 *
 * Asset keys will look like:
 *
 *    /assets/MyConstruct12345678/||abcdef12345.zip
 *
 * This allows us to encode both the prefix and the full location in a single
 * ROS Template Parameter.
 */
export declare const ASSET_PREFIX_SEPARATOR = "||";
