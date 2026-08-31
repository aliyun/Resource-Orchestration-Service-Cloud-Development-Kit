import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskInstanceAttachment } from './ens.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDiskInstanceAttachment as DiskInstanceAttachmentProperty };

/**
 * Properties for defining a `DiskInstanceAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-diskinstanceattachment
 */
export interface DiskInstanceAttachmentProps {

    /**
     * Property diskId: The ID of the cloud disk to be mounted. The Cloud Disk (DiskId) and the instance (InstanceId) must be on the same node.
     */
    readonly diskId: string | ros.IResolvable;

    /**
     * Property instanceId: Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property deleteWithInstance: Whether the cloud disk to be mounted is released with the instance
     * Value:
     * true: When the instance is released, the cloud disk is released together with the instance.
     * false: When the instance is released, the cloud disk is retained and is not released together with the instance.
     *  Empty means false by default.
     */
    readonly deleteWithInstance?: string | ros.IResolvable;
}

/**
 * Represents a `DiskInstanceAttachment`.
 */
export interface IDiskInstanceAttachment extends ros.IResource {
    readonly props: DiskInstanceAttachmentProps;

    /**
     * Attribute DiskId: The ID of the cloud disk to be mounted. The Cloud Disk (DiskId) and the instance (InstanceId) must be on the same node.
     */
    readonly attrDiskId: ros.IResolvable | string;

    /**
     * Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ENS::DiskInstanceAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskInstanceAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-diskinstanceattachment
 */
export class DiskInstanceAttachment extends ros.Resource implements IDiskInstanceAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DiskInstanceAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DiskId: The ID of the cloud disk to be mounted. The Cloud Disk (DiskId) and the instance (InstanceId) must be on the same node.
     */
    public readonly attrDiskId: ros.IResolvable | string;

    /**
     * Attribute InstanceId: Instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskInstanceAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDiskInstanceAttachment = new RosDiskInstanceAttachment(this, id,  {
            instanceId: props.instanceId,
            deleteWithInstance: props.deleteWithInstance,
            diskId: props.diskId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDiskInstanceAttachment;
        this.attrDiskId = rosDiskInstanceAttachment.attrDiskId;
        this.attrInstanceId = rosDiskInstanceAttachment.attrInstanceId;
    }
}
