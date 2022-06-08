import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::MNS::Queue`
 */
export interface RosQueueProps {
    /**
     * @Property queueName: Queue name
     */
    readonly queueName: string | ros.IResolvable;
    /**
     * @Property delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires.
     * An integer between 0 and 604800 (7 days). The default value is 0
     */
    readonly delaySeconds?: number | ros.IResolvable;
    /**
     * @Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
     * The default value is false
     */
    readonly loggingEnabled?: boolean | ros.IResolvable;
    /**
     * @Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
     * An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
     */
    readonly maximumMessageSize?: number | ros.IResolvable;
    /**
     * @Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
     * An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
     */
    readonly messageRetentionPeriod?: number | ros.IResolvable;
    /**
     * @Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds.
     * An integer between 0 and 30 seconds. The default value is 0 (seconds)
     */
    readonly pollingWaitSeconds?: number | ros.IResolvable;
    /**
     * @Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds.
     * An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
     */
    readonly visibilityTimeout?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::MNS::Queue`
 */
export declare class RosQueue extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MNS::Queue";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName
     */
    readonly attrArnWithSlash: ros.IResolvable;
    /**
     * @Attribute QueueName: Queue name
     */
    readonly attrQueueName: ros.IResolvable;
    /**
     * @Attribute QueueUrl: URL of created queue
     */
    readonly attrQueueUrl: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property queueName: Queue name
     */
    queueName: string | ros.IResolvable;
    /**
     * @Property delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires.
     * An integer between 0 and 604800 (7 days). The default value is 0
     */
    delaySeconds: number | ros.IResolvable | undefined;
    /**
     * @Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
     * The default value is false
     */
    loggingEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
     * An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
     */
    maximumMessageSize: number | ros.IResolvable | undefined;
    /**
     * @Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
     * An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
     */
    messageRetentionPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds.
     * An integer between 0 and 30 seconds. The default value is 0 (seconds)
     */
    pollingWaitSeconds: number | ros.IResolvable | undefined;
    /**
     * @Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds.
     * An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
     */
    visibilityTimeout: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::MNS::Queue`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQueueProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::MNS::Subscription`
 */
export interface RosSubscriptionProps {
    /**
     * @Property endpoint: Terminal address of the message recipient for the created subscription.
     * Currently, four types of endpoints are supported:
     * 1. HttpEndpoint, which must be prefixed with "http://";
     * 2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};
     * 3. MailEndpoint, in the format of mail:directmail:{MailAddress};
     * 4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
     */
    readonly endpoint: string | ros.IResolvable;
    /**
     * @Property subscriptionName: Subscription name
     */
    readonly subscriptionName: string | ros.IResolvable;
    /**
     * @Property topicName: Topic name
     */
    readonly topicName: string | ros.IResolvable;
    /**
     * @Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
     * The value is a string of no more than 16 characters. The default value is no message filter.
     */
    readonly filterTag?: string | ros.IResolvable;
    /**
     * @Property notifyContentFormat: Format of the message content pushed to the endpoint.
     * XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
     */
    readonly notifyContentFormat?: string | ros.IResolvable;
    /**
     * @Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
     * BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
     */
    readonly notifyStrategy?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::MNS::Subscription`
 */
export declare class RosSubscription extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MNS::Subscription";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SubscriptionName: Subscription name
     */
    readonly attrSubscriptionName: ros.IResolvable;
    /**
     * @Attribute SubscriptionUrl: URL of created subscription
     */
    readonly attrSubscriptionUrl: ros.IResolvable;
    /**
     * @Attribute TopicName: Topic name
     */
    readonly attrTopicName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property endpoint: Terminal address of the message recipient for the created subscription.
     * Currently, four types of endpoints are supported:
     * 1. HttpEndpoint, which must be prefixed with "http://";
     * 2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};
     * 3. MailEndpoint, in the format of mail:directmail:{MailAddress};
     * 4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
     */
    endpoint: string | ros.IResolvable;
    /**
     * @Property subscriptionName: Subscription name
     */
    subscriptionName: string | ros.IResolvable;
    /**
     * @Property topicName: Topic name
     */
    topicName: string | ros.IResolvable;
    /**
     * @Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
     * The value is a string of no more than 16 characters. The default value is no message filter.
     */
    filterTag: string | ros.IResolvable | undefined;
    /**
     * @Property notifyContentFormat: Format of the message content pushed to the endpoint.
     * XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
     */
    notifyContentFormat: string | ros.IResolvable | undefined;
    /**
     * @Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
     * BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
     */
    notifyStrategy: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::MNS::Subscription`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSubscriptionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::MNS::Topic`
 */
export interface RosTopicProps {
    /**
     * @Property topicName: Topic name
     */
    readonly topicName: string | ros.IResolvable;
    /**
     * @Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
     * The default value is false
     */
    readonly loggingEnabled?: boolean | ros.IResolvable;
    /**
     * @Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
     * An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
     */
    readonly maximumMessageSize?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::MNS::Topic`
 */
export declare class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MNS::Topic";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName
     */
    readonly attrArnWithSlash: ros.IResolvable;
    /**
     * @Attribute TopicName: Topic name
     */
    readonly attrTopicName: ros.IResolvable;
    /**
     * @Attribute TopicUrl: URL of created topic
     */
    readonly attrTopicUrl: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property topicName: Topic name
     */
    topicName: string | ros.IResolvable;
    /**
     * @Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
     * The default value is false
     */
    loggingEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
     * An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
     */
    maximumMessageSize: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::MNS::Topic`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
//# sourceMappingURL=mns.generated.d.ts.map