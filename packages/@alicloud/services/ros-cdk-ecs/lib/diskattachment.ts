import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskAttachment } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::DiskAttachment`, which is used to attach a disk to an ECS instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-diskattachment
 */
export class DiskAttachment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DiskAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Device: The device where the volume is exposed on ecs instance.
     */
    public readonly attrDevice: ros.IResolvable;

    /**
     * Attribute DiskId: The disk id of created disk
     */
    public readonly attrDiskId: ros.IResolvable;

    /**
     * Attribute Status: The disk status now.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDiskAttachment = new RosDiskAttachment(this, id,  {
            instanceId: props.instanceId,
            device: props.device,
            deleteWithInstance: props.deleteWithInstance,
            deleteAutoSnapshot: props.deleteAutoSnapshot === undefined || props.deleteAutoSnapshot === null ? true : props.deleteAutoSnapshot,
            diskId: props.diskId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDiskAttachment;
        this.attrDevice = rosDiskAttachment.attrDevice;
        this.attrDiskId = rosDiskAttachment.attrDiskId;
        this.attrStatus = rosDiskAttachment.attrStatus;
    }
}
