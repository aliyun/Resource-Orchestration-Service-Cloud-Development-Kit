import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessGroups } from './nas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccessGroups as AccessGroupsProperty };

/**
 * Properties for defining a `DATASOURCE::NAS::AccessGroups`
 */
export interface AccessGroupsProps {

    /**
     * Property accessGroupName: The name of the permission group.
     */
    readonly accessGroupName?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::NAS::AccessGroups`
 */
export class AccessGroups extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AccessGroupNames: The list of access group names.
     */
    public readonly attrAccessGroupNames: ros.IResolvable;

    /**
     * Attribute AccessGroups: The list of access groups.
     */
    public readonly attrAccessGroups: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::NAS::AccessGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessGroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAccessGroups = new RosAccessGroups(this, id,  {
            accessGroupName: props.accessGroupName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessGroups;
        this.attrAccessGroupNames = rosAccessGroups.attrAccessGroupNames;
        this.attrAccessGroups = rosAccessGroups.attrAccessGroups;
    }
}
