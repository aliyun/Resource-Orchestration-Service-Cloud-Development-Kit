import * as ros from '@alicloud/ros-cdk-core';
import { RosWafRule } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWafRule as WafRuleProperty };

/**
 * Properties for defining a `WafRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-wafrule
 */
export interface WafRuleProps {

    /**
     * Property phase: The version of the website.
     */
    readonly phase: string | ros.IResolvable;

    /**
     * Property siteId: The website ID, which can be obtained by calling the [ListSites](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850189.html) operation.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property config: The configuration of the rule.
     */
    readonly config?: RosWafRule.ConfigProperty | ros.IResolvable;

    /**
     * Property rulesetId: The ID of the WAF ruleset, which can be obtained by calling the [ListWafRulesets](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850233.html) operation.
     */
    readonly rulesetId?: number | ros.IResolvable;

    /**
     * Property shared: The configurations shared by multiple rules.
     */
    readonly shared?: RosWafRule.SharedProperty | ros.IResolvable;

    /**
     * Property siteVersion: The website ID, which can be obtained by calling the [ListSites](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850189.html) operation.
     */
    readonly siteVersion?: number | ros.IResolvable;
}

/**
 * Represents a `WafRule`.
 */
export interface IWafRule extends ros.IResource {
    readonly props: WafRuleProps;

    /**
     * Attribute Config: The configuration of the rule.
     */
    readonly attrConfig: ros.IResolvable | string;

    /**
     * Attribute Phase: The version of the website.
     */
    readonly attrPhase: ros.IResolvable | string;

    /**
     * Attribute RulesetId: The ID of the WAF ruleset, which can be obtained by calling the [ListWafRulesets](https://www.alibabacloud.com/help/en/doc-detail/2850233.html) operation.
     */
    readonly attrRulesetId: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the rule was last modified.
     */
    readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute WafRuleId: WafRule Id.
     */
    readonly attrWafRuleId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::WafRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWafRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-wafrule
 */
export class WafRule extends ros.Resource implements IWafRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: WafRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Config: The configuration of the rule.
     */
    public readonly attrConfig: ros.IResolvable | string;

    /**
     * Attribute Phase: The version of the website.
     */
    public readonly attrPhase: ros.IResolvable | string;

    /**
     * Attribute RulesetId: The ID of the WAF ruleset, which can be obtained by calling the [ListWafRulesets](https://www.alibabacloud.com/help/en/doc-detail/2850233.html) operation.
     */
    public readonly attrRulesetId: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the rule was last modified.
     */
    public readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute WafRuleId: WafRule Id.
     */
    public readonly attrWafRuleId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WafRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosWafRule = new RosWafRule(this, id,  {
            rulesetId: props.rulesetId,
            siteId: props.siteId,
            phase: props.phase,
            config: props.config,
            shared: props.shared,
            siteVersion: props.siteVersion,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWafRule;
        this.attrConfig = rosWafRule.attrConfig;
        this.attrPhase = rosWafRule.attrPhase;
        this.attrRulesetId = rosWafRule.attrRulesetId;
        this.attrUpdateTime = rosWafRule.attrUpdateTime;
        this.attrWafRuleId = rosWafRule.attrWafRuleId;
    }
}
