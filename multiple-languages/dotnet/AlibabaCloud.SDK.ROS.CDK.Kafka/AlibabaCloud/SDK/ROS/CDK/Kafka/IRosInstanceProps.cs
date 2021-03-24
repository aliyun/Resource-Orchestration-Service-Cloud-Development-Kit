using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kafka
{
    /// <summary>Properties for defining a `ALIYUN::KAFKA::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.RosInstanceProps")]
    public interface IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values: 
        /// 4: Instance of the public type 
        /// 5: Instance of the VPC type
        /// </remarks>
        [JsiiProperty(name: "deployType", typeJson: "{\"primitive\":\"number\"}")]
        double DeployType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
        /// </remarks>
        [JsiiProperty(name: "diskSize", typeJson: "{\"primitive\":\"number\"}")]
        double DiskSize
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values: 
        /// 0: Ultra disk 
        /// 1: SSD
        /// </remarks>
        [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}")]
        string DiskType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance. 
        /// The default value of this parameter varies with different peak traffic values. 
        /// Additional fees are charged if the default values are exceeded.
        /// Different specifications have different default values, and extra fees are charged. 
        /// For more information, see Billing.
        /// </remarks>
        [JsiiProperty(name: "topicQuota", typeJson: "{\"primitive\":\"number\"}")]
        double TopicQuota
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
        /// </remarks>
        [JsiiProperty(name: "deployOption", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeployOption
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
        [JsiiProperty(name: "eipMax", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? EipMax
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
        [JsiiProperty(name: "ioMax", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? IoMax
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
        [JsiiProperty(name: "ioMaxSpec", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? IoMaxSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: Pay by hour or month.
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PayType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: specType: The edition of the Message Queue for Apache Kafka instance. Valid values: 
        /// professional: Professional Edition 
        /// normal: Normal version
        /// </remarks>
        [JsiiProperty(name: "specType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SpecType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::KAFKA::Instance`.</summary>
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
            [JsiiProperty(name: "deployType", typeJson: "{\"primitive\":\"number\"}")]
            public double DeployType
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
            /// </remarks>
            [JsiiProperty(name: "diskSize", typeJson: "{\"primitive\":\"number\"}")]
            public double DiskSize
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values: 
            /// 0: Ultra disk 
            /// 1: SSD
            /// </remarks>
            [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}")]
            public string DiskType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance. 
            /// The default value of this parameter varies with different peak traffic values. 
            /// Additional fees are charged if the default values are exceeded.
            /// Different specifications have different default values, and extra fees are charged. 
            /// For more information, see Billing.
            /// </remarks>
            [JsiiProperty(name: "topicQuota", typeJson: "{\"primitive\":\"number\"}")]
            public double TopicQuota
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deployOption", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeployOption
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance. 
            /// This parameter must be specified when the DeployType parameter is set to 4.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eipMax", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? EipMax
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance. 
            /// For more information about the value range, see Billing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ioMax", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? IoMax
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ioMaxSpec: Flow specification (recommended) 
            /// The IoMax and IoMaxSpec must be optional. 
            /// When filling in at the same time, subject to IoMaxSpec. 
            /// It is recommended that you only fill in the flow specification
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ioMaxSpec", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? IoMaxSpec
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: payType: Pay by hour or month.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PayType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: specType: The edition of the Message Queue for Apache Kafka instance. Valid values: 
            /// professional: Professional Edition 
            /// normal: Normal version
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "specType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SpecType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]?>();
            }
        }
    }
}
