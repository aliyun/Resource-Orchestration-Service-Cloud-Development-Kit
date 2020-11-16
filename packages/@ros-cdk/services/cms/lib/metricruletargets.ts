import * as ros from '@ros-cdk/core';
import { RosMetricRuleTargets } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMetricRuleTargets as MetricRuleTargetsProperty };

/**
 * Properties for defining a `ALIYUN::CMS::MetricRuleTargets`
 */
export interface MetricRuleTargetsProps {

    /**
     * @Property ruleId: The ID of the alert rule.
     */
    readonly ruleId: string;

    /**
     * @Property targets: undefined
     */
    readonly targets: Array<RosMetricRuleTargets.TargetsProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::CMS::MetricRuleTargets`
 */
export class MetricRuleTargets extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute Arns: The ARN list of targets
     */
    public readonly attrArns: any;

    /**
     * @Attribute Ids: The ID list of targets
     */
    public readonly attrIds: any;

    /**
     * Create a new `ALIYUN::CMS::MetricRuleTargets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MetricRuleTargetsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosMetricRuleTargets = new RosMetricRuleTargets(this, id,  {
            ruleId: props.ruleId,
            targets: props.targets,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMetricRuleTargets;
        this.attrArns = rosMetricRuleTargets.attrArns;
        this.attrIds = rosMetricRuleTargets.attrIds;
    }
}
