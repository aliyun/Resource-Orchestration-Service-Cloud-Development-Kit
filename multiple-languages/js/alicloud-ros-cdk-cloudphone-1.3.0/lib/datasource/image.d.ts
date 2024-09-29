import * as ros from '@alicloud/ros-cdk-core';
import { RosImage } from './cloudphone.generated';
export { RosImage as ImageProperty };
/**
 * Properties for defining a `Image`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-image
 */
export interface ImageProps {
    /**
     * Property imageId: Image ID.
     */
    readonly imageId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CloudPhone::Image`, which is used to query the information about an image.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-image
 */
export declare class Image extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ImageProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: Image creation time, in ISO 8601 format.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Description: Image description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute ImageCategory: Image type.
     */
    readonly attrImageCategory: ros.IResolvable;
    /**
     * Attribute ImageId: Image ID.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * Attribute ImageName: The name of the mirror image.
     */
    readonly attrImageName: ros.IResolvable;
    /**
     * Attribute IsSelfShared: Whether the image has been shared with other users.
     */
    readonly attrIsSelfShared: ros.IResolvable;
    /**
     * Attribute OsName: The Chinese display name of the operating system.
     */
    readonly attrOsName: ros.IResolvable;
    /**
     * Attribute OsNameEn: The English display name of the operating system.
     */
    readonly attrOsNameEn: ros.IResolvable;
    /**
     * Attribute OsType: Operating system type.
     */
    readonly attrOsType: ros.IResolvable;
    /**
     * Attribute Platform: Operating system distribution.
     */
    readonly attrPlatform: ros.IResolvable;
    /**
     * Attribute Progress: The progress of mirror image production.
     */
    readonly attrProgress: ros.IResolvable;
    /**
     * Attribute Status: Image state.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * Attribute Usage: Whether the image is already running in the cloud phone instance.
     */
    readonly attrUsage: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageProps, enableResourcePropertyConstraint?: boolean);
}
