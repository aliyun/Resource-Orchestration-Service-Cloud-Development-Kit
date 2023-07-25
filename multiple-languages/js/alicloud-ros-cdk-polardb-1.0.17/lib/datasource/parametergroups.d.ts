import * as ros from '@alicloud/ros-cdk-core';
import { RosParameterGroups } from './polardb.generated';
export { RosParameterGroups as ParameterGroupsProperty };
/**
 * Properties for defining a `DATASOURCE::POLARDB::ParameterGroups`
 */
export interface ParameterGroupsProps {
    /**
     * Property dbType: The type of the database engine.
     */
    readonly dbType?: string | ros.IResolvable;
    /**
     * Property dbVersion: The version of the database engine.
     */
    readonly dbVersion?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::POLARDB::ParameterGroups`
 */
export declare class ParameterGroups extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ParameterGroupIds: The list of parameter group IDs.
     */
    readonly attrParameterGroupIds: ros.IResolvable;
    /**
     * Attribute ParameterGroups: The list of parameter groups.
     */
    readonly attrParameterGroups: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::POLARDB::ParameterGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ParameterGroupsProps, enableResourcePropertyConstraint?: boolean);
}
