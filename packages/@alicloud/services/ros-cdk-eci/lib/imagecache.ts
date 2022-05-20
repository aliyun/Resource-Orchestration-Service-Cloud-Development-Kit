import * as ros from '@alicloud/ros-cdk-core';
import { RosImageCache } from './eci.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosImageCache as ImageCacheProperty };

/**
 * Properties for defining a `ALIYUN::ECI::ImageCache`
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
     * Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
     */
    readonly eipInstanceId?: string | ros.IResolvable;

    /**
     * Property imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
     */
    readonly imageRegistryCredential?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ECI::ImageCache`
 */
export class ImageCache extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ImageCacheId: The ID of the image cache.
     */
    public readonly attrImageCacheId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ECI::ImageCache`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageCacheProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosImageCache = new RosImageCache(this, id,  {
            resourceGroupId: props.resourceGroupId,
            securityGroupId: props.securityGroupId,
            vSwitchId: props.vSwitchId,
            imageRegistryCredential: props.imageRegistryCredential,
            imageCacheName: props.imageCacheName,
            image: props.image,
            eipInstanceId: props.eipInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosImageCache;
        this.attrImageCacheId = rosImageCache.attrImageCacheId;
    }
}
