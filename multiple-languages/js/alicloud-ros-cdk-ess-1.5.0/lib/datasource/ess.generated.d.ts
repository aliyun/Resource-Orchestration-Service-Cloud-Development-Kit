import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosScalingConfigurations`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
 */
export interface RosScalingConfigurationsProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ESS::ScalingConfigurations`, which is used to query the information about scaling configurations.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingConfigurations` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
 */
export declare class RosScalingConfigurations extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingConfigurations";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosScalingGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ESS::ScalingGroups`, which is used to query scaling groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
 */
export declare class RosScalingGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingGroups";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    scalingGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    scalingGroupNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
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
/**
 * Properties for defining a `RosScalingRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrule
 */
export interface RosScalingRuleProps {
    /**
     * @Property scalingRuleId: The ID of the scaling rule that you want to query.
     */
    readonly scalingRuleId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ESS::ScalingRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrule
 */
export declare class RosScalingRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingRule";
    /**
     * @Attribute AdjustmentType: The adjustment method of the scaling rule.
     */
    readonly attrAdjustmentType: ros.IResolvable;
    /**
     * @Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.
     */
    readonly attrAdjustmentValue: ros.IResolvable;
    /**
     * @Attribute Alarms: The event-triggered tasks that are associated with the scaling rule. The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
     */
    readonly attrAlarms: ros.IResolvable;
    /**
     * @Attribute Cooldown: The cooldown period of the scaling rule.
     */
    readonly attrCooldown: ros.IResolvable;
    /**
     * @Attribute DisableScaleIn: Indicates whether scale-in is disabled.
     */
    readonly attrDisableScaleIn: ros.IResolvable;
    /**
     * @Attribute EstimatedInstanceWarmup: The warm-up period of instances.
     */
    readonly attrEstimatedInstanceWarmup: ros.IResolvable;
    /**
     * @Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.
     */
    readonly attrInitialMaxSize: ros.IResolvable;
    /**
     * @Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.
     */
    readonly attrMaxSize: ros.IResolvable;
    /**
     * @Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.
     */
    readonly attrMetricName: ros.IResolvable;
    /**
     * @Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.
     */
    readonly attrMinAdjustmentMagnitude: ros.IResolvable;
    /**
     * @Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.
     */
    readonly attrMinSize: ros.IResolvable;
    /**
     * @Attribute PredictiveScalingMode: The mode of the predictive scaling rule.
     */
    readonly attrPredictiveScalingMode: ros.IResolvable;
    /**
     * @Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.
     */
    readonly attrPredictiveTaskBufferTime: ros.IResolvable;
    /**
     * @Attribute PredictiveValueBehavior: The action on the predicted maximum value.
     */
    readonly attrPredictiveValueBehavior: ros.IResolvable;
    /**
     * @Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
     */
    readonly attrPredictiveValueBuffer: ros.IResolvable;
    /**
     * @Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.
     */
    readonly attrScaleInEvaluationCount: ros.IResolvable;
    /**
     * @Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.
     */
    readonly attrScaleOutEvaluationCount: ros.IResolvable;
    /**
     * @Attribute ScalingGroupId: The ID of the scaling group.
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * @Attribute ScalingRuleAri: The unique identifier of the scaling rule.
     */
    readonly attrScalingRuleAri: ros.IResolvable;
    /**
     * @Attribute ScalingRuleId: The ID of the scaling rule.
     */
    readonly attrScalingRuleId: ros.IResolvable;
    /**
     * @Attribute ScalingRuleName: The name of the scaling rule.
     */
    readonly attrScalingRuleName: ros.IResolvable;
    /**
     * @Attribute ScalingRuleType: The type of the scaling rule.
     */
    readonly attrScalingRuleType: ros.IResolvable;
    /**
     * @Attribute StepAdjustments: The step adjustments of the step scaling rule.
     */
    readonly attrStepAdjustments: ros.IResolvable;
    /**
     * @Attribute TargetValue: The target value of the metric.
     */
    readonly attrTargetValue: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property scalingRuleId: The ID of the scaling rule that you want to query.
     */
    scalingRuleId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingRuleProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosScalingRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrules
 */
export interface RosScalingRulesProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId?: string | ros.IResolvable;
    /**
     * @Property scalingRuleAris: The unique identifiers of the scaling rules that you want to query.
     */
    readonly scalingRuleAris?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property scalingRuleIds: The IDs of the scaling rules that you want to query.
     */
    readonly scalingRuleIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property scalingRuleNames: The names of the scaling rules that you want to query.
     */
    readonly scalingRuleNames?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property scalingRuleType: The type of the scaling rule. Valid values:
     * SimpleScalingRule: adjusts the number of ECS instances based on the values of the AdjustmentType and AdjustmentValue parameters.
     * TargetTrackingScalingRule: calculates the number of ECS instances that need to be scaled in a dynamic manner and maintains the value of a predefined metric close to the value of the TargetValue parameter.
     * StepScalingRule: scales ECS instances in steps based on the specified thresholds and metric values.
     * PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling automatically creates scheduled tasks to adjust the boundary values for the scaling group.
     */
    readonly scalingRuleType?: string | ros.IResolvable;
    /**
     * @Property showAlarmRules: Specifies whether to return the event-triggered tasks that are associated with the scaling rule. Valid values:
     * true
     * false
     * Default value: false.
     *
     */
    readonly showAlarmRules?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ESS::ScalingRules`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingRules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrules
 */
export declare class RosScalingRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingRules";
    /**
     * @Attribute ScalingRuleIds: The list of scaling rule IDs.
     */
    readonly attrScalingRuleIds: ros.IResolvable;
    /**
     * @Attribute ScalingRules: The list of scaling rules.
     */
    readonly attrScalingRules: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    scalingGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleAris: The unique identifiers of the scaling rules that you want to query.
     */
    scalingRuleAris: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleIds: The IDs of the scaling rules that you want to query.
     */
    scalingRuleIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleNames: The names of the scaling rules that you want to query.
     */
    scalingRuleNames: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleType: The type of the scaling rule. Valid values:
     * SimpleScalingRule: adjusts the number of ECS instances based on the values of the AdjustmentType and AdjustmentValue parameters.
     * TargetTrackingScalingRule: calculates the number of ECS instances that need to be scaled in a dynamic manner and maintains the value of a predefined metric close to the value of the TargetValue parameter.
     * StepScalingRule: scales ECS instances in steps based on the specified thresholds and metric values.
     * PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling automatically creates scheduled tasks to adjust the boundary values for the scaling group.
     */
    scalingRuleType: string | ros.IResolvable | undefined;
    /**
     * @Property showAlarmRules: Specifies whether to return the event-triggered tasks that are associated with the scaling rule. Valid values:
     * true
     * false
     * Default value: false.
     *
     */
    showAlarmRules: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingRulesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
