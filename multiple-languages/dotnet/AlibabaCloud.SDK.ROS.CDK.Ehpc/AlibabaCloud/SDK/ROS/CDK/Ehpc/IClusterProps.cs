using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ehpc
{
    /// <summary>Properties for defining a `Cluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-cluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.ClusterProps")]
    public interface IClusterProps
    {
        /// <summary>Property ecsOrderComputeCount: Computing node number, which ranges from: 0-99.</summary>
        [JsiiProperty(name: "ecsOrderComputeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EcsOrderComputeCount
        {
            get;
        }

        /// <summary>Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderComputeInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EcsOrderComputeInstanceType
        {
            get;
        }

        /// <summary>Property ecsOrderLoginCount: Login node number can only be 1.</summary>
        [JsiiProperty(name: "ecsOrderLoginCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EcsOrderLoginCount
        {
            get;
        }

        /// <summary>Property ecsOrderLoginInstanceType: Log cluster node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderLoginInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EcsOrderLoginInstanceType
        {
            get;
        }

        /// <summary>Property ecsOrderManagerInstanceType: Cluster control node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderManagerInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EcsOrderManagerInstanceType
        {
            get;
        }

        /// <summary>Property name: Cluster name.</summary>
        /// <remarks>
        /// 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property osTag: Operating system image tag.</summary>
        /// <remarks>
        /// You can call ListImages API to query.
        /// </remarks>
        [JsiiProperty(name: "osTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OsTag
        {
            get;
        }

        /// <summary>Property vSwitchId: VPC in switch ID.</summary>
        /// <remarks>
        /// Products currently only supports VPC network.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property accountType: The service type of the domain account.</summary>
        /// <remarks>
        /// Valid values:
        /// nis
        /// ldap
        /// Default value: nis
        /// </remarks>
        [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property additionalVolumes:.</summary>
        [JsiiProperty(name: "additionalVolumes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.AdditionalVolumesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AdditionalVolumes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.</summary>
        [JsiiProperty(name: "application", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Application
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenew: true: automatic renewals;</summary>
        /// <remarks>
        /// false: no automatic renewals.
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

        /// <summary>Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.</summary>
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clientVersion: The version of the E-HPC client.</summary>
        /// <remarks>
        /// By default, the parameter is set to the latest version number.
        /// You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
        /// </remarks>
        [JsiiProperty(name: "clientVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClientVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property computeEnableHt: Specifies whether the compute nodes support hyper-threading.</summary>
        /// <remarks>
        /// Valid values:
        /// true: Hyper-threading is supported.
        /// false: Hyper-threading is not supported.
        /// Default value: true
        /// </remarks>
        [JsiiProperty(name: "computeEnableHt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ComputeEnableHt
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.</summary>
        [JsiiProperty(name: "computeSpotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ComputeSpotPriceLimit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.</summary>
        [JsiiProperty(name: "computeSpotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ComputeSpotStrategy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deployMode: The mode in which the cluster is deployed.</summary>
        /// <remarks>
        /// Valid values:
        /// Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
        /// Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
        /// Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
        /// Default value: Standard
        /// </remarks>
        [JsiiProperty(name: "deployMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeployMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Cluster description, 2 to 128 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.</summary>
        [JsiiProperty(name: "ecsChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecsOrderManagerCount: Control node number can be 1, 2.</summary>
        [JsiiProperty(name: "ecsOrderManagerCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsOrderManagerCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ehpcVersion: The version of E-HPC.</summary>
        /// <remarks>
        /// By default, the parameter is set to the latest version number.
        /// </remarks>
        [JsiiProperty(name: "ehpcVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EhpcVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property haEnable: Specifies whether to enable the high availability feature.</summary>
        /// <remarks>
        /// Valid values:
        /// true: enables the high availability feature
        /// false: disables the high availability feature
        /// Default value: false
        /// Note If high availability is enabled, primary management nodes and secondary management nodes are used.
        /// </remarks>
        [JsiiProperty(name: "haEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HaEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag;</summary>
        /// <remarks>
        /// if self, others, or marketplace, ImageId is mandatory.
        /// </remarks>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageOwnerAlias: Mirror type: system, self, others or marketplace.</summary>
        [JsiiProperty(name: "imageOwnerAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageOwnerAlias
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.</summary>
        [JsiiProperty(name: "inputFileUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InputFileUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isComputeEss: Specifies whether to enable auto scaling.</summary>
        /// <remarks>
        /// Valid values:
        /// true: enables auto scaling
        /// false: disables auto scaling
        /// Default value: false
        /// </remarks>
        [JsiiProperty(name: "isComputeEss", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsComputeEss
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property jobQueue: 	The queue to which the compute nodes are added.</summary>
        [JsiiProperty(name: "jobQueue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? JobQueue
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keyPairName: Key pair name.</summary>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyPairName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkInterfaceTrafficMode: Communication mode of an elastic NIC.</summary>
        /// <remarks>
        /// Value values:
        ///
        /// <list type="bullet">
        /// <description><strong>Standard</strong>: The TCP communication mode is used.</description>
        /// <description><strong>HighPerformance</strong>: Enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceTrafficMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkInterfaceTrafficMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property password: Root password of jump server (login node).</summary>
        /// <remarks>
        /// 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ &amp; * - + = | {} []:; '&lt;&gt;, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Password
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The purchase of long resources, units: week \/ month \/ year.</summary>
        /// <remarks>
        /// When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property periodUnit: The purchase of long-resources unit.</summary>
        /// <remarks>
        /// Alternatively value Week / Month / year.
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property postInstallScript:.</summary>
        [JsiiProperty(name: "postInstallScript", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.PostInstallScriptProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PostInstallScript
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ramNodeTypes: When authorizing instance configuration, the node type to which the RAM role is bound.</summary>
        /// <remarks>
        /// When the value of DeployMode is Standard, the value range: scheduler, account, login, compute.
        /// When the value of DeployMode is Simple, the value range: manager, login, compute.
        /// When the value of DeployMode is Tiny, the value range: manager, compute.
        /// </remarks>
        [JsiiProperty(name: "ramNodeTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RamNodeTypes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ramRoleName: The name of the Resource Access Management (RAM) role.</summary>
        /// <remarks>
        /// You can call the ListRoles operation provided by RAM to query the created RAM roles.
        /// </remarks>
        [JsiiProperty(name: "ramRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RamRoleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property remoteDirectory: Mount shared storage remote directory.</summary>
        /// <remarks>
        /// The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        /// </remarks>
        [JsiiProperty(name: "remoteDirectory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RemoteDirectory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC).</summary>
        /// <remarks>
        /// Valid values:
        /// true: enables VNC
        /// false: disables VNC
        /// Default value: false
        /// </remarks>
        [JsiiProperty(name: "remoteVisEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RemoteVisEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        /// <remarks>
        /// You can call the ListResourceGroups operation to obtain the ID of the resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.</summary>
        [JsiiProperty(name: "sccClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SccClusterId
        {
            get
            {
                return null;
            }
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
        [JsiiProperty(name: "schedulerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SchedulerType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: Security group ID.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy.</summary>
        /// <remarks>
        /// Format Requirements Reference ECS security group name.
        /// </remarks>
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupName
        {
            get
            {
                return null;
            }
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
        [JsiiProperty(name: "systemDiskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property systemDiskSize: The size of the system disk.</summary>
        /// <remarks>
        /// Unit: GB
        /// Valid values: 40 to 500
        /// Default value: 40
        /// </remarks>
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property systemDiskType: The type of the system disk.</summary>
        /// <remarks>
        /// Valid values:
        /// cloud_efficiency: ultra disk.
        /// cloud_ssd: SSD.
        /// cloud_essd: ESSD.
        /// Default value: cloud_ssd
        /// </remarks>
        [JsiiProperty(name: "systemDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property volumeId: The ID of the file system.</summary>
        /// <remarks>
        /// If you leave the parameter empty, a Performance NAS file system is created by default.
        /// </remarks>
        [JsiiProperty(name: "volumeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VolumeId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property volumeMountpoint: The mount target of the file system.</summary>
        /// <remarks>
        /// Take note of the following information:
        /// If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
        /// If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
        /// </remarks>
        [JsiiProperty(name: "volumeMountpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VolumeMountpoint
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property volumeProtocol: The type of the protocol that is used by the file system.</summary>
        /// <remarks>
        /// Valid values:
        /// nfs
        /// smb
        /// Default value: nfs
        /// </remarks>
        [JsiiProperty(name: "volumeProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VolumeProtocol
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property volumeType: The type of the shared storage.</summary>
        /// <remarks>
        /// Only Apsara File Storage nas file systems are supported.
        /// </remarks>
        [JsiiProperty(name: "volumeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VolumeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) to which the E-HPC cluster belongs.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP).</summary>
        /// <remarks>
        /// Default value: false
        /// </remarks>
        [JsiiProperty(name: "withoutElasticIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WithoutElasticIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: Available area ID.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Cluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-cluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.ClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ehpc.IClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ecsOrderComputeCount: Computing node number, which ranges from: 0-99.</summary>
            [JsiiProperty(name: "ecsOrderComputeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EcsOrderComputeCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.</summary>
            [JsiiProperty(name: "ecsOrderComputeInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EcsOrderComputeInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ecsOrderLoginCount: Login node number can only be 1.</summary>
            [JsiiProperty(name: "ecsOrderLoginCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EcsOrderLoginCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ecsOrderLoginInstanceType: Log cluster node instance specifications.</summary>
            [JsiiProperty(name: "ecsOrderLoginInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EcsOrderLoginInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ecsOrderManagerInstanceType: Cluster control node instance specifications.</summary>
            [JsiiProperty(name: "ecsOrderManagerInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EcsOrderManagerInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: Cluster name.</summary>
            /// <remarks>
            /// 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property osTag: Operating system image tag.</summary>
            /// <remarks>
            /// You can call ListImages API to query.
            /// </remarks>
            [JsiiProperty(name: "osTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OsTag
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: VPC in switch ID.</summary>
            /// <remarks>
            /// Products currently only supports VPC network.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property additionalVolumes:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "additionalVolumes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.AdditionalVolumesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AdditionalVolumes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "application", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Application
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenew: true: automatic renewals;</summary>
            /// <remarks>
            /// false: no automatic renewals.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenewPeriod
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "computeSpotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ComputeSpotPriceLimit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "computeSpotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ComputeSpotStrategy
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Cluster description, 2 to 128 characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecsChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecsOrderManagerCount: Control node number can be 1, 2.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecsOrderManagerCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsOrderManagerCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ehpcVersion: The version of E-HPC.</summary>
            /// <remarks>
            /// By default, the parameter is set to the latest version number.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ehpcVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EhpcVersion
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag;</summary>
            /// <remarks>
            /// if self, others, or marketplace, ImageId is mandatory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageOwnerAlias: Mirror type: system, self, others or marketplace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageOwnerAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageOwnerAlias
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "inputFileUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InputFileUrl
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property jobQueue: 	The queue to which the compute nodes are added.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "jobQueue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JobQueue
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keyPairName: Key pair name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyPairName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkInterfaceTrafficMode: Communication mode of an elastic NIC.</summary>
            /// <remarks>
            /// Value values:
            ///
            /// <list type="bullet">
            /// <description><strong>Standard</strong>: The TCP communication mode is used.</description>
            /// <description><strong>HighPerformance</strong>: Enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkInterfaceTrafficMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkInterfaceTrafficMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property password: Root password of jump server (login node).</summary>
            /// <remarks>
            /// 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ &amp; * - + = | {} []:; '&lt;&gt;, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Password
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The purchase of long resources, units: week \/ month \/ year.</summary>
            /// <remarks>
            /// When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: The purchase of long-resources unit.</summary>
            /// <remarks>
            /// Alternatively value Week / Month / year.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property postInstallScript:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "postInstallScript", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.PostInstallScriptProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PostInstallScript
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ramNodeTypes: When authorizing instance configuration, the node type to which the RAM role is bound.</summary>
            /// <remarks>
            /// When the value of DeployMode is Standard, the value range: scheduler, account, login, compute.
            /// When the value of DeployMode is Simple, the value range: manager, login, compute.
            /// When the value of DeployMode is Tiny, the value range: manager, compute.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ramNodeTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RamNodeTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ramRoleName: The name of the Resource Access Management (RAM) role.</summary>
            /// <remarks>
            /// You can call the ListRoles operation provided by RAM to query the created RAM roles.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ramRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RamRoleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property remoteDirectory: Mount shared storage remote directory.</summary>
            /// <remarks>
            /// The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remoteDirectory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RemoteDirectory
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            /// <remarks>
            /// You can call the ListResourceGroups operation to obtain the ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sccClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SccClusterId
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupId: Security group ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy.</summary>
            /// <remarks>
            /// Format Requirements Reference ECS security group name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupName
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property volumeId: The ID of the file system.</summary>
            /// <remarks>
            /// If you leave the parameter empty, a Performance NAS file system is created by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "volumeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VolumeId
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property volumeType: The type of the shared storage.</summary>
            /// <remarks>
            /// Only Apsara File Storage nas file systems are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "volumeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VolumeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) to which the E-HPC cluster belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP).</summary>
            /// <remarks>
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "withoutElasticIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WithoutElasticIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: Available area ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
