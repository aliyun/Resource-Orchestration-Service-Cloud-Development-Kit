import * as ros from '@alicloud/ros-cdk-core';
import { RosImage } from './cloudphone.generated';
export { RosImage as ImageProperty };
/**
 * Properties for defining a `Image`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image
 */
export interface ImageProps {
    /**
     * Property instanceId: The ID of the mobile phone instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property description: The image description. The description must be 2 to 256 characters in length. It cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property imageName: The image name. The name must be 2 to 128 characters in length. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly imageName?: string | ros.IResolvable;
}
/**
 * Represents a `Image`.
 */
export interface IImage extends ros.IResource {
    readonly props: ImageProps;
    /**
     * Attribute CreateTime: The time when the image was created. The time follows the ISO 8601 standard.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The image description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute ImageCategory: The image type.
     */
    readonly attrImageCategory: ros.IResolvable | string;
    /**
     * Attribute ImageId: The image ID.
     */
    readonly attrImageId: ros.IResolvable | string;
    /**
     * Attribute ImageName: The image name.
     */
    readonly attrImageName: ros.IResolvable | string;
    /**
     * Attribute IsSelfShared: Indicates whether the image is shared with other Alibaba Cloud accounts.
     */
    readonly attrIsSelfShared: ros.IResolvable | string;
    /**
     * Attribute OsName: The display name of the OS in Chinese.
     */
    readonly attrOsName: ros.IResolvable | string;
    /**
     * Attribute OsNameEn: The display name of the OS in English.
     */
    readonly attrOsNameEn: ros.IResolvable | string;
    /**
     * Attribute OsType: The image OS.
     */
    readonly attrOsType: ros.IResolvable | string;
    /**
     * Attribute Platform: The OS distribution.
     */
    readonly attrPlatform: ros.IResolvable | string;
    /**
     * Attribute Progress: The progress of image creation.
     */
    readonly attrProgress: ros.IResolvable | string;
    /**
     * Attribute Usage: Whether the image is already running in the cloud phone instance.
     */
    readonly attrUsage: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudPhone::Image`, which is used to create a custom image for a cloud phone.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image
 */
export declare class Image extends ros.Resource implements IImage {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ImageProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the image was created. The time follows the ISO 8601 standard.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The image description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute ImageCategory: The image type.
     */
    readonly attrImageCategory: ros.IResolvable | string;
    /**
     * Attribute ImageId: The image ID.
     */
    readonly attrImageId: ros.IResolvable | string;
    /**
     * Attribute ImageName: The image name.
     */
    readonly attrImageName: ros.IResolvable | string;
    /**
     * Attribute IsSelfShared: Indicates whether the image is shared with other Alibaba Cloud accounts.
     */
    readonly attrIsSelfShared: ros.IResolvable | string;
    /**
     * Attribute OsName: The display name of the OS in Chinese.
     */
    readonly attrOsName: ros.IResolvable | string;
    /**
     * Attribute OsNameEn: The display name of the OS in English.
     */
    readonly attrOsNameEn: ros.IResolvable | string;
    /**
     * Attribute OsType: The image OS.
     */
    readonly attrOsType: ros.IResolvable | string;
    /**
     * Attribute Platform: The OS distribution.
     */
    readonly attrPlatform: ros.IResolvable | string;
    /**
     * Attribute Progress: The progress of image creation.
     */
    readonly attrProgress: ros.IResolvable | string;
    /**
     * Attribute Usage: Whether the image is already running in the cloud phone instance.
     */
    readonly attrUsage: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageProps, enableResourcePropertyConstraint?: boolean);
}
