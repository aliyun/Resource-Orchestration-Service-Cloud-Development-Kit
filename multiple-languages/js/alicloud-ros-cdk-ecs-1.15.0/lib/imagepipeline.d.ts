import * as ros from '@alicloud/ros-cdk-core';
import { RosImagePipeline } from './ecs.generated';
export { RosImagePipeline as ImagePipelineProperty };
/**
 * Properties for defining a `ImagePipeline`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagepipeline
 */
export interface ImagePipelineProps {
    /**
     * Property baseImage: The base image. The value of this parameter varies based on the value of
     * `BaseImageType`:
     * - If `BaseImageType` is `IMAGE`, specify the ID of the base image.
     * - If `BaseImageType` is `IMAGE_FAMILY`, specify the name of the base image
     * family.
     * - If `BaseImageType` is `OSS`, this parameter is not required.
     */
    readonly baseImage: string | ros.IResolvable;
    /**
     * Property baseImageType: The type of the base image. Valid values:
     * - IMAGE: An ECS image.
     * - IMAGE_FAMILY: An image family.
     * - OSS: An OSS object.
     */
    readonly baseImageType: string | ros.IResolvable;
    /**
     * Property addAccount: The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template. You can specify up to 20 account IDs.
     */
    readonly addAccount?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property buildContent: The content of the image template. The content cannot exceed 16 KB in size and can contain up to 127 commands. For more information about the commands that are supported, see the "Usage notes" section of this topic.
     */
    readonly buildContent?: string | ros.IResolvable;
    /**
     * Property deleteInstanceOnFailure: Specifies whether to release the intermediate instance when the image cannot be created. Valid values:
     * true
     * false
     * Default value: true.
     * Note If the intermediate instance cannot be started, the instance is released by default.
     */
    readonly deleteInstanceOnFailure?: boolean | ros.IResolvable;
    /**
     * Property description: The description of the image template. The description must be 2 to 256 characters in length. It cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property executePipeline: Whether execute pipeline. Default value is true
     */
    readonly executePipeline?: boolean | ros.IResolvable;
    /**
     * Property imageName: The prefix of the destination image name.
     * ><notice>This parameter is deprecated. Use `ImageOptions.ImageName`
     * instead.><\/notice>
     */
    readonly imageName?: string | ros.IResolvable;
    /**
     * Property instanceType: The instance type. You can call the  DescribeInstanceTypes  to query instance types.
     * If you do not configure this parameter, an instance type that provides the fewest vCPUs and memory resources is automatically selected. This configuration is subject to resource availability of instance types. For example, the ecs.g6.large instance type is automatically selected. If available ecs.g6.large resources are insufficient, the ecs.g6.xlarge instance type is selected.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * Property internetMaxBandwidthOut: The size of the outbound public bandwidth for the intermediate instance. Unit: Mbit\/s. Valid values: 0 to 100.
     * Default value: 0.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;
    /**
     * Property name: The name of the image pipeline. It must be 2 to 128 characters long, start with a
     * letter or a Chinese character, and cannot start with `http:\/\/` or `https:\/\/`.
     * Allowed characters include letters, digits, Chinese characters, colons (:),
     * underscores (_), periods (.), and hyphens (-).
     * > If you do not specify this parameter, the value of `ImagePipelineId` is used as
     * the name.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property systemDiskSize: The system disk size of the intermediate instance. Unit: GiB. Valid values: 20 to 500.
     * Default value: 40.
     */
    readonly systemDiskSize?: number | ros.IResolvable;
    /**
     * Property tags:
     */
    readonly tags?: RosImagePipeline.TagsProperty[];
    /**
     * Property toRegionId: The IDs of regions to which you want to distribute the image that is created based on the image template. You can specify up to 20 region IDs.
     * If you do not specify this parameter, the image is created only in the current region.
     */
    readonly toRegionId?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the vSwitch.
     * If you do not specify this parameter, a new VPC and vSwitch are created. Make sure that the VPC quota in your account is sufficient. For more information, see Limits and quotas.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * Represents a `ImagePipeline`.
 */
export interface IImagePipeline extends ros.IResource {
    readonly props: ImagePipelineProps;
    /**
     * Attribute ImagePipelineId: The ID of the image template.
     */
    readonly attrImagePipelineId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::ImagePipeline`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImagePipeline`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagepipeline
 */
export declare class ImagePipeline extends ros.Resource implements IImagePipeline {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ImagePipelineProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ImagePipelineId: The ID of the image template.
     */
    readonly attrImagePipelineId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImagePipelineProps, enableResourcePropertyConstraint?: boolean);
}
