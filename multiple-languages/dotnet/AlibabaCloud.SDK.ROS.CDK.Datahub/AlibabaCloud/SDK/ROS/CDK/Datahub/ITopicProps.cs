using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Datahub
{
    /// <summary>Properties for defining a `Topic`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-topic
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITopicProps), fullyQualifiedName: "@alicloud/ros-cdk-datahub.TopicProps")]
    public interface ITopicProps
    {
        /// <summary>Property comment: The comment of topic.</summary>
        [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Comment
        {
            get;
        }

        /// <summary>Property projectName: The name of the project.</summary>
        /// <remarks>
        /// Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <summary>Property recordType: Record type.</summary>
        /// <remarks>
        /// TUPLE: structured data, BLOB: unstructured data.
        /// </remarks>
        [JsiiProperty(name: "recordType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RecordType
        {
            get;
        }

        /// <summary>Property topicName: The name of the topic.</summary>
        /// <remarks>
        /// Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TopicName
        {
            get;
        }

        /// <summary>Property lifecycle: Data storage life cycle.</summary>
        [JsiiProperty(name: "lifecycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lifecycle
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.</summary>
        [JsiiProperty(name: "recordSchema", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RecordSchema
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property shardCount: Initial shard number.</summary>
        [JsiiProperty(name: "shardCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ShardCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Topic`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-topic
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITopicProps), fullyQualifiedName: "@alicloud/ros-cdk-datahub.TopicProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Datahub.ITopicProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property comment: The comment of topic.</summary>
            [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Comment
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property projectName: The name of the project.</summary>
            /// <remarks>
            /// Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property recordType: Record type.</summary>
            /// <remarks>
            /// TUPLE: structured data, BLOB: unstructured data.
            /// </remarks>
            [JsiiProperty(name: "recordType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RecordType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property topicName: The name of the topic.</summary>
            /// <remarks>
            /// Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
            /// </remarks>
            [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TopicName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property lifecycle: Data storage life cycle.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "lifecycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Lifecycle
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "recordSchema", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RecordSchema
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property shardCount: Initial shard number.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "shardCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ShardCount
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
