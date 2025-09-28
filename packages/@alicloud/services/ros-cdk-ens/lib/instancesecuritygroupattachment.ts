import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceSecurityGroupAttachment } from './ens.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstanceSecurityGroupAttachment as InstanceSecurityGroupAttachmentProperty };

/**
 * Properties for defining a `InstanceSecurityGroupAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instancesecuritygroupattachment
 */
export interface InstanceSecurityGroupAttachmentProps {

    /**
     * Property securityGroupId: Security group ID.
     */
    readonly securityGroupId: string | ros.IResolvable;

    /**
     * Property instanceId: Instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;
}

/**
 * Represents a `InstanceSecurityGroupAttachment`.
 */
export interface IInstanceSecurityGroupAttachment extends ros.IResource {
    readonly props: InstanceSecurityGroupAttachmentProps;

    /**
     * Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupId: Security group ID.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ENS::InstanceSecurityGroupAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstanceSecurityGroupAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instancesecuritygroupattachment
 */
export class InstanceSecurityGroupAttachment extends ros.Resource implements IInstanceSecurityGroupAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceSecurityGroupAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceId: Instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupId: Security group ID.
     */
    public readonly attrSecurityGroupId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceSecurityGroupAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstanceSecurityGroupAttachment = new RosInstanceSecurityGroupAttachment(this, id,  {
            instanceId: props.instanceId,
            securityGroupId: props.securityGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceSecurityGroupAttachment;
        this.attrInstanceId = rosInstanceSecurityGroupAttachment.attrInstanceId;
        this.attrSecurityGroupId = rosInstanceSecurityGroupAttachment.attrSecurityGroupId;
    }
}
