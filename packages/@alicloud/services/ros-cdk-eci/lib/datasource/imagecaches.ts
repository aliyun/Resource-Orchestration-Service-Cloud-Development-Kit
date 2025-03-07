import * as ros from '@alicloud/ros-cdk-core';
import { RosImageCaches } from './eci.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosImageCaches as ImageCachesProperty };

/**
 * Properties for defining a `ImageCaches`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches
 */
export interface ImageCachesProps {

    /**
     * Property imageCacheId: ImageCacheId.
     */
    readonly imageCacheId?: string | ros.IResolvable;

    /**
     * Property imageCacheName: ImageCacheName.
     */
    readonly imageCacheName?: string | ros.IResolvable;

    /**
     * Property limit: Number of pages.
     */
    readonly limit?: number | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: ResourceGroupId.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property snapshotId: SnapshotId.
     */
    readonly snapshotId?: string | ros.IResolvable;
}

/**
 * Represents a `ImageCaches`.
 */
export interface IImageCaches extends ros.IResource {
    readonly props: ImageCachesProps;

    /**
     * Attribute ImageCacheIds: The list of image cache IDs.
     */
    readonly attrImageCacheIds: ros.IResolvable | string;

    /**
     * Attribute ImageCaches: The list of image caches.
     */
    readonly attrImageCaches: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECI::ImageCaches`, which is used to query multiple image caches at a time.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImageCaches`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches
 */
export class ImageCaches extends ros.Resource implements IImageCaches {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ImageCachesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ImageCacheIds: The list of image cache IDs.
     */
    public readonly attrImageCacheIds: ros.IResolvable | string;

    /**
     * Attribute ImageCaches: The list of image caches.
     */
    public readonly attrImageCaches: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageCachesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosImageCaches = new RosImageCaches(this, id,  {
            snapshotId: props.snapshotId,
            imageCacheId: props.imageCacheId,
            resourceGroupId: props.resourceGroupId,
            imageCacheName: props.imageCacheName,
            limit: props.limit,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosImageCaches;
        this.attrImageCacheIds = rosImageCaches.attrImageCacheIds;
        this.attrImageCaches = rosImageCaches.attrImageCaches;
    }
}
