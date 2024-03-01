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
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECI::ImageCache`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImageCache`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
 */
export declare class ImageCache extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ImageCacheProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ContainerGroupId: ContainerGroupId.
     */
    readonly attrContainerGroupId: ros.IResolvable;
    /**
     * Attribute CreateTime: CreateTime.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute EliminationStrategy: The elimination strategy of the mirror cache. The default is empty, indicating that it has been kept.
     */
    readonly attrEliminationStrategy: ros.IResolvable;
    /**
     * Attribute Events: Events.
     */
    readonly attrEvents: ros.IResolvable;
    /**
     * Attribute ExpireDateTime: ExpireDateTime.
     */
    readonly attrExpireDateTime: ros.IResolvable;
    /**
     * Attribute FlashSnapshotId: FlashSnapshotId.
     */
    readonly attrFlashSnapshotId: ros.IResolvable;
    /**
     * Attribute ImageCacheId: ImageCacheId.
     */
    readonly attrImageCacheId: ros.IResolvable;
    /**
     * Attribute ImageCacheName: ImageCacheName.
     */
    readonly attrImageCacheName: ros.IResolvable;
    /**
     * Attribute ImageCacheSize: ImageCacheSize.
     */
    readonly attrImageCacheSize: ros.IResolvable;
    /**
     * Attribute ImageCacheTags: Tags.
     */
    readonly attrImageCacheTags: ros.IResolvable;
    /**
     * Attribute Images: Images.
     */
    readonly attrImages: ros.IResolvable;
    /**
     * Attribute Progress: Progress.
     */
    readonly attrProgress: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: ResourceGroupId.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SnapshotId: SnapshotId.
     */
    readonly attrSnapshotId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageCacheProps, enableResourcePropertyConstraint?: boolean);
}
