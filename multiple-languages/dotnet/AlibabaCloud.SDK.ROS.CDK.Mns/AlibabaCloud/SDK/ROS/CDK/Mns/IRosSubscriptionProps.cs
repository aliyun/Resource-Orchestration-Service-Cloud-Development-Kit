using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns
{
    /// <summary>Properties for defining a `ALIYUN::MNS::Subscription`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSubscriptionProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.RosSubscriptionProps")]
    public interface IRosSubscriptionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: endpoint: Terminal address of the message recipient for the created subscription.
        /// Currently, four types of endpoints are supported: 
        /// 1. HttpEndpoint, which must be prefixed with "http://"; 
        /// 2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName}; 
        /// 3. MailEndpoint, in the format of mail:directmail:{MailAddress}; 
        /// 4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
        /// </remarks>
        [JsiiProperty(name: "endpoint", typeJson: "{\"primitive\":\"string\"}")]
        string Endpoint
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: subscriptionName: Subscription name
        /// </remarks>
        [JsiiProperty(name: "subscriptionName", typeJson: "{\"primitive\":\"string\"}")]
        string SubscriptionName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: topicName: Topic name
        /// </remarks>
        [JsiiProperty(name: "topicName", typeJson: "{\"primitive\":\"string\"}")]
        string TopicName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
        /// The value is a string of no more than 16 characters. The default value is no message filter.
        /// </remarks>
        [JsiiProperty(name: "filterTag", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? FilterTag
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: notifyContentFormat: Format of the message content pushed to the endpoint.
        /// XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
        /// </remarks>
        [JsiiProperty(name: "notifyContentFormat", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NotifyContentFormat
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
        /// BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
        /// </remarks>
        [JsiiProperty(name: "notifyStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NotifyStrategy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::MNS::Subscription`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSubscriptionProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.RosSubscriptionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.IRosSubscriptionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: endpoint: Terminal address of the message recipient for the created subscription.
            /// Currently, four types of endpoints are supported: 
            /// 1. HttpEndpoint, which must be prefixed with "http://"; 
            /// 2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName}; 
            /// 3. MailEndpoint, in the format of mail:directmail:{MailAddress}; 
            /// 4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
            /// </remarks>
            [JsiiProperty(name: "endpoint", typeJson: "{\"primitive\":\"string\"}")]
            public string Endpoint
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: subscriptionName: Subscription name
            /// </remarks>
            [JsiiProperty(name: "subscriptionName", typeJson: "{\"primitive\":\"string\"}")]
            public string SubscriptionName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: topicName: Topic name
            /// </remarks>
            [JsiiProperty(name: "topicName", typeJson: "{\"primitive\":\"string\"}")]
            public string TopicName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
            /// The value is a string of no more than 16 characters. The default value is no message filter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filterTag", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? FilterTag
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: notifyContentFormat: Format of the message content pushed to the endpoint.
            /// XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notifyContentFormat", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NotifyContentFormat
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
            /// BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notifyStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NotifyStrategy
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
