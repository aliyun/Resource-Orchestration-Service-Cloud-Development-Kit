import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroupAttachment } from './alb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityGroupAttachment as SecurityGroupAttachmentProperty };

/**
 * Properties for defining a `SecurityGroupAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-securitygroupattachment
 */
export interface SecurityGroupAttachmentProps {

    /**
     * Property loadBalancerId: The ID of ALB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * Property securityGroupIds: The IDs of the security group to which the ALB instance join.
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::SecurityGroupAttachment`, which is used to associate created security groups with an Application Load Balancer (ALB) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroupAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-securitygroupattachment
 */
export class SecurityGroupAttachment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SecurityGroupAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSecurityGroupAttachment = new RosSecurityGroupAttachment(this, id,  {
            loadBalancerId: props.loadBalancerId,
            securityGroupIds: props.securityGroupIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroupAttachment;
    }
}
