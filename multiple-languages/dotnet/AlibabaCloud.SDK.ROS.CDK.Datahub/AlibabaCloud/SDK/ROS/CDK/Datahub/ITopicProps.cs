using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Datahub
{
    /// <summary>Properties for defining a `ALIYUN::DATAHUB::Topic`.</summary>
    [JsiiInterface(nativeType: typeof(ITopicProps), fullyQualifiedName: "@alicloud/ros-cdk-datahub.TopicProps")]
    public interface ITopicProps
    {
        /// <summary>Property comment: The comment of topic.</summary>
        [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}")]
        string Comment
        {
            get;
        }

        /// <summary>Property projectName: The name of the project.</summary>
        /// <remarks>
        /// Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}")]
        string ProjectName
        {
            get;
        }

        /// <summary>Property recordType: Record type.</summary>
        /// <remarks>
        /// TUPLE: structured data, BLOB: unstructured data.
        /// </remarks>
        [JsiiProperty(name: "recordType", typeJson: "{\"primitive\":\"string\"}")]
        string RecordType
        {
            get;
        }

        /// <summary>Property topicName: The name of the topic.</summary>
        /// <remarks>
        /// Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "topicName", typeJson: "{\"primitive\":\"string\"}")]
        string TopicName
        {
            get;
        }

        /// <summary>Property lifecycle: Data storage life cycle.</summary>
        [JsiiProperty(name: "lifecycle", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Lifecycle
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.</summary>
        [JsiiProperty(name: "recordSchema", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RecordSchema
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property shardCount: Initial shard number.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(ITopicProps), fullyQualifiedName: "@alicloud/ros-cdk-datahub.TopicProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Datahub.ITopicProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property comment: The comment of topic.</summary>
            [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}")]
            public string Comment
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property projectName: The name of the project.</summary>
            /// <remarks>
            /// Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}")]
            public string ProjectName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property recordType: Record type.</summary>
            /// <remarks>
            /// TUPLE: structured data, BLOB: unstructured data.
            /// </remarks>
            [JsiiProperty(name: "recordType", typeJson: "{\"primitive\":\"string\"}")]
            public string RecordType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property topicName: The name of the topic.</summary>
            /// <remarks>
            /// Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
            /// </remarks>
            [JsiiProperty(name: "topicName", typeJson: "{\"primitive\":\"string\"}")]
            public string TopicName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property lifecycle: Data storage life cycle.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "lifecycle", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Lifecycle
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "recordSchema", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RecordSchema
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property shardCount: Initial shard number.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "shardCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? ShardCount
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
