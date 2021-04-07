using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MNS::Subscription`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-mns.SubscriptionProps")]
    public class SubscriptionProps : AlibabaCloud.SDK.ROS.CDK.Mns.ISubscriptionProps
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
        [JsiiProperty(name: "endpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Endpoint
        {
            get;
            set;
        }

        /// <summary>Property subscriptionName: Subscription name.</summary>
        [JsiiProperty(name: "subscriptionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SubscriptionName
        {
            get;
            set;
        }

        /// <summary>Property topicName: Topic name.</summary>
        [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object TopicName
        {
            get;
            set;
        }

        /// <summary>Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "filterTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? FilterTag
        {
            get;
            set;
        }

        /// <summary>Property notifyContentFormat: Format of the message content pushed to the endpoint.</summary>
        /// <remarks>
        /// XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "notifyContentFormat", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? NotifyContentFormat
        {
            get;
            set;
        }

        /// <summary>Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.</summary>
        /// <remarks>
        /// BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "notifyStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? NotifyStrategy
        {
            get;
            set;
        }
    }
}
