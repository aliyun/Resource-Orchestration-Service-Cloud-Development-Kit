import * as ros from '@alicloud/ros-cdk-core';
import { RosImage } from './ens.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosImage as ImageProperty };

/**
 * Properties for defining a `Image`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-image
 */
export interface ImageProps {

    /**
     * Property imageId: The ID of the image. Fuzzy search is supported.
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ENS::Image`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-image
 */
export class Image extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ImageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Architecture: The image architecture. Valid values:
- **i386**
- **x86_64**
     */
    public readonly attrArchitecture: ros.IResolvable;

    /**
     * Attribute ComputeType: Computing type. ens_vm/ens: x86 computing. bare_metal: x86 bare machine or x86 bare metal. arm_vm: ARM computing. arm_bare_metal: ARM bare machine or ARM bare metal. pcfarm: heterogeneous computing.
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
- **others**: a custom image that is shared by other Alibaba Cloud accounts.
- **self**: your own custom image.
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
     * Attribute Platform: The type of operating system used by the image. Valid values:
- **centos**
- **ubuntu**
- **alios**
- **debian**
- **rhel**
- **windows**
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
            imageId: props.imageId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
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
