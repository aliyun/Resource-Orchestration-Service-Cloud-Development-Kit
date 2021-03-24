using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kafka
{
    /// <summary>A ROS template type:  `ALIYUN::KAFKA::Instance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Kafka.RosInstance), fullyQualifiedName: "@alicloud/ros-cdk-kafka.RosInstance", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-kafka.RosInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosInstance : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::KAFKA::Instance`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosInstance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Kafka.IRosInstanceProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosInstance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosInstance(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Kafka.RosInstance))!;

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceId: Id of the instance.
        /// </remarks>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Name: Name of the instance.
        /// </remarks>
        [JsiiProperty(name: "attrName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: OrderId: Id of the order.
        /// </remarks>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.TagManager\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.TagManager Tags
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.TagManager>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values: 
        /// 4: Instance of the public type 
        /// 5: Instance of the VPC type
        /// </remarks>
        [JsiiProperty(name: "deployType", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double DeployType
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
        /// </remarks>
        [JsiiProperty(name: "diskSize", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double DiskSize
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values: 
        /// 0: Ultra disk 
        /// 1: SSD
        /// </remarks>
        [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DiskType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance. 
        /// The default value of this parameter varies with different peak traffic values. 
        /// Additional fees are charged if the default values are exceeded.
        /// Different specifications have different default values, and extra fees are charged. 
        /// For more information, see Billing.
        /// </remarks>
        [JsiiProperty(name: "topicQuota", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double TopicQuota
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deployOption", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DeployOption
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance. 
        /// This parameter must be specified when the DeployType parameter is set to 4.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "eipMax", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? EipMax
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance. 
        /// For more information about the value range, see Billing.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ioMax", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? IoMax
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ioMaxSpec: Flow specification (recommended) 
        /// The IoMax and IoMaxSpec must be optional. 
        /// When filling in at the same time, subject to IoMaxSpec. 
        /// It is recommended that you only fill in the flow specification
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ioMaxSpec", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? IoMaxSpec
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: Pay by hour or month.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? PayType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: specType: The edition of the Message Queue for Apache Kafka instance. Valid values: 
        /// professional: Professional Edition 
        /// normal: Normal version
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "specType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SpecType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IDeployOptionProperty), fullyQualifiedName: "@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty")]
        public interface IDeployOptionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: deployModule: The deployment mode of the instance. Valid values:
            /// vpc: virtual private cloud (VPC) 
            /// eip: Internet and VPC
            /// The deployment mode of the instance must be consistent with the instance type. 
            /// Set this value to vpc if your instance type is VPC. 
            /// Set this value to eip if your instance type is Internet and VPC.
            /// </remarks>
            [JsiiProperty(name: "deployModule", typeJson: "{\"primitive\":\"string\"}")]
            string DeployModule
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch associated with the VPC.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
            string VSwitchId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: isEipInner: Specifies whether the instance supports elastic IP addresses (EIPs). Valid values:
            /// true: The instance supports EIP mode.
            /// false: The instance does not support EIP mode.
            /// This parameter must be consistent with the instance type. 
            /// Set the parameter to true for instances of the Internet and VPC type or to false for instances of the VPC type.
            /// </remarks>
            [JsiiProperty(name: "isEipInner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IsEipInner
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: isSetUserAndPassword: Specifies whether to set a new user name and password for instance. Valid values:
            /// true: Set a new user name and password.
            /// false: Do not set a new user name and password.
            /// This parameter is supported only for instances of the Internet and VPC type.
            /// </remarks>
            [JsiiProperty(name: "isSetUserAndPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IsSetUserAndPassword
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The new name of the instance.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Name
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: password: The new password for the instance. 
            /// This parameter is supported only for instances of the Internet and VPC type.
            /// Support characters (uppercase and lowercase), numbers, length 8-40, 
            /// containing at least one lowercase letter, one uppercase letter, and one number
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Password
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroup: The security group of the instance. 
            /// If you do not specify this parameter, Message Queue for Apache Kafka automatically 
            /// configures a security group for the instance. If you specify this parameter, 
            /// you must create the specified security group in advance. 
            /// For more information, see Create a security group.
            /// </remarks>
            [JsiiProperty(name: "securityGroup", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? SecurityGroup
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: username: The new user name for the instance. 
            /// This parameter is supported only for instances of the Internet and VPC type.
            /// Support characters (uppercase and lowercase), numbers, length 8-40
            /// </remarks>
            [JsiiProperty(name: "username", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Username
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the VPC on which you want to deploy the instance.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? VpcId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The ID of the zone where you want to deploy the instance. 
            /// The zone ID of the instance must be the same as that of the vSwitch.
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ZoneId
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDeployOptionProperty), fullyQualifiedName: "@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kafka.RosInstance.IDeployOptionProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: deployModule: The deployment mode of the instance. Valid values:
                /// vpc: virtual private cloud (VPC) 
                /// eip: Internet and VPC
                /// The deployment mode of the instance must be consistent with the instance type. 
                /// Set this value to vpc if your instance type is VPC. 
                /// Set this value to eip if your instance type is Internet and VPC.
                /// </remarks>
                [JsiiProperty(name: "deployModule", typeJson: "{\"primitive\":\"string\"}")]
                public string DeployModule
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch associated with the VPC.
                /// </remarks>
                [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
                public string VSwitchId
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: isEipInner: Specifies whether the instance supports elastic IP addresses (EIPs). Valid values:
                /// true: The instance supports EIP mode.
                /// false: The instance does not support EIP mode.
                /// This parameter must be consistent with the instance type. 
                /// Set the parameter to true for instances of the Internet and VPC type or to false for instances of the VPC type.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "isEipInner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IsEipInner
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: isSetUserAndPassword: Specifies whether to set a new user name and password for instance. Valid values:
                /// true: Set a new user name and password.
                /// false: Do not set a new user name and password.
                /// This parameter is supported only for instances of the Internet and VPC type.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "isSetUserAndPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IsSetUserAndPassword
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: name: The new name of the instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Name
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: password: The new password for the instance. 
                /// This parameter is supported only for instances of the Internet and VPC type.
                /// Support characters (uppercase and lowercase), numbers, length 8-40, 
                /// containing at least one lowercase letter, one uppercase letter, and one number
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Password
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: securityGroup: The security group of the instance. 
                /// If you do not specify this parameter, Message Queue for Apache Kafka automatically 
                /// configures a security group for the instance. If you specify this parameter, 
                /// you must create the specified security group in advance. 
                /// For more information, see Create a security group.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "securityGroup", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? SecurityGroup
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: username: The new user name for the instance. 
                /// This parameter is supported only for instances of the Internet and VPC type.
                /// Support characters (uppercase and lowercase), numbers, length 8-40
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "username", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Username
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: vpcId: The ID of the VPC on which you want to deploy the instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? VpcId
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: zoneId: The ID of the zone where you want to deploy the instance. 
                /// The zone ID of the instance must be the same as that of the vSwitch.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ZoneId
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty")]
        public class DeployOptionProperty : AlibabaCloud.SDK.ROS.CDK.Kafka.RosInstance.IDeployOptionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: deployModule: The deployment mode of the instance. Valid values:
            /// vpc: virtual private cloud (VPC) 
            /// eip: Internet and VPC
            /// The deployment mode of the instance must be consistent with the instance type. 
            /// Set this value to vpc if your instance type is VPC. 
            /// Set this value to eip if your instance type is Internet and VPC.
            /// </remarks>
            [JsiiProperty(name: "deployModule", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string DeployModule
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch associated with the VPC.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string VSwitchId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: isEipInner: Specifies whether the instance supports elastic IP addresses (EIPs). Valid values:
            /// true: The instance supports EIP mode.
            /// false: The instance does not support EIP mode.
            /// This parameter must be consistent with the instance type. 
            /// Set the parameter to true for instances of the Internet and VPC type or to false for instances of the VPC type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isEipInner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IsEipInner
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: isSetUserAndPassword: Specifies whether to set a new user name and password for instance. Valid values:
            /// true: Set a new user name and password.
            /// false: Do not set a new user name and password.
            /// This parameter is supported only for instances of the Internet and VPC type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isSetUserAndPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IsSetUserAndPassword
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The new name of the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: password: The new password for the instance. 
            /// This parameter is supported only for instances of the Internet and VPC type.
            /// Support characters (uppercase and lowercase), numbers, length 8-40, 
            /// containing at least one lowercase letter, one uppercase letter, and one number
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Password
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroup: The security group of the instance. 
            /// If you do not specify this parameter, Message Queue for Apache Kafka automatically 
            /// configures a security group for the instance. If you specify this parameter, 
            /// you must create the specified security group in advance. 
            /// For more information, see Create a security group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroup", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? SecurityGroup
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: username: The new user name for the instance. 
            /// This parameter is supported only for instances of the Internet and VPC type.
            /// Support characters (uppercase and lowercase), numbers, length 8-40
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "username", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Username
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the VPC on which you want to deploy the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? VpcId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The ID of the zone where you want to deploy the instance. 
            /// The zone ID of the instance must be the same as that of the vSwitch.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ZoneId
            {
                get;
                set;
            }
        }
    }
}
