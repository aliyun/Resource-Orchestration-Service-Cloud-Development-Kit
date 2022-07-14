import * as ros from '@alicloud/ros-cdk-core';
import { RosEventRule } from './cms.generated';
export { RosEventRule as EventRuleProperty };
/**
 * Properties for defining a `ALIYUN::CMS::EventRule`
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
 * A ROS resource type:  `ALIYUN::CMS::EventRule`
 */
export declare class EventRule extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Data: Number of rows affected.
     */
    readonly attrData: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CMS::EventRule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EventRuleProps, enableResourcePropertyConstraint?: boolean);
}
