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
        [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}")]
        string Comment
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}")]
        string ProjectName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
        /// </remarks>
        [JsiiProperty(name: "recordType", typeJson: "{\"primitive\":\"string\"}")]
        string RecordType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "topicName", typeJson: "{\"primitive\":\"string\"}")]
        string TopicName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: lifecycle: Data storage life cycle.
        /// </remarks>
        [JsiiProperty(name: "lifecycle", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Lifecycle
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
        /// </remarks>
        [JsiiProperty(name: "recordSchema", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RecordSchema
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: shardCount: Initial shard number.
        /// </remarks>
        [JsiiProperty(name: "shardCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? ShardCount
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
            [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}")]
            public string Comment
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}")]
            public string ProjectName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
            /// </remarks>
            [JsiiProperty(name: "recordType", typeJson: "{\"primitive\":\"string\"}")]
            public string RecordType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
            /// </remarks>
            [JsiiProperty(name: "topicName", typeJson: "{\"primitive\":\"string\"}")]
            public string TopicName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: lifecycle: Data storage life cycle.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lifecycle", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Lifecycle
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recordSchema", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RecordSchema
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: shardCount: Initial shard number.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "shardCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? ShardCount
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
