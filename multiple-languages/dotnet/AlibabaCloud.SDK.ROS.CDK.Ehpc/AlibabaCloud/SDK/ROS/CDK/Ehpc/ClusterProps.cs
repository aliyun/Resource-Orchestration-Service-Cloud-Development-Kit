using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ehpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EHPC::Cluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ehpc.ClusterProps")]
    public class ClusterProps : AlibabaCloud.SDK.ROS.CDK.Ehpc.IClusterProps
    {
        /// <summary>Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.</summary>
        [JsiiProperty(name: "ecsOrderComputeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object EcsOrderComputeCount
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderComputeInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object EcsOrderComputeInstanceType
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderLoginCount: Login node number can only be 1.</summary>
        [JsiiProperty(name: "ecsOrderLoginCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object EcsOrderLoginCount
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderLoginInstanceType: Log cluster node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderLoginInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object EcsOrderLoginInstanceType
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderManagerInstanceType: Cluster control node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderManagerInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object EcsOrderManagerInstanceType
        {
            get;
            set;
        }

        /// <summary>Property name: Cluster name.</summary>
        /// <remarks>
        /// 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <summary>Property osTag: Operating system image tag.</summary>
        /// <remarks>
        /// You can call ListImages API to query.
        /// </remarks>
        [JsiiProperty(name: "osTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object OsTag
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: VPC in switch ID.</summary>
        /// <remarks>
        /// Products currently only supports VPC network.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property accountType: The service type of the domain account.</summary>
        /// <remarks>
        /// Valid values:
        /// nis
        /// ldap
        /// Default value: nis
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AccountType
        {
            get;
            set;
        }

        /// <summary>Property additionalVolumes:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "additionalVolumes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.AdditionalVolumesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? AdditionalVolumes
        {
            get;
            set;
        }

        /// <summary>Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "application", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Application
        {
            get;
            set;
        }

        /// <summary>Property autoRenew: true: automatic renewals;</summary>
        /// <remarks>
        /// false: no automatic renewals.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <summary>Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoRenewPeriod
        {
            get;
            set;
        }

        /// <summary>Property clientVersion: The version of the E-HPC client.</summary>
        /// <remarks>
        /// By default, the parameter is set to the latest version number.
        /// You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "clientVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ClientVersion
        {
            get;
            set;
        }

        /// <summary>Property computeEnableHt: Specifies whether the compute nodes support hyper-threading.</summary>
        /// <remarks>
        /// Valid values:
        /// true: Hyper-threading is supported.
        /// false: Hyper-threading is not supported.
        /// Default value: true
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "computeEnableHt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ComputeEnableHt
        {
            get;
            set;
        }

        /// <summary>Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "computeSpotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ComputeSpotPriceLimit
        {
            get;
            set;
        }

        /// <summary>Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "computeSpotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ComputeSpotStrategy
        {
            get;
            set;
        }

        /// <summary>Property deployMode: The mode in which the cluster is deployed.</summary>
        /// <remarks>
        /// Valid values:
        /// Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
        /// Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
        /// Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
        /// Default value: Standard
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deployMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeployMode
        {
            get;
            set;
        }

        /// <summary>Property description: Cluster description, 2 to 128 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ecsChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EcsChargeType
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderManagerCount: Control node number can be 1, 2.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ecsOrderManagerCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EcsOrderManagerCount
        {
            get;
            set;
        }

        /// <summary>Property ehpcVersion: The version of E-HPC.</summary>
        /// <remarks>
        /// By default, the parameter is set to the latest version number.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ehpcVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EhpcVersion
        {
            get;
            set;
        }

        /// <summary>Property haEnable: Specifies whether to enable the high availability feature.</summary>
        /// <remarks>
        /// Valid values:
        /// true: enables the high availability feature
        /// false: disables the high availability feature
        /// Default value: false
        /// Note If high availability is enabled, primary management nodes and secondary management nodes are used.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "haEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HaEnable
        {
            get;
            set;
        }

        /// <summary>Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag;</summary>
        /// <remarks>
        /// if self, others, or marketplace, ImageId is mandatory.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ImageId
        {
            get;
            set;
        }

        /// <summary>Property imageOwnerAlias: Mirror type: system, self, others or marketplace.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "imageOwnerAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ImageOwnerAlias
        {
            get;
            set;
        }

        /// <summary>Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "inputFileUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InputFileUrl
        {
            get;
            set;
        }

        /// <summary>Property isComputeEss: Specifies whether to enable auto scaling.</summary>
        /// <remarks>
        /// Valid values:
        /// true: enables auto scaling
        /// false: disables auto scaling
        /// Default value: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "isComputeEss", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IsComputeEss
        {
            get;
            set;
        }

        /// <summary>Property jobQueue: 	The queue to which the compute nodes are added.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "jobQueue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? JobQueue
        {
            get;
            set;
        }

        /// <summary>Property keyPairName: Key pair name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? KeyPairName
        {
            get;
            set;
        }

        /// <summary>Property password: Root password of jump server (login node).</summary>
        /// <remarks>
        /// 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ &amp; * - + = | {} []:; '&lt;&gt;, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Password
        {
            get;
            set;
        }

        /// <summary>Property period: The purchase of long resources, units: week / month / year.</summary>
        /// <remarks>
        /// When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <summary>Property periodUnit: The purchase of long-resources unit.</summary>
        /// <remarks>
        /// Alternatively value Week / Month / year.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PeriodUnit
        {
            get;
            set;
        }

        /// <summary>Property postInstallScript:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "postInstallScript", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.PostInstallScriptProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? PostInstallScript
        {
            get;
            set;
        }

        /// <summary>Property remoteDirectory: Mount shared storage remote directory.</summary>
        /// <remarks>
        /// The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "remoteDirectory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RemoteDirectory
        {
            get;
            set;
        }

        /// <summary>Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC).</summary>
        /// <remarks>
        /// Valid values:
        /// true: enables VNC
        /// false: disables VNC
        /// Default value: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "remoteVisEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RemoteVisEnable
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        /// <remarks>
        /// You can call the ListResourceGroups operation to obtain the ID of the resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "sccClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SccClusterId
        {
            get;
            set;
        }

        /// <summary>Property schedulerType: The type of the scheduler.</summary>
        /// <remarks>
        /// Valid values:
        /// pbs
        /// slurm
        /// opengridscheduler
        /// deadline
        /// Default value: pbs
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "schedulerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SchedulerType
        {
            get;
            set;
        }

        /// <summary>Property securityGroupId: Security group ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecurityGroupId
        {
            get;
            set;
        }

        /// <summary>Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy.</summary>
        /// <remarks>
        /// Format Requirements Reference ECS security group name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecurityGroupName
        {
            get;
            set;
        }

        /// <summary>Property systemDiskLevel: The performance level of the ESSD that is created as the system disk.</summary>
        /// <remarks>
        /// Valid values:
        /// PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write.
        /// PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
        /// PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write.
        /// PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write.
        /// Default value: PL1
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SystemDiskLevel
        {
            get;
            set;
        }

        /// <summary>Property systemDiskSize: The size of the system disk.</summary>
        /// <remarks>
        /// Unit: GB
        /// Valid values: 40 to 500
        /// Default value: 40
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SystemDiskSize
        {
            get;
            set;
        }

        /// <summary>Property systemDiskType: The type of the system disk.</summary>
        /// <remarks>
        /// Valid values:
        /// cloud_efficiency: ultra disk.
        /// cloud_ssd: SSD.
        /// cloud_essd: ESSD.
        /// Default value: cloud_ssd
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SystemDiskType
        {
            get;
            set;
        }

        /// <summary>Property volumeId: The ID of the file system.</summary>
        /// <remarks>
        /// If you leave the parameter empty, a Performance NAS file system is created by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "volumeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VolumeId
        {
            get;
            set;
        }

        /// <summary>Property volumeMountpoint: The mount target of the file system.</summary>
        /// <remarks>
        /// Take note of the following information:
        /// If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
        /// If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "volumeMountpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VolumeMountpoint
        {
            get;
            set;
        }

        /// <summary>Property volumeProtocol: The type of the protocol that is used by the file system.</summary>
        /// <remarks>
        /// Valid values:
        /// nfs
        /// smb
        /// Default value: nfs
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "volumeProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VolumeProtocol
        {
            get;
            set;
        }

        /// <summary>Property volumeType: The type of the shared storage.</summary>
        /// <remarks>
        /// Only Apsara File Storage nas file systems are supported.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "volumeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VolumeType
        {
            get;
            set;
        }

        /// <summary>Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP).</summary>
        /// <remarks>
        /// Default value: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "withoutElasticIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WithoutElasticIp
        {
            get;
            set;
        }

        /// <summary>Property zoneId: Available area ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ZoneId
        {
            get;
            set;
        }
    }
}
