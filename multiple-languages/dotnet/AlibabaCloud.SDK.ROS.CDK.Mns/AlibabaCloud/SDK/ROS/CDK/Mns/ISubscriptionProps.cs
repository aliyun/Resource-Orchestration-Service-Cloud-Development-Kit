using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns
{
    /// <summary>Properties for defining a `ALIYUN::MNS::Subscription`.</summary>
    [JsiiInterface(nativeType: typeof(ISubscriptionProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.SubscriptionProps")]
    public interface ISubscriptionProps
    {
        /// <summary>Property endpoint: Terminal address of the message recipient for the created subscription.</summary>
        /// <remarks>
        /// Currently, four types of endpoints are supported:
        /// 
        /// <list type="number">
        /// <description>HttpEndpoint, which must be prefixed with "http://";</description>
        /// <description>QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};</description>
        /// <description>MailEndpoint, in the format of mail:directmail:{MailAddress};</description>
        /// <description>SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "endpoint", typeJson: "{\"primitive\":\"string\"}")]
        string Endpoint
        {
            get;
        }

        /// <summary>Property subscriptionName: Subscription name.</summary>
        [JsiiProperty(name: "subscriptionName", typeJson: "{\"primitive\":\"string\"}")]
        string SubscriptionName
        {
            get;
        }

        /// <summary>Property topicName: Topic name.</summary>
        [JsiiProperty(name: "topicName", typeJson: "{\"primitive\":\"string\"}")]
        string TopicName
        {
            get;
        }

        /// <summary>Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.</summary>
        [JsiiProperty(name: "filterTag", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? FilterTag
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
        [JsiiProperty(name: "notifyContentFormat", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NotifyContentFormat
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
        [JsiiTypeProxy(nativeType: typeof(ISubscriptionProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.SubscriptionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.ISubscriptionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property endpoint: Terminal address of the message recipient for the created subscription.</summary>
            /// <remarks>
            /// Currently, four types of endpoints are supported:
            /// 
            /// <list type="number">
            /// <description>HttpEndpoint, which must be prefixed with "http://";</description>
            /// <description>QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName};</description>
            /// <description>MailEndpoint, in the format of mail:directmail:{MailAddress};</description>
            /// <description>SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "endpoint", typeJson: "{\"primitive\":\"string\"}")]
            public string Endpoint
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property subscriptionName: Subscription name.</summary>
            [JsiiProperty(name: "subscriptionName", typeJson: "{\"primitive\":\"string\"}")]
            public string SubscriptionName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property topicName: Topic name.</summary>
            [JsiiProperty(name: "topicName", typeJson: "{\"primitive\":\"string\"}")]
            public string TopicName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "filterTag", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? FilterTag
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property notifyContentFormat: Format of the message content pushed to the endpoint.</summary>
            /// <remarks>
            /// XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notifyContentFormat", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NotifyContentFormat
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.</summary>
            /// <remarks>
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
