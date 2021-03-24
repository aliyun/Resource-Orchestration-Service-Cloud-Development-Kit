using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>A ROS template type:  `ALIYUN::EMR::Cluster`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Emr.RosCluster), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosCluster", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-emr.RosClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosCluster : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::EMR::Cluster`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosCluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Emr.IRosClusterProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCluster(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCluster(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Emr.RosCluster))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterId: The ID of the cluster.
        /// </remarks>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: HostGroups: The host group list of the cluster.
        /// </remarks>
        [JsiiProperty(name: "attrHostGroups", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHostGroups
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: MasterNodeInnerIps: The inner ip list of the cluster master nodes.
        /// </remarks>
        [JsiiProperty(name: "attrMasterNodeInnerIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMasterNodeInnerIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: MasterNodePubIps: The public ip list of the cluster master nodes.
        /// </remarks>
        [JsiiProperty(name: "attrMasterNodePubIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMasterNodePubIps
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
        /// subscription.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ChargeType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY.
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ClusterType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: emrVer: The version of EMR.
        /// </remarks>
        [JsiiProperty(name: "emrVer", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string EmrVer
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
        /// <strong>Property</strong>: hostGroup:
        /// </remarks>
        [JsiiProperty(name: "hostGroup", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.HostGroupProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object HostGroup
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
        /// Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Name
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: netType: The type of the network.
        /// </remarks>
        [JsiiProperty(name: "netType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string NetType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
        /// </remarks>
        [JsiiProperty(name: "useLocalMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object UseLocalMetaDb
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone ID.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ZoneId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: authorizeContent: Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "authorizeContent", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AuthorizeContent
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Indicates whether the subscription cluster is auto-renewed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AutoRenew
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: bootstrapAction:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bootstrapAction", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.BootstrapActionProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? BootstrapAction
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: config:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.ConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? Config
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: configurations: Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "configurations", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Configurations
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: depositType: The hosting type.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "depositType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DepositType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: easEnable: Indicates whether the cluster is a high-security cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "easEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EasEnable
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates
        /// that two master nodes are required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "highAvailabilityEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? HighAvailabilityEnable
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: initCustomHiveMetaDb: A reserved parameter. Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "initCustomHiveMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InitCustomHiveMetaDb
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceGeneration: The generation of the ECS instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceGeneration", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? InstanceGeneration
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? IoOptimized
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that
        /// a bandwidth of 8 MB is set by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "isOpenPublicIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? IsOpenPublicIp
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPairName: The name of the key pair.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? KeyPairName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: logPath: The log path in OSS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? LogPath
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: machineType: The type of the machine.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "machineType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MachineType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterPwd: The SSH password for the master node. The password must meet the following requirements.
        /// Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
        /// It must contain three types of characters (uppercase letters, lowercase letters, numbers,
        /// and special symbols).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterPwd", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MasterPwd
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "metaStoreConf", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MetaStoreConf
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: metaStoreType: Meta store type. Allow types:
        /// local: Local cluster
        /// unified: Unified meta data
        /// user_rds: User's RDS
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "metaStoreType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MetaStoreType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: optionSoftWareList: The list of optional services.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "optionSoftWareList", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public virtual string[]? OptionSoftWareList
        {
            get => GetInstanceProperty<string[]?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
        /// 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? Period
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "relatedClusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? RelatedClusterId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: The ID of the security group. You can create a security group in the ECS console and
        /// use it. Note: If you use an existing security group, the default security group policy
        /// is applied to this security group: Only port 22 is open at the inbound and all ports
        /// are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SecurityGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupName: The name of the security group to create. If the ID of the security group is not specified,
        /// this name is used to create a new security group. After the cluster is created, you
        /// can view the ID of the security group on the Cluster Management page. The default
        /// security group policy is applied to this security group: Only port 22 is open at the
        /// inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
        /// or SecurityGroupName.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SecurityGroupName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sshEnable: Indicates whether SSH is enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sshEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SshEnable
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: useCustomHiveMetaDb: A reserved parameter. Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "useCustomHiveMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? UseCustomHiveMetaDb
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userDefinedEmrEcsRole", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? UserDefinedEmrEcsRole
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: userInfo:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.UserInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? UserInfo
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC. A value is required when NetType=vpc.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VpcId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VSwitchId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: whiteListType: Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "whiteListType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? WhiteListType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IBootstrapActionProperty), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosCluster.BootstrapActionProperty")]
        public interface IBootstrapActionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: arg: The argument that you pass into the bootstrap action.
            /// </remarks>
            [JsiiProperty(name: "arg", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Arg
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the bootstrap action.
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
            /// <strong>Property</strong>: path: The path where the bootstrap action script is stored.
            /// </remarks>
            [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Path
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IBootstrapActionProperty), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosCluster.BootstrapActionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.RosCluster.IBootstrapActionProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: arg: The argument that you pass into the bootstrap action.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "arg", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Arg
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: name: The name of the bootstrap action.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Name
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: path: The path where the bootstrap action script is stored.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Path
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-emr.RosCluster.BootstrapActionProperty")]
        public class BootstrapActionProperty : AlibabaCloud.SDK.ROS.CDK.Emr.RosCluster.IBootstrapActionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: arg: The argument that you pass into the bootstrap action.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "arg", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Arg
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the bootstrap action.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: path: The path where the bootstrap action script is stored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Path
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosCluster.ConfigProperty")]
        public interface IConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: configKey: The key of the custom configuration item.
            /// </remarks>
            [JsiiProperty(name: "configKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ConfigKey
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: configValue: The value of the custom configuration item.
            /// </remarks>
            [JsiiProperty(name: "configValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ConfigValue
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: encrypt: A reserved parameter.
            /// </remarks>
            [JsiiProperty(name: "encrypt", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Encrypt
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: fileName: The name of the file that contains the configuration item.
            /// </remarks>
            [JsiiProperty(name: "fileName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? FileName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: replace: A reserved parameter.
            /// </remarks>
            [JsiiProperty(name: "replace", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Replace
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: The name (capitalized) of the service that is configured by using the custom configuration
            /// item.
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ServiceName
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosCluster.ConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.RosCluster.IConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: configKey: The key of the custom configuration item.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "configKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ConfigKey
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: configValue: The value of the custom configuration item.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "configValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ConfigValue
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: encrypt: A reserved parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "encrypt", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Encrypt
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: fileName: The name of the file that contains the configuration item.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fileName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? FileName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: replace: A reserved parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "replace", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Replace
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: serviceName: The name (capitalized) of the service that is configured by using the custom configuration
                /// item.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ServiceName
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-emr.RosCluster.ConfigProperty")]
        public class ConfigProperty : AlibabaCloud.SDK.ROS.CDK.Emr.RosCluster.IConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: configKey: The key of the custom configuration item.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "configKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ConfigKey
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: configValue: The value of the custom configuration item.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "configValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ConfigValue
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: encrypt: A reserved parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encrypt", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Encrypt
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: fileName: The name of the file that contains the configuration item.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fileName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? FileName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: replace: A reserved parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "replace", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Replace
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: The name (capitalized) of the service that is configured by using the custom configuration
            /// item.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ServiceName
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IHostGroupProperty), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosCluster.HostGroupProperty")]
        public interface IHostGroupProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: chargeType: The billing method for the instance group.
            /// </remarks>
            [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}")]
            string ChargeType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskCapacity: The data disk capacity of the instance group.
            /// </remarks>
            [JsiiProperty(name: "diskCapacity", typeJson: "{\"primitive\":\"number\"}")]
            double DiskCapacity
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskCount: The data disk number of the instance group.
            /// </remarks>
            [JsiiProperty(name: "diskCount", typeJson: "{\"primitive\":\"number\"}")]
            double DiskCount
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskType: The data disk type of the instance group.
            /// </remarks>
            [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}")]
            string DiskType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: hostGroupType: The type of the instance group. Valid values: MASTER, CORE, and TASK. Currently, you
            /// can only create a maximum of one master instance group and core instance group.
            /// </remarks>
            [JsiiProperty(name: "hostGroupType", typeJson: "{\"primitive\":\"string\"}")]
            string HostGroupType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type of the instance group.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
            string InstanceType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: nodeCount: The number of nodes in the node group.
            /// </remarks>
            [JsiiProperty(name: "nodeCount", typeJson: "{\"primitive\":\"number\"}")]
            double NodeCount
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: sysDiskCapacity: The system disk capacity of the instance group.
            /// </remarks>
            [JsiiProperty(name: "sysDiskCapacity", typeJson: "{\"primitive\":\"number\"}")]
            double SysDiskCapacity
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: sysDiskType: The system disk type of the instance group.
            /// </remarks>
            [JsiiProperty(name: "sysDiskType", typeJson: "{\"primitive\":\"string\"}")]
            string SysDiskType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRenew: Indicates whether the instance group is auto-renewed.
            /// </remarks>
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AutoRenew
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: A reserved parameter. Not required.
            /// </remarks>
            [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ClusterId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: comment: A reserved parameter. Not required.
            /// </remarks>
            [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Comment
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: createType: A reserved parameter. Not required.
            /// </remarks>
            [JsiiProperty(name: "createType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? CreateType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: gpuDriver: The GPU driver.
            /// </remarks>
            [JsiiProperty(name: "gpuDriver", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? GpuDriver
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: hostGroupId: A reserved parameter.
            /// </remarks>
            [JsiiProperty(name: "hostGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? HostGroupId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: hostGroupName: The name of the instance group.
            /// </remarks>
            [JsiiProperty(name: "hostGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? HostGroupName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: hostKeyPairName: The key pair name of the host group. Currently, only gateways are supported.
            /// </remarks>
            [JsiiProperty(name: "hostKeyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? HostKeyPairName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: hostPassword: The password of the host. Currently, only gateways are supported.
            /// </remarks>
            [JsiiProperty(name: "hostPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? HostPassword
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
            /// 9, 12, 24, and 36. A value is required when HostGroup.n.ChargeType=PrePaid.
            /// </remarks>
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? Period
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch. A value is required when NetType=vpc.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? VSwitchId
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IHostGroupProperty), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosCluster.HostGroupProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.RosCluster.IHostGroupProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: chargeType: The billing method for the instance group.
                /// </remarks>
                [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}")]
                public string ChargeType
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: diskCapacity: The data disk capacity of the instance group.
                /// </remarks>
                [JsiiProperty(name: "diskCapacity", typeJson: "{\"primitive\":\"number\"}")]
                public double DiskCapacity
                {
                    get => GetInstanceProperty<double>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: diskCount: The data disk number of the instance group.
                /// </remarks>
                [JsiiProperty(name: "diskCount", typeJson: "{\"primitive\":\"number\"}")]
                public double DiskCount
                {
                    get => GetInstanceProperty<double>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: diskType: The data disk type of the instance group.
                /// </remarks>
                [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}")]
                public string DiskType
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: hostGroupType: The type of the instance group. Valid values: MASTER, CORE, and TASK. Currently, you
                /// can only create a maximum of one master instance group and core instance group.
                /// </remarks>
                [JsiiProperty(name: "hostGroupType", typeJson: "{\"primitive\":\"string\"}")]
                public string HostGroupType
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceType: The instance type of the instance group.
                /// </remarks>
                [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
                public string InstanceType
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: nodeCount: The number of nodes in the node group.
                /// </remarks>
                [JsiiProperty(name: "nodeCount", typeJson: "{\"primitive\":\"number\"}")]
                public double NodeCount
                {
                    get => GetInstanceProperty<double>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: sysDiskCapacity: The system disk capacity of the instance group.
                /// </remarks>
                [JsiiProperty(name: "sysDiskCapacity", typeJson: "{\"primitive\":\"number\"}")]
                public double SysDiskCapacity
                {
                    get => GetInstanceProperty<double>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: sysDiskType: The system disk type of the instance group.
                /// </remarks>
                [JsiiProperty(name: "sysDiskType", typeJson: "{\"primitive\":\"string\"}")]
                public string SysDiskType
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: autoRenew: Indicates whether the instance group is auto-renewed.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AutoRenew
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: clusterId: A reserved parameter. Not required.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ClusterId
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: comment: A reserved parameter. Not required.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Comment
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: createType: A reserved parameter. Not required.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "createType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? CreateType
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: gpuDriver: The GPU driver.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "gpuDriver", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? GpuDriver
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: hostGroupId: A reserved parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "hostGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? HostGroupId
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: hostGroupName: The name of the instance group.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "hostGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? HostGroupName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: hostKeyPairName: The key pair name of the host group. Currently, only gateways are supported.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "hostKeyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? HostKeyPairName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: hostPassword: The password of the host. Currently, only gateways are supported.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "hostPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? HostPassword
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
                /// 9, 12, 24, and 36. A value is required when HostGroup.n.ChargeType=PrePaid.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? Period
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch. A value is required when NetType=vpc.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? VSwitchId
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-emr.RosCluster.HostGroupProperty")]
        public class HostGroupProperty : AlibabaCloud.SDK.ROS.CDK.Emr.RosCluster.IHostGroupProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: chargeType: The billing method for the instance group.
            /// </remarks>
            [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string ChargeType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskCapacity: The data disk capacity of the instance group.
            /// </remarks>
            [JsiiProperty(name: "diskCapacity", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double DiskCapacity
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskCount: The data disk number of the instance group.
            /// </remarks>
            [JsiiProperty(name: "diskCount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double DiskCount
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskType: The data disk type of the instance group.
            /// </remarks>
            [JsiiProperty(name: "diskType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string DiskType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: hostGroupType: The type of the instance group. Valid values: MASTER, CORE, and TASK. Currently, you
            /// can only create a maximum of one master instance group and core instance group.
            /// </remarks>
            [JsiiProperty(name: "hostGroupType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string HostGroupType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type of the instance group.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string InstanceType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: nodeCount: The number of nodes in the node group.
            /// </remarks>
            [JsiiProperty(name: "nodeCount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double NodeCount
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sysDiskCapacity: The system disk capacity of the instance group.
            /// </remarks>
            [JsiiProperty(name: "sysDiskCapacity", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double SysDiskCapacity
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sysDiskType: The system disk type of the instance group.
            /// </remarks>
            [JsiiProperty(name: "sysDiskType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string SysDiskType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRenew: Indicates whether the instance group is auto-renewed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? AutoRenew
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: A reserved parameter. Not required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ClusterId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: comment: A reserved parameter. Not required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Comment
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: createType: A reserved parameter. Not required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "createType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? CreateType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: gpuDriver: The GPU driver.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gpuDriver", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? GpuDriver
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: hostGroupId: A reserved parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? HostGroupId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: hostGroupName: The name of the instance group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? HostGroupName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: hostKeyPairName: The key pair name of the host group. Currently, only gateways are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostKeyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? HostKeyPairName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: hostPassword: The password of the host. Currently, only gateways are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? HostPassword
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
            /// 9, 12, 24, and 36. A value is required when HostGroup.n.ChargeType=PrePaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? Period
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch. A value is required when NetType=vpc.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? VSwitchId
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IUserInfoProperty), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosCluster.UserInfoProperty")]
        public interface IUserInfoProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: password: The password of the cluster.
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
            /// <strong>Property</strong>: userId: The ID of the Alibaba Cloud account for Knox.
            /// </remarks>
            [JsiiProperty(name: "userId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? UserId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: The username for Knox.
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? UserName
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IUserInfoProperty), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosCluster.UserInfoProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.RosCluster.IUserInfoProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: password: The password of the cluster.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Password
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: userId: The ID of the Alibaba Cloud account for Knox.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "userId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? UserId
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: userName: The username for Knox.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? UserName
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-emr.RosCluster.UserInfoProperty")]
        public class UserInfoProperty : AlibabaCloud.SDK.ROS.CDK.Emr.RosCluster.IUserInfoProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: password: The password of the cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Password
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: userId: The ID of the Alibaba Cloud account for Knox.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? UserId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: The username for Knox.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? UserName
            {
                get;
                set;
            }
        }
    }
}
