using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq5
{
    /// <summary>Properties for defining a `Topic`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-topic
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITopicProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.TopicProps")]
    public interface ITopicProps
    {
        /// <summary>Property instanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property messageType: The message type of the topic to be created.</summary>
        /// <remarks>
        /// Valid values:
        /// NORMAL
        /// FIFO
        /// DELAY
        /// TRANSACTION
        /// </remarks>
        [JsiiProperty(name: "messageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MessageType
        {
            get;
        }

        /// <summary>Property topicName: The name of the topic to be created is used to identify the topic and is globally unique.</summary>
        /// <remarks>
        /// Valid values:
        /// Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
        /// Length limit: 1-60 characters.
        /// </remarks>
        [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TopicName
        {
            get;
        }

        /// <summary>Property remark: The remark of the topic to be created.</summary>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Topic`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-topic
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITopicProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.TopicProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rocketmq5.ITopicProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property messageType: The message type of the topic to be created.</summary>
            /// <remarks>
            /// Valid values:
            /// NORMAL
            /// FIFO
            /// DELAY
            /// TRANSACTION
            /// </remarks>
            [JsiiProperty(name: "messageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MessageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property topicName: The name of the topic to be created is used to identify the topic and is globally unique.</summary>
            /// <remarks>
            /// Valid values:
            /// Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
            /// Length limit: 1-60 characters.
            /// </remarks>
            [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TopicName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property remark: The remark of the topic to be created.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
