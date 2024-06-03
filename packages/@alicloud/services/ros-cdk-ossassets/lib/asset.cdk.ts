import * as path from 'path';
import * as ros from '@alicloud/ros-cdk-core';
import * as cxapi from '@alicloud/ros-cdk-cxapi';

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
export class Asset extends ros.Resource {
    /**
     * Attribute that represents the name of the OSS bucket this asset exists in.
     */
    public readonly bucketName: string;

    /**
     * Attribute which represents the OSS object key of this asset.
     */
    public readonly objectKey: string;

    /**
     * Attribute which represents the OSS HTTP URL of this asset.
     * For example, `https://${bucketName}.oss-${region}.aliyuncs.com/${objectKey}`
     */
    public readonly httpUrl: string;

    /**
     * The path to the asset, relative to the current Cloud Assembly
     *
     * If asset staging is disabled, this will just be the original path.
     * If asset staging is enabled it will be the staged path.
     */
    public readonly assetPath: string;

    /**
     * The OSS bucket in which this asset resides.
     */
    // public readonly bucket: Bucket;

    /**
     * Indicates if this asset is a single file. Allows constructs to ensure that the
     * correct file type was used.
     */
    public readonly isFile: boolean;

    /**
     * Indicates if this asset is a zip archive. Allows constructs to ensure that the
     * correct file type was used.
     */
    public readonly isZipArchive: boolean;

    /**
     * A cryptographic hash of the asset.
     */
    public readonly assetHash: string;

    /**
     * Indicates if this asset got bundled before staged, or not.
     */
    private readonly isBundled: boolean;

    constructor(scope: ros.Construct, id: string, props: AssetProps) {
        super(scope, id);

        this.isBundled = props.bundling != null;

        // stage the asset source (conditionally).
        const staging = new ros.AssetStaging(this, 'Stage', {
            ...props,
            sourcePath: path.resolve(props.path),
            follow: props.followSymlinks,
            assetHash: props.assetHash,
        });

        this.assetHash = staging.assetHash;

        const stack = ros.Stack.of(this);

        this.assetPath = staging.relativeStagedPath(stack);

        this.isFile = staging.packaging === ros.FileAssetPackaging.FILE;

        this.isZipArchive = staging.isArchive;

        const location = stack.synthesizer.addFileAsset({
            packaging: staging.packaging,
            sourceHash: this.assetHash,
            fileName: this.assetPath,
            deployTime: props.deployTime,
        });

        this.bucketName = location.bucketName;
        this.objectKey = location.objectKey;
        this.httpUrl = location.httpUrl;
    }


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
    public addResourceMetadata(resource: ros.RosResource, resourceProperty: string) {
        if (!this.node.tryGetContext(cxapi.ASSET_RESOURCE_METADATA_ENABLED_CONTEXT)) {
            return; // not enabled
        }
        resource.rosOptions.metadata = resource.rosOptions.metadata || { };
        resource.rosOptions.metadata[cxapi.ASSET_RESOURCE_METADATA_PATH_KEY] = this.assetPath;
        resource.rosOptions.metadata[cxapi.ASSET_RESOURCE_METADATA_IS_BUNDLED_KEY] = this.isBundled;
        resource.rosOptions.metadata[cxapi.ASSET_RESOURCE_METADATA_PROPERTY_KEY] = resourceProperty;
    }
}
