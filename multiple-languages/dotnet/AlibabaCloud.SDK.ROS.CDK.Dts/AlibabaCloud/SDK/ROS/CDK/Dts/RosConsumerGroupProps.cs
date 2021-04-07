using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DTS::ConsumerGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosConsumerGroupProps")]
    public class RosConsumerGroupProps : AlibabaCloud.SDK.ROS.CDK.Dts.IRosConsumerGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: consumerGroupName: Consumer group name.
        /// </remarks>
        [JsiiProperty(name: "consumerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ConsumerGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: consumerGroupPassword: Password of consumer group.
        /// </remarks>
        [JsiiProperty(name: "consumerGroupPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ConsumerGroupPassword
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: consumerGroupUserName: User name of consumer group.
        /// </remarks>
        [JsiiProperty(name: "consumerGroupUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ConsumerGroupUserName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: subscriptionInstanceId: Subscription instance ID.
        /// </remarks>
        [JsiiProperty(name: "subscriptionInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SubscriptionInstanceId
        {
            get;
            set;
        }
    }
}
