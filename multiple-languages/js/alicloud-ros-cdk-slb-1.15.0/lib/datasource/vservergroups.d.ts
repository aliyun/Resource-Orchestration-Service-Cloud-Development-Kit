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
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `VServerGroups`.
 */
export interface IVServerGroups extends ros.IResource {
    readonly props: VServerGroupsProps;
    /**
     * Attribute VServerGroupIds: The list of VServer group IDs.
     */
    readonly attrVServerGroupIds: ros.IResolvable | string;
    /**
     * Attribute VServerGroups: The list of VServer groups.
     */
    readonly attrVServerGroups: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::VServerGroups`, which is used to query the server groups of a Classic Load Balancer (CLB) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVServerGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroups
 */
export declare class VServerGroups extends ros.Resource implements IVServerGroups {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VServerGroupsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute VServerGroupIds: The list of VServer group IDs.
     */
    readonly attrVServerGroupIds: ros.IResolvable | string;
    /**
     * Attribute VServerGroups: The list of VServer groups.
     */
    readonly attrVServerGroups: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VServerGroupsProps, enableResourcePropertyConstraint?: boolean);
}
