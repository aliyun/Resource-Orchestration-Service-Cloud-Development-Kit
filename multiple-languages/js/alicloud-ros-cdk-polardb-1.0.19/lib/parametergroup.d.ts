import * as ros from '@alicloud/ros-cdk-core';
import { RosParameterGroup } from './polardb.generated';
export { RosParameterGroup as ParameterGroupProperty };
/**
 * Properties for defining a `ALIYUN::POLARDB::ParameterGroup`
 */
export interface ParameterGroupProps {
    /**
     * Property dbType: The type of the database engine.
     */
    readonly dbType: string | ros.IResolvable;
    /**
     * Property dbVersion: The version of the database engine.
     */
    readonly dbVersion: string | ros.IResolvable;
    /**
     * Property parameterGroupName: The name of the parameter template.
     */
    readonly parameterGroupName: string | ros.IResolvable;
    /**
     * Property parameters: The list of the parameters.
     */
    readonly parameters: Array<RosParameterGroup.ParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property parameterGroupDesc: The description of the parameter template.
     */
    readonly parameterGroupDesc?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::POLARDB::ParameterGroup`
 */
export declare class ParameterGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CreateTime: The time when the parameter template was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DbType: The type of the database engine.
     */
    readonly attrDbType: ros.IResolvable;
    /**
     * Attribute DbVersion: The version of the database engine.
     */
    readonly attrDbVersion: ros.IResolvable;
    /**
     * Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.
     */
    readonly attrForceRestart: ros.IResolvable;
    /**
     * Attribute ParameterCounts: The number of parameters in the parameter template.
     */
    readonly attrParameterCounts: ros.IResolvable;
    /**
     * Attribute ParameterGroupDesc: The description of the parameter template.
     */
    readonly attrParameterGroupDesc: ros.IResolvable;
    /**
     * Attribute ParameterGroupId: The ID of the parameter group.
     */
    readonly attrParameterGroupId: ros.IResolvable;
    /**
     * Attribute ParameterGroupName: The name of the parameter template.
     */
    readonly attrParameterGroupName: ros.IResolvable;
    /**
     * Attribute ParameterGroupType: The type of the parameter template.
     */
    readonly attrParameterGroupType: ros.IResolvable;
    /**
     * Attribute Parameters: The list of the parameters.
     */
    readonly attrParameters: ros.IResolvable;
    /**
     * Create a new `ALIYUN::POLARDB::ParameterGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ParameterGroupProps, enableResourcePropertyConstraint?: boolean);
}
