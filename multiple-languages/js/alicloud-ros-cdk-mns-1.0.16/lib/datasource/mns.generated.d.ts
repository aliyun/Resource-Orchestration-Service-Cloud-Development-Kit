import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::MNS::Queues`
 */
export interface RosQueuesProps {
    /**
     * @Property queueName: Queue name.
     */
    readonly queueName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::MNS::Queues`
 */
export declare class RosQueues extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Queues";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::MNS::Queues`.
     *
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
 * Properties for defining a `DATASOURCE::MNS::Subscriptions`
 */
export interface RosSubscriptionsProps {
    /**
     * @Property topicName: Topic name.
     */
    readonly topicName: string | ros.IResolvable;
    /**
     * @Property subscriptionName: Subscription name.
     */
    readonly subscriptionName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::MNS::Subscriptions`
 */
export declare class RosSubscriptions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Subscriptions";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property subscriptionName: Subscription name.
     */
    subscriptionName: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::MNS::Subscriptions`.
     *
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
 * Properties for defining a `DATASOURCE::MNS::Topics`
 */
export interface RosTopicsProps {
    /**
     * @Property topicName: Topic name.
     */
    readonly topicName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::MNS::Topics`
 */
export declare class RosTopics extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Topics";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property topicName: Topic name.
     */
    topicName: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::MNS::Topics`.
     *
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
