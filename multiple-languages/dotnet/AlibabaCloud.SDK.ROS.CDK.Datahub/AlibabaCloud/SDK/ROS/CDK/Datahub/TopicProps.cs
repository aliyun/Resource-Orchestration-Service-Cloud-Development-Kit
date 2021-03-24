using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Datahub
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DATAHUB::Topic`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-datahub.TopicProps")]
    public class TopicProps : AlibabaCloud.SDK.ROS.CDK.Datahub.ITopicProps
    {
        /// <summary>Property comment: The comment of topic.</summary>
        [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Comment
        {
            get;
            set;
        }

        /// <summary>Property projectName: The name of the project.</summary>
        /// <remarks>
        /// Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ProjectName
        {
            get;
            set;
        }

        /// <summary>Property recordType: Record type.</summary>
        /// <remarks>
        /// TUPLE: structured data, BLOB: unstructured data.
        /// </remarks>
        [JsiiProperty(name: "recordType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RecordType
        {
            get;
            set;
        }

        /// <summary>Property topicName: The name of the topic.</summary>
        /// <remarks>
        /// Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "topicName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TopicName
        {
            get;
            set;
        }

        /// <summary>Property lifecycle: Data storage life cycle.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "lifecycle", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Lifecycle
        {
            get;
            set;
        }

        /// <summary>Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "recordSchema", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RecordSchema
        {
            get;
            set;
        }

        /// <summary>Property shardCount: Initial shard number.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "shardCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? ShardCount
        {
            get;
            set;
        }
    }
}
