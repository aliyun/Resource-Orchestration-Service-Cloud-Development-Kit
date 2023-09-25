import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroupAttachment } from './nlb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityGroupAttachment as SecurityGroupAttachmentProperty };

/**
 * Properties for defining a `ALIYUN::NLB::SecurityGroupAttachment`
 */
export interface SecurityGroupAttachmentProps {

    /**
     * Property loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * Property securityGroupIds: List of security group id.
     */
    readonly securityGroupIds: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::NLB::SecurityGroupAttachment`
 */
export class SecurityGroupAttachment extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::NLB::SecurityGroupAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSecurityGroupAttachment = new RosSecurityGroupAttachment(this, id,  {
            loadBalancerId: props.loadBalancerId,
            securityGroupIds: props.securityGroupIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroupAttachment;
    }
}
