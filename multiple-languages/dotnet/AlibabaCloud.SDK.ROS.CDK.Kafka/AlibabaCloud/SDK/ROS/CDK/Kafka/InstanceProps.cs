using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kafka
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::KAFKA::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-kafka.InstanceProps")]
    public class InstanceProps : AlibabaCloud.SDK.ROS.CDK.Kafka.IInstanceProps
    {
        /// <summary>Property deployType: The deployment mode of the Message Queue for Apache Kafka instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 4: Instance of the public type
        /// 5: Instance of the VPC type
        /// </remarks>
        [JsiiProperty(name: "deployType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DeployType
        {
            get;
            set;
        }

        /// <summary>Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.</summary>
        [JsiiProperty(name: "diskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DiskSize
        {
            get;
            set;
        }

        /// <summary>Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: Ultra disk
        /// 1: SSD
        /// </remarks>
        [JsiiProperty(name: "diskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DiskType
        {
            get;
            set;
        }

        /// <summary>Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance.</summary>
        /// <remarks>
        /// The default value of this parameter varies with different peak traffic values.
        /// Additional fees are charged if the default values are exceeded.
        /// Different specifications have different default values, and extra fees are charged.
        /// For more information, see Billing.
        /// </remarks>
        [JsiiProperty(name: "topicQuota", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TopicQuota
        {
            get;
            set;
        }

        /// <summary>Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance.</summary>
        /// <remarks>
        /// Default is false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeletionForce
        {
            get;
            set;
        }

        /// <summary>Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "deployOption", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty\"}]}}", isOptional: true)]
        public object? DeployOption
        {
            get;
            set;
        }

        /// <summary>Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.</summary>
        /// <remarks>
        /// This parameter must be specified when the DeployType parameter is set to 4.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "eipMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EipMax
        {
            get;
            set;
        }

        /// <summary>Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.</summary>
        /// <remarks>
        /// For more information about the value range, see Billing.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ioMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IoMax
        {
            get;
            set;
        }

        /// <summary>Property ioMaxSpec: Flow specification (recommended)  The IoMax and IoMaxSpec must be optional.</summary>
        /// <remarks>
        /// When filling in at the same time, subject to IoMaxSpec.
        /// It is recommended that you only fill in the flow specification
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ioMaxSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IoMaxSpec
        {
            get;
            set;
        }

        /// <summary>Property openConnector: Whether open kafka connector or not.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "openConnector", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? OpenConnector
        {
            get;
            set;
        }

        /// <summary>Property payType: Pay by hour or month.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PayType
        {
            get;
            set;
        }

        /// <summary>Property specType: The edition of the Message Queue for Apache Kafka instance.</summary>
        /// <remarks>
        /// Valid values:
        /// professional: Professional Edition
        /// normal: Normal version
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "specType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SpecType
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-kafka.RosInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Kafka.RosInstance.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}
