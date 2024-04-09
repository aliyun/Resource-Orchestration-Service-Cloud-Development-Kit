import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroupEgresses } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityGroupEgresses as SecurityGroupEgressesProperty };

/**
 * Properties for defining a `SecurityGroupEgresses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegresses
 */
export interface SecurityGroupEgressesProps {

    /**
     * Property permissions: A list of security group rules. A hundred at most.
     */
    readonly permissions: Array<RosSecurityGroupEgresses.PermissionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property securityGroupId: Id of the security group.
     */
    readonly securityGroupId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::SecurityGroupEgresses`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroupEgresses`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegresses
 */
export class SecurityGroupEgresses extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SecurityGroupEgressesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupEgressesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSecurityGroupEgresses = new RosSecurityGroupEgresses(this, id,  {
            securityGroupId: props.securityGroupId,
            permissions: props.permissions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroupEgresses;
    }
}
