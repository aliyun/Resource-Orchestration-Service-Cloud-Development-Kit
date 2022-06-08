import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomImage } from './ecs.generated';
export { RosCustomImage as CustomImageProperty };
/**
 * Properties for defining a `ALIYUN::ECS::CustomImage`
 */
export interface CustomImageProps {
    /**
     * Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture. Ranges:
     * I386
     * X86_64 (default)
     */
    readonly architecture?: string | ros.IResolvable;
    /**
     * Property description: The description of the image.
     * It can be [0, 256] letters in length.
     * It cannot begin with http:// or https://.
     * Default value: null.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property diskDeviceMapping:
     */
    readonly diskDeviceMapping?: Array<RosCustomImage.DiskDeviceMappingProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property imageFamily: The name of the image family of the custom image. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It cannot contain http:// or https://. It must start with a letter and cannot start with acs: or aliyun.This parameter is empty by default.
     */
    readonly imageFamily?: string | ros.IResolvable;
    /**
     * Property imageName: Image name.
     * Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
     * Cannot begin with http:// or https://.
     */
    readonly imageName?: string | ros.IResolvable;
    /**
     * Property instanceId: Instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform.
     */
    readonly platform?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which to assign the custom image.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property snapshotId: The snapshot ID. A custom image is created from the specified snapshot.
     */
    readonly snapshotId?: string | ros.IResolvable;
    /**
     * Property sourceRegionId: ID of the region to where the instance/snapshot belongs. Default is current region ID.
     */
    readonly sourceRegionId?: string | ros.IResolvable;
    /**
     * Property tag:
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::CustomImage`
 */
export declare class CustomImage extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ImageId: Image ID
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * Attribute SourceRegionId: ID of the region to where the instance/snapshot belongs.
     */
    readonly attrSourceRegionId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECS::CustomImage`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: CustomImageProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=customimage.d.ts.map