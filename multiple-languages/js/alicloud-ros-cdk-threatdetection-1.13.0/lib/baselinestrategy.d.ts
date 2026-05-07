import * as ros from '@alicloud/ros-cdk-core';
import { RosBaselineStrategy } from './threatdetection.generated';
export { RosBaselineStrategy as BaselineStrategyProperty };
/**
 * Properties for defining a `BaselineStrategy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
 */
export interface BaselineStrategyProps {
    /**
     * Property baselineStrategyName: The new name of the baseline check policy.
     */
    readonly baselineStrategyName: string | ros.IResolvable;
    /**
     * Property customType: The type of the baseline check policy. Valid values:
     * *   **custom**: a custom baseline check policy
     * *   **common**: a standard baseline check policy.
     */
    readonly customType: string | ros.IResolvable;
    /**
     * Property cycleDays: The new interval of the baseline check. Valid values:
     * *   **1**: every 2 days
     * *   **3**: every 4 days
     * *   **7**: every 8 days
     * *   **30**: every 31 days.
     */
    readonly cycleDays: number | ros.IResolvable;
    /**
     * Property endTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
     */
    readonly endTime: string | ros.IResolvable;
    /**
     * Property riskSubTypeName: The subtype of the baselines.
     */
    readonly riskSubTypeName: string | ros.IResolvable;
    /**
     * Property startTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
     */
    readonly startTime: string | ros.IResolvable;
    /**
     * Property targetType: The method that is used to apply the baseline check policy. Valid values:
     * *   **groupId**: asset groups
     * *   **uuid**: assets.
     */
    readonly targetType: string | ros.IResolvable;
}
/**
 * Represents a `BaselineStrategy`.
 */
export interface IBaselineStrategy extends ros.IResource {
    readonly props: BaselineStrategyProps;
    /**
     * Attribute BaselineStrategyId: The ID of the baseline check policy.
     */
    readonly attrBaselineStrategyId: ros.IResolvable | string;
    /**
     * Attribute BaselineStrategyName: The new name of the baseline check policy.
     */
    readonly attrBaselineStrategyName: ros.IResolvable | string;
    /**
     * Attribute CustomType: The type of the baseline check policy.
     */
    readonly attrCustomType: ros.IResolvable | string;
    /**
     * Attribute CycleDays: The new interval of the baseline check.
     */
    readonly attrCycleDays: ros.IResolvable | string;
    /**
     * Attribute EndTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
     */
    readonly attrEndTime: ros.IResolvable | string;
    /**
     * Attribute RiskSubTypeName: The subtype of the baselines.
     */
    readonly attrRiskSubTypeName: ros.IResolvable | string;
    /**
     * Attribute StartTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
     */
    readonly attrStartTime: ros.IResolvable | string;
    /**
     * Attribute TargetType: The method that is used to apply the baseline check policy.
     */
    readonly attrTargetType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::BaselineStrategy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBaselineStrategy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
 */
export declare class BaselineStrategy extends ros.Resource implements IBaselineStrategy {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BaselineStrategyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BaselineStrategyId: The ID of the baseline check policy.
     */
    readonly attrBaselineStrategyId: ros.IResolvable | string;
    /**
     * Attribute BaselineStrategyName: The new name of the baseline check policy.
     */
    readonly attrBaselineStrategyName: ros.IResolvable | string;
    /**
     * Attribute CustomType: The type of the baseline check policy.
     */
    readonly attrCustomType: ros.IResolvable | string;
    /**
     * Attribute CycleDays: The new interval of the baseline check.
     */
    readonly attrCycleDays: ros.IResolvable | string;
    /**
     * Attribute EndTime: The time when the baseline check based on the baseline check policy ends. Specify the time in the hh:mm:ss format.
     */
    readonly attrEndTime: ros.IResolvable | string;
    /**
     * Attribute RiskSubTypeName: The subtype of the baselines.
     */
    readonly attrRiskSubTypeName: ros.IResolvable | string;
    /**
     * Attribute StartTime: The time when the baseline check based on the baseline check policy starts. Specify the time in the hh:mm:ss format.
     */
    readonly attrStartTime: ros.IResolvable | string;
    /**
     * Attribute TargetType: The method that is used to apply the baseline check policy.
     */
    readonly attrTargetType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BaselineStrategyProps, enableResourcePropertyConstraint?: boolean);
}
