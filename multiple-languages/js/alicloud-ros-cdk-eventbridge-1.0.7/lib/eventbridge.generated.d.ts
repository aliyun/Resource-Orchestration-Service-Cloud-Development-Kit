import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::EventBridge::Rule`
 */
export interface RosRuleProps {
    /**
     * @Property eventBusName: The name of the event bus.
     */
    readonly eventBusName: string | ros.IResolvable;
    /**
     * @Property filterPattern: The event pattern, in the JSON format.
     */
    readonly filterPattern: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property ruleName: The name of the event rule.
     */
    readonly ruleName: string | ros.IResolvable;
    /**
     * @Property targets: The event target to which events are delivered.
     */
    readonly targets: Array<RosRule.TargetsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of the event rule.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property status: The status of the event rule. Valid values:
     * ENABLE: The event rule is enabled. It is the default state of the event rule.
     * DISABLE: The event rule is disabled.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::EventBridge::Rule`
 */
export declare class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EventBridge::Rule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute EventBusName: The name of the event bus.
     */
    readonly attrEventBusName: ros.IResolvable;
    /**
     * @Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule. The ARN is used for authorization.
     */
    readonly attrRuleArn: ros.IResolvable;
    /**
     * @Attribute RuleName: The name of the event rule.
     */
    readonly attrRuleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property eventBusName: The name of the event bus.
     */
    eventBusName: string | ros.IResolvable;
    /**
     * @Property filterPattern: The event pattern, in the JSON format.
     */
    filterPattern: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property ruleName: The name of the event rule.
     */
    ruleName: string | ros.IResolvable;
    /**
     * @Property targets: The event target to which events are delivered.
     */
    targets: Array<RosRule.TargetsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of the event rule.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the event rule. Valid values:
     * ENABLE: The event rule is enabled. It is the default state of the event rule.
     * DISABLE: The event rule is disabled.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::EventBridge::Rule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface ParamListProperty {
        /**
         * @Property form: The transformation method.For more information, see Event target parameters.
         */
        readonly form: string | ros.IResolvable;
        /**
         * @Property value: The event value to be transformed.
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property resourceKey: The resource key of the transformed event.For more information, see Event target parameters.
         */
        readonly resourceKey: string | ros.IResolvable;
        /**
         * @Property template: The format of the template.
         */
        readonly template?: string | ros.IResolvable;
    }
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface TargetsProperty {
        /**
         * @Property pushRetryStrategy: The retry policy that is used to push the event. Valid values: BACKOFF_RETRY: backoff retry. The request can be retried up to three times. The interval between two consecutive retries is a random value between 10 and 20 seconds. EXPONENTIAL_DECAY_RETRY: exponential decay retry. The request can be retried up to 176 times. The interval between two consecutive retries exponentially increases to 512 seconds, and the total retry time is one day. The specific retry intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 512, ..., and 512 seconds, including a maximum of one hundred and sixty-seven 512 seconds in total.
         */
        readonly pushRetryStrategy?: string | ros.IResolvable;
        /**
         * @Property type: The type of the event target.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property endpoint: The endpoint of the event target.
         */
        readonly endpoint: string | ros.IResolvable;
        /**
         * @Property id: The custom ID of the event target.
         */
        readonly id: string | ros.IResolvable;
        /**
         * @Property paramList: The parameters that the event passes.
         */
        readonly paramList: Array<RosRule.ParamListProperty | ros.IResolvable> | ros.IResolvable;
    }
}
//# sourceMappingURL=eventbridge.generated.d.ts.map