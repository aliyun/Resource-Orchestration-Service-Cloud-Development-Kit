using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Amqp
{
    /// <summary>Properties for defining a `ALIYUN::AMQP::Exchange`.</summary>
    [JsiiInterface(nativeType: typeof(IExchangeProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.ExchangeProps")]
    public interface IExchangeProps
    {
        /// <summary>Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.</summary>
        /// <remarks>
        /// Valid values:
        /// true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
        /// false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
        /// </remarks>
        [JsiiProperty(name: "autoDeleteState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AutoDeleteState
        {
            get;
        }

        /// <summary>Property exchangeName: The name of the exchange.</summary>
        [JsiiProperty(name: "exchangeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExchangeName
        {
            get;
        }

        /// <summary>Property exchangeType: The type of the exchange.</summary>
        /// <remarks>
        /// Valid values:
        /// FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
        /// DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
        /// TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
        /// HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
        /// </remarks>
        [JsiiProperty(name: "exchangeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExchangeType
        {
            get;
        }

        /// <summary>Property instanceId: InstanceId.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property internal: Specifies whether an exchange is an internal exchange.</summary>
        /// <remarks>
        /// Valid values:
        /// false: The exchange is not an internal exchange.
        /// true: The exchange is an internal exchange.
        /// </remarks>
        [JsiiProperty(name: "internal", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Internal
        {
            get;
        }

        /// <summary>Property virtualHost: The name of the virtual host.</summary>
        [JsiiProperty(name: "virtualHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VirtualHost
        {
            get;
        }

        /// <summary>Property alternateExchange: The alternate exchange.</summary>
        /// <remarks>
        /// An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
        /// </remarks>
        [JsiiProperty(name: "alternateExchange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AlternateExchange
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::AMQP::Exchange`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IExchangeProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.ExchangeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Amqp.IExchangeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.</summary>
            /// <remarks>
            /// Valid values:
            /// true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
            /// false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
            /// </remarks>
            [JsiiProperty(name: "autoDeleteState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AutoDeleteState
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property exchangeName: The name of the exchange.</summary>
            [JsiiProperty(name: "exchangeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExchangeName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property exchangeType: The type of the exchange.</summary>
            /// <remarks>
            /// Valid values:
            /// FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
            /// DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
            /// TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
            /// HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
            /// </remarks>
            [JsiiProperty(name: "exchangeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExchangeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: InstanceId.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property internal: Specifies whether an exchange is an internal exchange.</summary>
            /// <remarks>
            /// Valid values:
            /// false: The exchange is not an internal exchange.
            /// true: The exchange is an internal exchange.
            /// </remarks>
            [JsiiProperty(name: "internal", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Internal
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property virtualHost: The name of the virtual host.</summary>
            [JsiiProperty(name: "virtualHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VirtualHost
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property alternateExchange: The alternate exchange.</summary>
            /// <remarks>
            /// An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "alternateExchange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AlternateExchange
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
