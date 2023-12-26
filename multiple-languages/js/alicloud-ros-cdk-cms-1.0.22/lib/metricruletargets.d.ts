import * as ros from '@alicloud/ros-cdk-core';
import { RosMetricRuleTargets } from './cms.generated';
export { RosMetricRuleTargets as MetricRuleTargetsProperty };
/**
 * Properties for defining a `MetricRuleTargets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletargets
 */
export interface MetricRuleTargetsProps {
    /**
     * Property ruleId: The ID of the alert rule.
     */
    readonly ruleId: string | ros.IResolvable;
    /**
     * Property targets: undefined
     */
    readonly targets: Array<RosMetricRuleTargets.TargetsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::MetricRuleTargets`, which is used to add or modify one or more message resources of an alert rule.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMetricRuleTargets`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletargets
 */
export declare class MetricRuleTargets extends ros.Resource {
    /**
     * Attribute Arns: The ARN list of targets
     */
    readonly attrArns: ros.IResolvable;
    /**
     * Attribute Ids: The ID list of targets
     */
    readonly attrIds: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MetricRuleTargetsProps, enableResourcePropertyConstraint?: boolean);
}
