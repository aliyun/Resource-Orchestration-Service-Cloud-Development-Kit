using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `ALIYUN::DTS::ConsumerGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosConsumerGroupProps")]
    public interface IRosConsumerGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: consumerGroupName: Consumer group name.
        /// </remarks>
        [JsiiProperty(name: "consumerGroupName", typeJson: "{\"primitive\":\"string\"}")]
        string ConsumerGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: consumerGroupPassword: Password of consumer group.
        /// </remarks>
        [JsiiProperty(name: "consumerGroupPassword", typeJson: "{\"primitive\":\"string\"}")]
        string ConsumerGroupPassword
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: consumerGroupUserName: User name of consumer group.
        /// </remarks>
        [JsiiProperty(name: "consumerGroupUserName", typeJson: "{\"primitive\":\"string\"}")]
        string ConsumerGroupUserName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: subscriptionInstanceId: Subscription instance ID.
        /// </remarks>
        [JsiiProperty(name: "subscriptionInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string SubscriptionInstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::DTS::ConsumerGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosConsumerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IRosConsumerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: consumerGroupName: Consumer group name.
            /// </remarks>
            [JsiiProperty(name: "consumerGroupName", typeJson: "{\"primitive\":\"string\"}")]
            public string ConsumerGroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: consumerGroupPassword: Password of consumer group.
            /// </remarks>
            [JsiiProperty(name: "consumerGroupPassword", typeJson: "{\"primitive\":\"string\"}")]
            public string ConsumerGroupPassword
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: consumerGroupUserName: User name of consumer group.
            /// </remarks>
            [JsiiProperty(name: "consumerGroupUserName", typeJson: "{\"primitive\":\"string\"}")]
            public string ConsumerGroupUserName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: subscriptionInstanceId: Subscription instance ID.
            /// </remarks>
            [JsiiProperty(name: "subscriptionInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string SubscriptionInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
