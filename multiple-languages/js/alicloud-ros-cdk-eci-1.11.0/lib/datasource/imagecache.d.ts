import * as ros from '@alicloud/ros-cdk-core';
import { RosImageCache } from './eci.generated';
export { RosImageCache as ImageCacheProperty };
/**
 * Properties for defining a `ImageCache`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
 */
export interface ImageCacheProps {
    /**
     * Property imageCacheId: ImageCacheId.
     */
    readonly imageCacheId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `ImageCache`.
 */
export interface IImageCache extends ros.IResource {
    readonly props: ImageCacheProps;
    /**
     * Attribute ContainerGroupId: ContainerGroupId.
     */
    readonly attrContainerGroupId: ros.IResolvable | string;
    /**
     * Attribute CreateTime: CreateTime.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute EliminationStrategy: The elimination strategy of the mirror cache. The default is empty, indicating that it has been kept.
     */
    readonly attrEliminationStrategy: ros.IResolvable | string;
    /**
     * Attribute Events: Events.
     */
    readonly attrEvents: ros.IResolvable | string;
    /**
     * Attribute ExpireDateTime: ExpireDateTime.
     */
    readonly attrExpireDateTime: ros.IResolvable | string;
    /**
     * Attribute FlashSnapshotId: FlashSnapshotId.
     */
    readonly attrFlashSnapshotId: ros.IResolvable | string;
    /**
     * Attribute ImageCacheId: ImageCacheId.
     */
    readonly attrImageCacheId: ros.IResolvable | string;
    /**
     * Attribute ImageCacheName: ImageCacheName.
     */
    readonly attrImageCacheName: ros.IResolvable | string;
    /**
     * Attribute ImageCacheSize: ImageCacheSize.
     */
    readonly attrImageCacheSize: ros.IResolvable | string;
    /**
     * Attribute ImageCacheTags: Tags.
     */
    readonly attrImageCacheTags: ros.IResolvable | string;
    /**
     * Attribute Images: Images.
     */
    readonly attrImages: ros.IResolvable | string;
    /**
     * Attribute Progress: Progress.
     */
    readonly attrProgress: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: ResourceGroupId.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SnapshotId: SnapshotId.
     */
    readonly attrSnapshotId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECI::ImageCache`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImageCache`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
 */
export declare class ImageCache extends ros.Resource implements IImageCache {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ImageCacheProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ContainerGroupId: ContainerGroupId.
     */
    readonly attrContainerGroupId: ros.IResolvable | string;
    /**
     * Attribute CreateTime: CreateTime.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute EliminationStrategy: The elimination strategy of the mirror cache. The default is empty, indicating that it has been kept.
     */
    readonly attrEliminationStrategy: ros.IResolvable | string;
    /**
     * Attribute Events: Events.
     */
    readonly attrEvents: ros.IResolvable | string;
    /**
     * Attribute ExpireDateTime: ExpireDateTime.
     */
    readonly attrExpireDateTime: ros.IResolvable | string;
    /**
     * Attribute FlashSnapshotId: FlashSnapshotId.
     */
    readonly attrFlashSnapshotId: ros.IResolvable | string;
    /**
     * Attribute ImageCacheId: ImageCacheId.
     */
    readonly attrImageCacheId: ros.IResolvable | string;
    /**
     * Attribute ImageCacheName: ImageCacheName.
     */
    readonly attrImageCacheName: ros.IResolvable | string;
    /**
     * Attribute ImageCacheSize: ImageCacheSize.
     */
    readonly attrImageCacheSize: ros.IResolvable | string;
    /**
     * Attribute ImageCacheTags: Tags.
     */
    readonly attrImageCacheTags: ros.IResolvable | string;
    /**
     * Attribute Images: Images.
     */
    readonly attrImages: ros.IResolvable | string;
    /**
     * Attribute Progress: Progress.
     */
    readonly attrProgress: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: ResourceGroupId.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SnapshotId: SnapshotId.
     */
    readonly attrSnapshotId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageCacheProps, enableResourcePropertyConstraint?: boolean);
}
