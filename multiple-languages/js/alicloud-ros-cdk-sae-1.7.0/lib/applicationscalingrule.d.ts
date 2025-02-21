import * as ros from '@alicloud/ros-cdk-core';
import { RosApplicationScalingRule } from './sae.generated';
export { RosApplicationScalingRule as ApplicationScalingRuleProperty };
/**
 * Properties for defining a `ApplicationScalingRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-applicationscalingrule
 */
export interface ApplicationScalingRuleProps {
    /**
     * Property appId: The ID of the application.
     */
    readonly appId: string | ros.IResolvable;
    /**
     * Property scalingRuleName: The name of the auto scaling policy. The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
     */
    readonly scalingRuleName: string | ros.IResolvable;
    /**
     * Property scalingRuleType: The type of the auto scaling policy. Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
     */
    readonly scalingRuleType: string | ros.IResolvable;
    /**
     * Property minReadyInstanceRatio: The minimum percentage of surviving instances. The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
     */
    readonly minReadyInstanceRatio?: number | ros.IResolvable;
    /**
     * Property minReadyInstances: Minimum number of surviving instances. The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to **-1**, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
     */
    readonly minReadyInstances?: number | ros.IResolvable;
    /**
     * Property scalingRuleEnable: Whether to enable the scaling rule.
     */
    readonly scalingRuleEnable?: boolean | ros.IResolvable;
    /**
     * Property scalingRuleMetric: Configuration of monitoring indicator elasticity policy. This parameter is required when you select monitoring indicator elasticity policy setting.
     */
    readonly scalingRuleMetric?: RosApplicationScalingRule.ScalingRuleMetricProperty | ros.IResolvable;
    /**
     * Property scalingRuleTimer: The configuration of the timer scaling policy.
     */
    readonly scalingRuleTimer?: RosApplicationScalingRule.ScalingRuleTimerProperty | ros.IResolvable;
}
/**
 * Represents a `ApplicationScalingRule`.
 */
export interface IApplicationScalingRule extends ros.IResource {
    readonly props: ApplicationScalingRuleProps;
    /**
     * Attribute ScalingRuleName: The name of the scaling rule.
     */
    readonly attrScalingRuleName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAE::ApplicationScalingRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplicationScalingRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-applicationscalingrule
 */
export declare class ApplicationScalingRule extends ros.Resource implements IApplicationScalingRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ApplicationScalingRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ScalingRuleName: The name of the scaling rule.
     */
    readonly attrScalingRuleName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationScalingRuleProps, enableResourcePropertyConstraint?: boolean);
}
