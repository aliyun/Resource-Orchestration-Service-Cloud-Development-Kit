import * as ros from '@alicloud/ros-cdk-core';
import { RosImage } from './ens.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosImage as ImageProperty };

/**
 * Properties for defining a `Image`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-image
 */
export interface ImageProps {

    /**
     * Property imageName: The name of the image. The name must be 2 to 128 characters in length. 
     * The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). 
     * It must start with a letter but cannot start with http:\/\/ or https:\/\/. 
     * The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly imageName: string | ros.IResolvable;

    /**
     * Property deleteAfterImageUpload: Whether the instance is automatically released after the image is packaged and uploaded successfully, only the build machine is supported.
     * Optional values:
     * true: When the instance is released, the image is released together with the instance.
     * false: When the instance is released, the image is retained and is not released together with the instance.
     * Empty means false by default.
     */
    readonly deleteAfterImageUpload?: boolean | ros.IResolvable;

    /**
     * Property instanceId: The ID of the instance corresponding to the image.
     */
    readonly instanceId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ENS::Image`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-image
 */
export class Image extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ImageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Architecture: The image architecture. Valid values:
i386
x86_64
     */
    public readonly attrArchitecture: ros.IResolvable;

    /**
     * Attribute ComputeType: Computing type. ens_vm/ens: x86 computing.
 bare_metal: x86 bare machine or x86 bare metal. 
arm_vm: ARM computing. 
arm_bare_metal: ARM bare machine or ARM bare metal.
pcfarm: heterogeneous computing.
     */
    public readonly attrComputeType: ros.IResolvable;

    /**
     * Attribute CreateTime: The image creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute ImageId: The ID of the image.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * Attribute ImageName: The name of the image.
     */
    public readonly attrImageName: ros.IResolvable;

    /**
     * Attribute ImageOwnerAlias: The source of the image. Valid values:
system: public images
self: your custom images
     */
    public readonly attrImageOwnerAlias: ros.IResolvable;

    /**
     * Attribute ImageSize: The size of the image. Unit: GiB.
     */
    public readonly attrImageSize: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of the instance corresponding to the image.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute OsVersion: The operating system version.
     */
    public readonly attrOsVersion: ros.IResolvable;

    /**
     * Attribute Platform: The type of operating system used by the image.
centos
ubuntu
alios
debian
rhel
windows
     */
    public readonly attrPlatform: ros.IResolvable;

    /**
     * Attribute SnapshotId: The ID of the snapshot corresponding to the image.
     */
    public readonly attrSnapshotId: ros.IResolvable;

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
            instanceId: props.instanceId,
            deleteAfterImageUpload: props.deleteAfterImageUpload,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosImage;
        this.attrArchitecture = rosImage.attrArchitecture;
        this.attrComputeType = rosImage.attrComputeType;
        this.attrCreateTime = rosImage.attrCreateTime;
        this.attrImageId = rosImage.attrImageId;
        this.attrImageName = rosImage.attrImageName;
        this.attrImageOwnerAlias = rosImage.attrImageOwnerAlias;
        this.attrImageSize = rosImage.attrImageSize;
        this.attrInstanceId = rosImage.attrInstanceId;
        this.attrOsVersion = rosImage.attrOsVersion;
        this.attrPlatform = rosImage.attrPlatform;
        this.attrSnapshotId = rosImage.attrSnapshotId;
    }
}
