import * as ros from '@alicloud/ros-cdk-core';
import { RosParameterGroup } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class ParameterGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CreateTime: The time when the parameter template was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DbType: The type of the database engine.
     */
    public readonly attrDbType: ros.IResolvable;

    /**
     * Attribute DbVersion: The version of the database engine.
     */
    public readonly attrDbVersion: ros.IResolvable;

    /**
     * Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.
     */
    public readonly attrForceRestart: ros.IResolvable;

    /**
     * Attribute ParameterCounts: The number of parameters in the parameter template.
     */
    public readonly attrParameterCounts: ros.IResolvable;

    /**
     * Attribute ParameterGroupDesc: The description of the parameter template.
     */
    public readonly attrParameterGroupDesc: ros.IResolvable;

    /**
     * Attribute ParameterGroupId: The ID of the parameter group.
     */
    public readonly attrParameterGroupId: ros.IResolvable;

    /**
     * Attribute ParameterGroupName: The name of the parameter template.
     */
    public readonly attrParameterGroupName: ros.IResolvable;

    /**
     * Attribute ParameterGroupType: The type of the parameter template.
     */
    public readonly attrParameterGroupType: ros.IResolvable;

    /**
     * Attribute Parameters: The list of the parameters.
     */
    public readonly attrParameters: ros.IResolvable;

    /**
     * Create a new `ALIYUN::POLARDB::ParameterGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ParameterGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
