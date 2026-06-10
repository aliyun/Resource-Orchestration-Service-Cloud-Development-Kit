import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingRules } from './ess.generated';
export { RosScalingRules as ScalingRulesProperty };
/**
 * Properties for defining a `ScalingRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrules
 */
export interface ScalingRulesProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId?: string | ros.IResolvable;
    /**
     * Property scalingRuleAris: The unique identifiers of the scaling rules that you want to query.
     */
    readonly scalingRuleAris?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property scalingRuleIds: The IDs of the scaling rules that you want to query.
     */
    readonly scalingRuleIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property scalingRuleNames: The names of the scaling rules that you want to query.
     */
    readonly scalingRuleNames?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property scalingRuleType: The type of the scaling rule. Valid values:
     * SimpleScalingRule: adjusts the number of ECS instances based on the values of the AdjustmentType and AdjustmentValue parameters.
     * TargetTrackingScalingRule: calculates the number of ECS instances that need to be scaled in a dynamic manner and maintains the value of a predefined metric close to the value of the TargetValue parameter.
     * StepScalingRule: scales ECS instances in steps based on the specified thresholds and metric values.
     * PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling automatically creates scheduled tasks to adjust the boundary values for the scaling group.
     */
    readonly scalingRuleType?: string | ros.IResolvable;
    /**
     * Property showAlarmRules: Specifies whether to return the event-triggered tasks that are associated with the scaling rule. Valid values:
     * true
     * false
     * Default value: false.
     *
     */
    readonly showAlarmRules?: boolean | ros.IResolvable;
}
/**
 * Represents a `ScalingRules`.
 */
export interface IScalingRules extends ros.IResource {
    readonly props: ScalingRulesProps;
    /**
     * Attribute ScalingRuleIds: The list of scaling rule IDs.
     */
    readonly attrScalingRuleIds: ros.IResolvable | string;
    /**
     * Attribute ScalingRules: The list of scaling rules.
     */
    readonly attrScalingRules: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ESS::ScalingRules`, which are used to query the information about scaling rules.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScalingRules`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrules
 */
export declare class ScalingRules extends ros.Resource implements IScalingRules {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ScalingRulesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ScalingRuleIds: The list of scaling rule IDs.
     */
    readonly attrScalingRuleIds: ros.IResolvable | string;
    /**
     * Attribute ScalingRules: The list of scaling rules.
     */
    readonly attrScalingRules: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ScalingRulesProps, enableResourcePropertyConstraint?: boolean);
}
