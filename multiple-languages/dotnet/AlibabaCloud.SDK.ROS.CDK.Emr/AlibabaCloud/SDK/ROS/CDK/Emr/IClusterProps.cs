using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>Properties for defining a `ALIYUN::EMR::Cluster`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.ClusterProps")]
    public interface IClusterProps
    {
        /// <summary>Property chargeType: The billing method.</summary>
        /// <remarks>
        /// Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
        /// subscription.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}")]
        string ChargeType
        {
            get;
        }

        /// <summary>Property clusterType: The type of the cluster.</summary>
        /// <remarks>
        /// Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY.
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterType
        {
            get;
        }

        /// <summary>Property emrVer: The version of EMR.</summary>
        [JsiiProperty(name: "emrVer", typeJson: "{\"primitive\":\"string\"}")]
        string EmrVer
        {
            get;
        }

        /// <summary>Property hostGroup:.</summary>
        [JsiiProperty(name: "hostGroup", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.HostGroupProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object HostGroup
        {
            get;
        }

        /// <summary>Property name: The name of the cluster.</summary>
        /// <remarks>
        /// The name can be 1 to 64 characters in length and only contain
        /// Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <summary>Property netType: The type of the network.</summary>
        [JsiiProperty(name: "netType", typeJson: "{\"primitive\":\"string\"}")]
        string NetType
        {
            get;
        }

        /// <summary>Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.</summary>
        [JsiiProperty(name: "useLocalMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UseLocalMetaDb
        {
            get;
        }

        /// <summary>Property zoneId: The zone ID.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
        string ZoneId
        {
            get;
        }

        /// <summary>Property authorizeContent: Not required.</summary>
        [JsiiProperty(name: "authorizeContent", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AuthorizeContent
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenew: Indicates whether the subscription cluster is auto-renewed.</summary>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property bootstrapAction:.</summary>
        [JsiiProperty(name: "bootstrapAction", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.BootstrapActionProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BootstrapAction
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property config:.</summary>
        [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.ConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Config
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property configurations: Not required.</summary>
        [JsiiProperty(name: "configurations", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Configurations
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property depositType: The hosting type.</summary>
        [JsiiProperty(name: "depositType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DepositType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property easEnable: Indicates whether the cluster is a high-security cluster.</summary>
        [JsiiProperty(name: "easEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EasEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster.</summary>
        /// <remarks>
        /// A value of true indicates
        /// that two master nodes are required.
        /// </remarks>
        [JsiiProperty(name: "highAvailabilityEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HighAvailabilityEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property initCustomHiveMetaDb: A reserved parameter.</summary>
        /// <remarks>
        /// Not required.
        /// </remarks>
        [JsiiProperty(name: "initCustomHiveMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InitCustomHiveMetaDb
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceGeneration: The generation of the ECS instances.</summary>
        [JsiiProperty(name: "instanceGeneration", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InstanceGeneration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ioOptimized: Indicates wether I/O optimization is enabled.</summary>
        /// <remarks>
        /// Default value: true.
        /// </remarks>
        [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IoOptimized
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isOpenPublicIp: Indicates whether a public IP address is assigned.</summary>
        /// <remarks>
        /// A value of true indicates that
        /// a bandwidth of 8 MB is set by default.
        /// </remarks>
        [JsiiProperty(name: "isOpenPublicIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsOpenPublicIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keyPairName: The name of the key pair.</summary>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? KeyPairName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logPath: The log path in OSS.</summary>
        [JsiiProperty(name: "logPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? LogPath
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property machineType: The type of the machine.</summary>
        [JsiiProperty(name: "machineType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MachineType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterPwd: The SSH password for the master node.</summary>
        /// <remarks>
        /// The password must meet the following requirements.
        /// Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
        /// It must contain three types of characters (uppercase letters, lowercase letters, numbers,
        /// and special symbols).
        /// </remarks>
        [JsiiProperty(name: "masterPwd", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MasterPwd
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property metaStoreConf: Meta store conf of specific meta store type.</summary>
        /// <remarks>
        /// If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        /// </remarks>
        [JsiiProperty(name: "metaStoreConf", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MetaStoreConf
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property metaStoreType: Meta store type.</summary>
        /// <remarks>
        /// Allow types:
        /// local: Local cluster
        /// unified: Unified meta data
        /// user_rds: User's RDS
        /// </remarks>
        [JsiiProperty(name: "metaStoreType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MetaStoreType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property optionSoftWareList: The list of optional services.</summary>
        [JsiiProperty(name: "optionSoftWareList", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? OptionSoftWareList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The length of the subscription.</summary>
        /// <remarks>
        /// Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
        /// 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
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

        /// <summary>Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).</summary>
        [JsiiProperty(name: "relatedClusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RelatedClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: The ID of the security group.</summary>
        /// <remarks>
        /// You can create a security group in the ECS console and
        /// use it. Note: If you use an existing security group, the default security group policy
        /// is applied to this security group: Only port 22 is open at the inbound and all ports
        /// are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupName: The name of the security group to create.</summary>
        /// <remarks>
        /// If the ID of the security group is not specified,
        /// this name is used to create a new security group. After the cluster is created, you
        /// can view the ID of the security group on the Cluster Management page. The default
        /// security group policy is applied to this security group: Only port 22 is open at the
        /// inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
        /// or SecurityGroupName.
        /// </remarks>
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sshEnable: Indicates whether SSH is enabled.</summary>
        [JsiiProperty(name: "sshEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SshEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property useCustomHiveMetaDb: A reserved parameter.</summary>
        /// <remarks>
        /// Not required.
        /// </remarks>
        [JsiiProperty(name: "useCustomHiveMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UseCustomHiveMetaDb
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.</summary>
        [JsiiProperty(name: "userDefinedEmrEcsRole", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? UserDefinedEmrEcsRole
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userInfo:.</summary>
        [JsiiProperty(name: "userInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.UserInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the VPC.</summary>
        /// <remarks>
        /// A value is required when NetType=vpc.
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

        /// <summary>Property vSwitchId: The ID of the Vswitch.</summary>
        /// <remarks>
        /// A value is required when NetType=vpc.
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

        /// <summary>Property whiteListType: Not required.</summary>
        [JsiiProperty(name: "whiteListType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? WhiteListType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::EMR::Cluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.ClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.IClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property chargeType: The billing method.</summary>
            /// <remarks>
            /// Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
            /// subscription.
            /// </remarks>
            [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}")]
            public string ChargeType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property clusterType: The type of the cluster.</summary>
            /// <remarks>
            /// Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY.
            /// </remarks>
            [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property emrVer: The version of EMR.</summary>
            [JsiiProperty(name: "emrVer", typeJson: "{\"primitive\":\"string\"}")]
            public string EmrVer
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property hostGroup:.</summary>
            [JsiiProperty(name: "hostGroup", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.HostGroupProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object HostGroup
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the cluster.</summary>
            /// <remarks>
            /// The name can be 1 to 64 characters in length and only contain
            /// Chinese characters, letters, numbers, hyphens (-), and underscores (_).
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property netType: The type of the network.</summary>
            [JsiiProperty(name: "netType", typeJson: "{\"primitive\":\"string\"}")]
            public string NetType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.</summary>
            [JsiiProperty(name: "useLocalMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UseLocalMetaDb
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: The zone ID.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
            public string ZoneId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property authorizeContent: Not required.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "authorizeContent", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AuthorizeContent
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property autoRenew: Indicates whether the subscription cluster is auto-renewed.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bootstrapAction:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "bootstrapAction", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.BootstrapActionProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BootstrapAction
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property config:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.ConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Config
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property configurations: Not required.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "configurations", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Configurations
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property depositType: The hosting type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "depositType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DepositType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property easEnable: Indicates whether the cluster is a high-security cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "easEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EasEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster.</summary>
            /// <remarks>
            /// A value of true indicates
            /// that two master nodes are required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "highAvailabilityEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HighAvailabilityEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property initCustomHiveMetaDb: A reserved parameter.</summary>
            /// <remarks>
            /// Not required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "initCustomHiveMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InitCustomHiveMetaDb
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceGeneration: The generation of the ECS instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceGeneration", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InstanceGeneration
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property ioOptimized: Indicates wether I/O optimization is enabled.</summary>
            /// <remarks>
            /// Default value: true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IoOptimized
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isOpenPublicIp: Indicates whether a public IP address is assigned.</summary>
            /// <remarks>
            /// A value of true indicates that
            /// a bandwidth of 8 MB is set by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isOpenPublicIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsOpenPublicIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keyPairName: The name of the key pair.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? KeyPairName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property logPath: The log path in OSS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "logPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? LogPath
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property machineType: The type of the machine.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "machineType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MachineType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property masterPwd: The SSH password for the master node.</summary>
            /// <remarks>
            /// The password must meet the following requirements.
            /// Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
            /// It must contain three types of characters (uppercase letters, lowercase letters, numbers,
            /// and special symbols).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterPwd", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MasterPwd
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property metaStoreConf: Meta store conf of specific meta store type.</summary>
            /// <remarks>
            /// If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "metaStoreConf", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MetaStoreConf
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property metaStoreType: Meta store type.</summary>
            /// <remarks>
            /// Allow types:
            /// local: Local cluster
            /// unified: Unified meta data
            /// user_rds: User's RDS
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "metaStoreType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MetaStoreType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property optionSoftWareList: The list of optional services.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "optionSoftWareList", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? OptionSoftWareList
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Property period: The length of the subscription.</summary>
            /// <remarks>
            /// Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
            /// 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Period
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "relatedClusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RelatedClusterId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property securityGroupId: The ID of the security group.</summary>
            /// <remarks>
            /// You can create a security group in the ECS console and
            /// use it. Note: If you use an existing security group, the default security group policy
            /// is applied to this security group: Only port 22 is open at the inbound and all ports
            /// are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property securityGroupName: The name of the security group to create.</summary>
            /// <remarks>
            /// If the ID of the security group is not specified,
            /// this name is used to create a new security group. After the cluster is created, you
            /// can view the ID of the security group on the Cluster Management page. The default
            /// security group policy is applied to this security group: Only port 22 is open at the
            /// inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
            /// or SecurityGroupName.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityGroupName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property sshEnable: Indicates whether SSH is enabled.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sshEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SshEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property useCustomHiveMetaDb: A reserved parameter.</summary>
            /// <remarks>
            /// Not required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "useCustomHiveMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UseCustomHiveMetaDb
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userDefinedEmrEcsRole", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? UserDefinedEmrEcsRole
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property userInfo:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.UserInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? UserInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the VPC.</summary>
            /// <remarks>
            /// A value is required when NetType=vpc.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vSwitchId: The ID of the Vswitch.</summary>
            /// <remarks>
            /// A value is required when NetType=vpc.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property whiteListType: Not required.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "whiteListType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? WhiteListType
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
