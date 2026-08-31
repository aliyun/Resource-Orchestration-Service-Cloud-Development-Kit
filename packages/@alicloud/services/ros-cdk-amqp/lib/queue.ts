import * as ros from '@alicloud/ros-cdk-core';
import { RosQueue } from './amqp.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosQueue as QueueProperty };

/**
 * Properties for defining a `Queue`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-queue
 */
export interface QueueProps {

    /**
     * Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property queueName: The name of the queue to create.
     * - The queue name can contain only letters, digits, hyphens (-), underscores (_),
     * periods (.), number signs (#), forward slashes (\/), and at signs (@). The name
     * must be 1 to 255 characters in length.
     * - After a queue is created, its name cannot be changed. To change the name,
     * delete the queue and create a new one.
     */
    readonly queueName: string | ros.IResolvable;

    /**
     * Property virtualHost: The name of the vhost to which the queue belongs.
     * The name can contain only letters, digits, hyphens (-), underscores (_), periods
     * (.), number signs (#), forward slashes (\/), and at signs (@). The name must be 1
     * to 255 characters in length.
     */
    readonly virtualHost: string | ros.IResolvable;

    /**
     * Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
     * true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
     * false: The Auto Delete attribute is not configured.
     */
    readonly autoDeleteState?: boolean | ros.IResolvable;

    /**
     * Property autoExpireState: The auto-expiration time for the queue. The queue is automatically deleted if it
     * is not accessed within the specified time period.
     * Unit: milliseconds.
     * > This feature must be enabled before you can use this parameter. To enable the
     * feature, .
     */
    readonly autoExpireState?: number | ros.IResolvable;

    /**
     * Property deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages. 
     * If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange. 
     * Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
     */
    readonly deadLetterExchange?: string | ros.IResolvable;

    /**
     * Property deadLetterRoutingKey: The dead-letter routing key.
     * The key can contain only letters, digits, hyphens (-), underscores (_), periods
     * (.), number signs (#), forward slashes (\/), and at signs (@). The key must be 1
     * to 255 characters in length.
     */
    readonly deadLetterRoutingKey?: string | ros.IResolvable;

    /**
     * Property exclusiveState: Specifies whether the queue is an exclusive queue. Valid values:
     * - true: The queue is an exclusive queue. An exclusive queue can be used only by
     * the connection that declares it. The queue is automatically deleted after the
     * connection is closed.
     * - false: The queue is not an exclusive queue.
     */
    readonly exclusiveState?: boolean | ros.IResolvable;

    /**
     * Property maximumPriority: The priority of the queue. The recommended value is an integer from 1 to 10.
     * > This parameter is used for message priority. It is supported only by dedicated
     * instances and can be used only after the message priority feature is enabled. To
     * enable the feature, .
     */
    readonly maximumPriority?: number | ros.IResolvable;

    /**
     * Property maxLength: This parameter is not supported in the current version.
     * The maximum number of messages that can be stored in the queue. If this limit is
     * exceeded, the earliest messages in the queue are deleted.
     */
    readonly maxLength?: number | ros.IResolvable;

    /**
     * Property messageTtl: The message TTL of the queue
     * If a message is retained in the Queue longer than the configured message lifetime, the message expires.
     * The value of message lifetime must be a non-negative integer, up to 1 day.
     * The unit is milliseconds
     */
    readonly messageTtl?: number | ros.IResolvable;
}

/**
 * Represents a `Queue`.
 */
export interface IQueue extends ros.IResource {
    readonly props: QueueProps;

    /**
     * Attribute QueueName: The name of the queue.
     */
    readonly attrQueueName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::AMQP::Queue`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQueue`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-queue
 */
export class Queue extends ros.Resource implements IQueue {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: QueueProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute QueueName: The name of the queue.
     */
    public readonly attrQueueName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QueueProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosQueue = new RosQueue(this, id,  {
            deadLetterExchange: props.deadLetterExchange,
            maximumPriority: props.maximumPriority,
            instanceId: props.instanceId,
            exclusiveState: props.exclusiveState,
            deadLetterRoutingKey: props.deadLetterRoutingKey,
            virtualHost: props.virtualHost,
            autoDeleteState: props.autoDeleteState,
            maxLength: props.maxLength,
            queueName: props.queueName,
            messageTtl: props.messageTtl,
            autoExpireState: props.autoExpireState,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosQueue;
        this.attrQueueName = rosQueue.attrQueueName;
    }
}
