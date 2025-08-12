import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingRule } from './ess.generated';
export { RosScalingRule as ScalingRuleProperty };
/**
 * Properties for defining a `ScalingRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrule
 */
export interface ScalingRuleProps {
    /**
     * Property scalingRuleId: The ID of the scaling rule that you want to query.
     */
    readonly scalingRuleId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `ScalingRule`.
 */
export interface IScalingRule extends ros.IResource {
    readonly props: ScalingRuleProps;
    /**
     * Attribute AdjustmentType: The adjustment method of the scaling rule.
     */
    readonly attrAdjustmentType: ros.IResolvable | string;
    /**
     * Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.
     */
    readonly attrAdjustmentValue: ros.IResolvable | string;
    /**
     * Attribute Alarms: The event-triggered tasks that are associated with the scaling rule. The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
     */
    readonly attrAlarms: ros.IResolvable | string;
    /**
     * Attribute Cooldown: The cooldown period of the scaling rule.
     */
    readonly attrCooldown: ros.IResolvable | string;
    /**
     * Attribute DisableScaleIn: Indicates whether scale-in is disabled.
     */
    readonly attrDisableScaleIn: ros.IResolvable | string;
    /**
     * Attribute EstimatedInstanceWarmup: The warm-up period of instances.
     */
    readonly attrEstimatedInstanceWarmup: ros.IResolvable | string;
    /**
     * Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.
     */
    readonly attrInitialMaxSize: ros.IResolvable | string;
    /**
     * Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.
     */
    readonly attrMaxSize: ros.IResolvable | string;
    /**
     * Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.
     */
    readonly attrMetricName: ros.IResolvable | string;
    /**
     * Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.
     */
    readonly attrMinAdjustmentMagnitude: ros.IResolvable | string;
    /**
     * Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.
     */
    readonly attrMinSize: ros.IResolvable | string;
    /**
     * Attribute PredictiveScalingMode: The mode of the predictive scaling rule.
     */
    readonly attrPredictiveScalingMode: ros.IResolvable | string;
    /**
     * Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.
     */
    readonly attrPredictiveTaskBufferTime: ros.IResolvable | string;
    /**
     * Attribute PredictiveValueBehavior: The action on the predicted maximum value.
     */
    readonly attrPredictiveValueBehavior: ros.IResolvable | string;
    /**
     * Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
     */
    readonly attrPredictiveValueBuffer: ros.IResolvable | string;
    /**
     * Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.
     */
    readonly attrScaleInEvaluationCount: ros.IResolvable | string;
    /**
     * Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.
     */
    readonly attrScaleOutEvaluationCount: ros.IResolvable | string;
    /**
     * Attribute ScalingGroupId: The ID of the scaling group.
     */
    readonly attrScalingGroupId: ros.IResolvable | string;
    /**
     * Attribute ScalingRuleAri: The unique identifier of the scaling rule.
     */
    readonly attrScalingRuleAri: ros.IResolvable | string;
    /**
     * Attribute ScalingRuleId: The ID of the scaling rule.
     */
    readonly attrScalingRuleId: ros.IResolvable | string;
    /**
     * Attribute ScalingRuleName: The name of the scaling rule.
     */
    readonly attrScalingRuleName: ros.IResolvable | string;
    /**
     * Attribute ScalingRuleType: The type of the scaling rule.
     */
    readonly attrScalingRuleType: ros.IResolvable | string;
    /**
     * Attribute StepAdjustments: The step adjustments of the step scaling rule.
     */
    readonly attrStepAdjustments: ros.IResolvable | string;
    /**
     * Attribute TargetValue: The target value of the metric.
     */
    readonly attrTargetValue: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ESS::ScalingRule`, which is used to query the information about a scaling rule.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScalingRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrule
 */
export declare class ScalingRule extends ros.Resource implements IScalingRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ScalingRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AdjustmentType: The adjustment method of the scaling rule.
     */
    readonly attrAdjustmentType: ros.IResolvable | string;
    /**
     * Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.
     */
    readonly attrAdjustmentValue: ros.IResolvable | string;
    /**
     * Attribute Alarms: The event-triggered tasks that are associated with the scaling rule. The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
     */
    readonly attrAlarms: ros.IResolvable | string;
    /**
     * Attribute Cooldown: The cooldown period of the scaling rule.
     */
    readonly attrCooldown: ros.IResolvable | string;
    /**
     * Attribute DisableScaleIn: Indicates whether scale-in is disabled.
     */
    readonly attrDisableScaleIn: ros.IResolvable | string;
    /**
     * Attribute EstimatedInstanceWarmup: The warm-up period of instances.
     */
    readonly attrEstimatedInstanceWarmup: ros.IResolvable | string;
    /**
     * Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.
     */
    readonly attrInitialMaxSize: ros.IResolvable | string;
    /**
     * Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.
     */
    readonly attrMaxSize: ros.IResolvable | string;
    /**
     * Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.
     */
    readonly attrMetricName: ros.IResolvable | string;
    /**
     * Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.
     */
    readonly attrMinAdjustmentMagnitude: ros.IResolvable | string;
    /**
     * Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.
     */
    readonly attrMinSize: ros.IResolvable | string;
    /**
     * Attribute PredictiveScalingMode: The mode of the predictive scaling rule.
     */
    readonly attrPredictiveScalingMode: ros.IResolvable | string;
    /**
     * Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.
     */
    readonly attrPredictiveTaskBufferTime: ros.IResolvable | string;
    /**
     * Attribute PredictiveValueBehavior: The action on the predicted maximum value.
     */
    readonly attrPredictiveValueBehavior: ros.IResolvable | string;
    /**
     * Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
     */
    readonly attrPredictiveValueBuffer: ros.IResolvable | string;
    /**
     * Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.
     */
    readonly attrScaleInEvaluationCount: ros.IResolvable | string;
    /**
     * Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.
     */
    readonly attrScaleOutEvaluationCount: ros.IResolvable | string;
    /**
     * Attribute ScalingGroupId: The ID of the scaling group.
     */
    readonly attrScalingGroupId: ros.IResolvable | string;
    /**
     * Attribute ScalingRuleAri: The unique identifier of the scaling rule.
     */
    readonly attrScalingRuleAri: ros.IResolvable | string;
    /**
     * Attribute ScalingRuleId: The ID of the scaling rule.
     */
    readonly attrScalingRuleId: ros.IResolvable | string;
    /**
     * Attribute ScalingRuleName: The name of the scaling rule.
     */
    readonly attrScalingRuleName: ros.IResolvable | string;
    /**
     * Attribute ScalingRuleType: The type of the scaling rule.
     */
    readonly attrScalingRuleType: ros.IResolvable | string;
    /**
     * Attribute StepAdjustments: The step adjustments of the step scaling rule.
     */
    readonly attrStepAdjustments: ros.IResolvable | string;
    /**
     * Attribute TargetValue: The target value of the metric.
     */
    readonly attrTargetValue: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScalingRuleProps, enableResourcePropertyConstraint?: boolean);
}
