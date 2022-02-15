import * as ros from '@alicloud/ros-cdk-core';
import { RosBackendServerAttachment } from './alb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBackendServerAttachment as BackendServerAttachmentProperty };

/**
 * Properties for defining a `ALIYUN::ALB::BackendServerAttachment`
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
 * A ROS resource type:  `ALIYUN::ALB::BackendServerAttachment`
 */
export class BackendServerAttachment extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ServerGroupId: The ID of the server group.
     */
    public readonly attrServerGroupId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ALB::BackendServerAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackendServerAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosBackendServerAttachment = new RosBackendServerAttachment(this, id,  {
            serverGroupId: props.serverGroupId,
            servers: props.servers,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBackendServerAttachment;
        this.attrServerGroupId = rosBackendServerAttachment.attrServerGroupId;
    }
}
