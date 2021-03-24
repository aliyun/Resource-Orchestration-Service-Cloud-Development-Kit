using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `ALIYUN::DTS::ConsumerGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.ConsumerGroupProps")]
    public interface IConsumerGroupProps
    {
        /// <summary>Property consumerGroupName: Consumer group name.</summary>
        [JsiiProperty(name: "consumerGroupName", typeJson: "{\"primitive\":\"string\"}")]
        string ConsumerGroupName
        {
            get;
        }

        /// <summary>Property consumerGroupPassword: Password of consumer group.</summary>
        [JsiiProperty(name: "consumerGroupPassword", typeJson: "{\"primitive\":\"string\"}")]
        string ConsumerGroupPassword
        {
            get;
        }

        /// <summary>Property consumerGroupUserName: User name of consumer group.</summary>
        [JsiiProperty(name: "consumerGroupUserName", typeJson: "{\"primitive\":\"string\"}")]
        string ConsumerGroupUserName
        {
            get;
        }

        /// <summary>Property subscriptionInstanceId: Subscription instance ID.</summary>
        [JsiiProperty(name: "subscriptionInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string SubscriptionInstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::DTS::ConsumerGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.ConsumerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IConsumerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property consumerGroupName: Consumer group name.</summary>
            [JsiiProperty(name: "consumerGroupName", typeJson: "{\"primitive\":\"string\"}")]
            public string ConsumerGroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property consumerGroupPassword: Password of consumer group.</summary>
            [JsiiProperty(name: "consumerGroupPassword", typeJson: "{\"primitive\":\"string\"}")]
            public string ConsumerGroupPassword
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property consumerGroupUserName: User name of consumer group.</summary>
            [JsiiProperty(name: "consumerGroupUserName", typeJson: "{\"primitive\":\"string\"}")]
            public string ConsumerGroupUserName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property subscriptionInstanceId: Subscription instance ID.</summary>
            [JsiiProperty(name: "subscriptionInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string SubscriptionInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
