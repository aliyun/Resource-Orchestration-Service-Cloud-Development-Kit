using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kafka
{
    /// <summary>Properties for defining a `ConsumerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-consumergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.ConsumerGroupProps")]
    public interface IConsumerGroupProps
    {
        /// <summary>Property consumerId: Group name.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Reserved instance: Supports uppercase and lowercase letters, numbers,
        /// underscores (_), hyphens (-), and periods (.), limited to 3-64 characters.</description>
        /// <description>Serverless instance: Can only contain letters, numbers, and special characters
        /// "@._*$#^!&amp;-", limited to 1-249 characters.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "consumerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerId
        {
            get;
        }

        /// <summary>Property instanceId: Kafka instance id.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property remark: Remark description.</summary>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-kafka.RosConsumerGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Kafka.RosConsumerGroup.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ConsumerGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-consumergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IConsumerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.ConsumerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kafka.IConsumerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property consumerId: Group name.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Reserved instance: Supports uppercase and lowercase letters, numbers,
            /// underscores (_), hyphens (-), and periods (.), limited to 3-64 characters.</description>
            /// <description>Serverless instance: Can only contain letters, numbers, and special characters
            /// "@._*$#^!&amp;-", limited to 1-249 characters.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "consumerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: Kafka instance id.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property remark: Remark description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-kafka.RosConsumerGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Kafka.RosConsumerGroup.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Kafka.RosConsumerGroup.ITagsProperty[]?>();
            }
        }
    }
}
