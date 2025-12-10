import * as ros from '@alicloud/ros-cdk-core';
import { RosImageCache } from './eci.generated';
export { RosImageCache as ImageCacheProperty };
/**
 * Properties for defining a `ImageCache`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-imagecache
 */
export interface ImageCacheProps {
    /**
     * Property image: The image list to be cached.
     */
    readonly image: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property imageCacheName: Image cache name.
     */
    readonly imageCacheName: string | ros.IResolvable;
    /**
     * Property securityGroupId: Security group ID.
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property acrRegistryInfo: Enterprise Edition access credential configuration information.
     */
    readonly acrRegistryInfo?: Array<RosImageCache.AcrRegistryInfoProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property autoMatchImageCache: Specifies whether to enable reuse of image cache layers. If you enable this feature, and the image cache that you want to createand an existing image cache contain duplicate image layers, the system reuses the duplicate image layers to create the new image cache.
     *  This accelerates the creation of the image cache.
     * Valid values: true: enables reuse of image cache layers.
     * false: disables reuse of image cache layers.
     * Default value: false.
     */
    readonly autoMatchImageCache?: boolean | ros.IResolvable;
    /**
     * Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
     */
    readonly eipInstanceId?: string | ros.IResolvable;
    /**
     * Property imageCacheSize: The size of the image cache. Unit: GiB. Default value: 20.
     */
    readonly imageCacheSize?: number | ros.IResolvable;
    /**
     * Property imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
     */
    readonly imageRegistryCredential?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property retentionDays: The retention period of the image cache. Unit: days. When the retention period ends, the image cache expires and is deleted.
     *  By default, image caches never expire.
     * Note: The image caches that fail to be created are only retained for one day.
     */
    readonly retentionDays?: number | ros.IResolvable;
    /**
     * Property zoneId: The zone ID of the image cache.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * Represents a `ImageCache`.
 */
export interface IImageCache extends ros.IResource {
    readonly props: ImageCacheProps;
    /**
     * Attribute ImageCacheId: The ID of the image cache.
     */
    readonly attrImageCacheId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECI::ImageCache`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImageCache`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-imagecache
 */
export declare class ImageCache extends ros.Resource implements IImageCache {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ImageCacheProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ImageCacheId: The ID of the image cache.
     */
    readonly attrImageCacheId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageCacheProps, enableResourcePropertyConstraint?: boolean);
}
