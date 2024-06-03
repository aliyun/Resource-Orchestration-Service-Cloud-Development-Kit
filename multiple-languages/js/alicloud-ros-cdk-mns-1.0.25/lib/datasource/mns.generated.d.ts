import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosQueues`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queues
 */
export interface RosQueuesProps {
    /**
     * @Property queueName: Queue name.
     */
    readonly queueName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Queues`, which is used to query all Message Service (MNS) queues within a specified Alibaba Cloud account.
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
 * Properties for defining a `RosSubscriptions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscriptions
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Subscriptions`, which is used to query the information about subscriptions.
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
 * Properties for defining a `RosTopics`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topics
 */
export interface RosTopicsProps {
    /**
     * @Property topicName: Topic name.
     */
    readonly topicName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Topics`, which is used to query topics.
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
