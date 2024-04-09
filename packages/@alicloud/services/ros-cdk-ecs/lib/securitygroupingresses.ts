import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroupIngresses } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityGroupIngresses as SecurityGroupIngressesProperty };

/**
 * Properties for defining a `SecurityGroupIngresses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingresses
 */
export interface SecurityGroupIngressesProps {

    /**
     * Property permissions: A list of security group rules. A hundred at most.
     */
    readonly permissions: Array<RosSecurityGroupIngresses.PermissionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property securityGroupId: Id of the security group.
     */
    readonly securityGroupId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::SecurityGroupIngresses`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroupIngresses`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingresses
 */
export class SecurityGroupIngresses extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SecurityGroupIngressesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupIngressesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSecurityGroupIngresses = new RosSecurityGroupIngresses(this, id,  {
            securityGroupId: props.securityGroupId,
            permissions: props.permissions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroupIngresses;
    }
}
