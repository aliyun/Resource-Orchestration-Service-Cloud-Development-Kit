import * as ros from '@alicloud/ros-cdk-core';
export interface AssetOptions extends ros.FileCopyOptions, ros.AssetOptions {
    /**
     * Whether or not the asset needs to exist beyond deployment time; i.e.
     * are copied over to a different location and not needed afterwards.
     * Setting this property to true has an impact on the lifecycle of the asset,
     * because we will assume that it is safe to delete after the ROS
     * deployment succeeds.
     *
     * For example, FC Function assets are copied over to Function during
     * deployment. Therefore, it is not necessary to store the asset in OSS bucket,
     * so we consider those deployTime assets.
     *
     * @default false
     */
    readonly deployTime?: boolean;
}
export interface AssetProps extends AssetOptions {
    /**
     * The disk location of the asset.
     *
     * The path should refer to one of the following:
     * - A regular file or a .zip file, in which case the file will be uploaded as-is to OSS bucket.
     * - A directory, in which case it will be archived into a .zip file and uploaded to OSS bucket.
     */
    readonly path: string;
}
/**
 * An asset represents a local file or directory, which is automatically uploaded to OSS bucket
 * and then can be referenced within a CDK application.
 */
export declare class Asset extends ros.Resource {
    /**
     * Attribute that represents the name of the OSS bucket this asset exists in.
     */
    readonly bucketName: string;
    /**
     * Attribute which represents the OSS object key of this asset.
     */
    readonly objectKey: string;
    /**
     * Attribute which represents the OSS HTTP URL of this asset.
     * For example, `https://${bucketName}.oss-${region}.aliyuncs.com/${objectKey}`
     */
    readonly httpUrl: string;
    /**
     * The path to the asset, relative to the current Cloud Assembly
     *
     * If asset staging is disabled, this will just be the original path.
     * If asset staging is enabled it will be the staged path.
     */
    readonly assetPath: string;
    /**
     * The OSS bucket in which this asset resides.
     */
    /**
     * Indicates if this asset is a single file. Allows constructs to ensure that the
     * correct file type was used.
     */
    readonly isFile: boolean;
    /**
     * Indicates if this asset is a zip archive. Allows constructs to ensure that the
     * correct file type was used.
     */
    readonly isZipArchive: boolean;
    /**
     * A cryptographic hash of the asset.
     */
    readonly assetHash: string;
    /**
     * Indicates if this asset got bundled before staged, or not.
     */
    private readonly isBundled;
    constructor(scope: ros.Construct, id: string, props: AssetProps);
    /**
     * Adds ROS template metadata to the specified resource with
     * information that indicates which resource property is mapped to this local
     * asset.
     *
     * Asset metadata will only be included if the stack is synthesized with the
     * "ros:cdk:enable-asset-metadata" context key defined, which is the default
     * behavior when synthesizing via the CDK Toolkit.
     *
     * @param resource The ROS resource which is using this asset
     * @param resourceProperty The property name where this asset is referenced
     */
    addResourceMetadata(resource: ros.RosResource, resourceProperty: string): void;
}
