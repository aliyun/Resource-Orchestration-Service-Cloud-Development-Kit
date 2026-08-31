import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingRule } from './ess.generated';
export { RosScalingRule as ScalingRuleProperty };
/**
 * Properties for defining a `ScalingRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingrule
 */
export interface ScalingRuleProps {
    /**
     * Property scalingGroupId: ID of the scaling group of a scaling rule.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * Property adjustmentType: The adjustment method of the scaling rule. If you set ScalingRuleType to
     * SimpleScalingRule or StepScalingRule, you must specify this parameter. Valid
     * values:
     * *   QuantityChangeInCapacity: adds the specified number of ECS instances to or
     * removes the specified number of ECS instances from the scaling group.
     * *   PercentChangeInCapacity: adds the specified percentage of ECS instances to or
     * removes the specified percentage of ECS instances from the scaling group.
     * *   TotalCapacity: adjusts the number of ECS instances in the scaling group to a
     * specified number.
     */
    readonly adjustmentType?: string | ros.IResolvable;
    /**
     * Property adjustmentValue: The number of instances that must be scaled based on the scaling rule. If you set
     * ScalingRuleType to SimpleScalingRule or StepScalingRule, you must specify this
     * parameter. The number of ECS instances that must be scaled in a scaling activity
     * cannot exceed 1,000. Valid values of AdjustmentValue vary based on the value of
     * AdjustmentType.
     * *   Valid values if AdjustmentType is set to QuantityChangeInCapacity: -1000 to
     * 1000.
     * *   Valid values if AdjustmentType is set to PercentChangeInCapacity: -100 to
     * 10000.
     * *   Valid values if AdjustmentType is set to TotalCapacity: 0 to 2000.
     */
    readonly adjustmentValue?: number | ros.IResolvable;
    /**
     * Property cooldown: The cooldown period of the scaling rule. This parameter is available only if you
     * set ScalingRuleType to SimpleScalingRule. Valid values: 0 to 86400. Unit:
     * seconds.
     * You can leave this parameter empty.
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
     * - CpuUtilizationAgent:  (recommended) the CPU utilization.
     * - MemoryUtilization: (recommended) the memory usage.- CpuUtilization: the average CPU utilization.
     * - IntranetTx: the outbound traffic over an internal network.
     * - IntranetRx: the average inbound traffic over an internal network.
     * - VpcInternetTx: the outbound traffic from a virtual private cloud (VPC) to the Internet.
     * - VpcInternetRx: the inbound traffic from the Internet to a VPC.
     * - LoadBalancerRealServerAverageQps: the queries per second (QPS) per Application Load Balancer (ALB) server group.
     * Valid values of a predictive scaling rule:
     * - CpuUtilization: the average CPU utilization.
     * - IntranetRx: the average inbound traffic over an internal network.
     * - IntranetTx: the average outbound traffic over an internal network.
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
     * Property scalingRuleName: The name of the scaling rule. The name must be 2 to 64 characters in length, and
     * can contain letters, digits, underscores (_), hyphens (-), and periods (.). The
     * name must start with a letter or a digit.
     * The name of a scaling rule must be unique within an account in a
     * region.
     * >  If you leave this parameter empty, the scaling rule ID is used.
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
     * Property stepAdjustment: Details of the step adjustments.
     */
    readonly stepAdjustment?: Array<RosScalingRule.StepAdjustmentProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
     */
    readonly targetValue?: number | ros.IResolvable;
}
/**
 * Represents a `ScalingRule`.
 */
export interface IScalingRule extends ros.IResource {
    readonly props: ScalingRuleProps;
    /**
     * Attribute ScalingRuleAri: Unique identifier of a scaling rule.
     */
    readonly attrScalingRuleAri: ros.IResolvable | string;
    /**
     * Attribute ScalingRuleId: ID of a scaling rule, generated by the system and globally unique.
     */
    readonly attrScalingRuleId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESS::ScalingRule`Creates a scaling rule for Auto Scaling (ESS).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScalingRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingrule
 */
export declare class ScalingRule extends ros.Resource implements IScalingRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ScalingRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ScalingRuleAri: Unique identifier of a scaling rule.
     */
    readonly attrScalingRuleAri: ros.IResolvable | string;
    /**
     * Attribute ScalingRuleId: ID of a scaling rule, generated by the system and globally unique.
     */
    readonly attrScalingRuleId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScalingRuleProps, enableResourcePropertyConstraint?: boolean);
}
