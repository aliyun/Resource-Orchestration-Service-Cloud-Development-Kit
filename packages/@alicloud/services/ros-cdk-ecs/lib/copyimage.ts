import * as ros from '@alicloud/ros-cdk-core';
import { RosCopyImage } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCopyImage as CopyImageProperty };

/**
 * Properties for defining a `CopyImage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-copyimage
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
     * Property allowCopyInSameRegion: Whether to allow copying images in the same region. 
     * If set to true, the image will not be copied, the source image id will be returned, and the original image will not be deleted.
     */
    readonly allowCopyInSameRegion?: boolean | ros.IResolvable;

    /**
     * Property destinationDescription: The description of the destination custom image.It cannot begin with http:\/\/ or https:\/\/.  Default value: null.
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
 * Represents a `CopyImage`.
 */
export interface ICopyImage extends ros.IResource {
    readonly props: CopyImageProps;

    /**
     * Attribute DestinationRegionId: ID of the region to where the destination custom image belongs.
     */
    readonly attrDestinationRegionId: ros.IResolvable | string;

    /**
     * Attribute ImageId: ID of the source custom image.
     */
    readonly attrImageId: ros.IResolvable | string;

    /**
     * Attribute SourceRegionId: ID of the region to where the source image belongs.
     */
    readonly attrSourceRegionId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::CopyImage`, which is used to copy a custom image from one region to another region.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCopyImage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-copyimage
 */
export class CopyImage extends ros.Resource implements ICopyImage {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CopyImageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DestinationRegionId: ID of the region to where the destination custom image belongs.
     */
    public readonly attrDestinationRegionId: ros.IResolvable | string;

    /**
     * Attribute ImageId: ID of the source custom image.
     */
    public readonly attrImageId: ros.IResolvable | string;

    /**
     * Attribute SourceRegionId: ID of the region to where the source image belongs.
     */
    public readonly attrSourceRegionId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CopyImageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCopyImage = new RosCopyImage(this, id,  {
            sourceRegionId: props.sourceRegionId,
            kmsKeyId: props.kmsKeyId,
            resourceGroupId: props.resourceGroupId,
            allowCopyInSameRegion: props.allowCopyInSameRegion,
            destinationRegionId: props.destinationRegionId,
            encrypted: props.encrypted,
            imageId: props.imageId,
            destinationDescription: props.destinationDescription,
            tag: props.tag,
            destinationImageName: props.destinationImageName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCopyImage;
        this.attrDestinationRegionId = rosCopyImage.attrDestinationRegionId;
        this.attrImageId = rosCopyImage.attrImageId;
        this.attrSourceRegionId = rosCopyImage.attrSourceRegionId;
    }
}
