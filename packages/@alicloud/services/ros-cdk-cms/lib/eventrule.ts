import * as ros from '@alicloud/ros-cdk-core';
import { RosEventRule } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEventRule as EventRuleProperty };

/**
 * Properties for defining a `EventRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventrule
 */
export interface EventRuleProps {

    /**
     * Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.
     */
    readonly eventPattern: Array<RosEventRule.EventPatternProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ruleName: The name of the alarm rule.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * Property description: The description of the alert rule.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property eventType: The type of the event alert. Valid values:
     * SYSTEM
     * CUSTOM
     */
    readonly eventType?: string | ros.IResolvable;

    /**
     * Property groupId: The ID of the application group.
     */
    readonly groupId?: string | ros.IResolvable;

    /**
     * Property state: The status of the alert rule. Valid values:
     * ENABLED
     * DISABLED
     */
    readonly state?: string | ros.IResolvable;
}

/**
 * Represents a `EventRule`.
 */
export interface IEventRule extends ros.IResource {
    readonly props: EventRuleProps;

    /**
     * Attribute Data: Number of rows affected.
     */
    readonly attrData: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::EventRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEventRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventrule
 */
export class EventRule extends ros.Resource implements IEventRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EventRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Data: Number of rows affected.
     */
    public readonly attrData: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EventRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEventRule = new RosEventRule(this, id,  {
            eventPattern: props.eventPattern,
            description: props.description,
            eventType: props.eventType,
            state: props.state,
            ruleName: props.ruleName,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEventRule;
        this.attrData = rosEventRule.attrData;
    }
}
