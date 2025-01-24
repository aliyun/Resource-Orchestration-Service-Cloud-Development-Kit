import * as ros from '@alicloud/ros-cdk-core';
import { RosSubscription } from './mns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSubscription as SubscriptionProperty };

/**
 * Properties for defining a `Subscription`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscription
 */
export interface SubscriptionProps {

    /**
     * Property subscriptionName: The name of the subscription.
     */
    readonly subscriptionName: string | ros.IResolvable;

    /**
     * Property topicName: The name of the topic.
     */
    readonly topicName: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Subscription`.
 */
export interface ISubscription extends ros.IResource {
    readonly props: SubscriptionProps;

    /**
     * Attribute CreateTime: The time when the subscription was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Endpoint: The endpoint that is used by the subscriber to receive messages.
     */
    readonly attrEndpoint: ros.IResolvable | string;

    /**
     * Attribute FilterTag: Describes the labels by which messages are filtered in this subscription (only messages with consistent labels are pushed).
     */
    readonly attrFilterTag: ros.IResolvable | string;

    /**
     * Attribute LastModifyTime: The time when the subscription was last modified.
     */
    readonly attrLastModifyTime: ros.IResolvable | string;

    /**
     * Attribute NotifyContentFormat: The format of the message that is pushed to the endpoint.
     */
    readonly attrNotifyContentFormat: ros.IResolvable | string;

    /**
     * Attribute NotifyStrategy: The retry policy that is applied if an error occurs when Message Service (MNS) pushes messages to the endpoint.
     */
    readonly attrNotifyStrategy: ros.IResolvable | string;

    /**
     * Attribute SubscriptionName: The name of the subscription.
     */
    readonly attrSubscriptionName: ros.IResolvable | string;

    /**
     * Attribute SubscriptionURL: TThe URL of the subscription.
     */
    readonly attrSubscriptionUrl: ros.IResolvable | string;

    /**
     * Attribute TopicName: The name of the topic.
     */
    readonly attrTopicName: ros.IResolvable | string;

    /**
     * Attribute TopicOwner: The owner of the topic.
     */
    readonly attrTopicOwner: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MNS::Subscription`, which is used to query the information about a subscription.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSubscription`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscription
 */
export class Subscription extends ros.Resource implements ISubscription {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SubscriptionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The time when the subscription was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Endpoint: The endpoint that is used by the subscriber to receive messages.
     */
    public readonly attrEndpoint: ros.IResolvable | string;

    /**
     * Attribute FilterTag: Describes the labels by which messages are filtered in this subscription (only messages with consistent labels are pushed).
     */
    public readonly attrFilterTag: ros.IResolvable | string;

    /**
     * Attribute LastModifyTime: The time when the subscription was last modified.
     */
    public readonly attrLastModifyTime: ros.IResolvable | string;

    /**
     * Attribute NotifyContentFormat: The format of the message that is pushed to the endpoint.
     */
    public readonly attrNotifyContentFormat: ros.IResolvable | string;

    /**
     * Attribute NotifyStrategy: The retry policy that is applied if an error occurs when Message Service (MNS) pushes messages to the endpoint.
     */
    public readonly attrNotifyStrategy: ros.IResolvable | string;

    /**
     * Attribute SubscriptionName: The name of the subscription.
     */
    public readonly attrSubscriptionName: ros.IResolvable | string;

    /**
     * Attribute SubscriptionURL: TThe URL of the subscription.
     */
    public readonly attrSubscriptionUrl: ros.IResolvable | string;

    /**
     * Attribute TopicName: The name of the topic.
     */
    public readonly attrTopicName: ros.IResolvable | string;

    /**
     * Attribute TopicOwner: The owner of the topic.
     */
    public readonly attrTopicOwner: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SubscriptionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSubscription = new RosSubscription(this, id,  {
            subscriptionName: props.subscriptionName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            topicName: props.topicName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSubscription;
        this.attrCreateTime = rosSubscription.attrCreateTime;
        this.attrEndpoint = rosSubscription.attrEndpoint;
        this.attrFilterTag = rosSubscription.attrFilterTag;
        this.attrLastModifyTime = rosSubscription.attrLastModifyTime;
        this.attrNotifyContentFormat = rosSubscription.attrNotifyContentFormat;
        this.attrNotifyStrategy = rosSubscription.attrNotifyStrategy;
        this.attrSubscriptionName = rosSubscription.attrSubscriptionName;
        this.attrSubscriptionUrl = rosSubscription.attrSubscriptionUrl;
        this.attrTopicName = rosSubscription.attrTopicName;
        this.attrTopicOwner = rosSubscription.attrTopicOwner;
    }
}
