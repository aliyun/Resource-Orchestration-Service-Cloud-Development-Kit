import * as ros from '@alicloud/ros-cdk-core';
import { RosRule } from './eventbridge.generated';
export { RosRule as RuleProperty };
/**
 * Properties for defining a `ALIYUN::EventBridge::Rule`
 */
export interface RuleProps {
    /**
     * Property eventBusName: The name of the event bus.
     */
    readonly eventBusName: string | ros.IResolvable;
    /**
     * Property filterPattern: The event pattern, in the JSON format.
     */
    readonly filterPattern: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
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
 * A ROS resource type:  `ALIYUN::EventBridge::Rule`
 */
export declare class Rule extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute EventBusName: The name of the event bus.
     */
    readonly attrEventBusName: ros.IResolvable;
    /**
     * Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule. The ARN is used for authorization.
     */
    readonly attrRuleArn: ros.IResolvable;
    /**
     * Attribute RuleName: The name of the event rule.
     */
    readonly attrRuleName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::EventBridge::Rule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleProps, enableResourcePropertyConstraint?: boolean);
}
