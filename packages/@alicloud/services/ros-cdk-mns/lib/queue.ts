import * as ros from '@alicloud/ros-cdk-core';
import { RosQueue } from './mns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosQueue as QueueProperty };

/**
 * Properties for defining a `ALIYUN::MNS::Queue`
 */
export interface QueueProps {

    /**
     * Property queueName: Queue name
     */
    readonly queueName: string | ros.IResolvable;

    /**
     * Property delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires.
     * An integer between 0 and 604800 (7 days). The default value is 0
     */
    readonly delaySeconds?: number | ros.IResolvable;

    /**
     * Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled. 
     * The default value is false
     */
    readonly loggingEnabled?: boolean | ros.IResolvable;

    /**
     * Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
     * An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
     */
    readonly maximumMessageSize?: number | ros.IResolvable;

    /**
     * Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
     * An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
     */
    readonly messageRetentionPeriod?: number | ros.IResolvable;

    /**
     * Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds.
     * An integer between 0 and 30 seconds. The default value is 0 (seconds)
     */
    readonly pollingWaitSeconds?: number | ros.IResolvable;

    /**
     * Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds.
     * An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
     */
    readonly visibilityTimeout?: number | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::MNS::Queue`
 */
export class Queue extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName
     */
    public readonly attrArnWithSlash: ros.IResolvable;

    /**
     * Attribute QueueName: Queue name
     */
    public readonly attrQueueName: ros.IResolvable;

    /**
     * Attribute QueueUrl: URL of created queue
     */
    public readonly attrQueueUrl: ros.IResolvable;

    /**
     * Create a new `ALIYUN::MNS::Queue`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QueueProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosQueue = new RosQueue(this, id,  {
            delaySeconds: props.delaySeconds ? props.delaySeconds : 0,
            pollingWaitSeconds: props.pollingWaitSeconds ? props.pollingWaitSeconds : 0,
            messageRetentionPeriod: props.messageRetentionPeriod ? props.messageRetentionPeriod : 345600,
            maximumMessageSize: props.maximumMessageSize ? props.maximumMessageSize : 65536,
            visibilityTimeout: props.visibilityTimeout ? props.visibilityTimeout : 30,
            queueName: props.queueName,
            loggingEnabled: props.loggingEnabled ? props.loggingEnabled : false,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosQueue;
        this.attrArnWithSlash = rosQueue.attrArnWithSlash;
        this.attrQueueName = rosQueue.attrQueueName;
        this.attrQueueUrl = rosQueue.attrQueueUrl;
    }
}
