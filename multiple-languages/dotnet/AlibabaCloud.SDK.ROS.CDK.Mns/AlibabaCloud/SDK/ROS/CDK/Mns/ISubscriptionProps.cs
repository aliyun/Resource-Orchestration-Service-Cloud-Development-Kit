using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns
{
    /// <summary>Properties for defining a `Subscription`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-subscription
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISubscriptionProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.SubscriptionProps")]
    public interface ISubscriptionProps
    {
        /// <summary>Property endpoint: ## The message delivery endpoint.</summary>
        /// <remarks>
        /// The format varies based on the <c>PushType</c> value:
        ///
        /// <list type="bullet">
        /// <description>If <c>PushType</c> is <c>http</c>: An HTTP/HTTPS callback URL, such as
        /// <c>http:\/\/example.com\/callback</c> or <c>https:\/\/example.com\/callback</c>.</description>
        /// <description>If <c>PushType</c> is <c>queue</c>: The ARN of the destination queue, in the format
        /// <c>acs:mns:{RegionId}:{account ID}:queues\/{QueueName}</c>.</description>
        /// <description>If <c>PushType</c> is <c>dm</c>: The endpoint for email push, in the fixed format
        /// <c>smq-ep:dm:{account ID}:__dynamic</c>. Replace <c>{account ID}</c> with your account ID.</description>
        /// <description>If <c>PushType</c> is <c>dysms</c>: The endpoint for SMS push, in the format
        /// <c>smq-ep:dysms:{account ID}:{MobileNumber}</c>.</description>
        /// <description>If <c>PushType</c> is <c>kafka</c>: The Kafka push endpoint.</description>
        /// <description>If <c>PushType</c> is <c>fc</c>: The endpoint for Function Compute, in the format
        /// <c>acs:fc:{RegionId}:{account ID}:services\/{ServiceName}\/functions\/{FunctionName}</c>.</description>
        /// <description>If <c>PushType</c> is <c>eventbus</c>: The endpoint for EventBridge, in the format
        /// <c>acs:eventbridge:{RegionId}:{account ID}:eventbus\/{EventBusName}</c>.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "endpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Endpoint
        {
            get;
        }

        /// <summary>Property subscriptionName: Subscription name.</summary>
        [JsiiProperty(name: "subscriptionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SubscriptionName
        {
            get;
        }

        /// <summary>Property topicName: Topic name.</summary>
        [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TopicName
        {
            get;
        }

        /// <summary>Property dlqPolicy: Dead-letter queue policy.</summary>
        [JsiiProperty(name: "dlqPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mns.RosSubscription.DlqPolicyProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DlqPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.</summary>
        [JsiiProperty(name: "filterTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FilterTag
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property notifyContentFormat: Format of the message content pushed to the endpoint.</summary>
        /// <remarks>
        /// XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
        /// </remarks>
        [JsiiProperty(name: "notifyContentFormat", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NotifyContentFormat
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.</summary>
        /// <remarks>
        /// BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
        /// </remarks>
        [JsiiProperty(name: "notifyStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NotifyStrategy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pushType: Push type of the created subscription.</summary>
        [JsiiProperty(name: "pushType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PushType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Subscription`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-subscription
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISubscriptionProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.SubscriptionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.ISubscriptionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property endpoint: ## The message delivery endpoint.</summary>
            /// <remarks>
            /// The format varies based on the <c>PushType</c> value:
            ///
            /// <list type="bullet">
            /// <description>If <c>PushType</c> is <c>http</c>: An HTTP/HTTPS callback URL, such as
            /// <c>http:\/\/example.com\/callback</c> or <c>https:\/\/example.com\/callback</c>.</description>
            /// <description>If <c>PushType</c> is <c>queue</c>: The ARN of the destination queue, in the format
            /// <c>acs:mns:{RegionId}:{account ID}:queues\/{QueueName}</c>.</description>
            /// <description>If <c>PushType</c> is <c>dm</c>: The endpoint for email push, in the fixed format
            /// <c>smq-ep:dm:{account ID}:__dynamic</c>. Replace <c>{account ID}</c> with your account ID.</description>
            /// <description>If <c>PushType</c> is <c>dysms</c>: The endpoint for SMS push, in the format
            /// <c>smq-ep:dysms:{account ID}:{MobileNumber}</c>.</description>
            /// <description>If <c>PushType</c> is <c>kafka</c>: The Kafka push endpoint.</description>
            /// <description>If <c>PushType</c> is <c>fc</c>: The endpoint for Function Compute, in the format
            /// <c>acs:fc:{RegionId}:{account ID}:services\/{ServiceName}\/functions\/{FunctionName}</c>.</description>
            /// <description>If <c>PushType</c> is <c>eventbus</c>: The endpoint for EventBridge, in the format
            /// <c>acs:eventbridge:{RegionId}:{account ID}:eventbus\/{EventBusName}</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "endpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Endpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property subscriptionName: Subscription name.</summary>
            [JsiiProperty(name: "subscriptionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SubscriptionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property topicName: Topic name.</summary>
            [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TopicName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dlqPolicy: Dead-letter queue policy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dlqPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mns.RosSubscription.DlqPolicyProperty\"}]}}", isOptional: true)]
            public object? DlqPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "filterTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FilterTag
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property notifyContentFormat: Format of the message content pushed to the endpoint.</summary>
            /// <remarks>
            /// XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notifyContentFormat", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NotifyContentFormat
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.</summary>
            /// <remarks>
            /// BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notifyStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NotifyStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pushType: Push type of the created subscription.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "pushType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PushType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
