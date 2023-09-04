import * as ros from '@alicloud/ros-cdk-core';
import { RosSlsGroups } from './cms.generated';
export { RosSlsGroups as SlsGroupsProperty };
/**
 * Properties for defining a `DATASOURCE::CMS::SlsGroups`
 */
export interface SlsGroupsProps {
    /**
     * Property slsGroupName: The name of the Logstore group.
     */
    readonly slsGroupName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::CMS::SlsGroups`
 */
export declare class SlsGroups extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute SlsGroupNames: The list of sls group names.
     */
    readonly attrSlsGroupNames: ros.IResolvable;
    /**
     * Attribute SlsGroups: The list of sls groups.
     */
    readonly attrSlsGroups: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::CMS::SlsGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: SlsGroupsProps, enableResourcePropertyConstraint?: boolean);
}
