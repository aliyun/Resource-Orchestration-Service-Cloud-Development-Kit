import * as ros from '@alicloud/ros-cdk-core';
import { RosParameterGroup } from './polardb.generated';
export { RosParameterGroup as ParameterGroupProperty };
/**
 * Properties for defining a `ParameterGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
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
 * Represents a `ParameterGroup`.
 */
export interface IParameterGroup extends ros.IResource {
    readonly props: ParameterGroupProps;
    /**
     * Attribute CreateTime: The time when the parameter template was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DbType: The type of the database engine.
     */
    readonly attrDbType: ros.IResolvable | string;
    /**
     * Attribute DbVersion: The version of the database engine.
     */
    readonly attrDbVersion: ros.IResolvable | string;
    /**
     * Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.
     */
    readonly attrForceRestart: ros.IResolvable | string;
    /**
     * Attribute ParameterCounts: The number of parameters in the parameter template.
     */
    readonly attrParameterCounts: ros.IResolvable | string;
    /**
     * Attribute ParameterGroupDesc: The description of the parameter template.
     */
    readonly attrParameterGroupDesc: ros.IResolvable | string;
    /**
     * Attribute ParameterGroupId: The ID of the parameter group.
     */
    readonly attrParameterGroupId: ros.IResolvable | string;
    /**
     * Attribute ParameterGroupName: The name of the parameter template.
     */
    readonly attrParameterGroupName: ros.IResolvable | string;
    /**
     * Attribute ParameterGroupType: The type of the parameter template.
     */
    readonly attrParameterGroupType: ros.IResolvable | string;
    /**
     * Attribute Parameters: The list of the parameters.
     */
    readonly attrParameters: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::ParameterGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosParameterGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
 */
export declare class ParameterGroup extends ros.Resource implements IParameterGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ParameterGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the parameter template was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DbType: The type of the database engine.
     */
    readonly attrDbType: ros.IResolvable | string;
    /**
     * Attribute DbVersion: The version of the database engine.
     */
    readonly attrDbVersion: ros.IResolvable | string;
    /**
     * Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.
     */
    readonly attrForceRestart: ros.IResolvable | string;
    /**
     * Attribute ParameterCounts: The number of parameters in the parameter template.
     */
    readonly attrParameterCounts: ros.IResolvable | string;
    /**
     * Attribute ParameterGroupDesc: The description of the parameter template.
     */
    readonly attrParameterGroupDesc: ros.IResolvable | string;
    /**
     * Attribute ParameterGroupId: The ID of the parameter group.
     */
    readonly attrParameterGroupId: ros.IResolvable | string;
    /**
     * Attribute ParameterGroupName: The name of the parameter template.
     */
    readonly attrParameterGroupName: ros.IResolvable | string;
    /**
     * Attribute ParameterGroupType: The type of the parameter template.
     */
    readonly attrParameterGroupType: ros.IResolvable | string;
    /**
     * Attribute Parameters: The list of the parameters.
     */
    readonly attrParameters: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ParameterGroupProps, enableResourcePropertyConstraint?: boolean);
}
