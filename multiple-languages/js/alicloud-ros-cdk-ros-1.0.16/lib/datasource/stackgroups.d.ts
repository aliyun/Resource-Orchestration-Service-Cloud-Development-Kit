import * as ros from '@alicloud/ros-cdk-core';
import { RosStackGroups } from './ros.generated';
export { RosStackGroups as StackGroupsProperty };
/**
 * Properties for defining a `DATASOURCE::ROS::StackGroups`
 */
export interface StackGroupsProps {
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::ROS::StackGroups`
 */
export declare class StackGroups extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute StackGroupNames: The list of stack group names.
     */
    readonly attrStackGroupNames: ros.IResolvable;
    /**
     * Attribute StackGroups: The list of stack groups.
     */
    readonly attrStackGroups: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ROS::StackGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: StackGroupsProps, enableResourcePropertyConstraint?: boolean);
}
