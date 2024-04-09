import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroup } from './ens.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityGroup as SecurityGroupProperty };

/**
 * Properties for defining a `SecurityGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-securitygroup
 */
export interface SecurityGroupProps {

    /**
     * Property description: The description of the security group. The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property securityGroupEgress: egress rules for the security group.
     */
    readonly securityGroupEgress?: Array<RosSecurityGroup.SecurityGroupEgressProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property securityGroupIngress: Ingress rules for the security group.
     */
    readonly securityGroupIngress?: Array<RosSecurityGroup.SecurityGroupIngressProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property securityGroupName: The name of the security group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). By default, this parameter is empty.
     */
    readonly securityGroupName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ENS::SecurityGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-securitygroup
 */
export class SecurityGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SecurityGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SecurityGroupId: The ID of the security group.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSecurityGroup = new RosSecurityGroup(this, id,  {
            description: props.description,
            securityGroupName: props.securityGroupName,
            securityGroupIngress: props.securityGroupIngress,
            securityGroupEgress: props.securityGroupEgress,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroup;
        this.attrSecurityGroupId = rosSecurityGroup.attrSecurityGroupId;
    }
}
