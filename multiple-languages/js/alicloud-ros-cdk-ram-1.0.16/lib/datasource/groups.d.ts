import * as ros from '@alicloud/ros-cdk-core';
import { RosGroups } from './ram.generated';
export { RosGroups as GroupsProperty };
/**
 * Properties for defining a `DATASOURCE::RAM::Groups`
 */
export interface GroupsProps {
    /**
     * Property groupName: Filter the results by a specific group name. Supports using * and ? to fuzzy match.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * Property userName: The specific user which groups contains.
     */
    readonly userName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::RAM::Groups`
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
     * Create a new `DATASOURCE::RAM::Groups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: GroupsProps, enableResourcePropertyConstraint?: boolean);
}
