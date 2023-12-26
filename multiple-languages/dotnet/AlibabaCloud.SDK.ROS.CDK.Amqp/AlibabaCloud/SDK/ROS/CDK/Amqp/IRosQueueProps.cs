using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Amqp
{
    /// <summary>Properties for defining a `RosQueue`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-queue
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosQueueProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.RosQueueProps")]
    public interface IRosQueueProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: InstanceId
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: queueName: The name of the queue.
        /// </remarks>
        [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueueName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: virtualHost: The name of the virtual host.
        /// </remarks>
        [JsiiProperty(name: "virtualHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VirtualHost
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
        /// true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
        /// false: The Auto Delete attribute is not configured.
        /// </remarks>
        [JsiiProperty(name: "autoDeleteState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoDeleteState
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoExpireState: The validity period after which the queue is automatically deleted.
        /// If the queue is not accessed within a specified period of time, it is automatically deleted.
        /// </remarks>
        [JsiiProperty(name: "autoExpireState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoExpireState
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages.
        /// If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
        /// Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
        /// </remarks>
        [JsiiProperty(name: "deadLetterExchange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeadLetterExchange
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deadLetterRoutingKey: The dead letter routing key.
        /// </remarks>
        [JsiiProperty(name: "deadLetterRoutingKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeadLetterRoutingKey
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: exclusiveState: Specifies whether the queue is an exclusive queue. Valid values:
        /// true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
        /// false: The Auto Delete attribute is not configured.
        /// </remarks>
        [JsiiProperty(name: "exclusiveState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExclusiveState
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maximumPriority: The priority function is not supported.
        /// </remarks>
        [JsiiProperty(name: "maximumPriority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaximumPriority
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxLength: The maximum number of messages that can be stored in the queue.
        /// If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
        /// </remarks>
        [JsiiProperty(name: "maxLength", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxLength
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: messageTtl: The message TTL of the queue
        /// If a message is retained in the Queue longer than the configured message lifetime, the message expires.
        /// The value of message lifetime must be a non-negative integer, up to 1 day.
        /// The unit is milliseconds
        /// </remarks>
        [JsiiProperty(name: "messageTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MessageTtl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosQueue`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-queue
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosQueueProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.RosQueueProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Amqp.IRosQueueProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: InstanceId
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: queueName: The name of the queue.
            /// </remarks>
            [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueueName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: virtualHost: The name of the virtual host.
            /// </remarks>
            [JsiiProperty(name: "virtualHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VirtualHost
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
            /// true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
            /// false: The Auto Delete attribute is not configured.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoDeleteState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoDeleteState
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoExpireState: The validity period after which the queue is automatically deleted.
            /// If the queue is not accessed within a specified period of time, it is automatically deleted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoExpireState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoExpireState
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages.
            /// If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
            /// Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deadLetterExchange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeadLetterExchange
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deadLetterRoutingKey: The dead letter routing key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deadLetterRoutingKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeadLetterRoutingKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: exclusiveState: Specifies whether the queue is an exclusive queue. Valid values:
            /// true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
            /// false: The Auto Delete attribute is not configured.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exclusiveState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExclusiveState
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maximumPriority: The priority function is not supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maximumPriority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaximumPriority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxLength: The maximum number of messages that can be stored in the queue.
            /// If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxLength", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxLength
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: messageTtl: The message TTL of the queue
            /// If a message is retained in the Queue longer than the configured message lifetime, the message expires.
            /// The value of message lifetime must be a non-negative integer, up to 1 day.
            /// The unit is milliseconds
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "messageTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MessageTtl
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
