import * as ros from '@alicloud/ros-cdk-core';
import { RosStackGroups } from './ros.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROS::StackGroups`, which is used to query the details of stack groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStackGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups
 */
export class StackGroups extends ros.Resource {

    /**
     * Attribute StackGroupNames: The list of stack group names.
     */
    public readonly attrStackGroupNames: ros.IResolvable;

    /**
     * Attribute StackGroups: The list of stack groups.
     */
    public readonly attrStackGroups: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StackGroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosStackGroups = new RosStackGroups(this, id,  {
            resourceGroupId: props.resourceGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStackGroups;
        this.attrStackGroupNames = rosStackGroups.attrStackGroupNames;
        this.attrStackGroups = rosStackGroups.attrStackGroups;
    }
}
