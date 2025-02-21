import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityGroupIngresses } from './ecs.generated';
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
 * Represents a `SecurityGroupIngresses`.
 */
export interface ISecurityGroupIngresses extends ros.IResource {
    readonly props: SecurityGroupIngressesProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::SecurityGroupIngresses`, which is used to associate multiple inbound rules with a security group at a time.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityGroupIngresses`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingresses
 */
export declare class SecurityGroupIngresses extends ros.Resource implements ISecurityGroupIngresses {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SecurityGroupIngressesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityGroupIngressesProps, enableResourcePropertyConstraint?: boolean);
}
