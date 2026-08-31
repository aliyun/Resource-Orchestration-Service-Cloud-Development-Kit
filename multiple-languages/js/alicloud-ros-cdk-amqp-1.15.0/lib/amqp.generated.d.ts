import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-account
 */
export interface RosAccountProps {
    /**
     * @Property accountAccessKey: Your Alibaba Cloud account or RAM user's AccessKey ID. For obtaining it, visit RAM console.
     * If you use the static username and password created by the AccessKey of the RAM user to access the RabbitMQ version of the message queue and send and receive messages, make sure that the RAM user has been granted the permission of sending and receiving messages. For more information, see RAM permissions policy.
     */
    readonly accountAccessKey: string | ros.IResolvable;
    /**
     * @Property accountAccessKeySecret: Your Alibaba Cloud account or RAM user's AccessKeySecret.
     */
    readonly accountAccessKeySecret: string | ros.IResolvable;
    /**
     * @Property instanceId: Message Queue The ID of the RabbitMQ version instance, indicating which instance you need to create a static username and password.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AMQP::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::Account";
    /**
     * @Attribute AccountAccessKey: The AccessKey ID used to create the username and password.
     */
    readonly attrAccountAccessKey: ros.IResolvable;
    /**
     * @Attribute CreateTimestamp: The timestamp when the account was created.
     */
    readonly attrCreateTimestamp: ros.IResolvable;
    /**
     * @Attribute Password: The created static user password.
     */
    readonly attrPassword: ros.IResolvable;
    /**
     * @Attribute UserName: The created account user name.
     */
    readonly attrUserName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountAccessKey: Your Alibaba Cloud account or RAM user's AccessKey ID. For obtaining it, visit RAM console.
     * If you use the static username and password created by the AccessKey of the RAM user to access the RabbitMQ version of the message queue and send and receive messages, make sure that the RAM user has been granted the permission of sending and receiving messages. For more information, see RAM permissions policy.
     */
    accountAccessKey: string | ros.IResolvable;
    /**
     * @Property accountAccessKeySecret: Your Alibaba Cloud account or RAM user's AccessKeySecret.
     */
    accountAccessKeySecret: string | ros.IResolvable;
    /**
     * @Property instanceId: Message Queue The ID of the RabbitMQ version instance, indicating which instance you need to create a static username and password.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
 */
export interface RosBindingProps {
    /**
     * @Property argument: The key-value pairs for the message header attributes. The message header
     * attributes consist of one or more key-value pairs. The x-match attribute is
     * required. Other attributes are custom. The x-match attribute supports the
     * following values:
     * - all: This is the default value. All key-value pairs in the message header must
     * match.
     * - any: At least one key-value pair in the message header must match.
     * Separate attributes with semicolons (;) and separate keys from values with colons
     * (:). Example: x-match:all;type:report;format:pdf
     * This parameter is valid only for headers exchanges. For other types of exchanges,
     * this parameter is ignored.
     */
    readonly argument: string | ros.IResolvable;
    /**
     * @Property bindingKey: The binding key.
     * - If the source exchange is not a topic exchange:
     * - It can contain letters, digits, hyphens (-), underscores (_), periods (.),
     * forward slashes (\/), and at signs (@).
     * - The length must be 1 to 255 characters.
     * - If the source exchange is a topic exchange:
     * - It can contain letters, digits, hyphens (-), underscores (_), asterisks (\*),
     * periods (.), number signs (#), forward slashes (\/), and at signs (@).
     * - The key cannot start or end with a period (.). If the key starts with a number
     * sign (#) or an asterisk (\*), a period (.) must immediately follow. If the key
     * ends with a number sign (#) or an asterisk (\*), a period (.) must immediately
     * precede it. If a number sign (#) or an asterisk (\*) is in the middle of the key,
     * it must have a period (.) on both sides.
     * - The length must be 1 to 255 characters.
     */
    readonly bindingKey: string | ros.IResolvable;
    /**
     * @Property bindingType: The type of the destination object. Valid values:
     * - 0: Queue
     * - 1: Exchange
     */
    readonly bindingType: string | ros.IResolvable;
    /**
     * @Property destinationName: The name of the binding destination. The destination must be created in the
     * console. It must belong to the same vhost as `SourceExchange`. The `VirtualHost`
     * parameter specifies the vhost.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AMQP::Binding`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Binding` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
 */
export declare class RosBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::Binding";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property argument: The key-value pairs for the message header attributes. The message header
     * attributes consist of one or more key-value pairs. The x-match attribute is
     * required. Other attributes are custom. The x-match attribute supports the
     * following values:
     * - all: This is the default value. All key-value pairs in the message header must
     * match.
     * - any: At least one key-value pair in the message header must match.
     * Separate attributes with semicolons (;) and separate keys from values with colons
     * (:). Example: x-match:all;type:report;format:pdf
     * This parameter is valid only for headers exchanges. For other types of exchanges,
     * this parameter is ignored.
     */
    argument: string | ros.IResolvable;
    /**
     * @Property bindingKey: The binding key.
     * - If the source exchange is not a topic exchange:
     * - It can contain letters, digits, hyphens (-), underscores (_), periods (.),
     * forward slashes (\/), and at signs (@).
     * - The length must be 1 to 255 characters.
     * - If the source exchange is a topic exchange:
     * - It can contain letters, digits, hyphens (-), underscores (_), asterisks (\*),
     * periods (.), number signs (#), forward slashes (\/), and at signs (@).
     * - The key cannot start or end with a period (.). If the key starts with a number
     * sign (#) or an asterisk (\*), a period (.) must immediately follow. If the key
     * ends with a number sign (#) or an asterisk (\*), a period (.) must immediately
     * precede it. If a number sign (#) or an asterisk (\*) is in the middle of the key,
     * it must have a period (.) on both sides.
     * - The length must be 1 to 255 characters.
     */
    bindingKey: string | ros.IResolvable;
    /**
     * @Property bindingType: The type of the destination object. Valid values:
     * - 0: Queue
     * - 1: Exchange
     */
    bindingType: string | ros.IResolvable;
    /**
     * @Property destinationName: The name of the binding destination. The destination must be created in the
     * console. It must belong to the same vhost as `SourceExchange`. The `VirtualHost`
     * parameter specifies the vhost.
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
 * Properties for defining a `RosExchange`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-exchange
 */
export interface RosExchangeProps {
    /**
     * @Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
     * true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
     * false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
     */
    readonly autoDeleteState: boolean | ros.IResolvable;
    /**
     * @Property exchangeName: The name of the exchange. Note:
     * - The name can contain only letters, digits, hyphens (-), underscores (_),
     * periods (.), number signs (#), forward slashes (\/), and at signs (@). The name
     * must be 1 to 255 characters in length.
     * - The name of an exchange cannot be changed after the exchange is created. To
     * change the name, delete the exchange and create a new one.
     */
    readonly exchangeName: string | ros.IResolvable;
    /**
     * @Property exchangeType: The type of the exchange. Valid values:
     * - DIRECT: This routing rule type routes messages to a queue whose binding key
     * exactly matches the routing key of the message.
     * - TOPIC: This type is similar to the DIRECT type. It routes messages to bound
     * queues using routing key pattern matching and string comparison.
     * - FANOUT: This routing rule type is simple. It routes all messages sent to the
     * exchange to all queues that are bound to the exchange. This works like a
     * broadcast feature.
     * - HEADERS: This type is similar to the DIRECT type. It uses header properties
     * instead of a routing key for routing. When a queue is bound to a headers
     * exchange, key-value pairs are defined for the binding. When a message is sent to
     * the exchange, key-value pairs are defined in the message header. The exchange
     * routes the message by comparing the key-value pairs in the header with the
     * key-value pairs of the binding.
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
    /**
     * @Property xDelayedType: Exchanges of the x-delay-Message type allow you to customize the Header property of the message, and the x-delay specifies the amount of time in milliseconds for the message to be delivered. The routing rules for this class of exchanges depend on the Exchange type specified in the x-delay-type parameter, which specifies the actual Exchange type to which the delayed message will eventually be delivered. Valid values:
     * - DIRECT: Delivers deferred messages to a specified queue bound to an Exchange of type DIRECT.
     * - TOPIC: Delivers deferred messages to the queue bound to the Exchange type TOPIC.
     *  - FANOUT: Delivers deferred messages to a queue bound to an Exchange of type FANOUT.
     * - HEADERS: Deferred messages are delivered to the queue bound to the Exchange HEADERS type.
     *  - X-JMS-TOPIC: Delivers deferred messages to the queue bound to X-JMS-TOPIC.
     */
    readonly xDelayedType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AMQP::Exchange`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Exchange` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-exchange
 */
export declare class RosExchange extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::Exchange";
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
     * @Property exchangeName: The name of the exchange. Note:
     * - The name can contain only letters, digits, hyphens (-), underscores (_),
     * periods (.), number signs (#), forward slashes (\/), and at signs (@). The name
     * must be 1 to 255 characters in length.
     * - The name of an exchange cannot be changed after the exchange is created. To
     * change the name, delete the exchange and create a new one.
     */
    exchangeName: string | ros.IResolvable;
    /**
     * @Property exchangeType: The type of the exchange. Valid values:
     * - DIRECT: This routing rule type routes messages to a queue whose binding key
     * exactly matches the routing key of the message.
     * - TOPIC: This type is similar to the DIRECT type. It routes messages to bound
     * queues using routing key pattern matching and string comparison.
     * - FANOUT: This routing rule type is simple. It routes all messages sent to the
     * exchange to all queues that are bound to the exchange. This works like a
     * broadcast feature.
     * - HEADERS: This type is similar to the DIRECT type. It uses header properties
     * instead of a routing key for routing. When a queue is bound to a headers
     * exchange, key-value pairs are defined for the binding. When a message is sent to
     * the exchange, key-value pairs are defined in the message header. The exchange
     * routes the message by comparing the key-value pairs in the header with the
     * key-value pairs of the binding.
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
     * @Property xDelayedType: Exchanges of the x-delay-Message type allow you to customize the Header property of the message, and the x-delay specifies the amount of time in milliseconds for the message to be delivered. The routing rules for this class of exchanges depend on the Exchange type specified in the x-delay-type parameter, which specifies the actual Exchange type to which the delayed message will eventually be delivered. Valid values:
     * - DIRECT: Delivers deferred messages to a specified queue bound to an Exchange of type DIRECT.
     * - TOPIC: Delivers deferred messages to the queue bound to the Exchange type TOPIC.
     *  - FANOUT: Delivers deferred messages to a queue bound to an Exchange of type FANOUT.
     * - HEADERS: Deferred messages are delivered to the queue bound to the Exchange HEADERS type.
     *  - X-JMS-TOPIC: Delivers deferred messages to the queue bound to X-JMS-TOPIC.
     */
    xDelayedType: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-instance
 */
export interface RosInstanceProps {
    /**
     * @Property instanceName: The name of the instance. The name can be up to 64 characters long.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property instanceType: The instance type.
     * This parameter is required for subscription instances. Valid values:
     * - `professional`: Professional Edition
     * - `enterprise`: Enterprise Edition
     * - `vip`: Platinum Edition
     * You do not need to specify this parameter for serverless instances.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property maxEipTps: The max eip tps. It is valid when support_eip is true.
     * The minimum value is 128, with the step size 128.
     *
     */
    readonly maxEipTps?: number | ros.IResolvable;
    /**
     * @Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
     * If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
     * If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
     *
     */
    readonly maxTps?: number | ros.IResolvable;
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
     * @Property queueCapacity: The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5.
     * If instance type is enterprise, the valid value is [200, 6000] with the step size 100
     * If instance type is vip, the valid value is [200, 80000] with the step size 100
     */
    readonly queueCapacity?: number | ros.IResolvable;
    /**
     * @Property storageSize: The storage size. It is valid when instance_type is vip.
     * If instance type is professional or enterprise, the valid value is 0.If instance type is vip, the valid value is [700, 2800] with the step size 100
     */
    readonly storageSize?: number | ros.IResolvable;
    /**
     * @Property supportEip: Specifies whether to enable access over the public network. Valid values:
     * - `true`: Enables access over the public network.
     * - `false`: Disables access over the public network.
     */
    readonly supportEip?: string | ros.IResolvable;
    /**
     * @Property supportTracing: Specifies whether to enable the message trace feature. Valid values:
     * - `true`: Enables the message trace feature.
     * - `false`: Disables the message trace feature.
     * > * The message trace feature is included for 15 days at no charge on Platinum
     * Edition instances. For these instances, you must enable this feature and set the
     * retention period to 15 days.
     * - For other instance types, you can enable or disable this feature.
     */
    readonly supportTracing?: string | ros.IResolvable;
    /**
     * @Property tracingStorageTime: The retention period of message traces. Unit: days. Valid values:
     * - `3`
     * - `7`
     * - `15`
     * This parameter is required if you set `SupportTracing` to `true`.
     */
    readonly tracingStorageTime?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AMQP::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::Instance";
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
    /**
     * @Attribute PublicEndpoint: The public endpoint of the instance.
     */
    readonly attrPublicEndpoint: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceName: The name of the instance. The name can be up to 64 characters long.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property instanceType: The instance type.
     * This parameter is required for subscription instances. Valid values:
     * - `professional`: Professional Edition
     * - `enterprise`: Enterprise Edition
     * - `vip`: Platinum Edition
     * You do not need to specify this parameter for serverless instances.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property maxEipTps: The max eip tps. It is valid when support_eip is true.
     * The minimum value is 128, with the step size 128.
     *
     */
    maxEipTps: number | ros.IResolvable | undefined;
    /**
     * @Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
     * If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
     * If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
     *
     */
    maxTps: number | ros.IResolvable | undefined;
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
     * @Property queueCapacity: The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5.
     * If instance type is enterprise, the valid value is [200, 6000] with the step size 100
     * If instance type is vip, the valid value is [200, 80000] with the step size 100
     */
    queueCapacity: number | ros.IResolvable | undefined;
    /**
     * @Property storageSize: The storage size. It is valid when instance_type is vip.
     * If instance type is professional or enterprise, the valid value is 0.If instance type is vip, the valid value is [700, 2800] with the step size 100
     */
    storageSize: number | ros.IResolvable | undefined;
    /**
     * @Property supportEip: Specifies whether to enable access over the public network. Valid values:
     * - `true`: Enables access over the public network.
     * - `false`: Disables access over the public network.
     */
    supportEip: string | ros.IResolvable | undefined;
    /**
     * @Property supportTracing: Specifies whether to enable the message trace feature. Valid values:
     * - `true`: Enables the message trace feature.
     * - `false`: Disables the message trace feature.
     * > * The message trace feature is included for 15 days at no charge on Platinum
     * Edition instances. For these instances, you must enable this feature and set the
     * retention period to 15 days.
     * - For other instance types, you can enable or disable this feature.
     */
    supportTracing: string | ros.IResolvable | undefined;
    /**
     * @Property tracingStorageTime: The retention period of message traces. Unit: days. Valid values:
     * - `3`
     * - `7`
     * - `15`
     * This parameter is required if you set `SupportTracing` to `true`.
     */
    tracingStorageTime: number | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosQueue`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-queue
 */
export interface RosQueueProps {
    /**
     * @Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property queueName: The name of the queue to create.
     * - The queue name can contain only letters, digits, hyphens (-), underscores (_),
     * periods (.), number signs (#), forward slashes (\/), and at signs (@). The name
     * must be 1 to 255 characters in length.
     * - After a queue is created, its name cannot be changed. To change the name,
     * delete the queue and create a new one.
     */
    readonly queueName: string | ros.IResolvable;
    /**
     * @Property virtualHost: The name of the vhost to which the queue belongs.
     * The name can contain only letters, digits, hyphens (-), underscores (_), periods
     * (.), number signs (#), forward slashes (\/), and at signs (@). The name must be 1
     * to 255 characters in length.
     */
    readonly virtualHost: string | ros.IResolvable;
    /**
     * @Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
     * true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
     * false: The Auto Delete attribute is not configured.
     */
    readonly autoDeleteState?: boolean | ros.IResolvable;
    /**
     * @Property autoExpireState: The auto-expiration time for the queue. The queue is automatically deleted if it
     * is not accessed within the specified time period.
     * Unit: milliseconds.
     * > This feature must be enabled before you can use this parameter. To enable the
     * feature, .
     */
    readonly autoExpireState?: number | ros.IResolvable;
    /**
     * @Property deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages.
     * If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
     * Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
     */
    readonly deadLetterExchange?: string | ros.IResolvable;
    /**
     * @Property deadLetterRoutingKey: The dead-letter routing key.
     * The key can contain only letters, digits, hyphens (-), underscores (_), periods
     * (.), number signs (#), forward slashes (\/), and at signs (@). The key must be 1
     * to 255 characters in length.
     */
    readonly deadLetterRoutingKey?: string | ros.IResolvable;
    /**
     * @Property exclusiveState: Specifies whether the queue is an exclusive queue. Valid values:
     * - true: The queue is an exclusive queue. An exclusive queue can be used only by
     * the connection that declares it. The queue is automatically deleted after the
     * connection is closed.
     * - false: The queue is not an exclusive queue.
     */
    readonly exclusiveState?: boolean | ros.IResolvable;
    /**
     * @Property maximumPriority: The priority of the queue. The recommended value is an integer from 1 to 10.
     * > This parameter is used for message priority. It is supported only by dedicated
     * instances and can be used only after the message priority feature is enabled. To
     * enable the feature, .
     */
    readonly maximumPriority?: number | ros.IResolvable;
    /**
     * @Property maxLength: This parameter is not supported in the current version.
     * The maximum number of messages that can be stored in the queue. If this limit is
     * exceeded, the earliest messages in the queue are deleted.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AMQP::Queue`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Queue` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-queue
 */
export declare class RosQueue extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::Queue";
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
     * @Property queueName: The name of the queue to create.
     * - The queue name can contain only letters, digits, hyphens (-), underscores (_),
     * periods (.), number signs (#), forward slashes (\/), and at signs (@). The name
     * must be 1 to 255 characters in length.
     * - After a queue is created, its name cannot be changed. To change the name,
     * delete the queue and create a new one.
     */
    queueName: string | ros.IResolvable;
    /**
     * @Property virtualHost: The name of the vhost to which the queue belongs.
     * The name can contain only letters, digits, hyphens (-), underscores (_), periods
     * (.), number signs (#), forward slashes (\/), and at signs (@). The name must be 1
     * to 255 characters in length.
     */
    virtualHost: string | ros.IResolvable;
    /**
     * @Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
     * true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
     * false: The Auto Delete attribute is not configured.
     */
    autoDeleteState: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoExpireState: The auto-expiration time for the queue. The queue is automatically deleted if it
     * is not accessed within the specified time period.
     * Unit: milliseconds.
     * > This feature must be enabled before you can use this parameter. To enable the
     * feature, .
     */
    autoExpireState: number | ros.IResolvable | undefined;
    /**
     * @Property deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages.
     * If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
     * Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
     */
    deadLetterExchange: string | ros.IResolvable | undefined;
    /**
     * @Property deadLetterRoutingKey: The dead-letter routing key.
     * The key can contain only letters, digits, hyphens (-), underscores (_), periods
     * (.), number signs (#), forward slashes (\/), and at signs (@). The key must be 1
     * to 255 characters in length.
     */
    deadLetterRoutingKey: string | ros.IResolvable | undefined;
    /**
     * @Property exclusiveState: Specifies whether the queue is an exclusive queue. Valid values:
     * - true: The queue is an exclusive queue. An exclusive queue can be used only by
     * the connection that declares it. The queue is automatically deleted after the
     * connection is closed.
     * - false: The queue is not an exclusive queue.
     */
    exclusiveState: boolean | ros.IResolvable | undefined;
    /**
     * @Property maximumPriority: The priority of the queue. The recommended value is an integer from 1 to 10.
     * > This parameter is used for message priority. It is supported only by dedicated
     * instances and can be used only after the message priority feature is enabled. To
     * enable the feature, .
     */
    maximumPriority: number | ros.IResolvable | undefined;
    /**
     * @Property maxLength: This parameter is not supported in the current version.
     * The maximum number of messages that can be stored in the queue. If this limit is
     * exceeded, the earliest messages in the queue are deleted.
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
 * Properties for defining a `RosVirtualHost`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-virtualhost
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AMQP::VirtualHost`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VirtualHost` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-virtualhost
 */
export declare class RosVirtualHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AMQP::VirtualHost";
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
