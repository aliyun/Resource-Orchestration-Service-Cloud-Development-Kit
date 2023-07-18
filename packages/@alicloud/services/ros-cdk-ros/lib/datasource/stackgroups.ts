import * as ros from '@alicloud/ros-cdk-core';
import { RosStackGroups } from './ros.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class StackGroups extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute StackGroupNames: The list of stack group names.
     */
    public readonly attrStackGroupNames: ros.IResolvable;

    /**
     * Attribute StackGroups: The list of stack groups.
     */
    public readonly attrStackGroups: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ROS::StackGroups`.
     *
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
