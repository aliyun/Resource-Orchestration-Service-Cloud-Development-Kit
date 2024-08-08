import * as ros from '@alicloud/ros-cdk-core';
import { RosImageCache } from './eci.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECI::ImageCache`, which is used to query the information about an image cache.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImageCache`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
 */
export class ImageCache extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ImageCacheProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ContainerGroupId: ContainerGroupId.
     */
    public readonly attrContainerGroupId: ros.IResolvable;

    /**
     * Attribute CreateTime: CreateTime.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute EliminationStrategy: The elimination strategy of the mirror cache. The default is empty, indicating that it has been kept.
     */
    public readonly attrEliminationStrategy: ros.IResolvable;

    /**
     * Attribute Events: Events.
     */
    public readonly attrEvents: ros.IResolvable;

    /**
     * Attribute ExpireDateTime: ExpireDateTime.
     */
    public readonly attrExpireDateTime: ros.IResolvable;

    /**
     * Attribute FlashSnapshotId: FlashSnapshotId.
     */
    public readonly attrFlashSnapshotId: ros.IResolvable;

    /**
     * Attribute ImageCacheId: ImageCacheId.
     */
    public readonly attrImageCacheId: ros.IResolvable;

    /**
     * Attribute ImageCacheName: ImageCacheName.
     */
    public readonly attrImageCacheName: ros.IResolvable;

    /**
     * Attribute ImageCacheSize: ImageCacheSize.
     */
    public readonly attrImageCacheSize: ros.IResolvable;

    /**
     * Attribute ImageCacheTags: Tags.
     */
    public readonly attrImageCacheTags: ros.IResolvable;

    /**
     * Attribute Images: Images.
     */
    public readonly attrImages: ros.IResolvable;

    /**
     * Attribute Progress: Progress.
     */
    public readonly attrProgress: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: ResourceGroupId.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SnapshotId: SnapshotId.
     */
    public readonly attrSnapshotId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageCacheProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosImageCache = new RosImageCache(this, id,  {
            imageCacheId: props.imageCacheId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosImageCache;
        this.attrContainerGroupId = rosImageCache.attrContainerGroupId;
        this.attrCreateTime = rosImageCache.attrCreateTime;
        this.attrEliminationStrategy = rosImageCache.attrEliminationStrategy;
        this.attrEvents = rosImageCache.attrEvents;
        this.attrExpireDateTime = rosImageCache.attrExpireDateTime;
        this.attrFlashSnapshotId = rosImageCache.attrFlashSnapshotId;
        this.attrImageCacheId = rosImageCache.attrImageCacheId;
        this.attrImageCacheName = rosImageCache.attrImageCacheName;
        this.attrImageCacheSize = rosImageCache.attrImageCacheSize;
        this.attrImageCacheTags = rosImageCache.attrImageCacheTags;
        this.attrImages = rosImageCache.attrImages;
        this.attrProgress = rosImageCache.attrProgress;
        this.attrResourceGroupId = rosImageCache.attrResourceGroupId;
        this.attrSnapshotId = rosImageCache.attrSnapshotId;
    }
}
