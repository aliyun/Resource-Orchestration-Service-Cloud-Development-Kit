using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kafka
{
    /// <summary>Properties for defining a `RosTopic`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-topic
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTopicProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.RosTopicProps")]
    public interface IRosTopicProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        /// You can call the GetInstanceList operation to query instances.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: remark: The description of the topic. The value of this parameter must meet the following
        /// requirements:
        /// The value can only contain letters, digits, hyphens (-), and underscores (_).
        /// The value must be 3 to 64 characters in length.
        /// </remarks>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Remark
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: topic: The name of the topic.
        /// - Reserved instance: The name can contain uppercase letters, lowercase letters,
        /// digits, underscores (_), hyphens (-), and periods (.). The name must be 3 to 64
        /// characters in length.
        /// - Serverless instance: The name can contain uppercase letters, lowercase letters,
        /// digits, underscores (_), hyphens (-), and periods (.). The name must be 1 to 249
        /// characters in length.
        /// </remarks>
        [JsiiProperty(name: "topic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Topic
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: compactTopic: The log cleanup policy for the topic. This parameter is available when the Local Storage mode is specified for the topic. Valid values:
        /// false: uses the default log cleanup policy.
        /// true: uses the Apache Kafka log compaction policy.
        /// </remarks>
        [JsiiProperty(name: "compactTopic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CompactTopic
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: config: The advanced configurations of the topic.
        /// - Configure this parameter in the JSON format.
        /// - This parameter is available only if LocalTopic is set to true.
        /// - The following configurations are supported for reserved instances:
        /// - retention.ms: The message retention period. The value must be an integer from
        /// 3,600,000 to 31,536,000,000. Unit: milliseconds.
        /// - max.message.bytes: The maximum size of a message that can be sent. The value
        /// must be an integer from 1,048,576 to 10,485,760. Unit: bytes.
        /// - message.timestamp.type: The timestamp type of a message. Valid values:
        /// CreateTime or LogAppendTime. CreateTime indicates that the message timestamp is
        /// the time when the producer creates the message. If you do not specify a
        /// timestamp, the client time is used. LogAppendTime indicates that the message
        /// timestamp is the time when the server stores the message. The default value is
        /// CreateTime. We recommend that you set this parameter to LogAppendTime.
        /// - The following configurations are supported for Serverless instances:
        /// - retention.hours: The message retention period. The value is of the string type.
        /// The value must be an integer from 24 to 8,760.
        /// - max.message.bytes: The maximum size of a message that can be sent. The value is
        /// of the string type. The value must be an integer from 1,048,576 to 10,485,760.
        /// - message.timestamp.type: The timestamp type of a message. Valid values:
        /// CreateTime or LogAppendTime. CreateTime indicates that the message timestamp is
        /// the time when the producer creates the message. If you do not specify a
        /// timestamp, the client time is used. LogAppendTime indicates that the message
        /// timestamp is the time when the server stores the message. The default value is
        /// CreateTime. We recommend that you set this parameter to LogAppendTime.
        /// </remarks>
        [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Config
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: localTopic: The storage engine of the topic. Valid values:
        /// false: the Cloud Storage mode.
        /// true: the Local Storage mode.
        /// </remarks>
        [JsiiProperty(name: "localTopic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LocalTopic
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: minInsyncReplicas: The minimum number of ISR sync replicas.
        /// This parameter can only be specified if the LocalTopic value is true.
        /// The value must be less than the number of Topic copies.
        /// The number of synchronous replicas is limited to 1~3.
        /// </remarks>
        [JsiiProperty(name: "minInsyncReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinInsyncReplicas
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: partitionNum: The number of partitions in the topic.
        /// - The value must be an integer from 1 to 360.
        /// - The console suggests a number of partitions based on the instance type. Follow
        /// the suggestion to reduce the risk of data skew.
        /// Default value:
        /// - Reserved instance: 12
        /// - Serverless instance: 3
        /// </remarks>
        [JsiiProperty(name: "partitionNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PartitionNum
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: replicationFactor: The number of copies of the topic.
        /// This parameter can only be specified if the LocalTopic value is true.
        /// The number of copies is limited to 1~3.
        /// Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
        /// </remarks>
        [JsiiProperty(name: "replicationFactor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReplicationFactor
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-kafka.RosTopic.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Kafka.RosTopic.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosTopic`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-topic
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTopicProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.RosTopicProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kafka.IRosTopicProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
            /// You can call the GetInstanceList operation to query instances.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: remark: The description of the topic. The value of this parameter must meet the following
            /// requirements:
            /// The value can only contain letters, digits, hyphens (-), and underscores (_).
            /// The value must be 3 to 64 characters in length.
            /// </remarks>
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Remark
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: topic: The name of the topic.
            /// - Reserved instance: The name can contain uppercase letters, lowercase letters,
            /// digits, underscores (_), hyphens (-), and periods (.). The name must be 3 to 64
            /// characters in length.
            /// - Serverless instance: The name can contain uppercase letters, lowercase letters,
            /// digits, underscores (_), hyphens (-), and periods (.). The name must be 1 to 249
            /// characters in length.
            /// </remarks>
            [JsiiProperty(name: "topic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Topic
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: compactTopic: The log cleanup policy for the topic. This parameter is available when the Local Storage mode is specified for the topic. Valid values:
            /// false: uses the default log cleanup policy.
            /// true: uses the Apache Kafka log compaction policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "compactTopic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CompactTopic
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: config: The advanced configurations of the topic.
            /// - Configure this parameter in the JSON format.
            /// - This parameter is available only if LocalTopic is set to true.
            /// - The following configurations are supported for reserved instances:
            /// - retention.ms: The message retention period. The value must be an integer from
            /// 3,600,000 to 31,536,000,000. Unit: milliseconds.
            /// - max.message.bytes: The maximum size of a message that can be sent. The value
            /// must be an integer from 1,048,576 to 10,485,760. Unit: bytes.
            /// - message.timestamp.type: The timestamp type of a message. Valid values:
            /// CreateTime or LogAppendTime. CreateTime indicates that the message timestamp is
            /// the time when the producer creates the message. If you do not specify a
            /// timestamp, the client time is used. LogAppendTime indicates that the message
            /// timestamp is the time when the server stores the message. The default value is
            /// CreateTime. We recommend that you set this parameter to LogAppendTime.
            /// - The following configurations are supported for Serverless instances:
            /// - retention.hours: The message retention period. The value is of the string type.
            /// The value must be an integer from 24 to 8,760.
            /// - max.message.bytes: The maximum size of a message that can be sent. The value is
            /// of the string type. The value must be an integer from 1,048,576 to 10,485,760.
            /// - message.timestamp.type: The timestamp type of a message. Valid values:
            /// CreateTime or LogAppendTime. CreateTime indicates that the message timestamp is
            /// the time when the producer creates the message. If you do not specify a
            /// timestamp, the client time is used. LogAppendTime indicates that the message
            /// timestamp is the time when the server stores the message. The default value is
            /// CreateTime. We recommend that you set this parameter to LogAppendTime.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Config
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: localTopic: The storage engine of the topic. Valid values:
            /// false: the Cloud Storage mode.
            /// true: the Local Storage mode.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "localTopic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LocalTopic
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: minInsyncReplicas: The minimum number of ISR sync replicas.
            /// This parameter can only be specified if the LocalTopic value is true.
            /// The value must be less than the number of Topic copies.
            /// The number of synchronous replicas is limited to 1~3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minInsyncReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinInsyncReplicas
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: partitionNum: The number of partitions in the topic.
            /// - The value must be an integer from 1 to 360.
            /// - The console suggests a number of partitions based on the instance type. Follow
            /// the suggestion to reduce the risk of data skew.
            /// Default value:
            /// - Reserved instance: 12
            /// - Serverless instance: 3
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "partitionNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PartitionNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: replicationFactor: The number of copies of the topic.
            /// This parameter can only be specified if the LocalTopic value is true.
            /// The number of copies is limited to 1~3.
            /// Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "replicationFactor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReplicationFactor
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-kafka.RosTopic.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Kafka.RosTopic.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Kafka.RosTopic.ITagsProperty[]?>();
            }
        }
    }
}
