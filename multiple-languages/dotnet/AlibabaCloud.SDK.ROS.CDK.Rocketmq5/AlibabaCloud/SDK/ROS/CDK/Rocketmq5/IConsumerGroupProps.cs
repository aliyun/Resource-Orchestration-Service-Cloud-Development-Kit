using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq5
{
    /// <summary>Properties for defining a `ALIYUN::ROCKETMQ5::ConsumerGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.ConsumerGroupProps")]
    public interface IConsumerGroupProps
    {
        /// <summary>Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created.</summary>
        [JsiiProperty(name: "consumeRetryPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rocketmq5.RosConsumerGroup.ConsumeRetryPolicyProperty\"}]}}")]
        object ConsumeRetryPolicy
        {
            get;
        }

        /// <summary>Property consumerGroupId: The ID of the consumer group to be created.</summary>
        /// <remarks>
        /// Used to identify consumer groups, globally unique.
        /// The value description is as follows:
        /// Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
        /// Length limit: 1-60 characters.
        /// </remarks>
        [JsiiProperty(name: "consumerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupId
        {
            get;
        }

        /// <summary>Property deliveryOrderType: Delivery sequence of the consumer group to be created.</summary>
        [JsiiProperty(name: "deliveryOrderType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DeliveryOrderType
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property remark: The remark of the consumer group to be created.</summary>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ROCKETMQ5::ConsumerGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.ConsumerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rocketmq5.IConsumerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created.</summary>
            [JsiiProperty(name: "consumeRetryPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rocketmq5.RosConsumerGroup.ConsumeRetryPolicyProperty\"}]}}")]
            public object ConsumeRetryPolicy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property consumerGroupId: The ID of the consumer group to be created.</summary>
            /// <remarks>
            /// Used to identify consumer groups, globally unique.
            /// The value description is as follows:
            /// Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
            /// Length limit: 1-60 characters.
            /// </remarks>
            [JsiiProperty(name: "consumerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property deliveryOrderType: Delivery sequence of the consumer group to be created.</summary>
            [JsiiProperty(name: "deliveryOrderType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DeliveryOrderType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property remark: The remark of the consumer group to be created.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
