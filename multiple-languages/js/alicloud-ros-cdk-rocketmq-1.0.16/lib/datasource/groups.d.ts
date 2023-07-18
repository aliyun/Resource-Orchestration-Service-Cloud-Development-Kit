import * as ros from '@alicloud/ros-cdk-core';
import { RosGroups } from './rocketmq.generated';
export { RosGroups as GroupsProperty };
/**
 * Properties for defining a `DATASOURCE::ROCKETMQ::Groups`
 */
export interface GroupsProps {
    /**
     * Property groupName: GroupName
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * Property groupType: GroupType
     */
    readonly groupType?: string | ros.IResolvable;
    /**
     * Property instanceId: InstanceId
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::ROCKETMQ::Groups`
 */
export declare class Groups extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable;
    /**
     * Attribute Groups: The list of groups.
     */
    readonly attrGroups: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ROCKETMQ::Groups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: GroupsProps, enableResourcePropertyConstraint?: boolean);
}
