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
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
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
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Remark
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
        [JsiiProperty(name: "topic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Topic
        {
            get;
        }

        /// <summary>Property compactTopic: The log cleanup policy for the topic.</summary>
        /// <remarks>
        /// This parameter is available when the Local Storage mode is specified for the topic. Valid values:
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

        /// <summary>Property config: Supplementary configuration.</summary>
        /// <remarks>
        /// Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
        /// This parameter can only be specified if the LocalTopic value is true.
        /// NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
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

        /// <summary>Property localTopic: The storage engine of the topic.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property minInsyncReplicas: The minimum number of ISR sync replicas.</summary>
        /// <remarks>
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

        /// <summary>Property partitionNum: The number of partitions in the topic.</summary>
        /// <remarks>
        /// Valid values:
        /// 1 to 48
        /// We recommend that you set the number of partitions to a multiple of 6 to reduce the
        /// risk of data skew.Note:For special requirements,submit a ticket.
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

        /// <summary>Property replicationFactor: The number of copies of the topic.</summary>
        /// <remarks>
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
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property remark: The description of the topic.</summary>
            /// <remarks>
            /// The value of this parameter must meet the following
            /// requirements:
            /// The value can only contain letters, digits, hyphens (-), and underscores (_).
            /// The value must be 3 to 64 characters in length.
            /// </remarks>
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Remark
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property topic: The name of the topic.</summary>
            /// <remarks>
            /// The value of this parameter must meet the following requirements:
            /// The name can only contain letters, digits, hyphens (-), and underscores (_).
            /// The name must be 3 to 64 characters in length, and will be automatically truncated
            /// if it contains more characters.
            /// The name cannot be modified after being created.
            /// </remarks>
            [JsiiProperty(name: "topic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Topic
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property compactTopic: The log cleanup policy for the topic.</summary>
            /// <remarks>
            /// This parameter is available when the Local Storage mode is specified for the topic. Valid values:
            /// false: uses the default log cleanup policy.
            /// true: uses the Apache Kafka log compaction policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "compactTopic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CompactTopic
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property config: Supplementary configuration.</summary>
            /// <remarks>
            /// Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
            /// This parameter can only be specified if the LocalTopic value is true.
            /// NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Config
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property localTopic: The storage engine of the topic.</summary>
            /// <remarks>
            /// Valid values:
            /// false: the Cloud Storage mode.
            /// true: the Local Storage mode.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "localTopic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LocalTopic
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property minInsyncReplicas: The minimum number of ISR sync replicas.</summary>
            /// <remarks>
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

            /// <summary>Property partitionNum: The number of partitions in the topic.</summary>
            /// <remarks>
            /// Valid values:
            /// 1 to 48
            /// We recommend that you set the number of partitions to a multiple of 6 to reduce the
            /// risk of data skew.Note:For special requirements,submit a ticket.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "partitionNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PartitionNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property replicationFactor: The number of copies of the topic.</summary>
            /// <remarks>
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
        }
    }
}
