using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kafka
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::KAFKA::Topic`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-kafka.TopicProps")]
    public class TopicProps : AlibabaCloud.SDK.ROS.CDK.Kafka.ITopicProps
    {
        /// <summary>Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.</summary>
        /// <remarks>
        /// You can call the GetInstanceList operation to query instances.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <summary>Property remark: The description of the topic.</summary>
        /// <remarks>
        /// The value of this parameter must meet the following
        /// requirements:
        /// The value can only contain letters, digits, hyphens (-), and underscores (_).
        /// The value must be 3 to 64 characters in length.
        /// </remarks>
        [JsiiProperty(name: "remark", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Remark
        {
            get;
            set;
        }

        /// <summary>Property topic: The name of the topic.</summary>
        /// <remarks>
        /// The value of this parameter must meet the following requirements:
        /// The name can only contain letters, digits, hyphens (-), and underscores (_).
        /// The name must be 3 to 64 characters in length, and will be automatically truncated
        /// if it contains more characters.
        /// The name cannot be modified after being created.
        /// </remarks>
        [JsiiProperty(name: "topic", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Topic
        {
            get;
            set;
        }

        /// <summary>Property partitionNum: The number of partitions in the topic.</summary>
        /// <remarks>
        /// Valid values:
        /// 1 to 48
        /// We recommend that you set the number of partitions to a multiple of 6 to reduce the
        /// risk of data skew.Note:For special requirements,submit a ticket.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "partitionNum", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? PartitionNum
        {
            get;
            set;
        }
    }
}
