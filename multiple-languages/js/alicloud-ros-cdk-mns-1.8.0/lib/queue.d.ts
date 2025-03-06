import * as ros from '@alicloud/ros-cdk-core';
import { RosQueue } from './mns.generated';
export { RosQueue as QueueProperty };
/**
 * Represents a `Queue`.
 */
export interface QueueAttributes {
    /**
     * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName
     */
    readonly attrArnWithSlash: ros.IResolvable | string;
    /**
     * Attribute QueueName: Queue name
     */
    readonly attrQueueName?: ros.IResolvable | string;
    /**
     * Attribute QueueUrl: URL of created queue
     */
    readonly attrQueueUrl?: ros.IResolvable | string;
}
/**
 * Properties for defining a `Queue`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-queue
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
 * Represents a `Queue`.
 */
export interface IQueue extends ros.IResource {
    readonly props: QueueProps;
    /**
     * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName
     */
    readonly attrArnWithSlash: ros.IResolvable | string;
    /**
     * Attribute QueueName: Queue name
     */
    readonly attrQueueName: ros.IResolvable | string;
    /**
     * Attribute QueueUrl: URL of created queue
     */
    readonly attrQueueUrl: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MNS::Queue`, which is used to create a queue to contain messages. Queues can be classified into standard and delayed queues.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQueue`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-queue
 */
export declare class Queue extends ros.Resource implements IQueue {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: QueueProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName
     */
    readonly attrArnWithSlash: ros.IResolvable | string;
    /**
     * Attribute QueueName: Queue name
     */
    readonly attrQueueName: ros.IResolvable | string;
    /**
     * Attribute QueueUrl: URL of created queue
     */
    readonly attrQueueUrl: ros.IResolvable | string;
    static fromQueueArn(scope: ros.Construct, id: string, attrArnWithSlash: string): IQueue;
    /**
     * Import an existing queue
     */
    static fromQueueAttributes(scope: ros.Construct, id: string, attrs: QueueAttributes): IQueue;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QueueProps, enableResourcePropertyConstraint?: boolean);
}
