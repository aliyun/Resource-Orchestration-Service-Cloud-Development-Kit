import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingRule } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosScalingRule as ScalingRuleProperty };

/**
 * Properties for defining a `ALIYUN::ESS::ScalingRule`
 */
export interface ScalingRuleProps {

    /**
     * Property scalingGroupId: ID of the scaling group of a scaling rule.
     */
    readonly scalingGroupId: string | ros.IResolvable;

    /**
     * Property adjustmentType: Adjustment mode of a scaling rule. Optional values:
     * - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
     * - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
     * - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
     */
    readonly adjustmentType?: string | ros.IResolvable;

    /**
     * Property adjustmentValue: Adjusted value of a scaling rule. Value range:
     * - QuantityChangeInCapacity: [-500, 500]
     * - PercentChangeInCapacity: [-100, 10000]
     * - TotalCapacity: [0, 1000]
     */
    readonly adjustmentValue?: number | ros.IResolvable;

    /**
     * Property cooldown: Cool-down time of a scaling rule. Value range: [0, 86,400], in seconds. The default value is empty.
     */
    readonly cooldown?: number | ros.IResolvable;

    /**
     * Property disableScaleIn: Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
     *  Default value: false
     */
    readonly disableScaleIn?: boolean | ros.IResolvable;

    /**
     * Property estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
     * Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
     * Valid values: 0 to 86400. Unit: seconds. Default value: 300.
     */
    readonly estimatedInstanceWarmup?: number | ros.IResolvable;

    /**
     * Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
     *  Default value: the same as the value of MaxSize
     */
    readonly initialMaxSize?: number | ros.IResolvable;

    /**
     * Property metricName: The predefined metric to monitor. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
     * Valid values of a target tracking scaling rule:
     * - CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network
     * - ClassicInternetTx: the average public network outbound traffic over the classic network
     * - VpcInternetRx: the average public network inbound traffic over the VPC
     * - VpcInternetTx: the average public network outbound traffic over the VPC
     * - IntranetRx: the average internal network inbound traffic
     * - IntranetTx: the average internal network outbound traffic
     * Valid values of a predictive scaling rule:
     * - CpuUtilization: the average CPU utilization
     * - IntranetRx: the average internal network inbound traffic
     * - IntranetTx: the average internal network outbound traffic
     */
    readonly metricName?: string | ros.IResolvable;

    /**
     * Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
     */
    readonly minAdjustmentMagnitude?: number | ros.IResolvable;

    /**
     * Property predictiveScalingMode: The mode of the predictive scaling rule. Valid values:
     * - PredictAndScale: generates forecasts and creates forecast tasks.
     * - PredictOnly: generates forecasts but does not create forecast tasks.
     * Default value: PredictAndScale
     */
    readonly predictiveScalingMode?: string | ros.IResolvable;

    /**
     * Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
     *  Default value: 0
     */
    readonly predictiveTaskBufferTime?: number | ros.IResolvable;

    /**
     * Property predictiveValueBehavior: The action taken on the predicted maximum value. Valid values:
     * - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     *  - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     *  - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
     *  Default value: MaxOverridePredictiveValue
     */
    readonly predictiveValueBehavior?: string | ros.IResolvable;

    /**
     * Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
     *  Default value: 0
     */
    readonly predictiveValueBuffer?: number | ros.IResolvable;

    /**
     * Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
     * Default value: 15.
     */
    readonly scaleInEvaluationCount?: number | ros.IResolvable;

    /**
     * Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
     * Default value: 3.
     */
    readonly scaleOutEvaluationCount?: number | ros.IResolvable;

    /**
     * Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
     */
    readonly scalingRuleName?: string | ros.IResolvable;

    /**
     * Property scalingRuleType: The type of the scaling rule. Valid values:
     * - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
     * - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
     * - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
     * - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
     *  If this parameter value is not specified, the default value is SimpleScalingRule.
     */
    readonly scalingRuleType?: string | ros.IResolvable;

    /**
     * Property stepAdjustment:
     */
    readonly stepAdjustment?: Array<RosScalingRule.StepAdjustmentProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
     */
    readonly targetValue?: number | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingRule`
 */
export class ScalingRule extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ScalingRuleAri: Unique identifier of a scaling rule.
     */
    public readonly attrScalingRuleAri: ros.IResolvable;

    /**
     * Attribute ScalingRuleId: ID of a scaling rule, generated by the system and globally unique.
     */
    public readonly attrScalingRuleId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ESS::ScalingRule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScalingRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosScalingRule = new RosScalingRule(this, id,  {
            targetValue: props.targetValue,
            cooldown: props.cooldown,
            scalingGroupId: props.scalingGroupId,
            predictiveValueBehavior: props.predictiveValueBehavior,
            minAdjustmentMagnitude: props.minAdjustmentMagnitude,
            disableScaleIn: props.disableScaleIn,
            stepAdjustment: props.stepAdjustment,
            adjustmentType: props.adjustmentType,
            metricName: props.metricName,
            scalingRuleName: props.scalingRuleName,
            adjustmentValue: props.adjustmentValue,
            scaleOutEvaluationCount: props.scaleOutEvaluationCount,
            initialMaxSize: props.initialMaxSize,
            scalingRuleType: props.scalingRuleType,
            estimatedInstanceWarmup: props.estimatedInstanceWarmup,
            predictiveScalingMode: props.predictiveScalingMode,
            predictiveTaskBufferTime: props.predictiveTaskBufferTime,
            predictiveValueBuffer: props.predictiveValueBuffer,
            scaleInEvaluationCount: props.scaleInEvaluationCount,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosScalingRule;
        this.attrScalingRuleAri = rosScalingRule.attrScalingRuleAri;
        this.attrScalingRuleId = rosScalingRule.attrScalingRuleId;
    }
}
