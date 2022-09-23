import * as ros from '@alicloud/ros-cdk-core';
import { RosQueue } from './amqp.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosQueue as QueueProperty };

/**
 * Properties for defining a `ALIYUN::AMQP::Queue`
 */
export interface QueueProps {

    /**
     * Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property queueName: The name of the queue.
     */
    readonly queueName: string | ros.IResolvable;

    /**
     * Property virtualHost: The name of the virtual host.
     */
    readonly virtualHost: string | ros.IResolvable;

    /**
     * Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
     * true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
     * false: The Auto Delete attribute is not configured.
     */
    readonly autoDeleteState?: boolean | ros.IResolvable;

    /**
     * Property autoExpireState: The validity period after which the queue is automatically deleted.
     * If the queue is not accessed within a specified period of time, it is automatically deleted.
     */
    readonly autoExpireState?: number | ros.IResolvable;

    /**
     * Property deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages. 
     * If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange. 
     * Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
     */
    readonly deadLetterExchange?: string | ros.IResolvable;

    /**
     * Property deadLetterRoutingKey: The dead letter routing key.
     */
    readonly deadLetterRoutingKey?: string | ros.IResolvable;

    /**
     * Property exclusiveState: Specifies whether the queue is an exclusive queue. Valid values:
     * true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
     * false: The Auto Delete attribute is not configured.
     */
    readonly exclusiveState?: boolean | ros.IResolvable;

    /**
     * Property maximumPriority: The priority function is not supported.
     */
    readonly maximumPriority?: number | ros.IResolvable;

    /**
     * Property maxLength: The maximum number of messages that can be stored in the queue. 
     * If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
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
 * A ROS resource type:  `ALIYUN::AMQP::Queue`
 */
export class Queue extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute QueueName: The name of the queue.
     */
    public readonly attrQueueName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::AMQP::Queue`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QueueProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosQueue = new RosQueue(this, id,  {
            deadLetterExchange: props.deadLetterExchange,
            maximumPriority: props.maximumPriority,
            instanceId: props.instanceId,
            exclusiveState: props.exclusiveState,
            deadLetterRoutingKey: props.deadLetterRoutingKey,
            virtualHost: props.virtualHost,
            maxLength: props.maxLength,
            autoDeleteState: props.autoDeleteState,
            queueName: props.queueName,
            messageTtl: props.messageTtl,
            autoExpireState: props.autoExpireState,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosQueue;
        this.attrQueueName = rosQueue.attrQueueName;
    }
}
