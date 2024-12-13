import * as ros from '@alicloud/ros-cdk-core';
import { RosParameterGroup } from './polardb.generated';
export { RosParameterGroup as ParameterGroupProperty };
/**
 * Properties for defining a `ParameterGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroup
 */
export interface ParameterGroupProps {
    /**
     * Property parameterGroupId: The ID of the parameter template.
     */
    readonly parameterGroupId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::POLARDB::ParameterGroup`, which is used to query the information about a parameter template in a region.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosParameterGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroup
 */
export declare class ParameterGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ParameterGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the parameter template was created. The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
     * Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied. Valid values:
* 0: A restart is not required.
* 1: A restart is required.
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
     * Attribute ParameterGroupId: The ID of the parameter template.
     */
    readonly attrParameterGroupId: ros.IResolvable;
    /**
     * Attribute ParameterGroupName: The name of the parameter template.
     */
    readonly attrParameterGroupName: ros.IResolvable;
    /**
     * Attribute ParameterGroupType: The type of the parameter template. Valid values:
0: the default parameter template.
1: a custom parameter template.
2: an automatic backup parameter template. After you apply this type of template, the system automatically backs up the original parameter settings and saves the backup as a template.
     */
    readonly attrParameterGroupType: ros.IResolvable;
    /**
     * Attribute Parameters: Details about the parameter templates.
     */
    readonly attrParameters: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ParameterGroupProps, enableResourcePropertyConstraint?: boolean);
}
