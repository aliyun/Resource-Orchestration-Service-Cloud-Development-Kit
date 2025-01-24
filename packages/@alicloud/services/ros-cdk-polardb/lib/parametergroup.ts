import * as ros from '@alicloud/ros-cdk-core';
import { RosParameterGroup } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::ParameterGroup`, which is used to create a parameter template of PolarDB.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosParameterGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
 */
export class ParameterGroup extends ros.Resource implements IParameterGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ParameterGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The time when the parameter template was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DbType: The type of the database engine.
     */
    public readonly attrDbType: ros.IResolvable | string;

    /**
     * Attribute DbVersion: The version of the database engine.
     */
    public readonly attrDbVersion: ros.IResolvable | string;

    /**
     * Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.
     */
    public readonly attrForceRestart: ros.IResolvable | string;

    /**
     * Attribute ParameterCounts: The number of parameters in the parameter template.
     */
    public readonly attrParameterCounts: ros.IResolvable | string;

    /**
     * Attribute ParameterGroupDesc: The description of the parameter template.
     */
    public readonly attrParameterGroupDesc: ros.IResolvable | string;

    /**
     * Attribute ParameterGroupId: The ID of the parameter group.
     */
    public readonly attrParameterGroupId: ros.IResolvable | string;

    /**
     * Attribute ParameterGroupName: The name of the parameter template.
     */
    public readonly attrParameterGroupName: ros.IResolvable | string;

    /**
     * Attribute ParameterGroupType: The type of the parameter template.
     */
    public readonly attrParameterGroupType: ros.IResolvable | string;

    /**
     * Attribute Parameters: The list of the parameters.
     */
    public readonly attrParameters: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ParameterGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosParameterGroup = new RosParameterGroup(this, id,  {
            parameters: props.parameters,
            dbVersion: props.dbVersion,
            resourceGroupId: props.resourceGroupId,
            parameterGroupName: props.parameterGroupName,
            parameterGroupDesc: props.parameterGroupDesc,
            dbType: props.dbType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosParameterGroup;
        this.attrCreateTime = rosParameterGroup.attrCreateTime;
        this.attrDbType = rosParameterGroup.attrDbType;
        this.attrDbVersion = rosParameterGroup.attrDbVersion;
        this.attrForceRestart = rosParameterGroup.attrForceRestart;
        this.attrParameterCounts = rosParameterGroup.attrParameterCounts;
        this.attrParameterGroupDesc = rosParameterGroup.attrParameterGroupDesc;
        this.attrParameterGroupId = rosParameterGroup.attrParameterGroupId;
        this.attrParameterGroupName = rosParameterGroup.attrParameterGroupName;
        this.attrParameterGroupType = rosParameterGroup.attrParameterGroupType;
        this.attrParameters = rosParameterGroup.attrParameters;
    }
}
