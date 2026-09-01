using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns
{
    /// <summary>Properties for defining a `RosSubscription`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-subscription
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSubscriptionProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.RosSubscriptionProps")]
    public interface IRosSubscriptionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: endpoint: ## The message delivery endpoint.
        /// The format varies based on the `PushType` value:
        /// - If `PushType` is `http`: An HTTP\/HTTPS callback URL, such as
        /// `http:\/\/example.com\/callback` or `https:\/\/example.com\/callback`.
        /// - If `PushType` is `queue`: The ARN of the destination queue, in the format
        /// `acs:mns:{RegionId}:{account ID}:queues\/{QueueName}`.
        /// - If `PushType` is `dm`: The endpoint for email push, in the fixed format
        /// `smq-ep:dm:{account ID}:__dynamic`. Replace `{account
        /// ID}` with your account ID.
        /// - If `PushType` is `dysms`: The endpoint for SMS push, in the format
        /// `smq-ep:dysms:{account ID}:{MobileNumber}`.
        /// - If `PushType` is `kafka`: The Kafka push endpoint.
        /// - If `PushType` is `fc`: The endpoint for Function Compute, in the format
        /// `acs:fc:{RegionId}:{account
        /// ID}:services\/{ServiceName}\/functions\/{FunctionName}`.
        /// - If `PushType` is `eventbus`: The endpoint for EventBridge, in the format
        /// `acs:eventbridge:{RegionId}:{account ID}:eventbus\/{EventBusName}`.
        /// </remarks>
        [JsiiProperty(name: "endpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Endpoint
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: subscriptionName: Subscription name
        /// </remarks>
        [JsiiProperty(name: "subscriptionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SubscriptionName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: topicName: Topic name
        /// </remarks>
        [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TopicName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dlqPolicy: Dead-letter queue policy
        /// </remarks>
        [JsiiProperty(name: "dlqPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mns.RosSubscription.DlqPolicyProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DlqPolicy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
        /// The value is a string of no more than 16 characters. The default value is no message filter.
        /// </remarks>
        [JsiiProperty(name: "filterTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FilterTag
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: notifyContentFormat: Format of the message content pushed to the endpoint.
        /// XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts\/NotifyContentFormat.
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

        /// <remarks>
        /// <strong>Property</strong>: notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
        /// BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts\/NotifyStrategy.
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

        /// <remarks>
        /// <strong>Property</strong>: pushType: Push type of the created subscription.
        /// </remarks>
        [JsiiProperty(name: "pushType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PushType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSubscription`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-subscription
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSubscriptionProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.RosSubscriptionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.IRosSubscriptionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: endpoint: ## The message delivery endpoint.
            /// The format varies based on the `PushType` value:
            /// - If `PushType` is `http`: An HTTP\/HTTPS callback URL, such as
            /// `http:\/\/example.com\/callback` or `https:\/\/example.com\/callback`.
            /// - If `PushType` is `queue`: The ARN of the destination queue, in the format
            /// `acs:mns:{RegionId}:{account ID}:queues\/{QueueName}`.
            /// - If `PushType` is `dm`: The endpoint for email push, in the fixed format
            /// `smq-ep:dm:{account ID}:__dynamic`. Replace `{account
            /// ID}` with your account ID.
            /// - If `PushType` is `dysms`: The endpoint for SMS push, in the format
            /// `smq-ep:dysms:{account ID}:{MobileNumber}`.
            /// - If `PushType` is `kafka`: The Kafka push endpoint.
            /// - If `PushType` is `fc`: The endpoint for Function Compute, in the format
            /// `acs:fc:{RegionId}:{account
            /// ID}:services\/{ServiceName}\/functions\/{FunctionName}`.
            /// - If `PushType` is `eventbus`: The endpoint for EventBridge, in the format
            /// `acs:eventbridge:{RegionId}:{account ID}:eventbus\/{EventBusName}`.
            /// </remarks>
            [JsiiProperty(name: "endpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Endpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: subscriptionName: Subscription name
            /// </remarks>
            [JsiiProperty(name: "subscriptionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SubscriptionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: topicName: Topic name
            /// </remarks>
            [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TopicName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dlqPolicy: Dead-letter queue policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dlqPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mns.RosSubscription.DlqPolicyProperty\"}]}}", isOptional: true)]
            public object? DlqPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
            /// The value is a string of no more than 16 characters. The default value is no message filter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filterTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FilterTag
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: notifyContentFormat: Format of the message content pushed to the endpoint.
            /// XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts\/NotifyContentFormat.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notifyContentFormat", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NotifyContentFormat
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
            /// BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts\/NotifyStrategy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notifyStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NotifyStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pushType: Push type of the created subscription.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pushType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PushType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
