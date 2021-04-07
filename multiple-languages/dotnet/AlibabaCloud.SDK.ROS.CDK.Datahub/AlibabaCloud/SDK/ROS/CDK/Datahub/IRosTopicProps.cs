using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Datahub
{
    /// <summary>Properties for defining a `ALIYUN::DATAHUB::Topic`.</summary>
    [JsiiInterface(nativeType: typeof(IRosTopicProps), fullyQualifiedName: "@alicloud/ros-cdk-datahub.RosTopicProps")]
    public interface IRosTopicProps
    {
        /// <remarks>
        /// <strong>Property</strong>: comment: The comment of topic.
        /// </remarks>
        [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Comment
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
        /// </remarks>
        [JsiiProperty(name: "recordType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RecordType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TopicName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: lifecycle: Data storage life cycle.
        /// </remarks>
        [JsiiProperty(name: "lifecycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lifecycle
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
        /// </remarks>
        [JsiiProperty(name: "recordSchema", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RecordSchema
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: shardCount: Initial shard number.
        /// </remarks>
        [JsiiProperty(name: "shardCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ShardCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DATAHUB::Topic`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosTopicProps), fullyQualifiedName: "@alicloud/ros-cdk-datahub.RosTopicProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Datahub.IRosTopicProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: comment: The comment of topic.
            /// </remarks>
            [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Comment
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
            /// </remarks>
            [JsiiProperty(name: "recordType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RecordType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
            /// </remarks>
            [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TopicName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: lifecycle: Data storage life cycle.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lifecycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Lifecycle
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recordSchema", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RecordSchema
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: shardCount: Initial shard number.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "shardCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ShardCount
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
