import * as ros from '@alicloud/ros-cdk-core';
import { RosExchange } from './amqp.generated';
export { RosExchange as ExchangeProperty };
/**
 * Properties for defining a `ALIYUN::AMQP::Exchange`
 */
export interface ExchangeProps {
    /**
     * Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
     * true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
     * false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
     */
    readonly autoDeleteState: boolean | ros.IResolvable;
    /**
     * Property exchangeName: The name of the exchange.
     */
    readonly exchangeName: string | ros.IResolvable;
    /**
     * Property exchangeType: The type of the exchange. Valid values:
     * FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
     * DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
     * TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
     * HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
     */
    readonly exchangeType: string | ros.IResolvable;
    /**
     * Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property internal: Specifies whether an exchange is an internal exchange. Valid values:
     * false: The exchange is not an internal exchange.
     * true: The exchange is an internal exchange.
     */
    readonly internal: boolean | ros.IResolvable;
    /**
     * Property virtualHost: The name of the virtual host.
     */
    readonly virtualHost: string | ros.IResolvable;
    /**
     * Property alternateExchange: The alternate exchange. An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
     */
    readonly alternateExchange?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::AMQP::Exchange`
 */
export declare class Exchange extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ExchangeName: The name of the exchange.
     */
    readonly attrExchangeName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::AMQP::Exchange`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ExchangeProps, enableResourcePropertyConstraint?: boolean);
}
