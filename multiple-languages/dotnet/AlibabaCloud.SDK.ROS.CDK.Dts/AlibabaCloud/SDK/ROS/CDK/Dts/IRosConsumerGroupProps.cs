using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `RosConsumerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosConsumerGroupProps")]
    public interface IRosConsumerGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: consumerGroupName: Consumer group name.
        /// </remarks>
        [JsiiProperty(name: "consumerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: consumerGroupPassword: Password of consumer group.
        /// </remarks>
        [JsiiProperty(name: "consumerGroupPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupPassword
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: consumerGroupUserName: User name of consumer group.
        /// </remarks>
        [JsiiProperty(name: "consumerGroupUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupUserName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: subscriptionInstanceId: Subscription instance ID.
        /// </remarks>
        [JsiiProperty(name: "subscriptionInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SubscriptionInstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `RosConsumerGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosConsumerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IRosConsumerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: consumerGroupName: Consumer group name.
            /// </remarks>
            [JsiiProperty(name: "consumerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: consumerGroupPassword: Password of consumer group.
            /// </remarks>
            [JsiiProperty(name: "consumerGroupPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: consumerGroupUserName: User name of consumer group.
            /// </remarks>
            [JsiiProperty(name: "consumerGroupUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupUserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: subscriptionInstanceId: Subscription instance ID.
            /// </remarks>
            [JsiiProperty(name: "subscriptionInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SubscriptionInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
