import * as ros from '@alicloud/ros-cdk-core';
import { RosImage } from './cloudphone.generated';
// Generated from the AliCloud ROS Resource Specification
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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CloudPhone::Image`, which is used to query the information about an image.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-image
 */
export class Image extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ImageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: Image creation time, in ISO 8601 format.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: Image description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute ImageCategory: Image type.
     */
    public readonly attrImageCategory: ros.IResolvable;

    /**
     * Attribute ImageId: Image ID.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * Attribute ImageName: The name of the mirror image.
     */
    public readonly attrImageName: ros.IResolvable;

    /**
     * Attribute IsSelfShared: Whether the image has been shared with other users.
     */
    public readonly attrIsSelfShared: ros.IResolvable;

    /**
     * Attribute OsName: The Chinese display name of the operating system.
     */
    public readonly attrOsName: ros.IResolvable;

    /**
     * Attribute OsNameEn: The English display name of the operating system.
     */
    public readonly attrOsNameEn: ros.IResolvable;

    /**
     * Attribute OsType: Operating system type.
     */
    public readonly attrOsType: ros.IResolvable;

    /**
     * Attribute Platform: Operating system distribution.
     */
    public readonly attrPlatform: ros.IResolvable;

    /**
     * Attribute Progress: The progress of mirror image production.
     */
    public readonly attrProgress: ros.IResolvable;

    /**
     * Attribute Status: Image state.
     */
    public readonly attrStatus: ros.IResolvable;

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
            imageId: props.imageId,
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
        this.attrStatus = rosImage.attrStatus;
        this.attrUsage = rosImage.attrUsage;
    }
}
