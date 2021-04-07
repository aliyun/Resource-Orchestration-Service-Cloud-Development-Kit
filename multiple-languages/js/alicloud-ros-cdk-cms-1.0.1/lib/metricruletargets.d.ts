import * as ros from '@alicloud/ros-cdk-core';
import { RosMetricRuleTargets } from './cms.generated';
export { RosMetricRuleTargets as MetricRuleTargetsProperty };
/**
 * Properties for defining a `ALIYUN::CMS::MetricRuleTargets`
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
 * A ROS resource type:  `ALIYUN::CMS::MetricRuleTargets`
 */
export declare class MetricRuleTargets extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Arns: The ARN list of targets
     */
    readonly attrArns: ros.IResolvable;
    /**
     * Attribute Ids: The ID list of targets
     */
    readonly attrIds: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CMS::MetricRuleTargets`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MetricRuleTargetsProps, enableResourcePropertyConstraint?: boolean);
}
