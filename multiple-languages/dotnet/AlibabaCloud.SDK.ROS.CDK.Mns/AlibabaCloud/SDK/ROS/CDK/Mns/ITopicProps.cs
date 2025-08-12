using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns
{
    /// <summary>Properties for defining a `Topic`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-topic
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITopicProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.TopicProps")]
    public interface ITopicProps
    {
        /// <summary>Property topicName: Topic name.</summary>
        [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TopicName
        {
            get;
        }

        /// <summary>Property loggingEnabled: Whether to enable log management.</summary>
        /// <remarks>
        /// "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
        /// The default value is false
        /// </remarks>
        [JsiiProperty(name: "loggingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoggingEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.</summary>
        /// <remarks>
        /// An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
        /// </remarks>
        [JsiiProperty(name: "maximumMessageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaximumMessageSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to Topic.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create Topic. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-mns.RosTopic.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Mns.RosTopic.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Topic`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-topic
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITopicProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.TopicProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.ITopicProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property topicName: Topic name.</summary>
            [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TopicName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property loggingEnabled: Whether to enable log management.</summary>
            /// <remarks>
            /// "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
            /// The default value is false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loggingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoggingEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.</summary>
            /// <remarks>
            /// An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maximumMessageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaximumMessageSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to Topic.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create Topic. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-mns.RosTopic.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Mns.RosTopic.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mns.RosTopic.ITagsProperty[]?>();
            }
        }
    }
}
