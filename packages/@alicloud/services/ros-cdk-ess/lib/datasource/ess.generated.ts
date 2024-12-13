// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosScalingConfigurationsProps`
 *
 * @param properties - the TypeScript properties of a `RosScalingConfigurationsProps`
 *
 * @returns the result of the validation.
 */
function RosScalingConfigurationsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('scalingGroupId', ros.validateString)(properties.scalingGroupId));
    if(properties.scalingConfigurationIds && (Array.isArray(properties.scalingConfigurationIds) || (typeof properties.scalingConfigurationIds) === 'string')) {
        errors.collect(ros.propertyValidator('scalingConfigurationIds', ros.validateLength)({
            data: properties.scalingConfigurationIds.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('scalingConfigurationIds', ros.listValidator(ros.validateString))(properties.scalingConfigurationIds));
    if(properties.scalingConfigurationNames && (Array.isArray(properties.scalingConfigurationNames) || (typeof properties.scalingConfigurationNames) === 'string')) {
        errors.collect(ros.propertyValidator('scalingConfigurationNames', ros.validateLength)({
            data: properties.scalingConfigurationNames.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('scalingConfigurationNames', ros.listValidator(ros.validateString))(properties.scalingConfigurationNames));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosScalingConfigurationsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingConfigurations` resource
 *
 * @param properties - the TypeScript properties of a `RosScalingConfigurationsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingConfigurations` resource.
 */
// @ts-ignore TS6133
function rosScalingConfigurationsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosScalingConfigurationsPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ScalingConfigurationIds': ros.listMapper(ros.stringToRosTemplate)(properties.scalingConfigurationIds),
      'ScalingConfigurationNames': ros.listMapper(ros.stringToRosTemplate)(properties.scalingConfigurationNames),
      'ScalingGroupId': ros.stringToRosTemplate(properties.scalingGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ESS::ScalingConfigurations`, which is used to query the information about scaling configurations.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingConfigurations` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
 */
export class RosScalingConfigurations extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingConfigurations";

    /**
     * @Attribute ScalingConfigurationIds: The list of scaling configuration IDs.
     */
    public readonly attrScalingConfigurationIds: ros.IResolvable;

    /**
     * @Attribute ScalingConfigurations: The list of scaling configurations.
     */
    public readonly attrScalingConfigurations: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property scalingConfigurationIds: The ID of scaling configuration that you want to query. Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
     */
    public scalingConfigurationIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property scalingConfigurationNames: The name of scaling configuration that you want to query. Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
     */
    public scalingConfigurationNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property scalingGroupId: The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group.
     */
    public scalingGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingConfigurationsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosScalingConfigurations.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScalingConfigurationIds = this.getAtt('ScalingConfigurationIds');
        this.attrScalingConfigurations = this.getAtt('ScalingConfigurations');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.scalingConfigurationIds = props.scalingConfigurationIds;
        this.scalingConfigurationNames = props.scalingConfigurationNames;
        this.scalingGroupId = props.scalingGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            scalingConfigurationIds: this.scalingConfigurationIds,
            scalingConfigurationNames: this.scalingConfigurationNames,
            scalingGroupId: this.scalingGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosScalingConfigurationsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosScalingGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosScalingGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosScalingGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.scalingGroupNames && (Array.isArray(properties.scalingGroupNames) || (typeof properties.scalingGroupNames) === 'string')) {
        errors.collect(ros.propertyValidator('scalingGroupNames', ros.validateLength)({
            data: properties.scalingGroupNames.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('scalingGroupNames', ros.listValidator(ros.validateString))(properties.scalingGroupNames));
    errors.collect(ros.propertyValidator('groupType', ros.validateString)(properties.groupType));
    if(properties.scalingGroupIds && (Array.isArray(properties.scalingGroupIds) || (typeof properties.scalingGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('scalingGroupIds', ros.validateLength)({
            data: properties.scalingGroupIds.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('scalingGroupIds', ros.listValidator(ros.validateString))(properties.scalingGroupIds));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosScalingGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosScalingGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingGroups` resource.
 */
// @ts-ignore TS6133
function rosScalingGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosScalingGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      'GroupType': ros.stringToRosTemplate(properties.groupType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ScalingGroupIds': ros.listMapper(ros.stringToRosTemplate)(properties.scalingGroupIds),
      'ScalingGroupNames': ros.listMapper(ros.stringToRosTemplate)(properties.scalingGroupNames),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ESS::ScalingGroups`, which is used to query scaling groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
 */
export class RosScalingGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingGroups";

    /**
     * @Attribute ScalingGroupIds: The list of scaling group IDs.
     */
    public readonly attrScalingGroupIds: ros.IResolvable;

    /**
     * @Attribute ScalingGroups: The list of scaling groups.
     */
    public readonly attrScalingGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupType: The type of instances that are managed by the scaling group. Valid values:
     * ECS: the Elastic Compute Service (ECS) instances
     * ECI: the elastic container instances
     * Default value: ECS.
     */
    public groupType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    public scalingGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    public scalingGroupNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosScalingGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScalingGroupIds = this.getAtt('ScalingGroupIds');
        this.attrScalingGroups = this.getAtt('ScalingGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupType = props.groupType;
        this.refreshOptions = props.refreshOptions;
        this.scalingGroupIds = props.scalingGroupIds;
        this.scalingGroupNames = props.scalingGroupNames;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupType: this.groupType,
            refreshOptions: this.refreshOptions,
            scalingGroupIds: this.scalingGroupIds,
            scalingGroupNames: this.scalingGroupNames,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosScalingGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosScalingRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosScalingRuleProps`
 *
 * @returns the result of the validation.
 */
function RosScalingRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('scalingRuleId', ros.requiredValidator)(properties.scalingRuleId));
    errors.collect(ros.propertyValidator('scalingRuleId', ros.validateString)(properties.scalingRuleId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosScalingRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingRule` resource
 *
 * @param properties - the TypeScript properties of a `RosScalingRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingRule` resource.
 */
// @ts-ignore TS6133
function rosScalingRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosScalingRulePropsValidator(properties).assertSuccess();
    }
    return {
      'ScalingRuleId': ros.stringToRosTemplate(properties.scalingRuleId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ESS::ScalingRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrule
 */
export class RosScalingRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingRule";

    /**
     * @Attribute AdjustmentType: The adjustment method of the scaling rule.
     */
    public readonly attrAdjustmentType: ros.IResolvable;

    /**
     * @Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.
     */
    public readonly attrAdjustmentValue: ros.IResolvable;

    /**
     * @Attribute Alarms: The event-triggered tasks that are associated with the scaling rule. The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
     */
    public readonly attrAlarms: ros.IResolvable;

    /**
     * @Attribute Cooldown: The cooldown period of the scaling rule.
     */
    public readonly attrCooldown: ros.IResolvable;

    /**
     * @Attribute DisableScaleIn: Indicates whether scale-in is disabled.
     */
    public readonly attrDisableScaleIn: ros.IResolvable;

    /**
     * @Attribute EstimatedInstanceWarmup: The warm-up period of instances.
     */
    public readonly attrEstimatedInstanceWarmup: ros.IResolvable;

    /**
     * @Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.
     */
    public readonly attrInitialMaxSize: ros.IResolvable;

    /**
     * @Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.
     */
    public readonly attrMaxSize: ros.IResolvable;

    /**
     * @Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.
     */
    public readonly attrMetricName: ros.IResolvable;

    /**
     * @Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.
     */
    public readonly attrMinAdjustmentMagnitude: ros.IResolvable;

    /**
     * @Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.
     */
    public readonly attrMinSize: ros.IResolvable;

    /**
     * @Attribute PredictiveScalingMode: The mode of the predictive scaling rule.
     */
    public readonly attrPredictiveScalingMode: ros.IResolvable;

    /**
     * @Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.
     */
    public readonly attrPredictiveTaskBufferTime: ros.IResolvable;

    /**
     * @Attribute PredictiveValueBehavior: The action on the predicted maximum value.
     */
    public readonly attrPredictiveValueBehavior: ros.IResolvable;

    /**
     * @Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
     */
    public readonly attrPredictiveValueBuffer: ros.IResolvable;

    /**
     * @Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.
     */
    public readonly attrScaleInEvaluationCount: ros.IResolvable;

    /**
     * @Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.
     */
    public readonly attrScaleOutEvaluationCount: ros.IResolvable;

    /**
     * @Attribute ScalingGroupId: The ID of the scaling group.
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * @Attribute ScalingRuleAri: The unique identifier of the scaling rule.
     */
    public readonly attrScalingRuleAri: ros.IResolvable;

    /**
     * @Attribute ScalingRuleId: The ID of the scaling rule.
     */
    public readonly attrScalingRuleId: ros.IResolvable;

    /**
     * @Attribute ScalingRuleName: The name of the scaling rule.
     */
    public readonly attrScalingRuleName: ros.IResolvable;

    /**
     * @Attribute ScalingRuleType: The type of the scaling rule.
     */
    public readonly attrScalingRuleType: ros.IResolvable;

    /**
     * @Attribute StepAdjustments: The step adjustments of the step scaling rule.
     */
    public readonly attrStepAdjustments: ros.IResolvable;

    /**
     * @Attribute TargetValue: The target value of the metric.
     */
    public readonly attrTargetValue: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property scalingRuleId: The ID of the scaling rule that you want to query.
     */
    public scalingRuleId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosScalingRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAdjustmentType = this.getAtt('AdjustmentType');
        this.attrAdjustmentValue = this.getAtt('AdjustmentValue');
        this.attrAlarms = this.getAtt('Alarms');
        this.attrCooldown = this.getAtt('Cooldown');
        this.attrDisableScaleIn = this.getAtt('DisableScaleIn');
        this.attrEstimatedInstanceWarmup = this.getAtt('EstimatedInstanceWarmup');
        this.attrInitialMaxSize = this.getAtt('InitialMaxSize');
        this.attrMaxSize = this.getAtt('MaxSize');
        this.attrMetricName = this.getAtt('MetricName');
        this.attrMinAdjustmentMagnitude = this.getAtt('MinAdjustmentMagnitude');
        this.attrMinSize = this.getAtt('MinSize');
        this.attrPredictiveScalingMode = this.getAtt('PredictiveScalingMode');
        this.attrPredictiveTaskBufferTime = this.getAtt('PredictiveTaskBufferTime');
        this.attrPredictiveValueBehavior = this.getAtt('PredictiveValueBehavior');
        this.attrPredictiveValueBuffer = this.getAtt('PredictiveValueBuffer');
        this.attrScaleInEvaluationCount = this.getAtt('ScaleInEvaluationCount');
        this.attrScaleOutEvaluationCount = this.getAtt('ScaleOutEvaluationCount');
        this.attrScalingGroupId = this.getAtt('ScalingGroupId');
        this.attrScalingRuleAri = this.getAtt('ScalingRuleAri');
        this.attrScalingRuleId = this.getAtt('ScalingRuleId');
        this.attrScalingRuleName = this.getAtt('ScalingRuleName');
        this.attrScalingRuleType = this.getAtt('ScalingRuleType');
        this.attrStepAdjustments = this.getAtt('StepAdjustments');
        this.attrTargetValue = this.getAtt('TargetValue');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.scalingRuleId = props.scalingRuleId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            scalingRuleId: this.scalingRuleId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosScalingRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosScalingRulesProps`
 *
 * @param properties - the TypeScript properties of a `RosScalingRulesProps`
 *
 * @returns the result of the validation.
 */
function RosScalingRulesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.scalingRuleIds && (Array.isArray(properties.scalingRuleIds) || (typeof properties.scalingRuleIds) === 'string')) {
        errors.collect(ros.propertyValidator('scalingRuleIds', ros.validateLength)({
            data: properties.scalingRuleIds.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('scalingRuleIds', ros.listValidator(ros.validateAny))(properties.scalingRuleIds));
    errors.collect(ros.propertyValidator('showAlarmRules', ros.validateBoolean)(properties.showAlarmRules));
    errors.collect(ros.propertyValidator('scalingGroupId', ros.validateString)(properties.scalingGroupId));
    if(properties.scalingRuleAris && (Array.isArray(properties.scalingRuleAris) || (typeof properties.scalingRuleAris) === 'string')) {
        errors.collect(ros.propertyValidator('scalingRuleAris', ros.validateLength)({
            data: properties.scalingRuleAris.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('scalingRuleAris', ros.listValidator(ros.validateAny))(properties.scalingRuleAris));
    if(properties.scalingRuleType && (typeof properties.scalingRuleType) !== 'object') {
        errors.collect(ros.propertyValidator('scalingRuleType', ros.validateAllowedValues)({
          data: properties.scalingRuleType,
          allowedValues: ["SimpleScalingRule","TargetTrackingScalingRule","StepScalingRule","PredictiveScalingRule"],
        }));
    }
    errors.collect(ros.propertyValidator('scalingRuleType', ros.validateString)(properties.scalingRuleType));
    if(properties.scalingRuleNames && (Array.isArray(properties.scalingRuleNames) || (typeof properties.scalingRuleNames) === 'string')) {
        errors.collect(ros.propertyValidator('scalingRuleNames', ros.validateLength)({
            data: properties.scalingRuleNames.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('scalingRuleNames', ros.listValidator(ros.validateAny))(properties.scalingRuleNames));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosScalingRulesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingRules` resource
 *
 * @param properties - the TypeScript properties of a `RosScalingRulesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingRules` resource.
 */
// @ts-ignore TS6133
function rosScalingRulesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosScalingRulesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ScalingGroupId': ros.stringToRosTemplate(properties.scalingGroupId),
      'ScalingRuleAris': ros.listMapper(ros.objectToRosTemplate)(properties.scalingRuleAris),
      'ScalingRuleIds': ros.listMapper(ros.objectToRosTemplate)(properties.scalingRuleIds),
      'ScalingRuleNames': ros.listMapper(ros.objectToRosTemplate)(properties.scalingRuleNames),
      'ScalingRuleType': ros.stringToRosTemplate(properties.scalingRuleType),
      'ShowAlarmRules': ros.booleanToRosTemplate(properties.showAlarmRules),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ESS::ScalingRules`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingRules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrules
 */
export class RosScalingRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingRules";

    /**
     * @Attribute ScalingRuleIds: The list of scaling rule IDs.
     */
    public readonly attrScalingRuleIds: ros.IResolvable;

    /**
     * @Attribute ScalingRules: The list of scaling rules.
     */
    public readonly attrScalingRules: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    public scalingGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property scalingRuleAris: The unique identifiers of the scaling rules that you want to query.
     */
    public scalingRuleAris: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property scalingRuleIds: The IDs of the scaling rules that you want to query.
     */
    public scalingRuleIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property scalingRuleNames: The names of the scaling rules that you want to query.
     */
    public scalingRuleNames: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property scalingRuleType: The type of the scaling rule. Valid values:
     * SimpleScalingRule: adjusts the number of ECS instances based on the values of the AdjustmentType and AdjustmentValue parameters.
     * TargetTrackingScalingRule: calculates the number of ECS instances that need to be scaled in a dynamic manner and maintains the value of a predefined metric close to the value of the TargetValue parameter.
     * StepScalingRule: scales ECS instances in steps based on the specified thresholds and metric values.
     * PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling automatically creates scheduled tasks to adjust the boundary values for the scaling group.
     */
    public scalingRuleType: string | ros.IResolvable | undefined;

    /**
     * @Property showAlarmRules: Specifies whether to return the event-triggered tasks that are associated with the scaling rule. Valid values:
     * true
     * false
     * Default value: false.
     *
     */
    public showAlarmRules: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingRulesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosScalingRules.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScalingRuleIds = this.getAtt('ScalingRuleIds');
        this.attrScalingRules = this.getAtt('ScalingRules');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.scalingGroupId = props.scalingGroupId;
        this.scalingRuleAris = props.scalingRuleAris;
        this.scalingRuleIds = props.scalingRuleIds;
        this.scalingRuleNames = props.scalingRuleNames;
        this.scalingRuleType = props.scalingRuleType;
        this.showAlarmRules = props.showAlarmRules;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            scalingGroupId: this.scalingGroupId,
            scalingRuleAris: this.scalingRuleAris,
            scalingRuleIds: this.scalingRuleIds,
            scalingRuleNames: this.scalingRuleNames,
            scalingRuleType: this.scalingRuleType,
            showAlarmRules: this.showAlarmRules,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosScalingRulesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
