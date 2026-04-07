import * as ros from '@alicloud/ros-cdk-core';
import { RosImage } from './pai.generated';
export { RosImage as ImageProperty };
/**
 * Properties for defining a `Image`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-image
 */
export interface ImageProps {
    /**
     * Property imageName: The image name.
     */
    readonly imageName: string | ros.IResolvable;
    /**
     * Property imageUri: The Image address, which contains the version number.
     */
    readonly imageUri: string | ros.IResolvable;
    /**
     * Property accessibility: Visibility of the mirror, possible values:
     * - PUBLIC: all members of the current workspace can operate.
     * - PRIVATE: Only the creator can operate.
     */
    readonly accessibility?: string | ros.IResolvable;
    /**
     * Property labels: Labels.
     */
    readonly labels?: Array<RosImage.LabelsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property workspaceId: The ID of the workspace to which the image belongs.
     */
    readonly workspaceId?: string | ros.IResolvable;
}
/**
 * Represents a `Image`.
 */
export interface IImage extends ros.IResource {
    readonly props: ImageProps;
    /**
     * Attribute Accessibility: Visibility of the mirror.
     */
    readonly attrAccessibility: ros.IResolvable | string;
    /**
     * Attribute ImageName: The image name.
     */
    readonly attrImageName: ros.IResolvable | string;
    /**
     * Attribute ImageUri: The Image address, which contains the version number.
     */
    readonly attrImageUri: ros.IResolvable | string;
    /**
     * Attribute Labels: Labels.
     */
    readonly attrLabels: ros.IResolvable | string;
    /**
     * Attribute WorkspaceId: The ID of the workspace to which the image belongs.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::Image`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-image
 */
export declare class Image extends ros.Resource implements IImage {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ImageProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Accessibility: Visibility of the mirror.
     */
    readonly attrAccessibility: ros.IResolvable | string;
    /**
     * Attribute ImageName: The image name.
     */
    readonly attrImageName: ros.IResolvable | string;
    /**
     * Attribute ImageUri: The Image address, which contains the version number.
     */
    readonly attrImageUri: ros.IResolvable | string;
    /**
     * Attribute Labels: Labels.
     */
    readonly attrLabels: ros.IResolvable | string;
    /**
     * Attribute WorkspaceId: The ID of the workspace to which the image belongs.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageProps, enableResourcePropertyConstraint?: boolean);
}
