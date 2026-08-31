import * as ros from '@alicloud/ros-cdk-core';
import { RosContainerDefenseRule } from './threatdetection.generated';
export { RosContainerDefenseRule as ContainerDefenseRuleProperty };
/**
 * Properties for defining a `ContainerDefenseRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule
 */
export interface ContainerDefenseRuleProps {
    /**
     * Property description: Rule description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property ruleAction: The action that is performed when the rule is hit. Valid values:
     * - **1**: alert
     * - **2**: block.
     */
    readonly ruleAction?: number | ros.IResolvable;
    /**
     * Property ruleId: Rule Id.
     */
    readonly ruleId?: number | ros.IResolvable;
    /**
     * Property ruleName: The name of the rule.
     */
    readonly ruleName?: string | ros.IResolvable;
    /**
     * Property ruleSwitch: The switch of the rule. Valid values:
     * * 0: off.
     * * 1: on.
     */
    readonly ruleSwitch?: number | ros.IResolvable;
    /**
     * Property ruleType: The rule type. Value:
     * * 2: User Rules
     */
    readonly ruleType?: number | ros.IResolvable;
    /**
     * Property scope: Rule scope.
     */
    readonly scope?: Array<RosContainerDefenseRule.ScopeProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property whitelist: The whitelist of rule.
     */
    readonly whitelist?: RosContainerDefenseRule.WhitelistProperty | ros.IResolvable;
    /**
     * Property whitelistHash: The whitelist Hash.
     */
    readonly whitelistHash?: string | ros.IResolvable;
}
/**
 * Represents a `ContainerDefenseRule`.
 */
export interface IContainerDefenseRule extends ros.IResource {
    readonly props: ContainerDefenseRuleProps;
    /**
     * Attribute Description: Rule description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute RuleAction: The action that is performed when the rule is hit.
     */
    readonly attrRuleAction: ros.IResolvable | string;
    /**
     * Attribute RuleId: Rule Id.
     */
    readonly attrRuleId: ros.IResolvable | string;
    /**
     * Attribute RuleName: The name of the rule.
     */
    readonly attrRuleName: ros.IResolvable | string;
    /**
     * Attribute RuleSwitch: The switch of the rule.
     */
    readonly attrRuleSwitch: ros.IResolvable | string;
    /**
     * Attribute RuleType: The rule type.
     */
    readonly attrRuleType: ros.IResolvable | string;
    /**
     * Attribute Scope: Rule scope.
     */
    readonly attrScope: ros.IResolvable | string;
    /**
     * Attribute Whitelist: The whitelist of rule.
     */
    readonly attrWhitelist: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::ContainerDefenseRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosContainerDefenseRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule
 */
export declare class ContainerDefenseRule extends ros.Resource implements IContainerDefenseRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ContainerDefenseRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Description: Rule description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute RuleAction: The action that is performed when the rule is hit.
     */
    readonly attrRuleAction: ros.IResolvable | string;
    /**
     * Attribute RuleId: Rule Id.
     */
    readonly attrRuleId: ros.IResolvable | string;
    /**
     * Attribute RuleName: The name of the rule.
     */
    readonly attrRuleName: ros.IResolvable | string;
    /**
     * Attribute RuleSwitch: The switch of the rule.
     */
    readonly attrRuleSwitch: ros.IResolvable | string;
    /**
     * Attribute RuleType: The rule type.
     */
    readonly attrRuleType: ros.IResolvable | string;
    /**
     * Attribute Scope: Rule scope.
     */
    readonly attrScope: ros.IResolvable | string;
    /**
     * Attribute Whitelist: The whitelist of rule.
     */
    readonly attrWhitelist: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ContainerDefenseRuleProps, enableResourcePropertyConstraint?: boolean);
}
