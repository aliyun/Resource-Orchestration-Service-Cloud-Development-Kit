import * as ros from '@alicloud/ros-cdk-core';
import { RosQueue } from './mns.generated';
export { RosQueue as QueueProperty };
/**
 * Properties for defining a `Queue`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queue
 */
export interface QueueProps {
    /**
     * Property queueName: The name of the MNS queue.
     */
    readonly queueName: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Queue`.
 */
export interface IQueue extends ros.IResource {
    readonly props: QueueProps;
    /**
     * Attribute ActiveMessages: The total number of active messages in the queue.
     */
    readonly attrActiveMessages: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the queue was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DelayMessages: The total number of delayed messages in the queue.
     */
    readonly attrDelayMessages: ros.IResolvable | string;
    /**
     * Attribute DelaySeconds: The delay time after which all messages that are sent to the queue can be consumed.
     */
    readonly attrDelaySeconds: ros.IResolvable | string;
    /**
     * Attribute InactiveMessages: The total number of inactive messages in the queue.
     */
    readonly attrInactiveMessages: ros.IResolvable | string;
    /**
     * Attribute LastModifyTime: The most recent time when the queue was modified.
     */
    readonly attrLastModifyTime: ros.IResolvable | string;
    /**
     * Attribute LoggingEnabled: Specifies whether to enable the log management feature.
     */
    readonly attrLoggingEnabled: ros.IResolvable | string;
    /**
     * Attribute MaximumMessageSize: The maximum size of a message that can be sent to the queue.
     */
    readonly attrMaximumMessageSize: ros.IResolvable | string;
    /**
     * Attribute MessageRetentionPeriod: The maximum lifetime of a message in the queue. After the time that is specified by this parameter expires, the message is deleted, regardless of whether the message has been consumed.
     */
    readonly attrMessageRetentionPeriod: ros.IResolvable | string;
    /**
     * Attribute PollingWaitSeconds: The maximum time period that a ReceiveMessage request can wait till a message is in the queue.
     */
    readonly attrPollingWaitSeconds: ros.IResolvable | string;
    /**
     * Attribute QueueInternalUrl: The internal URL of the queue.
     */
    readonly attrQueueInternalUrl: ros.IResolvable | string;
    /**
     * Attribute QueueName: The name of the MNS queue.
     */
    readonly attrQueueName: ros.IResolvable | string;
    /**
     * Attribute QueueUrl: The URL of the queue.
     */
    readonly attrQueueUrl: ros.IResolvable | string;
    /**
     * Attribute VisibilityTimeout: The duration for which a message stays in the Inactive state after it is consumed from the queue.
     */
    readonly attrVisibilityTimeout: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MNS::Queue`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQueue`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queue
 */
export declare class Queue extends ros.Resource implements IQueue {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: QueueProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ActiveMessages: The total number of active messages in the queue.
     */
    readonly attrActiveMessages: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the queue was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DelayMessages: The total number of delayed messages in the queue.
     */
    readonly attrDelayMessages: ros.IResolvable | string;
    /**
     * Attribute DelaySeconds: The delay time after which all messages that are sent to the queue can be consumed.
     */
    readonly attrDelaySeconds: ros.IResolvable | string;
    /**
     * Attribute InactiveMessages: The total number of inactive messages in the queue.
     */
    readonly attrInactiveMessages: ros.IResolvable | string;
    /**
     * Attribute LastModifyTime: The most recent time when the queue was modified.
     */
    readonly attrLastModifyTime: ros.IResolvable | string;
    /**
     * Attribute LoggingEnabled: Specifies whether to enable the log management feature.
     */
    readonly attrLoggingEnabled: ros.IResolvable | string;
    /**
     * Attribute MaximumMessageSize: The maximum size of a message that can be sent to the queue.
     */
    readonly attrMaximumMessageSize: ros.IResolvable | string;
    /**
     * Attribute MessageRetentionPeriod: The maximum lifetime of a message in the queue. After the time that is specified by this parameter expires, the message is deleted, regardless of whether the message has been consumed.
     */
    readonly attrMessageRetentionPeriod: ros.IResolvable | string;
    /**
     * Attribute PollingWaitSeconds: The maximum time period that a ReceiveMessage request can wait till a message is in the queue.
     */
    readonly attrPollingWaitSeconds: ros.IResolvable | string;
    /**
     * Attribute QueueInternalUrl: The internal URL of the queue.
     */
    readonly attrQueueInternalUrl: ros.IResolvable | string;
    /**
     * Attribute QueueName: The name of the MNS queue.
     */
    readonly attrQueueName: ros.IResolvable | string;
    /**
     * Attribute QueueUrl: The URL of the queue.
     */
    readonly attrQueueUrl: ros.IResolvable | string;
    /**
     * Attribute VisibilityTimeout: The duration for which a message stays in the Inactive state after it is consumed from the queue.
     */
    readonly attrVisibilityTimeout: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QueueProps, enableResourcePropertyConstraint?: boolean);
}
