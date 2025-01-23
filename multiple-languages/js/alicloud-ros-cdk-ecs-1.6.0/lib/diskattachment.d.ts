import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskAttachment } from './ecs.generated';
export { RosDiskAttachment as DiskAttachmentProperty };
/**
 * Properties for defining a `DiskAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-diskattachment
 */
export interface DiskAttachmentProps {
    /**
     * Property diskId: The disk id to attached.
     */
    readonly diskId: string | ros.IResolvable;
    /**
     * Property instanceId: The instanceId to attach the disk.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to true.
     */
    readonly deleteAutoSnapshot?: boolean | ros.IResolvable;
    /**
     * Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.
     */
    readonly deleteWithInstance?: boolean | ros.IResolvable;
    /**
     * Property device: The device where the volume is exposed on the instance. could be \/dev\/xvd[b-z]. If not specification, will use default value.
     */
    readonly device?: string | ros.IResolvable;
}
/**
 * Represents a `DiskAttachment`.
 */
export interface IDiskAttachment extends ros.IResource {
    readonly props: DiskAttachmentProps;
    /**
     * Attribute Device: The device where the volume is exposed on ecs instance.
     */
    readonly attrDevice: ros.IResolvable | string;
    /**
     * Attribute DiskId: The disk id of created disk
     */
    readonly attrDiskId: ros.IResolvable | string;
    /**
     * Attribute Status: The disk status now.
     */
    readonly attrStatus: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::DiskAttachment`, which is used to attach a disk to an ECS instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-diskattachment
 */
export declare class DiskAttachment extends ros.Resource implements IDiskAttachment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DiskAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Device: The device where the volume is exposed on ecs instance.
     */
    readonly attrDevice: ros.IResolvable | string;
    /**
     * Attribute DiskId: The disk id of created disk
     */
    readonly attrDiskId: ros.IResolvable | string;
    /**
     * Attribute Status: The disk status now.
     */
    readonly attrStatus: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
