using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EMR::Cluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-emr.RosClusterProps")]
    public class RosClusterProps : AlibabaCloud.SDK.ROS.CDK.Emr.IRosClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method. Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
        /// subscription.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: The type of the cluster. Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY.
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ClusterType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: emrVer: The version of EMR.
        /// </remarks>
        [JsiiProperty(name: "emrVer", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string EmrVer
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: hostGroup:
        /// </remarks>
        [JsiiProperty(name: "hostGroup", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.HostGroupProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object HostGroup
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the cluster. The name can be 1 to 64 characters in length and only contain
        /// Chinese characters, letters, numbers, hyphens (-), and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: netType: The type of the network.
        /// </remarks>
        [JsiiProperty(name: "netType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NetType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
        /// </remarks>
        [JsiiProperty(name: "useLocalMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object UseLocalMetaDb
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone ID.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ZoneId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: authorizeContent: Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "authorizeContent", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AuthorizeContent
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Indicates whether the subscription cluster is auto-renewed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: bootstrapAction:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bootstrapAction", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.BootstrapActionProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? BootstrapAction
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: config:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.ConfigProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? Config
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: configurations: Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "configurations", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Configurations
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: depositType: The hosting type.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "depositType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DepositType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: easEnable: Indicates whether the cluster is a high-security cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "easEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EasEnable
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster. A value of true indicates
        /// that two master nodes are required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "highAvailabilityEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? HighAvailabilityEnable
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: initCustomHiveMetaDb: A reserved parameter. Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "initCustomHiveMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InitCustomHiveMetaDb
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceGeneration: The generation of the ECS instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceGeneration", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceGeneration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ioOptimized: Indicates wether I/O optimization is enabled. Default value: true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ioOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? IoOptimized
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: isOpenPublicIp: Indicates whether a public IP address is assigned. A value of true indicates that
        /// a bandwidth of 8 MB is set by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "isOpenPublicIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? IsOpenPublicIp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPairName: The name of the key pair.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? KeyPairName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: logPath: The log path in OSS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? LogPath
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: machineType: The type of the machine.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "machineType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MachineType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: masterPwd: The SSH password for the master node. The password must meet the following requirements.
        /// Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
        /// It must contain three types of characters (uppercase letters, lowercase letters, numbers,
        /// and special symbols).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterPwd", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MasterPwd
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: metaStoreConf: Meta store conf of specific meta store type. If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql://xxxxxx", "dbUserName":"username", "dbPassword":"password"}
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "metaStoreConf", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MetaStoreConf
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: metaStoreType: Meta store type. Allow types:
        /// local: Local cluster
        /// unified: Unified meta data
        /// user_rds: User's RDS
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "metaStoreType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MetaStoreType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: optionSoftWareList: The list of optional services.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "optionSoftWareList", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? OptionSoftWareList
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The length of the subscription. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
        /// 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "relatedClusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RelatedClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: The ID of the security group. You can create a security group in the ECS console and
        /// use it. Note: If you use an existing security group, the default security group policy
        /// is applied to this security group: Only port 22 is open at the inbound and all ports
        /// are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupId
        {
            get;
            set;
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
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sshEnable: Indicates whether SSH is enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sshEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SshEnable
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: useCustomHiveMetaDb: A reserved parameter. Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "useCustomHiveMetaDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? UseCustomHiveMetaDb
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userDefinedEmrEcsRole", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? UserDefinedEmrEcsRole
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: userInfo:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosCluster.UserInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? UserInfo
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC. A value is required when NetType=vpc.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the Vswitch. A value is required when NetType=vpc.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: whiteListType: Not required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "whiteListType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? WhiteListType
        {
            get;
            set;
        }
    }
}
