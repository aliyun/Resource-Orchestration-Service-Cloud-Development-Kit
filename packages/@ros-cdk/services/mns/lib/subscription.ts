import * as ros from '@ros-cdk/core';
import { RosSubscription } from './mns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSubscription as SubscriptionProperty };

/**
 * Properties for defining a `ALIYUN::MNS::Subscription`
 */
export interface SubscriptionProps {

    /**
     * @Property endpoint: Terminal address of the message recipient for the created subscription.
     * Currently, four types of endpoints are supported: 
     * 1. HttpEndpoint, which must be prefixed with "http://"; 
     * 2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName}; 
     * 3. MailEndpoint, in the format of mail:directmail:{MailAddress}; 
     * 4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
     */
    readonly endpoint: string;

    /**
     * @Property subscriptionName: Subscription name
     */
    readonly subscriptionName: string;

    /**
     * @Property topicName: Topic name
     */
    readonly topicName: string;

    /**
     * @Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
     * The value is a string of no more than 16 characters. The default value is no message filter.
     */
    readonly filterTag?: string;

    /**
     * @Property notifyContentFormat: Format of the message content pushed to the endpoint.
     * XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
     */
    readonly notifyContentFormat?: string;

    /**
     * @Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
     * BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
     */
    readonly notifyStrategy?: string;
}

/**
 * A ROS resource type:  `ALIYUN::MNS::Subscription`
 */
export class Subscription extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute SubscriptionUrl: URL of created subscription
     */
    public readonly attrSubscriptionUrl: any;

    /**
     * Create a new `ALIYUN::MNS::Subscription`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SubscriptionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSubscription = new RosSubscription(this, id,  {
            endpoint: props.endpoint,
            notifyStrategy: props.notifyStrategy ? props.notifyStrategy : 'BACKOFF_RETRY',
            notifyContentFormat: props.notifyContentFormat ? props.notifyContentFormat : 'XML',
            filterTag: props.filterTag,
            subscriptionName: props.subscriptionName,
            topicName: props.topicName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSubscription;
        this.attrSubscriptionUrl = rosSubscription.attrSubscriptionUrl;
    }
}
