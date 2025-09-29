import * as ros from '@alicloud/ros-cdk-core';
import { RosParameterGroups } from './polardb.generated';
export { RosParameterGroups as ParameterGroupsProperty };
/**
 * Properties for defining a `ParameterGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroups
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
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `ParameterGroups`.
 */
export interface IParameterGroups extends ros.IResource {
    readonly props: ParameterGroupsProps;
    /**
     * Attribute ParameterGroupIds: The list of parameter group IDs.
     */
    readonly attrParameterGroupIds: ros.IResolvable | string;
    /**
     * Attribute ParameterGroups: The list of parameter groups.
     */
    readonly attrParameterGroups: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::POLARDB::ParameterGroups`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosParameterGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroups
 */
export declare class ParameterGroups extends ros.Resource implements IParameterGroups {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ParameterGroupsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ParameterGroupIds: The list of parameter group IDs.
     */
    readonly attrParameterGroupIds: ros.IResolvable | string;
    /**
     * Attribute ParameterGroups: The list of parameter groups.
     */
    readonly attrParameterGroups: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ParameterGroupsProps, enableResourcePropertyConstraint?: boolean);
}
