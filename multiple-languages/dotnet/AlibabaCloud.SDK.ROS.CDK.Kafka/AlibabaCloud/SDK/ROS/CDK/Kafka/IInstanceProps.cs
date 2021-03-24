using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kafka
{
    /// <summary>Properties for defining a `ALIYUN::KAFKA::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property deployType: The deployment mode of the Message Queue for Apache Kafka instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 4: Instance of the public type
        /// 5: Instance of the VPC type
        /// </remarks>
        [JsiiProperty(name: "deployType", typeJson: "{\"primitive\":\"number\"}")]
        double DeployType
        {
            get;
        }

        /// <summary>Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.</summary>
        [JsiiProperty(name: "diskSize", typeJson: "{\"primitive\":\"number\"}")]
        double DiskSize
        {
            get;
        }

        /// <summary>Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: Ultra disk
        /// 1: SSD
        /// </remarks>
        [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}")]
        string DiskType
        {
            get;
        }

        /// <summary>Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance.</summary>
        /// <remarks>
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

        /// <summary>Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required.</summary>
        [JsiiProperty(name: "deployOption", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeployOption
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.</summary>
        /// <remarks>
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

        /// <summary>Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.</summary>
        /// <remarks>
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

        /// <summary>Property ioMaxSpec: Flow specification (recommended)  The IoMax and IoMaxSpec must be optional.</summary>
        /// <remarks>
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

        /// <summary>Property payType: Pay by hour or month.</summary>
        [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PayType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property specType: The edition of the Message Queue for Apache Kafka instance.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::KAFKA::Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kafka.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property deployType: The deployment mode of the Message Queue for Apache Kafka instance.</summary>
            /// <remarks>
            /// Valid values:
            /// 4: Instance of the public type
            /// 5: Instance of the VPC type
            /// </remarks>
            [JsiiProperty(name: "deployType", typeJson: "{\"primitive\":\"number\"}")]
            public double DeployType
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.</summary>
            [JsiiProperty(name: "diskSize", typeJson: "{\"primitive\":\"number\"}")]
            public double DiskSize
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance.</summary>
            /// <remarks>
            /// Valid values:
            /// 0: Ultra disk
            /// 1: SSD
            /// </remarks>
            [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}")]
            public string DiskType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance.</summary>
            /// <remarks>
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

            /// <summary>Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deployOption", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeployOption
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.</summary>
            /// <remarks>
            /// This parameter must be specified when the DeployType parameter is set to 4.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eipMax", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? EipMax
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.</summary>
            /// <remarks>
            /// For more information about the value range, see Billing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ioMax", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? IoMax
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property ioMaxSpec: Flow specification (recommended)  The IoMax and IoMaxSpec must be optional.</summary>
            /// <remarks>
            /// When filling in at the same time, subject to IoMaxSpec.
            /// It is recommended that you only fill in the flow specification
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ioMaxSpec", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? IoMaxSpec
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property payType: Pay by hour or month.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PayType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property specType: The edition of the Message Queue for Apache Kafka instance.</summary>
            /// <remarks>
            /// Valid values:
            /// professional: Professional Edition
            /// normal: Normal version
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "specType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SpecType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }
        }
    }
}
