import * as ros from '@alicloud/ros-cdk-core';
import { RosStackGroups } from './ros.generated';
export { RosStackGroups as StackGroupsProperty };
/**
 * Properties for defining a `StackGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups
 */
export interface StackGroupsProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `StackGroups`.
 */
export interface IStackGroups extends ros.IResource {
    readonly props: StackGroupsProps;
    /**
     * Attribute StackGroupNames: The list of stack group names.
     */
    readonly attrStackGroupNames: ros.IResolvable | string;
    /**
     * Attribute StackGroups: The list of stack groups.
     */
    readonly attrStackGroups: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROS::StackGroups`, which is used to query the details of stack groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStackGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups
 */
export declare class StackGroups extends ros.Resource implements IStackGroups {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: StackGroupsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute StackGroupNames: The list of stack group names.
     */
    readonly attrStackGroupNames: ros.IResolvable | string;
    /**
     * Attribute StackGroups: The list of stack groups.
     */
    readonly attrStackGroups: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: StackGroupsProps, enableResourcePropertyConstraint?: boolean);
}
