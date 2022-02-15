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
        [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Comment
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ProjectName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
        /// </remarks>
        [JsiiProperty(name: "recordType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RecordType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TopicName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: lifecycle: Data storage life cycle.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "lifecycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Lifecycle
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "recordSchema", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RecordSchema
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: shardCount: Initial shard number.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "shardCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ShardCount
        {
            get;
            set;
        }
    }
}
