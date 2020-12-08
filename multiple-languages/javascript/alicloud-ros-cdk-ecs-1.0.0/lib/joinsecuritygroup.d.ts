import * as ros from '@alicloud/ros-cdk-core';
import { RosJoinSecurityGroup } from './ecs.generated';
export { RosJoinSecurityGroup as JoinSecurityGroupProperty };
/**
 * Properties for defining a `ALIYUN::ECS::JoinSecurityGroup`
 */
export interface JoinSecurityGroupProps {
    /**
     * @Property securityGroupId: Security group id to join.
     */
    readonly securityGroupId: string;
    /**
     * @Property instanceId: Instance Id to the join the security group.
     */
    readonly instanceId?: string;
    /**
     * @Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.
     */
    readonly instanceIdList?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property networkInterfaceList: Network interface list.
     */
    readonly networkInterfaceList?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::JoinSecurityGroup`
 */
export declare class JoinSecurityGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ECS::JoinSecurityGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: JoinSecurityGroupProps, enableResourcePropertyConstraint?: boolean);
}
