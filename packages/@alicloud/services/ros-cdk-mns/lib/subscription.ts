import * as ros from '@alicloud/ros-cdk-core';
import { RosSubscription } from './mns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSubscription as SubscriptionProperty };

/**
 * Properties for defining a `Subscription`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-subscription
 */
export interface SubscriptionProps {

    /**
     * Property endpoint: Terminal address of the message recipient for the created subscription.
     * Currently, four types of endpoints are supported: 
     * 1. HttpEndpoint, which must be prefixed with "http:\/\/"; 
     * 2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues\/{QueueName}; 
     * 3. MailEndpoint, in the format of mail:directmail:{MailAddress}; 
     * 4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
     */
    readonly endpoint: string | ros.IResolvable;

    /**
     * Property subscriptionName: Subscription name
     */
    readonly subscriptionName: string | ros.IResolvable;

    /**
     * Property topicName: Topic name
     */
    readonly topicName: string | ros.IResolvable;

    /**
     * Property dlqPolicy: Dead-letter queue policy
     */
    readonly dlqPolicy?: RosSubscription.DlqPolicyProperty | ros.IResolvable;

    /**
     * Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
     * The value is a string of no more than 16 characters. The default value is no message filter.
     */
    readonly filterTag?: string | ros.IResolvable;

    /**
     * Property notifyContentFormat: Format of the message content pushed to the endpoint.
     * XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts\/NotifyContentFormat.
     */
    readonly notifyContentFormat?: string | ros.IResolvable;

    /**
     * Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
     * BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts\/NotifyStrategy.
     */
    readonly notifyStrategy?: string | ros.IResolvable;

    /**
     * Property pushType: Push type of the created subscription.
     */
    readonly pushType?: string | ros.IResolvable;
}

/**
 * Represents a `Subscription`.
 */
export interface ISubscription extends ros.IResource {
    readonly props: SubscriptionProps;

    /**
     * Attribute SubscriptionName: Subscription name
     */
    readonly attrSubscriptionName: ros.IResolvable | string;

    /**
     * Attribute SubscriptionUrl: URL of created subscription
     */
    readonly attrSubscriptionUrl: ros.IResolvable | string;

    /**
     * Attribute TopicName: Topic name
     */
    readonly attrTopicName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MNS::Subscription`, which is used to describe a subscription relationship, including the subscribed topic and the endpoint that the subscriber uses to receive messages.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSubscription`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-subscription
 */
export class Subscription extends ros.Resource implements ISubscription {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SubscriptionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SubscriptionName: Subscription name
     */
    public readonly attrSubscriptionName: ros.IResolvable | string;

    /**
     * Attribute SubscriptionUrl: URL of created subscription
     */
    public readonly attrSubscriptionUrl: ros.IResolvable | string;

    /**
     * Attribute TopicName: Topic name
     */
    public readonly attrTopicName: ros.IResolvable | string;

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
            pushType: props.pushType === undefined || props.pushType === null ? 'http' : props.pushType,
            endpoint: props.endpoint,
            dlqPolicy: props.dlqPolicy,
            notifyStrategy: props.notifyStrategy === undefined || props.notifyStrategy === null ? 'BACKOFF_RETRY' : props.notifyStrategy,
            notifyContentFormat: props.notifyContentFormat === undefined || props.notifyContentFormat === null ? 'XML' : props.notifyContentFormat,
            filterTag: props.filterTag,
            subscriptionName: props.subscriptionName,
            topicName: props.topicName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSubscription;
        this.attrSubscriptionName = rosSubscription.attrSubscriptionName;
        this.attrSubscriptionUrl = rosSubscription.attrSubscriptionUrl;
        this.attrTopicName = rosSubscription.attrTopicName;
    }
}
