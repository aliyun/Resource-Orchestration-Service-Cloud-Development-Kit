import * as ros from '@alicloud/ros-cdk-core';
import { RosImageCaches } from './eci.generated';
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
     * Property resourceGroupId: ResourceGroupId.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property snapshotId: SnapshotId.
     */
    readonly snapshotId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECI::ImageCaches`, which is used to query multiple image caches at a time.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImageCaches`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches
 */
export declare class ImageCaches extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ImageCachesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ImageCacheIds: The list of image cache IDs.
     */
    readonly attrImageCacheIds: ros.IResolvable;
    /**
     * Attribute ImageCaches: The list of image caches.
     */
    readonly attrImageCaches: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ImageCachesProps, enableResourcePropertyConstraint?: boolean);
}
