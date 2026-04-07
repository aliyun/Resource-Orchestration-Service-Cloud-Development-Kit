import * as ros from '@alicloud/ros-cdk-core';
import { RosHostAccountUserGroupAttachment } from './bastionhost.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHostAccountUserGroupAttachment as HostAccountUserGroupAttachmentProperty };

/**
 * Properties for defining a `HostAccountUserGroupAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment
 */
export interface HostAccountUserGroupAttachmentProps {

    /**
     * Property hosts: Specify the host IDs and host account IDs that you want to authorize for the user group.
     */
    readonly hosts: Array<RosHostAccountUserGroupAttachment.HostsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property instanceId: The ID of the BastionHost instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property userGroupId: The ID of the user group.
     */
    readonly userGroupId: string | ros.IResolvable;
}

/**
 * Represents a `HostAccountUserGroupAttachment`.
 */
export interface IHostAccountUserGroupAttachment extends ros.IResource {
    readonly props: HostAccountUserGroupAttachmentProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::BastionHost::HostAccountUserGroupAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHostAccountUserGroupAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment
 */
export class HostAccountUserGroupAttachment extends ros.Resource implements IHostAccountUserGroupAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: HostAccountUserGroupAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HostAccountUserGroupAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosHostAccountUserGroupAttachment = new RosHostAccountUserGroupAttachment(this, id,  {
            hosts: props.hosts,
            instanceId: props.instanceId,
            userGroupId: props.userGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHostAccountUserGroupAttachment;
    }
}
