import * as ros from '@alicloud/ros-cdk-core';
import { RosMetricRuleTargets } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `MetricRuleTargets`.
 */
export interface IMetricRuleTargets extends ros.IResource {
    readonly props: MetricRuleTargetsProps;

    /**
     * Attribute Arns: The ARN list of targets
     */
    readonly attrArns: ros.IResolvable | string;

    /**
     * Attribute Ids: The ID list of targets
     */
    readonly attrIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::MetricRuleTargets`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMetricRuleTargets`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletargets
 */
export class MetricRuleTargets extends ros.Resource implements IMetricRuleTargets {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: MetricRuleTargetsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arns: The ARN list of targets
     */
    public readonly attrArns: ros.IResolvable | string;

    /**
     * Attribute Ids: The ID list of targets
     */
    public readonly attrIds: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MetricRuleTargetsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMetricRuleTargets = new RosMetricRuleTargets(this, id,  {
            ruleId: props.ruleId,
            targets: props.targets,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMetricRuleTargets;
        this.attrArns = rosMetricRuleTargets.attrArns;
        this.attrIds = rosMetricRuleTargets.attrIds;
    }
}
