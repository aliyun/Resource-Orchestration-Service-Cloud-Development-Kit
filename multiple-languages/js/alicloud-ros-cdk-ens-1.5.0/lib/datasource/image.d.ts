import * as ros from '@alicloud/ros-cdk-core';
import { RosImage } from './ens.generated';
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
export declare class Image extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ImageProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Architecture: The image architecture. Valid values:
- **i386**
- **x86_64**
     */
    readonly attrArchitecture: ros.IResolvable;
    /**
     * Attribute ComputeType: Computing type. ens_vm/ens: x86 computing. bare_metal: x86 bare machine or x86 bare metal. arm_vm: ARM computing. arm_bare_metal: ARM bare machine or ARM bare metal. pcfarm: heterogeneous computing.
     */
    readonly attrComputeType: ros.IResolvable;
    /**
     * Attribute CreateTime: The image creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute ImageId: The ID of the image.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * Attribute ImageName: The name of the image.
     */
    readonly attrImageName: ros.IResolvable;
    /**
     * Attribute ImageOwnerAlias: The source of the image. Valid values:
- **others**: a custom image that is shared by other Alibaba Cloud accounts.
- **self**: your own custom image.
     */
    readonly attrImageOwnerAlias: ros.IResolvable;
    /**
     * Attribute ImageSize: The size of the image. Unit: GiB.
     */
    readonly attrImageSize: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the instance corresponding to the image.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute OsVersion: The operating system version.
     */
    readonly attrOsVersion: ros.IResolvable;
    /**
     * Attribute Platform: The type of operating system used by the image. Valid values:
- **centos**
- **ubuntu**
- **alios**
- **debian**
- **rhel**
- **windows**
     */
    readonly attrPlatform: ros.IResolvable;
    /**
     * Attribute SnapshotId: The ID of the snapshot corresponding to the image.
     */
    readonly attrSnapshotId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImageProps, enableResourcePropertyConstraint?: boolean);
}
