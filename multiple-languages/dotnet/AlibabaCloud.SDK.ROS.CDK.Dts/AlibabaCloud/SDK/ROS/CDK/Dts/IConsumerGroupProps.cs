using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `ALIYUN::DTS::ConsumerGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.ConsumerGroupProps")]
    public interface IConsumerGroupProps
    {
        /// <summary>Property consumerGroupName: Consumer group name.</summary>
        [JsiiProperty(name: "consumerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupName
        {
            get;
        }

        /// <summary>Property consumerGroupPassword: Password of consumer group.</summary>
        [JsiiProperty(name: "consumerGroupPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupPassword
        {
            get;
        }

        /// <summary>Property consumerGroupUserName: User name of consumer group.</summary>
        [JsiiProperty(name: "consumerGroupUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupUserName
        {
            get;
        }

        /// <summary>Property subscriptionInstanceId: Subscription instance ID.</summary>
        [JsiiProperty(name: "subscriptionInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SubscriptionInstanceId
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
            [JsiiProperty(name: "consumerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property consumerGroupPassword: Password of consumer group.</summary>
            [JsiiProperty(name: "consumerGroupPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property consumerGroupUserName: User name of consumer group.</summary>
            [JsiiProperty(name: "consumerGroupUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupUserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property subscriptionInstanceId: Subscription instance ID.</summary>
            [JsiiProperty(name: "subscriptionInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SubscriptionInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
