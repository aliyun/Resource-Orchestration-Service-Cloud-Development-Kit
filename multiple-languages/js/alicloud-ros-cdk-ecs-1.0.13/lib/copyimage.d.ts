import * as ros from '@alicloud/ros-cdk-core';
import { RosCopyImage } from './ecs.generated';
export { RosCopyImage as CopyImageProperty };
/**
 * Properties for defining a `ALIYUN::ECS::CopyImage`
 */
export interface CopyImageProps {
    /**
     * Property destinationRegionId: ID of the region to where the destination custom image belongs.
     */
    readonly destinationRegionId: string | ros.IResolvable;
    /**
     * Property imageId: ID of the source custom image.
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.
     */
    readonly destinationDescription?: string | ros.IResolvable;
    /**
     * Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.
     */
    readonly destinationImageName?: string | ros.IResolvable;
    /**
     * Property encrypted: Whether to encrypt the image.
     */
    readonly encrypted?: boolean | ros.IResolvable;
    /**
     * Property kmsKeyId: The ID of the key used to encrypt the image.
     */
    readonly kmsKeyId?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the image copy belongs. If not provided, the image copy belongs to the default resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property sourceRegionId: ID of the region to where the source image belongs. Default is current region ID.
     */
    readonly sourceRegionId?: string | ros.IResolvable;
    /**
     * Property tag:
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::CopyImage`
 */
export declare class CopyImage extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DestinationRegionId: ID of the region to where the destination custom image belongs.
     */
    readonly attrDestinationRegionId: ros.IResolvable;
    /**
     * Attribute ImageId: ID of the source custom image.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * Attribute SourceRegionId: ID of the region to where the source image belongs.
     */
    readonly attrSourceRegionId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECS::CopyImage`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CopyImageProps, enableResourcePropertyConstraint?: boolean);
}
