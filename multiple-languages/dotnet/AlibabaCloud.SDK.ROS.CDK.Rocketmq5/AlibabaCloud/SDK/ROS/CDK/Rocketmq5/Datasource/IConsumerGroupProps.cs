using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq5.Datasource
{
    /// <summary>Properties for defining a `ConsumerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.datasource.ConsumerGroupProps")]
    public interface IConsumerGroupProps
    {
        /// <summary>Property consumerGroupId: The ID of the consumer group.</summary>
        [JsiiProperty(name: "consumerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroupId
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the instance to which the consumer group belongs.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
        /// <description>Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.</description>
        /// </list>
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

        /// <summary>Properties for defining a `ConsumerGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.datasource.ConsumerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rocketmq5.Datasource.IConsumerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property consumerGroupId: The ID of the consumer group.</summary>
            [JsiiProperty(name: "consumerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of the instance to which the consumer group belongs.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
            /// <description>Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.</description>
            /// </list>
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
