import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomImage } from './ecs.generated';
export { RosCustomImage as CustomImageProperty };
/**
 * Properties for defining a `CustomImage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-customimage
 */
export interface CustomImageProps {
    /**
     * Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture. Ranges:
     * I386
     * X86_64 (default)
     */
    readonly architecture?: string | ros.IResolvable;
    /**
     * Property bootMode: Modify the startup mode of the image. Ranges:
     * BIOS: BIOS boot mode.
     * UEFI: UEFI boot mode.
     * You need to know the startup mode supported by the specified image. After modifying the startup mode through this parameter, it must match the startup mode supported by the image itself so that the instance can start normally.
     */
    readonly bootMode?: string | ros.IResolvable;
    /**
     * Property description: The description of the image.
     * It can be [0, 256] letters in length.
     * It cannot begin with http:\/\/ or https:\/\/.
     * Default value: null.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property detectionStrategy: Image detection policy. If this parameter is not configured, detection will not be triggered. Only Standard detection mode is supported.Currently, most Linux\/Windows versions are supported.
     */
    readonly detectionStrategy?: string | ros.IResolvable;
    /**
     * Property diskDeviceMapping:
     */
    readonly diskDeviceMapping?: Array<RosCustomImage.DiskDeviceMappingProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property features: Mirror feature-related properties.
     */
    readonly features?: RosCustomImage.FeaturesProperty | ros.IResolvable;
    /**
     * Property imageFamily: The name of the image family of the image. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It cannot contain http:\/\/ or https:\/\/. It must start with a letter and cannot start with acs: or aliyun.This parameter is empty by default.
     */
    readonly imageFamily?: string | ros.IResolvable;
    /**
     * Property imageName: Image name.
     * Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
     * Cannot begin with http:\/\/ or https:\/\/.
     */
    readonly imageName?: string | ros.IResolvable;
    /**
     * Property imageVersion: Image version.
     * When you specify an instance ID (InstanceId) and the image of the instance is a cloud market image or a custom image created from a cloud market image. This parameter must be the same as the ImageVersion of the current instance image or set to empty.
     */
    readonly imageVersion?: string | ros.IResolvable;
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
     * Property sourceRegionId: ID of the region to where the instance\/snapshot belongs. Default is current region ID.
     */
    readonly sourceRegionId?: string | ros.IResolvable;
    /**
     * Property tag:
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `CustomImage`.
 */
export interface ICustomImage extends ros.IResource {
    readonly props: CustomImageProps;
    /**
     * Attribute ImageId: Image ID
     */
    readonly attrImageId: ros.IResolvable | string;
    /**
     * Attribute SourceRegionId: ID of the region to where the instance/snapshot belongs.
     */
    readonly attrSourceRegionId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::CustomImage`, which is used to create a custom image.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomImage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-customimage
 */
export declare class CustomImage extends ros.Resource implements ICustomImage {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CustomImageProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ImageId: Image ID
     */
    readonly attrImageId: ros.IResolvable | string;
    /**
     * Attribute SourceRegionId: ID of the region to where the instance/snapshot belongs.
     */
    readonly attrSourceRegionId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: CustomImageProps, enableResourcePropertyConstraint?: boolean);
}
