import * as ros from '@alicloud/ros-cdk-core';
import { RosGroups } from './rocketmq.generated';
export { RosGroups as GroupsProperty };
/**
 * Properties for defining a `Groups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-groups
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROCKETMQ::Groups`, which is used to query the groups in Message Queue for Apache RocketMQ.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-groups
 */
export declare class Groups extends ros.Resource {
    /**
     * Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable;
    /**
     * Attribute Groups: The list of groups.
     */
    readonly attrGroups: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: GroupsProps, enableResourcePropertyConstraint?: boolean);
}
