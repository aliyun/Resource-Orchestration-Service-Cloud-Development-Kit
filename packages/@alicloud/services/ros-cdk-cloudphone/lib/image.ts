import * as ros from '@alicloud/ros-cdk-core';
import { RosImage } from './cloudphone.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudPhone::Image`, which is used to create a custom image for an Elastic Cloud Phone (ECP) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image
 */
export class Image extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ImageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The time when the image was created. The time follows the ISO 8601 standard.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: The image description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute ImageCategory: The image type.
     */
    public readonly attrImageCategory: ros.IResolvable;

    /**
     * Attribute ImageId: The image ID.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * Attribute ImageName: The image name.
     */
    public readonly attrImageName: ros.IResolvable;

    /**
     * Attribute IsSelfShared: Indicates whether the image is shared with other Alibaba Cloud accounts.
     */
    public readonly attrIsSelfShared: ros.IResolvable;

    /**
     * Attribute OsName: The display name of the OS in Chinese.
     */
    public readonly attrOsName: ros.IResolvable;

    /**
     * Attribute OsNameEn: The display name of the OS in English.
     */
    public readonly attrOsNameEn: ros.IResolvable;

    /**
     * Attribute OsType: The image OS.
     */
    public readonly attrOsType: ros.IResolvable;

    /**
     * Attribute Platform: The OS distribution.
     */
    public readonly attrPlatform: ros.IResolvable;

    /**
     * Attribute Progress: The progress of image creation.
     */
    public readonly attrProgress: ros.IResolvable;

    /**
     * Attribute Usage: Whether the image is already running in the cloud phone instance.
     */
    public readonly attrUsage: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosImage = new RosImage(this, id,  {
            imageName: props.imageName,
            description: props.description,
            instanceId: props.instanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosImage;
        this.attrCreateTime = rosImage.attrCreateTime;
        this.attrDescription = rosImage.attrDescription;
        this.attrImageCategory = rosImage.attrImageCategory;
        this.attrImageId = rosImage.attrImageId;
        this.attrImageName = rosImage.attrImageName;
        this.attrIsSelfShared = rosImage.attrIsSelfShared;
        this.attrOsName = rosImage.attrOsName;
        this.attrOsNameEn = rosImage.attrOsNameEn;
        this.attrOsType = rosImage.attrOsType;
        this.attrPlatform = rosImage.attrPlatform;
        this.attrProgress = rosImage.attrProgress;
        this.attrUsage = rosImage.attrUsage;
    }
}
