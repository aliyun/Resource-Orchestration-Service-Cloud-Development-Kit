import * as ros from '@alicloud/ros-cdk-core';
import { RosRule } from './eventbridge.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRule as RuleProperty };

/**
 * Properties for defining a `Rule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-rule
 */
export interface RuleProps {

    /**
     * Property eventBusName: The name of the event bus.
     */
    readonly eventBusName: string | ros.IResolvable;

    /**
     * Property filterPattern: The event pattern, in the JSON format.
     */
    readonly filterPattern: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property ruleName: The name of the event rule.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * Property targets: The event target to which events are delivered.
     */
    readonly targets: Array<RosRule.TargetsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property description: The description of the event rule.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property status: The status of the event rule. Valid values:
     * ENABLE: The event rule is enabled. It is the default state of the event rule.
     * DISABLE: The event rule is disabled.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Represents a `Rule`.
 */
export interface IRule extends ros.IResource {
    readonly props: RuleProps;

    /**
     * Attribute EventBusName: The name of the event bus.
     */
    readonly attrEventBusName: ros.IResolvable | string;

    /**
     * Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule. The ARN is used for authorization.
     */
    readonly attrRuleArn: ros.IResolvable | string;

    /**
     * Attribute RuleName: The name of the event rule.
     */
    readonly attrRuleName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EventBridge::Rule`, which is used to create an event rule for an event bus.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-rule
 */
export class Rule extends ros.Resource implements IRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute EventBusName: The name of the event bus.
     */
    public readonly attrEventBusName: ros.IResolvable | string;

    /**
     * Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule. The ARN is used for authorization.
     */
    public readonly attrRuleArn: ros.IResolvable | string;

    /**
     * Attribute RuleName: The name of the event rule.
     */
    public readonly attrRuleName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRule = new RosRule(this, id,  {
            status: props.status,
            eventBusName: props.eventBusName,
            filterPattern: props.filterPattern,
            description: props.description,
            targets: props.targets,
            ruleName: props.ruleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRule;
        this.attrEventBusName = rosRule.attrEventBusName;
        this.attrRuleArn = rosRule.attrRuleArn;
        this.attrRuleName = rosRule.attrRuleName;
    }
}
