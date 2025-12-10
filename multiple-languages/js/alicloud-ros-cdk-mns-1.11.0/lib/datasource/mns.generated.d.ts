import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosQueue`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queue
 */
export interface RosQueueProps {
    /**
     * @Property queueName: The name of the MNS queue.
     */
    readonly queueName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Queue`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Queue` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queue
 */
export declare class RosQueue extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Queue";
    /**
     * @Attribute ActiveMessages: The total number of active messages in the queue.
     */
    readonly attrActiveMessages: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the queue was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DelayMessages: The total number of delayed messages in the queue.
     */
    readonly attrDelayMessages: ros.IResolvable;
    /**
     * @Attribute DelaySeconds: The delay time after which all messages that are sent to the queue can be consumed.
     */
    readonly attrDelaySeconds: ros.IResolvable;
    /**
     * @Attribute InactiveMessages: The total number of inactive messages in the queue.
     */
    readonly attrInactiveMessages: ros.IResolvable;
    /**
     * @Attribute LastModifyTime: The most recent time when the queue was modified.
     */
    readonly attrLastModifyTime: ros.IResolvable;
    /**
     * @Attribute LoggingEnabled: Specifies whether to enable the log management feature.
     */
    readonly attrLoggingEnabled: ros.IResolvable;
    /**
     * @Attribute MaximumMessageSize: The maximum size of a message that can be sent to the queue.
     */
    readonly attrMaximumMessageSize: ros.IResolvable;
    /**
     * @Attribute MessageRetentionPeriod: The maximum lifetime of a message in the queue. After the time that is specified by this parameter expires, the message is deleted, regardless of whether the message has been consumed.
     */
    readonly attrMessageRetentionPeriod: ros.IResolvable;
    /**
     * @Attribute PollingWaitSeconds: The maximum time period that a ReceiveMessage request can wait till a message is in the queue.
     */
    readonly attrPollingWaitSeconds: ros.IResolvable;
    /**
     * @Attribute QueueInternalUrl: The internal URL of the queue.
     */
    readonly attrQueueInternalUrl: ros.IResolvable;
    /**
     * @Attribute QueueName: The name of the MNS queue.
     */
    readonly attrQueueName: ros.IResolvable;
    /**
     * @Attribute QueueUrl: The URL of the queue.
     */
    readonly attrQueueUrl: ros.IResolvable;
    /**
     * @Attribute VisibilityTimeout: The duration for which a message stays in the Inactive state after it is consumed from the queue.
     */
    readonly attrVisibilityTimeout: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property queueName: The name of the MNS queue.
     */
    queueName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosQueues`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queues
 */
export interface RosQueuesProps {
    /**
     * @Property queueName: Queue name.
     */
    readonly queueName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Queues`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Queues` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queues
 */
export declare class RosQueues extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Queues";
    /**
     * @Attribute QueueNames: The list of queue names.
     */
    readonly attrQueueNames: ros.IResolvable;
    /**
     * @Attribute Queues: The list of queues.
     */
    readonly attrQueues: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property queueName: Queue name.
     */
    queueName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQueuesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSubscription`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscription
 */
export interface RosSubscriptionProps {
    /**
     * @Property subscriptionName: The name of the subscription.
     */
    readonly subscriptionName: string | ros.IResolvable;
    /**
     * @Property topicName: The name of the topic.
     */
    readonly topicName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Subscription`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Subscription` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscription
 */
export declare class RosSubscription extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Subscription";
    /**
     * @Attribute CreateTime: The time when the subscription was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Endpoint: The endpoint that is used by the subscriber to receive messages.
     */
    readonly attrEndpoint: ros.IResolvable;
    /**
     * @Attribute FilterTag: Describes the labels by which messages are filtered in this subscription (only messages with consistent labels are pushed).
     */
    readonly attrFilterTag: ros.IResolvable;
    /**
     * @Attribute LastModifyTime: The time when the subscription was last modified.
     */
    readonly attrLastModifyTime: ros.IResolvable;
    /**
     * @Attribute NotifyContentFormat: The format of the message that is pushed to the endpoint.
     */
    readonly attrNotifyContentFormat: ros.IResolvable;
    /**
     * @Attribute NotifyStrategy: The retry policy that is applied if an error occurs when Message Service (MNS) pushes messages to the endpoint.
     */
    readonly attrNotifyStrategy: ros.IResolvable;
    /**
     * @Attribute SubscriptionName: The name of the subscription.
     */
    readonly attrSubscriptionName: ros.IResolvable;
    /**
     * @Attribute SubscriptionURL: TThe URL of the subscription.
     */
    readonly attrSubscriptionUrl: ros.IResolvable;
    /**
     * @Attribute TopicName: The name of the topic.
     */
    readonly attrTopicName: ros.IResolvable;
    /**
     * @Attribute TopicOwner: The owner of the topic.
     */
    readonly attrTopicOwner: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property subscriptionName: The name of the subscription.
     */
    subscriptionName: string | ros.IResolvable;
    /**
     * @Property topicName: The name of the topic.
     */
    topicName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosSubscriptions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscriptions
 */
export interface RosSubscriptionsProps {
    /**
     * @Property topicName: Topic name.
     */
    readonly topicName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property subscriptionName: Subscription name.
     */
    readonly subscriptionName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Subscriptions`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Subscriptions` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscriptions
 */
export declare class RosSubscriptions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Subscriptions";
    /**
     * @Attribute SubscriptionIds: The list of subscription names.
     */
    readonly attrSubscriptionIds: ros.IResolvable;
    /**
     * @Attribute Subscriptions: The list of subscriptions.
     */
    readonly attrSubscriptions: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property topicName: Topic name.
     */
    topicName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property subscriptionName: Subscription name.
     */
    subscriptionName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSubscriptionsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosTopic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topic
 */
export interface RosTopicProps {
    /**
     * @Property topicName: The name of the resource.
     */
    readonly topicName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Topic`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topic
 */
export declare class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Topic";
    /**
     * @Attribute CreateTime: The time when the topic was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute LastModifyTime: The time when the topic was last modified.
     */
    readonly attrLastModifyTime: ros.IResolvable;
    /**
     * @Attribute LoggingEnabled: Indicates whether the log management feature is enabled for the topic.
     */
    readonly attrLoggingEnabled: ros.IResolvable;
    /**
     * @Attribute MaxMessageSize: The maximum size of a message body that is sent to the topic.
     */
    readonly attrMaxMessageSize: ros.IResolvable;
    /**
     * @Attribute MessageCount: The number of messages in the topic.
     */
    readonly attrMessageCount: ros.IResolvable;
    /**
     * @Attribute MessageRetentionPeriod: The retention period of the message in the topic.
     */
    readonly attrMessageRetentionPeriod: ros.IResolvable;
    /**
     * @Attribute TopicInnerUrl: The internal URL of the topic.
     */
    readonly attrTopicInnerUrl: ros.IResolvable;
    /**
     * @Attribute TopicName: The name of the MNS topic.
     */
    readonly attrTopicName: ros.IResolvable;
    /**
     * @Attribute TopicUrl: The URL of the topic.
     */
    readonly attrTopicUrl: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property topicName: The name of the resource.
     */
    topicName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
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
/**
 * Properties for defining a `RosTopics`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topics
 */
export interface RosTopicsProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property topicName: Topic name.
     */
    readonly topicName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Topics`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topics` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topics
 */
export declare class RosTopics extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Topics";
    /**
     * @Attribute TopicNames: The list of topic names.
     */
    readonly attrTopicNames: ros.IResolvable;
    /**
     * @Attribute Topics: The list of topics.
     */
    readonly attrTopics: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property topicName: Topic name.
     */
    topicName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
