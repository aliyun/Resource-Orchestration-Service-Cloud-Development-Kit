using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kafka
{
    /// <summary>Properties for defining a `RosInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.RosInstanceProps")]
    public interface IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values:
        /// 4: Instance of the public type
        /// 5: Instance of the VPC type
        /// </remarks>
        [JsiiProperty(name: "deployType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DeployType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
        /// </remarks>
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionForce
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
        /// </remarks>
        [JsiiProperty(name: "deployOption", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeployOption
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
        /// </remarks>
        [JsiiProperty(name: "diskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskSize
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values:
        /// 0: Ultra disk
        /// 1: SSD
        /// </remarks>
        [JsiiProperty(name: "diskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
        /// This parameter must be specified when the DeployType parameter is set to 4.
        /// </remarks>
        [JsiiProperty(name: "eipMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EipMax
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
        /// For more information about the value range, see Billing.
        /// </remarks>
        [JsiiProperty(name: "ioMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IoMax
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ioMaxSpec: Flow specification (recommended)
        /// The IoMax and IoMaxSpec must be optional.
        /// When filling in at the same time, subject to IoMaxSpec.
        /// It is recommended that you only fill in the flow specification
        /// </remarks>
        [JsiiProperty(name: "ioMaxSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IoMaxSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: openConnector: Whether open kafka connector or not
        /// </remarks>
        [JsiiProperty(name: "openConnector", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OpenConnector
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: partitionNum: Number of partitions(recommended).
        /// The number of partitions to be configured for the Message Queue for Apache Kafka instance.
        /// PartitionNum and TopicQuota must be selected.
        /// It is recommended that you only fill in the number of partitions.
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
        /// <strong>Property</strong>: payType: Pay by hour or month.
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PayType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serverlessConfig: Serverless instance related settings.
        /// </remarks>
        [JsiiProperty(name: "serverlessConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-kafka.RosInstance.ServerlessConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServerlessConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: specType: The edition of the Message Queue for Apache Kafka instance. Valid values:
        /// normal: Normal version
        /// professional: Professional Edition (high writing edition)
        /// professionalForHighRead: Professional Edition (high reading edition)
        /// basic: Basic Edition (only for serverless)
        /// </remarks>
        [JsiiProperty(name: "specType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpecType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-kafka.RosInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Kafka.RosInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: topicQuota: Number of topics (not recommended).
        /// The number of topics to be configured for the Message Queue for Apache Kafka instance.
        /// PartitionNum and TopicQuota must be selected.
        /// It is recommended that you only fill in the number of partitions.
        /// The default value of this parameter varies with different peak traffic values.
        /// Additional fees are charged if the default values are exceeded.
        /// Different specifications have different default values, and extra fees are charged.
        /// For more information, see Billing.
        /// </remarks>
        [JsiiProperty(name: "topicQuota", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TopicQuota
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.RosInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kafka.IRosInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values:
            /// 4: Instance of the public type
            /// 5: Instance of the VPC type
            /// </remarks>
            [JsiiProperty(name: "deployType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DeployType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deployOption", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty\"}]}}", isOptional: true)]
            public object? DeployOption
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values:
            /// 0: Ultra disk
            /// 1: SSD
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
            /// This parameter must be specified when the DeployType parameter is set to 4.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eipMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EipMax
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
            /// For more information about the value range, see Billing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ioMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IoMax
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ioMaxSpec: Flow specification (recommended)
            /// The IoMax and IoMaxSpec must be optional.
            /// When filling in at the same time, subject to IoMaxSpec.
            /// It is recommended that you only fill in the flow specification
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ioMaxSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IoMaxSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: openConnector: Whether open kafka connector or not
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "openConnector", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OpenConnector
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: partitionNum: Number of partitions(recommended).
            /// The number of partitions to be configured for the Message Queue for Apache Kafka instance.
            /// PartitionNum and TopicQuota must be selected.
            /// It is recommended that you only fill in the number of partitions.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "partitionNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PartitionNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: payType: Pay by hour or month.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PayType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serverlessConfig: Serverless instance related settings.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverlessConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-kafka.RosInstance.ServerlessConfigProperty\"}]}}", isOptional: true)]
            public object? ServerlessConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: specType: The edition of the Message Queue for Apache Kafka instance. Valid values:
            /// normal: Normal version
            /// professional: Professional Edition (high writing edition)
            /// professionalForHighRead: Professional Edition (high reading edition)
            /// basic: Basic Edition (only for serverless)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "specType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpecType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-kafka.RosInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Kafka.RosInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Kafka.RosInstance.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: topicQuota: Number of topics (not recommended).
            /// The number of topics to be configured for the Message Queue for Apache Kafka instance.
            /// PartitionNum and TopicQuota must be selected.
            /// It is recommended that you only fill in the number of partitions.
            /// The default value of this parameter varies with different peak traffic values.
            /// Additional fees are charged if the default values are exceeded.
            /// Different specifications have different default values, and extra fees are charged.
            /// For more information, see Billing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "topicQuota", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TopicQuota
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
