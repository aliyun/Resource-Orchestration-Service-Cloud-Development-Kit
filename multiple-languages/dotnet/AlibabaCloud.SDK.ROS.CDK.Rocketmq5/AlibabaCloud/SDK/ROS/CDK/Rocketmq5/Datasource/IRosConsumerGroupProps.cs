using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq5.Datasource
{
    /// <summary>Properties for defining a `RosConsumerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.datasource.RosConsumerGroupProps")]
    public interface IRosConsumerGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: consumerGroupId: The ID of the consumer group.
        /// </remarks>
        [JsiiProperty(name: "consumerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the instance to which the consumer group belongs.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
        /// - Never: Never refresh the datasource resource when the stack is updated.
        /// - Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosConsumerGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.datasource.RosConsumerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rocketmq5.Datasource.IRosConsumerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: consumerGroupId: The ID of the consumer group.
            /// </remarks>
            [JsiiProperty(name: "consumerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the instance to which the consumer group belongs.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
            /// - Never: Never refresh the datasource resource when the stack is updated.
            /// - Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
