import * as ros from '@alicloud/ros-cdk-core';
import { RosBackendServerAttachment } from './alb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBackendServerAttachment as BackendServerAttachmentProperty };

/**
 * Properties for defining a `BackendServerAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-backendserverattachment
 */
export interface BackendServerAttachmentProps {

    /**
     * Property serverGroupId: The ID of the server group.
     */
    readonly serverGroupId: string | ros.IResolvable;

    /**
     * Property servers: The backend servers that you want to add to the server group. You can specify up to
     * 40 servers in each call.
     */
    readonly servers: Array<RosBackendServerAttachment.ServersProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `BackendServerAttachment`.
 */
export interface IBackendServerAttachment extends ros.IResource {
    readonly props: BackendServerAttachmentProps;

    /**
     * Attribute ServerGroupId: The ID of the server group.
     */
    readonly attrServerGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::BackendServerAttachment`, which is used to add backend servers to a server group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackendServerAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-backendserverattachment
 */
export class BackendServerAttachment extends ros.Resource implements IBackendServerAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BackendServerAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ServerGroupId: The ID of the server group.
     */
    public readonly attrServerGroupId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackendServerAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBackendServerAttachment = new RosBackendServerAttachment(this, id,  {
            serverGroupId: props.serverGroupId,
            servers: props.servers,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBackendServerAttachment;
        this.attrServerGroupId = rosBackendServerAttachment.attrServerGroupId;
    }
}
