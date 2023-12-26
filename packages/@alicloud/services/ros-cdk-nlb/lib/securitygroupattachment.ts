import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroupAttachment } from './nlb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityGroupAttachment as SecurityGroupAttachmentProperty };

/**
 * Properties for defining a `SecurityGroupAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitygroupattachment
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::NLB::SecurityGroupAttachment`DATASOURCE::NLB::LoadBalancers is used to query the basic information about created Network Load Balancer (NLB) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroupAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitygroupattachment
 */
export class SecurityGroupAttachment extends ros.Resource {

    /**
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
