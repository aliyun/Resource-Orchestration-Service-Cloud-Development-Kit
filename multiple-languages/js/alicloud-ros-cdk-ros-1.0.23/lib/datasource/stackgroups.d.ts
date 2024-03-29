import * as ros from '@alicloud/ros-cdk-core';
import { RosStackGroups } from './ros.generated';
export { RosStackGroups as StackGroupsProperty };
/**
 * Properties for defining a `StackGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups
 */
export interface StackGroupsProps {
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROS::StackGroups`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStackGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups
 */
export declare class StackGroups extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: StackGroupsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute StackGroupNames: The list of stack group names.
     */
    readonly attrStackGroupNames: ros.IResolvable;
    /**
     * Attribute StackGroups: The list of stack groups.
     */
    readonly attrStackGroups: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: StackGroupsProps, enableResourcePropertyConstraint?: boolean);
}
