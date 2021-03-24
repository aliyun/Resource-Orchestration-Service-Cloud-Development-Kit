using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kafka
{
    /// <summary>Properties for defining a `ALIYUN::KAFKA::Topic`.</summary>
    [JsiiInterface(nativeType: typeof(ITopicProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.TopicProps")]
    public interface ITopicProps
    {
        /// <summary>Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.</summary>
        /// <remarks>
        /// You can call the GetInstanceList operation to query instances.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <summary>Property remark: The description of the topic.</summary>
        /// <remarks>
        /// The value of this parameter must meet the following
        /// requirements:
        /// The value can only contain letters, digits, hyphens (-), and underscores (_).
        /// The value must be 3 to 64 characters in length.
        /// </remarks>
        [JsiiProperty(name: "remark", typeJson: "{\"primitive\":\"string\"}")]
        string Remark
        {
            get;
        }

        /// <summary>Property topic: The name of the topic.</summary>
        /// <remarks>
        /// The value of this parameter must meet the following requirements:
        /// The name can only contain letters, digits, hyphens (-), and underscores (_).
        /// The name must be 3 to 64 characters in length, and will be automatically truncated
        /// if it contains more characters.
        /// The name cannot be modified after being created.
        /// </remarks>
        [JsiiProperty(name: "topic", typeJson: "{\"primitive\":\"string\"}")]
        string Topic
        {
            get;
        }

        /// <summary>Property partitionNum: The number of partitions in the topic.</summary>
        /// <remarks>
        /// Valid values:
        /// 1 to 48
        /// We recommend that you set the number of partitions to a multiple of 6 to reduce the
        /// risk of data skew.Note:For special requirements,submit a ticket.
        /// </remarks>
        [JsiiProperty(name: "partitionNum", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? PartitionNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::KAFKA::Topic`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITopicProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.TopicProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kafka.ITopicProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.</summary>
            /// <remarks>
            /// You can call the GetInstanceList operation to query instances.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property remark: The description of the topic.</summary>
            /// <remarks>
            /// The value of this parameter must meet the following
            /// requirements:
            /// The value can only contain letters, digits, hyphens (-), and underscores (_).
            /// The value must be 3 to 64 characters in length.
            /// </remarks>
            [JsiiProperty(name: "remark", typeJson: "{\"primitive\":\"string\"}")]
            public string Remark
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property topic: The name of the topic.</summary>
            /// <remarks>
            /// The value of this parameter must meet the following requirements:
            /// The name can only contain letters, digits, hyphens (-), and underscores (_).
            /// The name must be 3 to 64 characters in length, and will be automatically truncated
            /// if it contains more characters.
            /// The name cannot be modified after being created.
            /// </remarks>
            [JsiiProperty(name: "topic", typeJson: "{\"primitive\":\"string\"}")]
            public string Topic
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property partitionNum: The number of partitions in the topic.</summary>
            /// <remarks>
            /// Valid values:
            /// 1 to 48
            /// We recommend that you set the number of partitions to a multiple of 6 to reduce the
            /// risk of data skew.Note:For special requirements,submit a ticket.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "partitionNum", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? PartitionNum
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
