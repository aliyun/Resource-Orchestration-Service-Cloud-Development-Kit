import * as ros from '@alicloud/ros-cdk-core';
import { RosServerGroupAttachment } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServerGroupAttachment as ServerGroupAttachmentProperty };

/**
 * Properties for defining a `ServerGroupAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-servergroupattachment
 */
export interface ServerGroupAttachmentProps {

    /**
     * Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;

    /**
     * Property serverGroups: A collection of information about server groups.
     */
    readonly serverGroups: Array<RosServerGroupAttachment.ServerGroupsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly forceAttach?: boolean | ros.IResolvable;
}

/**
 * Represents a `ServerGroupAttachment`.
 */
export interface IServerGroupAttachment extends ros.IResource {
    readonly props: ServerGroupAttachmentProps;

    /**
     * Attribute ScalingActivityId: The ID of the scaling activity during which one or more SLB instances are attached to the scaling group and the ECS instances in the scaling group are added to the backend server groups of the SLB instances.
Note This parameter is returned only after you set the ForceAttach parameter to true.
     */
    readonly attrScalingActivityId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESS::ServerGroupAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServerGroupAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-servergroupattachment
 */
export class ServerGroupAttachment extends ros.Resource implements IServerGroupAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ServerGroupAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ScalingActivityId: The ID of the scaling activity during which one or more SLB instances are attached to the scaling group and the ECS instances in the scaling group are added to the backend server groups of the SLB instances.
Note This parameter is returned only after you set the ForceAttach parameter to true.
     */
    public readonly attrScalingActivityId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServerGroupAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosServerGroupAttachment = new RosServerGroupAttachment(this, id,  {
            serverGroups: props.serverGroups,
            scalingGroupId: props.scalingGroupId,
            forceAttach: props.forceAttach,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServerGroupAttachment;
        this.attrScalingActivityId = rosServerGroupAttachment.attrScalingActivityId;
    }
}
