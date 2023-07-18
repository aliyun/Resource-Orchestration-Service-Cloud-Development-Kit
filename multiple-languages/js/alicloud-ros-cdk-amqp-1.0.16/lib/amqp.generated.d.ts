import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::AMQP::Binding`
 */
export interface RosBindingProps {
    /**
     * @Property argument: X-match Attributes. Valid Values:
     * "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
     * "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
     */
    readonly argument: string | ros.IResolvable;
    /**
     * @Property bindingKey: The Binding Key.
     */
    readonly bindingKey: string | ros.IResolvable;
    /**
     * @Property bindingType: The Target Binding Types. Valid values: EXCHANGE, QUEUE.
     */
    readonly bindingType: string | ros.IResolvable;
    /**
     * @Property destinationName: The Target Queue Or Exchange of the Name.
     */
    readonly destinationName: string | ros.IResolvable;
    /**
     * @Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property sourceExchange: The Source Exchange Name.
     */
    readonly sourceExchange: string | ros.IResolvable;
    /**
     * @Property virtualHost: The name of the virtual host.
     */
    readonly virtualHost: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::AMQP::Binding`
 */
export declare class RosBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::Binding";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property argument: X-match Attributes. Valid Values:
     * "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
     * "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
     */
    argument: string | ros.IResolvable;
    /**
     * @Property bindingKey: The Binding Key.
     */
    bindingKey: string | ros.IResolvable;
    /**
     * @Property bindingType: The Target Binding Types. Valid values: EXCHANGE, QUEUE.
     */
    bindingType: string | ros.IResolvable;
    /**
     * @Property destinationName: The Target Queue Or Exchange of the Name.
     */
    destinationName: string | ros.IResolvable;
    /**
     * @Property instanceId: InstanceId
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property sourceExchange: The Source Exchange Name.
     */
    sourceExchange: string | ros.IResolvable;
    /**
     * @Property virtualHost: The name of the virtual host.
     */
    virtualHost: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::AMQP::Binding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBindingProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::AMQP::Exchange`
 */
export interface RosExchangeProps {
    /**
     * @Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
     * true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
     * false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
     */
    readonly autoDeleteState: boolean | ros.IResolvable;
    /**
     * @Property exchangeName: The name of the exchange.
     */
    readonly exchangeName: string | ros.IResolvable;
    /**
     * @Property exchangeType: The type of the exchange. Valid values:
     * FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
     * DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
     * TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
     * HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
     */
    readonly exchangeType: string | ros.IResolvable;
    /**
     * @Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property internal: Specifies whether an exchange is an internal exchange. Valid values:
     * false: The exchange is not an internal exchange.
     * true: The exchange is an internal exchange.
     */
    readonly internal: boolean | ros.IResolvable;
    /**
     * @Property virtualHost: The name of the virtual host.
     */
    readonly virtualHost: string | ros.IResolvable;
    /**
     * @Property alternateExchange: The alternate exchange. An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
     */
    readonly alternateExchange?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::AMQP::Exchange`
 */
export declare class RosExchange extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::Exchange";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ExchangeName: The name of the exchange.
     */
    readonly attrExchangeName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
     * true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
     * false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
     */
    autoDeleteState: boolean | ros.IResolvable;
    /**
     * @Property exchangeName: The name of the exchange.
     */
    exchangeName: string | ros.IResolvable;
    /**
     * @Property exchangeType: The type of the exchange. Valid values:
     * FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
     * DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
     * TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
     * HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
     */
    exchangeType: string | ros.IResolvable;
    /**
     * @Property instanceId: InstanceId
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property internal: Specifies whether an exchange is an internal exchange. Valid values:
     * false: The exchange is not an internal exchange.
     * true: The exchange is an internal exchange.
     */
    internal: boolean | ros.IResolvable;
    /**
     * @Property virtualHost: The name of the virtual host.
     */
    virtualHost: string | ros.IResolvable;
    /**
     * @Property alternateExchange: The alternate exchange. An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
     */
    alternateExchange: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::AMQP::Exchange`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosExchangeProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::AMQP::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property instanceType: The Instance Type. Valid values: professional, enterprise, vip.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * @Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
     * If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
     * If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
     *
     */
    readonly maxTps: number | ros.IResolvable;
    /**
     * @Property queueCapacity: The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5.
     * If instance type is enterprise, the valid value is [200, 6000] with the step size 100
     * If instance type is vip, the valid value is [200, 80000] with the step size 100
     */
    readonly queueCapacity: number | ros.IResolvable;
    /**
     * @Property storageSize: The storage size. It is valid when instance_type is vip.
     * If instance type is professional or enterprise, the valid value is 0.If instance type is vip, the valid value is [700, 2800] with the step size 100
     */
    readonly storageSize: number | ros.IResolvable;
    /**
     * @Property instanceName: The instance name.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property maxEipTps: The max eip tps. It is valid when support_eip is true.
     * The minimum value is 128, with the step size 128.
     *
     */
    readonly maxEipTps?: number | ros.IResolvable;
    /**
     * @Property orderNum: Set the number of instances to be created.
     */
    readonly orderNum?: number | ros.IResolvable;
    /**
     * @Property payType: The billing method of the instance. The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
     * PrePaid: subscription
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * @Property period: The period. Valid values: 1, 2, 3, 6, 12, 24, 36.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property supportEip: Whether to support EIP. Valid values: true, false.
     */
    readonly supportEip?: string | ros.IResolvable;
    /**
     * @Property supportTracing: Whether to support tracing. Valid values: true, false.
     */
    readonly supportTracing?: string | ros.IResolvable;
    /**
     * @Property tracingStorageTime: The retention period of message traces was set. Valid values: 3, 7, 15.
     * If instance_type=vip, the valid values is 15.
     * If instance_type!=vip, the valid values is 3, 7, 15.
     * If support_tracing == tracing_false, the valid values is 0.
     */
    readonly tracingStorageTime?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::AMQP::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClassicEndpoint: The classic endpoint of the instance.
     */
    readonly attrClassicEndpoint: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute PrivateEndpoint: The private endpoint of the instance.
     */
    readonly attrPrivateEndpoint: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceType: The Instance Type. Valid values: professional, enterprise, vip.
     */
    instanceType: string | ros.IResolvable;
    /**
     * @Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
     * If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
     * If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
     *
     */
    maxTps: number | ros.IResolvable;
    /**
     * @Property queueCapacity: The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5.
     * If instance type is enterprise, the valid value is [200, 6000] with the step size 100
     * If instance type is vip, the valid value is [200, 80000] with the step size 100
     */
    queueCapacity: number | ros.IResolvable;
    /**
     * @Property storageSize: The storage size. It is valid when instance_type is vip.
     * If instance type is professional or enterprise, the valid value is 0.If instance type is vip, the valid value is [700, 2800] with the step size 100
     */
    storageSize: number | ros.IResolvable;
    /**
     * @Property instanceName: The instance name.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property maxEipTps: The max eip tps. It is valid when support_eip is true.
     * The minimum value is 128, with the step size 128.
     *
     */
    maxEipTps: number | ros.IResolvable | undefined;
    /**
     * @Property orderNum: Set the number of instances to be created.
     */
    orderNum: number | ros.IResolvable | undefined;
    /**
     * @Property payType: The billing method of the instance. The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
     * PrePaid: subscription
     */
    payType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The period. Valid values: 1, 2, 3, 6, 12, 24, 36.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property supportEip: Whether to support EIP. Valid values: true, false.
     */
    supportEip: string | ros.IResolvable | undefined;
    /**
     * @Property supportTracing: Whether to support tracing. Valid values: true, false.
     */
    supportTracing: string | ros.IResolvable | undefined;
    /**
     * @Property tracingStorageTime: The retention period of message traces was set. Valid values: 3, 7, 15.
     * If instance_type=vip, the valid values is 15.
     * If instance_type!=vip, the valid values is 3, 7, 15.
     * If support_tracing == tracing_false, the valid values is 0.
     */
    tracingStorageTime: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::AMQP::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::AMQP::Queue`
 */
export interface RosQueueProps {
    /**
     * @Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property queueName: The name of the queue.
     */
    readonly queueName: string | ros.IResolvable;
    /**
     * @Property virtualHost: The name of the virtual host.
     */
    readonly virtualHost: string | ros.IResolvable;
    /**
     * @Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
     * true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
     * false: The Auto Delete attribute is not configured.
     */
    readonly autoDeleteState?: boolean | ros.IResolvable;
    /**
     * @Property autoExpireState: The validity period after which the queue is automatically deleted.
     * If the queue is not accessed within a specified period of time, it is automatically deleted.
     */
    readonly autoExpireState?: number | ros.IResolvable;
    /**
     * @Property deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages.
     * If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
     * Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
     */
    readonly deadLetterExchange?: string | ros.IResolvable;
    /**
     * @Property deadLetterRoutingKey: The dead letter routing key.
     */
    readonly deadLetterRoutingKey?: string | ros.IResolvable;
    /**
     * @Property exclusiveState: Specifies whether the queue is an exclusive queue. Valid values:
     * true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
     * false: The Auto Delete attribute is not configured.
     */
    readonly exclusiveState?: boolean | ros.IResolvable;
    /**
     * @Property maximumPriority: The priority function is not supported.
     */
    readonly maximumPriority?: number | ros.IResolvable;
    /**
     * @Property maxLength: The maximum number of messages that can be stored in the queue.
     * If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
     */
    readonly maxLength?: number | ros.IResolvable;
    /**
     * @Property messageTtl: The message TTL of the queue
     * If a message is retained in the Queue longer than the configured message lifetime, the message expires.
     * The value of message lifetime must be a non-negative integer, up to 1 day.
     * The unit is milliseconds
     */
    readonly messageTtl?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::AMQP::Queue`
 */
export declare class RosQueue extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::Queue";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute QueueName: The name of the queue.
     */
    readonly attrQueueName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: InstanceId
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property queueName: The name of the queue.
     */
    queueName: string | ros.IResolvable;
    /**
     * @Property virtualHost: The name of the virtual host.
     */
    virtualHost: string | ros.IResolvable;
    /**
     * @Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
     * true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
     * false: The Auto Delete attribute is not configured.
     */
    autoDeleteState: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoExpireState: The validity period after which the queue is automatically deleted.
     * If the queue is not accessed within a specified period of time, it is automatically deleted.
     */
    autoExpireState: number | ros.IResolvable | undefined;
    /**
     * @Property deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages.
     * If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
     * Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
     */
    deadLetterExchange: string | ros.IResolvable | undefined;
    /**
     * @Property deadLetterRoutingKey: The dead letter routing key.
     */
    deadLetterRoutingKey: string | ros.IResolvable | undefined;
    /**
     * @Property exclusiveState: Specifies whether the queue is an exclusive queue. Valid values:
     * true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
     * false: The Auto Delete attribute is not configured.
     */
    exclusiveState: boolean | ros.IResolvable | undefined;
    /**
     * @Property maximumPriority: The priority function is not supported.
     */
    maximumPriority: number | ros.IResolvable | undefined;
    /**
     * @Property maxLength: The maximum number of messages that can be stored in the queue.
     * If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
     */
    maxLength: number | ros.IResolvable | undefined;
    /**
     * @Property messageTtl: The message TTL of the queue
     * If a message is retained in the Queue longer than the configured message lifetime, the message expires.
     * The value of message lifetime must be a non-negative integer, up to 1 day.
     * The unit is milliseconds
     */
    messageTtl: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::AMQP::Queue`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQueueProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::AMQP::VirtualHost`
 */
export interface RosVirtualHostProps {
    /**
     * @Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property virtualHost: The name of the virtual host.
     */
    readonly virtualHost: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::AMQP::VirtualHost`
 */
export declare class RosVirtualHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::VirtualHost";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute VirtualHost: The name of the virtual host.
     */
    readonly attrVirtualHost: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: InstanceId
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property virtualHost: The name of the virtual host.
     */
    virtualHost: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::AMQP::VirtualHost`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVirtualHostProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
