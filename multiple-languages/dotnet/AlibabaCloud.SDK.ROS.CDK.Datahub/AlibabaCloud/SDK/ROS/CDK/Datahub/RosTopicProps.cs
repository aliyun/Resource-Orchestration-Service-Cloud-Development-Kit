using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Datahub
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DATAHUB::Topic`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-datahub.RosTopicProps")]
    public class RosTopicProps : AlibabaCloud.SDK.ROS.CDK.Datahub.IRosTopicProps
    {
        /// <remarks>
        /// <strong>Property</strong>: comment: The comment of topic.
        /// </remarks>
        [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Comment
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ProjectName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
        /// </remarks>
        [JsiiProperty(name: "recordType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RecordType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "topicName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TopicName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: lifecycle: Data storage life cycle.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "lifecycle", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Lifecycle
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "recordSchema", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RecordSchema
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: shardCount: Initial shard number.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "shardCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? ShardCount
        {
            get;
            set;
        }
    }
}
