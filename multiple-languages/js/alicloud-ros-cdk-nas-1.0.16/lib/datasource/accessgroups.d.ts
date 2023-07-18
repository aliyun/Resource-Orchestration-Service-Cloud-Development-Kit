import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessGroups } from './nas.generated';
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
export declare class AccessGroups extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AccessGroupNames: The list of access group names.
     */
    readonly attrAccessGroupNames: ros.IResolvable;
    /**
     * Attribute AccessGroups: The list of access groups.
     */
    readonly attrAccessGroups: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::NAS::AccessGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AccessGroupsProps, enableResourcePropertyConstraint?: boolean);
}
