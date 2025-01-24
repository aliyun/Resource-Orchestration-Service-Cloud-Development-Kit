import * as ros from '@alicloud/ros-cdk-core';
import { RosImages } from './ecs.generated';
export { RosImages as ImagesProperty };
/**
 * Properties for defining a `Images`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-images
 */
export interface ImagesProps {
    /**
     * Property actionType: The scenario in which the image is used. Default value: CreateEcs. Valid values:
     * CreateEcs: instance creation
     * ChangeOS: replacement of the system disk or operating system
     */
    readonly actionType?: string | ros.IResolvable;
    /**
     * Property architecture: The image architecture. Valid values:
     * i38
     * x86_64
     * arm64
     */
    readonly architecture?: string | ros.IResolvable;
    /**
     * Property imageFamily: The name of the image family. You can set this parameter to query images of the specified image family.
     * This parameter is empty by default.
     */
    readonly imageFamily?: string | ros.IResolvable;
    /**
     * Property imageId: The ID of the image.
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * Property imageName: The name of the image. Support for fuzzy queries using *.
     */
    readonly imageName?: string | ros.IResolvable;
    /**
     * Property imageOwnerAlias: The source of the image. Valid values:
     * system: public images provided by Alibaba Cloud.
     * self: your custom images.
     * others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts. Take note of the following items:
     * - To query community images, you must set IsPublic to true.
     * To query shared images, you must set IsPublic to false or leave the IsPublic parameter empty.
     * marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are returned in the response, you can use the images without subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
     * This parameter is empty by default, which indicates that the results that match system, self, and others are returned.
     */
    readonly imageOwnerAlias?: string | ros.IResolvable;
    /**
     * Property instanceType: The instance type for which the image can be used.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * Property isPublic: Specifies whether to query published community images. Valid values:
     * true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
     * false: queries other image types than community images. The specific image types to be queried are determined by the ImageOwnerAlias value.
     * Default value: false.
     */
    readonly isPublic?: boolean | ros.IResolvable;
    /**
     * Property isSupportCloudinit: Specifies whether the image supports cloud-init.
     */
    readonly isSupportCloudinit?: boolean | ros.IResolvable;
    /**
     * Property isSupportIoOptimized: Specifies whether the image can be used on I\/O optimized instances.
     */
    readonly isSupportIoOptimized?: boolean | ros.IResolvable;
    /**
     * Property osType: The operating system type of the image. Valid values:
     * windows
     * linux
     */
    readonly osType?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the custom image belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property snapshotId: The ID of the snapshot used to create the custom image.
     */
    readonly snapshotId?: string | ros.IResolvable;
    /**
     * Property status: The state of the image. Default value: Available. Valid values:
     * Creating: The image is being created.
     * Waiting: The image is waiting to be processed.
     * Available: The image is available.
     * UnAvailable: The image is unavailable.
     * CreateFailed: The image failed to be created.
     * Deprecated: The image is discontinued.
     * You can specify multiple values. Separate multiple values with commas (,).
     */
    readonly status?: string | ros.IResolvable;
    /**
     * Property tags: Tags of image.
     */
    readonly tags?: RosImages.TagsProperty[];
    /**
     * Property usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance. Valid values:
     * instance: The image is already in use and running on an ECS instance.
     * none: The image is not in use.
     */
    readonly usage?: string | ros.IResolvable;
}
/**
 * Represents a `Images`.
 */
export interface IImages extends ros.IResource {
    readonly props: ImagesProps;
    /**
     * Attribute ImageIds: The list of image IDs.
     */
    readonly attrImageIds: ros.IResolvable | string;
    /**
     * Attribute Images: The list of images.
     */
    readonly attrImages: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Images`, which is used to query available images.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImages`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-images
 */
export declare class Images extends ros.Resource implements IImages {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ImagesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ImageIds: The list of image IDs.
     */
    readonly attrImageIds: ros.IResolvable | string;
    /**
     * Attribute Images: The list of images.
     */
    readonly attrImages: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ImagesProps, enableResourcePropertyConstraint?: boolean);
}
