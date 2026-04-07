import * as ros from '@alicloud/ros-cdk-core';
import { RosWaitingRoomRule } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWaitingRoomRule as WaitingRoomRuleProperty };

/**
 * Properties for defining a `WaitingRoomRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomrule
 */
export interface WaitingRoomRuleProps {

    /**
     * Property rule: The content of the rule, the implemented policy or conditional expression.
     */
    readonly rule: string | ros.IResolvable;

    /**
     * Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - on: open.
     * - off: close.
     */
    readonly ruleEnable: string | ros.IResolvable;

    /**
     * Property ruleName: Rule name, optional, used to query by waiting room bypass rule name.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property waitingRoomId: Waiting room ID, used to identify a specific waiting room. It can be obtained by calling the [listwaitingroom](https:\/\/help.aliyun.com\/document_detail\/2850279.html) interface.
     */
    readonly waitingRoomId: string | ros.IResolvable;
}

/**
 * Represents a `WaitingRoomRule`.
 */
export interface IWaitingRoomRule extends ros.IResource {
    readonly props: WaitingRoomRuleProps;

    /**
     * Attribute Rule: The content of the rule, the implemented policy or conditional expression.
     */
    readonly attrRule: ros.IResolvable | string;

    /**
     * Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleEnable: ros.IResolvable | string;

    /**
     * Attribute RuleName: Rule name, optional, used to query by waiting room bypass rule name.
     */
    readonly attrRuleName: ros.IResolvable | string;

    /**
     * Attribute WaitingRoomRuleId: The rule ID, which can be used to query a specific rule.
     */
    readonly attrWaitingRoomRuleId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::WaitingRoomRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWaitingRoomRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomrule
 */
export class WaitingRoomRule extends ros.Resource implements IWaitingRoomRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: WaitingRoomRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Rule: The content of the rule, the implemented policy or conditional expression.
     */
    public readonly attrRule: ros.IResolvable | string;

    /**
     * Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable | string;

    /**
     * Attribute RuleName: Rule name, optional, used to query by waiting room bypass rule name.
     */
    public readonly attrRuleName: ros.IResolvable | string;

    /**
     * Attribute WaitingRoomRuleId: The rule ID, which can be used to query a specific rule.
     */
    public readonly attrWaitingRoomRuleId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WaitingRoomRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosWaitingRoomRule = new RosWaitingRoomRule(this, id,  {
            siteId: props.siteId,
            ruleEnable: props.ruleEnable,
            rule: props.rule,
            waitingRoomId: props.waitingRoomId,
            ruleName: props.ruleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWaitingRoomRule;
        this.attrRule = rosWaitingRoomRule.attrRule;
        this.attrRuleEnable = rosWaitingRoomRule.attrRuleEnable;
        this.attrRuleName = rosWaitingRoomRule.attrRuleName;
        this.attrWaitingRoomRuleId = rosWaitingRoomRule.attrWaitingRoomRuleId;
    }
}
