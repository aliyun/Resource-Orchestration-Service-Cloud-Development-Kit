import * as ros from '@alicloud/ros-cdk-core';
import { RosClientInstanceAttachment } from './eais.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosClientInstanceAttachment as ClientInstanceAttachmentProperty };

/**
 * Properties for defining a `ClientInstanceAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-clientinstanceattachment
 */
export interface ClientInstanceAttachmentProps {

    /**
     * Property clientInstanceAttachmentId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    readonly clientInstanceAttachmentId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `ClientInstanceAttachment`.
 */
export interface IClientInstanceAttachment extends ros.IResource {
    readonly props: ClientInstanceAttachmentProps;

    /**
     * Attribute ClientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    readonly attrClientInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The EAIS instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupId: The ID of the security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The vSwitch ID.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EAIS::ClientInstanceAttachment`, which is used to query the information about an Elastic Accelerated Computing Instances (EAIS) instance attached to an Elastic Compute Service (ECS) instance or elastic container instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClientInstanceAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-clientinstanceattachment
 */
export class ClientInstanceAttachment extends ros.Resource implements IClientInstanceAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ClientInstanceAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    public readonly attrClientInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The EAIS instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupId: The ID of the security group.
     */
    public readonly attrSecurityGroupId: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The vSwitch ID.
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClientInstanceAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosClientInstanceAttachment = new RosClientInstanceAttachment(this, id,  {
            clientInstanceAttachmentId: props.clientInstanceAttachmentId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClientInstanceAttachment;
        this.attrClientInstanceId = rosClientInstanceAttachment.attrClientInstanceId;
        this.attrInstanceId = rosClientInstanceAttachment.attrInstanceId;
        this.attrSecurityGroupId = rosClientInstanceAttachment.attrSecurityGroupId;
        this.attrVSwitchId = rosClientInstanceAttachment.attrVSwitchId;
    }
}
