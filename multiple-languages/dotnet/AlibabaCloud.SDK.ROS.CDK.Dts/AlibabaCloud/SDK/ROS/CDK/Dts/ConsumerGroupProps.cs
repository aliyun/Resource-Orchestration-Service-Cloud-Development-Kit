using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DTS::ConsumerGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.ConsumerGroupProps")]
    public class ConsumerGroupProps : AlibabaCloud.SDK.ROS.CDK.Dts.IConsumerGroupProps
    {
        /// <summary>Property consumerGroupName: Consumer group name.</summary>
        [JsiiProperty(name: "consumerGroupName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ConsumerGroupName
        {
            get;
            set;
        }

        /// <summary>Property consumerGroupPassword: Password of consumer group.</summary>
        [JsiiProperty(name: "consumerGroupPassword", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ConsumerGroupPassword
        {
            get;
            set;
        }

        /// <summary>Property consumerGroupUserName: User name of consumer group.</summary>
        [JsiiProperty(name: "consumerGroupUserName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ConsumerGroupUserName
        {
            get;
            set;
        }

        /// <summary>Property subscriptionInstanceId: Subscription instance ID.</summary>
        [JsiiProperty(name: "subscriptionInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SubscriptionInstanceId
        {
            get;
            set;
        }
    }
}
