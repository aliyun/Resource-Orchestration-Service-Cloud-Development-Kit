import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosImageCache`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
 */
export interface RosImageCacheProps {
    /**
     * @Property imageCacheId: ImageCacheId.
     */
    readonly imageCacheId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECI::ImageCache`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImageCache` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
 */
export declare class RosImageCache extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECI::ImageCache";
    /**
     * @Attribute ContainerGroupId: ContainerGroupId.
     */
    readonly attrContainerGroupId: ros.IResolvable;
    /**
     * @Attribute CreateTime: CreateTime.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute EliminationStrategy: The elimination strategy of the mirror cache. The default is empty, indicating that it has been kept.
     */
    readonly attrEliminationStrategy: ros.IResolvable;
    /**
     * @Attribute Events: Events.
     */
    readonly attrEvents: ros.IResolvable;
    /**
     * @Attribute ExpireDateTime: ExpireDateTime.
     */
    readonly attrExpireDateTime: ros.IResolvable;
    /**
     * @Attribute FlashSnapshotId: FlashSnapshotId.
     */
    readonly attrFlashSnapshotId: ros.IResolvable;
    /**
     * @Attribute ImageCacheId: ImageCacheId.
     */
    readonly attrImageCacheId: ros.IResolvable;
    /**
     * @Attribute ImageCacheName: ImageCacheName.
     */
    readonly attrImageCacheName: ros.IResolvable;
    /**
     * @Attribute ImageCacheSize: ImageCacheSize.
     */
    readonly attrImageCacheSize: ros.IResolvable;
    /**
     * @Attribute ImageCacheTags: Tags.
     */
    readonly attrImageCacheTags: ros.IResolvable;
    /**
     * @Attribute Images: Images.
     */
    readonly attrImages: ros.IResolvable;
    /**
     * @Attribute Progress: Progress.
     */
    readonly attrProgress: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: ResourceGroupId.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SnapshotId: SnapshotId.
     */
    readonly attrSnapshotId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageCacheId: ImageCacheId.
     */
    imageCacheId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageCacheProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosImageCaches`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches
 */
export interface RosImageCachesProps {
    /**
     * @Property imageCacheId: ImageCacheId.
     */
    readonly imageCacheId?: string | ros.IResolvable;
    /**
     * @Property imageCacheName: ImageCacheName.
     */
    readonly imageCacheName?: string | ros.IResolvable;
    /**
     * @Property limit: Number of pages.
     */
    readonly limit?: number | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: ResourceGroupId.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property snapshotId: SnapshotId.
     */
    readonly snapshotId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECI::ImageCaches`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImageCaches` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches
 */
export declare class RosImageCaches extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECI::ImageCaches";
    /**
     * @Attribute ImageCacheIds: The list of image cache IDs.
     */
    readonly attrImageCacheIds: ros.IResolvable;
    /**
     * @Attribute ImageCaches: The list of image caches.
     */
    readonly attrImageCaches: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property imageCacheId: ImageCacheId.
     */
    imageCacheId: string | ros.IResolvable | undefined;
    /**
     * @Property imageCacheName: ImageCacheName.
     */
    imageCacheName: string | ros.IResolvable | undefined;
    /**
     * @Property limit: Number of pages.
     */
    limit: number | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: ResourceGroupId.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property snapshotId: SnapshotId.
     */
    snapshotId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageCachesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
