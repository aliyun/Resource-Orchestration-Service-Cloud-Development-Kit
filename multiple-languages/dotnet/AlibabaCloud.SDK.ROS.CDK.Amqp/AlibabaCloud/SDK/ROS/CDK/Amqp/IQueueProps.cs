using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Amqp
{
    /// <summary>Properties for defining a `Queue`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-queue
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IQueueProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.QueueProps")]
    public interface IQueueProps
    {
        /// <summary>Property instanceId: InstanceId.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property queueName: The name of the queue to create.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>The queue name can contain only letters, digits, hyphens (-), underscores (_),
        /// periods (.), number signs (#), forward slashes (/), and at signs (@). The name
        /// must be 1 to 255 characters in length.</description>
        /// <description>After a queue is created, its name cannot be changed. To change the name,
        /// delete the queue and create a new one.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueueName
        {
            get;
        }

        /// <summary>Property virtualHost: The name of the vhost to which the queue belongs.</summary>
        /// <remarks>
        /// The name can contain only letters, digits, hyphens (-), underscores (_), periods
        /// (.), number signs (#), forward slashes (/), and at signs (@). The name must be 1
        /// to 255 characters in length.
        /// </remarks>
        [JsiiProperty(name: "virtualHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VirtualHost
        {
            get;
        }

        /// <summary>Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property autoExpireState: The auto-expiration time for the queue.</summary>
        /// <remarks>
        /// The queue is automatically deleted if it
        /// is not accessed within the specified time period.
        /// Unit: milliseconds.
        ///
        ///     This feature must be enabled before you can use this parameter. To enable the
        ///     feature, .
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

        /// <summary>Property deadLetterExchange: The dead-letter exchange.</summary>
        /// <remarks>
        /// A dead-letter exchange is used to receive rejected messages.
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

        /// <summary>Property deadLetterRoutingKey: The dead-letter routing key.</summary>
        /// <remarks>
        /// The key can contain only letters, digits, hyphens (-), underscores (_), periods
        /// (.), number signs (#), forward slashes (/), and at signs (@). The key must be 1
        /// to 255 characters in length.
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

        /// <summary>Property exclusiveState: Specifies whether the queue is an exclusive queue.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: The queue is an exclusive queue. An exclusive queue can be used only by
        /// the connection that declares it. The queue is automatically deleted after the
        /// connection is closed.</description>
        /// <description>false: The queue is not an exclusive queue.</description>
        /// </list>
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

        /// <summary>Property maximumPriority: The priority of the queue.</summary>
        /// <remarks>
        /// The recommended value is an integer from 1 to 10.
        ///
        ///     This parameter is used for message priority. It is supported only by dedicated
        ///     instances and can be used only after the message priority feature is enabled. To
        ///     enable the feature, .
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

        /// <summary>Property maxLength: This parameter is not supported in the current version.</summary>
        /// <remarks>
        /// The maximum number of messages that can be stored in the queue. If this limit is
        /// exceeded, the earliest messages in the queue are deleted.
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

        /// <summary>Property messageTtl: The message TTL of the queue If a message is retained in the Queue longer than the configured message lifetime, the message expires.</summary>
        /// <remarks>
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

        /// <summary>Properties for defining a `Queue`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-queue
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IQueueProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.QueueProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Amqp.IQueueProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: InstanceId.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property queueName: The name of the queue to create.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>The queue name can contain only letters, digits, hyphens (-), underscores (_),
            /// periods (.), number signs (#), forward slashes (/), and at signs (@). The name
            /// must be 1 to 255 characters in length.</description>
            /// <description>After a queue is created, its name cannot be changed. To change the name,
            /// delete the queue and create a new one.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueueName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property virtualHost: The name of the vhost to which the queue belongs.</summary>
            /// <remarks>
            /// The name can contain only letters, digits, hyphens (-), underscores (_), periods
            /// (.), number signs (#), forward slashes (/), and at signs (@). The name must be 1
            /// to 255 characters in length.
            /// </remarks>
            [JsiiProperty(name: "virtualHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VirtualHost
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.</summary>
            /// <remarks>
            /// Valid values:
            /// true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
            /// false: The Auto Delete attribute is not configured.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoDeleteState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoDeleteState
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoExpireState: The auto-expiration time for the queue.</summary>
            /// <remarks>
            /// The queue is automatically deleted if it
            /// is not accessed within the specified time period.
            /// Unit: milliseconds.
            ///
            ///     This feature must be enabled before you can use this parameter. To enable the
            ///     feature, .
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoExpireState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoExpireState
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deadLetterExchange: The dead-letter exchange.</summary>
            /// <remarks>
            /// A dead-letter exchange is used to receive rejected messages.
            /// If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
            /// Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deadLetterExchange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeadLetterExchange
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deadLetterRoutingKey: The dead-letter routing key.</summary>
            /// <remarks>
            /// The key can contain only letters, digits, hyphens (-), underscores (_), periods
            /// (.), number signs (#), forward slashes (/), and at signs (@). The key must be 1
            /// to 255 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deadLetterRoutingKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeadLetterRoutingKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property exclusiveState: Specifies whether the queue is an exclusive queue.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: The queue is an exclusive queue. An exclusive queue can be used only by
            /// the connection that declares it. The queue is automatically deleted after the
            /// connection is closed.</description>
            /// <description>false: The queue is not an exclusive queue.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exclusiveState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExclusiveState
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maximumPriority: The priority of the queue.</summary>
            /// <remarks>
            /// The recommended value is an integer from 1 to 10.
            ///
            ///     This parameter is used for message priority. It is supported only by dedicated
            ///     instances and can be used only after the message priority feature is enabled. To
            ///     enable the feature, .
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maximumPriority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaximumPriority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxLength: This parameter is not supported in the current version.</summary>
            /// <remarks>
            /// The maximum number of messages that can be stored in the queue. If this limit is
            /// exceeded, the earliest messages in the queue are deleted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxLength", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxLength
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property messageTtl: The message TTL of the queue If a message is retained in the Queue longer than the configured message lifetime, the message expires.</summary>
            /// <remarks>
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
