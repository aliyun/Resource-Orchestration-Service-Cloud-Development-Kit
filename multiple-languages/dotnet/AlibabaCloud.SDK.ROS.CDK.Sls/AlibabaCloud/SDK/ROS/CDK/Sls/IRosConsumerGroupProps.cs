using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `RosConsumerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-consumergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosConsumerGroupProps")]
    public interface IRosConsumerGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: consumerGroup: The name of the consumer group. The name must be unique in a project.
        /// </remarks>
        [JsiiProperty(name: "consumerGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerGroup
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logstore: The name of the Logstore.
        /// </remarks>
        [JsiiProperty(name: "logstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Logstore
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: order: Specifies whether to consume data in sequence. Valid values:
        /// true
        /// In a shard, data is consumed in ascending order based on the value of the **__tag__:__receive_time__** field.
        /// If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
        /// If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
        /// false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
        /// </remarks>
        [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Order
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: project: The name of the project.
        /// </remarks>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Project
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: The timeout period. If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Timeout
        {
            get;
        }

        /// <summary>Properties for defining a `RosConsumerGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-consumergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosConsumerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IRosConsumerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: consumerGroup: The name of the consumer group. The name must be unique in a project.
            /// </remarks>
            [JsiiProperty(name: "consumerGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerGroup
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logstore: The name of the Logstore.
            /// </remarks>
            [JsiiProperty(name: "logstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Logstore
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: order: Specifies whether to consume data in sequence. Valid values:
            /// true
            /// In a shard, data is consumed in ascending order based on the value of the **__tag__:__receive_time__** field.
            /// If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
            /// If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
            /// false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
            /// </remarks>
            [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Order
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: project: The name of the project.
            /// </remarks>
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Project
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: timeout: The timeout period. If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Timeout
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
