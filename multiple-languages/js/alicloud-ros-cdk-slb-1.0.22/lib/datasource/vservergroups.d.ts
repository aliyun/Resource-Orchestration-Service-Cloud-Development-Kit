import * as ros from '@alicloud/ros-cdk-core';
import { RosVServerGroups } from './slb.generated';
export { RosVServerGroups as VServerGroupsProperty };
/**
 * Properties for defining a `VServerGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroups
 */
export interface VServerGroupsProps {
    /**
     * Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::VServerGroups`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVServerGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroups
 */
export declare class VServerGroups extends ros.Resource {
    /**
     * Attribute VServerGroupIds: The list of VServer group IDs.
     */
    readonly attrVServerGroupIds: ros.IResolvable;
    /**
     * Attribute VServerGroups: The list of VServer groups.
     */
    readonly attrVServerGroups: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VServerGroupsProps, enableResourcePropertyConstraint?: boolean);
}
