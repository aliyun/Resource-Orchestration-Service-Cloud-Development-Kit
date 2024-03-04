import * as ros from '@alicloud/ros-cdk-core';
import { RosJoinSecurityGroup } from './ecs.generated';
export { RosJoinSecurityGroup as JoinSecurityGroupProperty };
/**
 * Properties for defining a `JoinSecurityGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-joinsecuritygroup
 */
export interface JoinSecurityGroupProps {
    /**
     * Property securityGroupId: Security group id to join.
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * Property instanceId: Instance Id to the join the security group.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.
     */
    readonly instanceIdList?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property networkInterfaceList: Network interface list.
     */
    readonly networkInterfaceList?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::JoinSecurityGroup`, which is used to add one or more ECS instances to a specified security group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosJoinSecurityGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-joinsecuritygroup
 */
export declare class JoinSecurityGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: JoinSecurityGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: JoinSecurityGroupProps, enableResourcePropertyConstraint?: boolean);
}
