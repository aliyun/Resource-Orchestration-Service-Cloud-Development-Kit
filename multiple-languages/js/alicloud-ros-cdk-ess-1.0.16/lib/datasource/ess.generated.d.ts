import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::ESS::ScalingConfigurations`
 */
export interface RosScalingConfigurationsProps {
    /**
     * @Property scalingConfigurationIds: The ID of scaling configuration that you want to query. Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
     */
    readonly scalingConfigurationIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property scalingConfigurationNames: The name of scaling configuration that you want to query. Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
     */
    readonly scalingConfigurationNames?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property scalingGroupId: The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group.
     */
    readonly scalingGroupId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::ESS::ScalingConfigurations`
 */
export declare class RosScalingConfigurations extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingConfigurations";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ScalingConfigurationIds: The list of scaling configuration IDs.
     */
    readonly attrScalingConfigurationIds: ros.IResolvable;
    /**
     * @Attribute ScalingConfigurations: The list of scaling configurations.
     */
    readonly attrScalingConfigurations: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property scalingConfigurationIds: The ID of scaling configuration that you want to query. Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
     */
    scalingConfigurationIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property scalingConfigurationNames: The name of scaling configuration that you want to query. Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
     */
    scalingConfigurationNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property scalingGroupId: The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group.
     */
    scalingGroupId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::ESS::ScalingConfigurations`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingConfigurationsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `DATASOURCE::ESS::ScalingGroups`
 */
export interface RosScalingGroupsProps {
    /**
     * @Property groupType: The type of instances that are managed by the scaling group. Valid values:
     * ECS: the Elastic Compute Service (ECS) instances
     * ECI: the elastic container instances
     * Default value: ECS.
     */
    readonly groupType?: string | ros.IResolvable;
    /**
     * @Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    readonly scalingGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    readonly scalingGroupNames?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::ESS::ScalingGroups`
 */
export declare class RosScalingGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingGroups";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ScalingGroupIds: The list of scaling group IDs.
     */
    readonly attrScalingGroupIds: ros.IResolvable;
    /**
     * @Attribute ScalingGroups: The list of scaling groups.
     */
    readonly attrScalingGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupType: The type of instances that are managed by the scaling group. Valid values:
     * ECS: the Elastic Compute Service (ECS) instances
     * ECI: the elastic container instances
     * Default value: ECS.
     */
    groupType: string | ros.IResolvable | undefined;
    /**
     * @Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    scalingGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    scalingGroupNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::ESS::ScalingGroups`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingGroupsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
