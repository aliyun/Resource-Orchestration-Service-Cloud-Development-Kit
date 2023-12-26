import * as ros from '@alicloud/ros-cdk-core';
import { RosEventRule } from './cms.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::EventRule`, which is used to create or modify an event-triggered alert rule. If the specified rule name does not exist, an event-triggered alert rule is created. If the specified rule name exists, the specified event-triggered alert rule is modified.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEventRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventrule
 */
export declare class EventRule extends ros.Resource {
    /**
     * Attribute Data: Number of rows affected.
     */
    readonly attrData: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EventRuleProps, enableResourcePropertyConstraint?: boolean);
}
