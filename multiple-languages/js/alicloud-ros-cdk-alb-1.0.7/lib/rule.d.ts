import * as ros from '@alicloud/ros-cdk-core';
import { RosRule } from './alb.generated';
export { RosRule as RuleProperty };
/**
 * Properties for defining a `ALIYUN::ALB::Rule`
 */
export interface RuleProps {
    /**
     * Property listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB)
     * instance.
     */
    readonly listenerId: string | ros.IResolvable;
    /**
     * Property priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value specifies a higher priority.
     * Note The priority of each forwarding rule within a listener must be unique.
     */
    readonly priority: number | ros.IResolvable;
    /**
     * Property ruleActions: The actions of the forwarding rule.
     */
    readonly ruleActions: Array<RosRule.RuleActionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property ruleConditions: The conditions of the forwarding rule.
     */
    readonly ruleConditions: Array<RosRule.RuleConditionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property ruleName: The name of the forwarding rule.
     * The name must be 2 to 128 characters in length.
     * It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
     * must start with a letter.
     */
    readonly ruleName: string | ros.IResolvable;
    /**
     * Property direction: Rule direction. Valid values: Request or Response.
     */
    readonly direction?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ALB::Rule`
 */
export declare class Rule extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute RuleId: The ID of the forwarding rules.
     */
    readonly attrRuleId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ALB::Rule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=rule.d.ts.map