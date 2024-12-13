import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingRule } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ESS::ScalingRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScalingRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrule
 */
export class ScalingRule extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ScalingRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AdjustmentType: The adjustment method of the scaling rule.
     */
    public readonly attrAdjustmentType: ros.IResolvable;

    /**
     * Attribute AdjustmentValue: The number of instances that must be scaled based on the scaling rule.
     */
    public readonly attrAdjustmentValue: ros.IResolvable;

    /**
     * Attribute Alarms: The event-triggered tasks that are associated with the scaling rule. The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
     */
    public readonly attrAlarms: ros.IResolvable;

    /**
     * Attribute Cooldown: The cooldown period of the scaling rule.
     */
    public readonly attrCooldown: ros.IResolvable;

    /**
     * Attribute DisableScaleIn: Indicates whether scale-in is disabled.
     */
    public readonly attrDisableScaleIn: ros.IResolvable;

    /**
     * Attribute EstimatedInstanceWarmup: The warm-up period of instances.
     */
    public readonly attrEstimatedInstanceWarmup: ros.IResolvable;

    /**
     * Attribute InitialMaxSize: The maximum number of ECS instances that can be contained in the scaling group.
     */
    public readonly attrInitialMaxSize: ros.IResolvable;

    /**
     * Attribute MaxSize: The maximum number of ECS instances that can be contained in the scaling group.
     */
    public readonly attrMaxSize: ros.IResolvable;

    /**
     * Attribute MetricName: The name of the metric of the event-triggered task that is associated with the scaling rule.
     */
    public readonly attrMetricName: ros.IResolvable;

    /**
     * Attribute MinAdjustmentMagnitude: The minimum number of instances that must be scaled.
     */
    public readonly attrMinAdjustmentMagnitude: ros.IResolvable;

    /**
     * Attribute MinSize: The minimum number of ECS instances that must be contained in the scaling group.
     */
    public readonly attrMinSize: ros.IResolvable;

    /**
     * Attribute PredictiveScalingMode: The mode of the predictive scaling rule.
     */
    public readonly attrPredictiveScalingMode: ros.IResolvable;

    /**
     * Attribute PredictiveTaskBufferTime: The amount of buffer time before prediction tasks are executed.
     */
    public readonly attrPredictiveTaskBufferTime: ros.IResolvable;

    /**
     * Attribute PredictiveValueBehavior: The action on the predicted maximum value.
     */
    public readonly attrPredictiveValueBehavior: ros.IResolvable;

    /**
     * Attribute PredictiveValueBuffer: The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer.
     */
    public readonly attrPredictiveValueBuffer: ros.IResolvable;

    /**
     * Attribute ScaleInEvaluationCount: The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered.
     */
    public readonly attrScaleInEvaluationCount: ros.IResolvable;

    /**
     * Attribute ScaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered.
     */
    public readonly attrScaleOutEvaluationCount: ros.IResolvable;

    /**
     * Attribute ScalingGroupId: The ID of the scaling group.
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * Attribute ScalingRuleAri: The unique identifier of the scaling rule.
     */
    public readonly attrScalingRuleAri: ros.IResolvable;

    /**
     * Attribute ScalingRuleId: The ID of the scaling rule.
     */
    public readonly attrScalingRuleId: ros.IResolvable;

    /**
     * Attribute ScalingRuleName: The name of the scaling rule.
     */
    public readonly attrScalingRuleName: ros.IResolvable;

    /**
     * Attribute ScalingRuleType: The type of the scaling rule.
     */
    public readonly attrScalingRuleType: ros.IResolvable;

    /**
     * Attribute StepAdjustments: The step adjustments of the step scaling rule.
     */
    public readonly attrStepAdjustments: ros.IResolvable;

    /**
     * Attribute TargetValue: The target value of the metric.
     */
    public readonly attrTargetValue: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScalingRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosScalingRule = new RosScalingRule(this, id,  {
            scalingRuleId: props.scalingRuleId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosScalingRule;
        this.attrAdjustmentType = rosScalingRule.attrAdjustmentType;
        this.attrAdjustmentValue = rosScalingRule.attrAdjustmentValue;
        this.attrAlarms = rosScalingRule.attrAlarms;
        this.attrCooldown = rosScalingRule.attrCooldown;
        this.attrDisableScaleIn = rosScalingRule.attrDisableScaleIn;
        this.attrEstimatedInstanceWarmup = rosScalingRule.attrEstimatedInstanceWarmup;
        this.attrInitialMaxSize = rosScalingRule.attrInitialMaxSize;
        this.attrMaxSize = rosScalingRule.attrMaxSize;
        this.attrMetricName = rosScalingRule.attrMetricName;
        this.attrMinAdjustmentMagnitude = rosScalingRule.attrMinAdjustmentMagnitude;
        this.attrMinSize = rosScalingRule.attrMinSize;
        this.attrPredictiveScalingMode = rosScalingRule.attrPredictiveScalingMode;
        this.attrPredictiveTaskBufferTime = rosScalingRule.attrPredictiveTaskBufferTime;
        this.attrPredictiveValueBehavior = rosScalingRule.attrPredictiveValueBehavior;
        this.attrPredictiveValueBuffer = rosScalingRule.attrPredictiveValueBuffer;
        this.attrScaleInEvaluationCount = rosScalingRule.attrScaleInEvaluationCount;
        this.attrScaleOutEvaluationCount = rosScalingRule.attrScaleOutEvaluationCount;
        this.attrScalingGroupId = rosScalingRule.attrScalingGroupId;
        this.attrScalingRuleAri = rosScalingRule.attrScalingRuleAri;
        this.attrScalingRuleId = rosScalingRule.attrScalingRuleId;
        this.attrScalingRuleName = rosScalingRule.attrScalingRuleName;
        this.attrScalingRuleType = rosScalingRule.attrScalingRuleType;
        this.attrStepAdjustments = rosScalingRule.attrStepAdjustments;
        this.attrTargetValue = rosScalingRule.attrTargetValue;
    }
}
