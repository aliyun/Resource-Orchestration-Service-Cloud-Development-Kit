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
        [JsiiProperty(name: "ecsOrderComputeCount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double EcsOrderComputeCount
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderComputeInstanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string EcsOrderComputeInstanceType
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderLoginCount: Login node number can only be 1.</summary>
        [JsiiProperty(name: "ecsOrderLoginCount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double EcsOrderLoginCount
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderLoginInstanceType: Log cluster node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderLoginInstanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string EcsOrderLoginInstanceType
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderManagerInstanceType: Cluster control node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderManagerInstanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string EcsOrderManagerInstanceType
        {
            get;
            set;
        }

        /// <summary>Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0.</summary>
        [JsiiProperty(name: "ehpcVersion", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string EhpcVersion
        {
            get;
            set;
        }

        /// <summary>Property name: Cluster name.</summary>
        /// <remarks>
        /// 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Name
        {
            get;
            set;
        }

        /// <summary>Property osTag: Operating system image tag.</summary>
        /// <remarks>
        /// You can call ListImages API to query.
        /// </remarks>
        [JsiiProperty(name: "osTag", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string OsTag
        {
            get;
            set;
        }

        /// <summary>Property volumeId: Ali cloud NAS instance Id.</summary>
        /// <remarks>
        /// Currently it does not support automatic creation Ali cloud NAS instance.
        /// </remarks>
        [JsiiProperty(name: "volumeId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VolumeId
        {
            get;
            set;
        }

        /// <summary>Property volumeMountpoint: NAS vpc mount point.</summary>
        /// <remarks>
        /// Currently it does not support automatic creation Ali cloud NAS mount point.
        /// </remarks>
        [JsiiProperty(name: "volumeMountpoint", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VolumeMountpoint
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: VPC in switch ID.</summary>
        /// <remarks>
        /// Products currently only supports VPC network.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property accountType: Domain service account types, currently supports nis.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "accountType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AccountType
        {
            get;
            set;
        }

        /// <summary>Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "application", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
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
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <summary>Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? AutoRenewPeriod
        {
            get;
            set;
        }

        /// <summary>Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "computeSpotPriceLimit", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ComputeSpotPriceLimit
        {
            get;
            set;
        }

        /// <summary>Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "computeSpotStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ComputeSpotStrategy
        {
            get;
            set;
        }

        /// <summary>Property deployMode: Deployment mode: Standard: account node + scheduling node + login node + computing node.</summary>
        /// <remarks>
        /// Advanced: HA mode.
        /// Simple: (account + schedule) node + login node + compute node.
        /// Tiny: (account + scheduling + login) node + compute node.
        /// OneBox: (account + scheduling + login + compute) node + more compute nodes.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deployMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DeployMode
        {
            get;
            set;
        }

        /// <summary>Property description: Cluster description, 2 to 128 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ecsChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EcsChargeType
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA).</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ecsOrderManagerCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? EcsOrderManagerCount
        {
            get;
            set;
        }

        /// <summary>Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "haEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
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
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ImageId
        {
            get;
            set;
        }

        /// <summary>Property imageOwnerAlias: Mirror type: system, self, others or marketplace.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "imageOwnerAlias", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ImageOwnerAlias
        {
            get;
            set;
        }

        /// <summary>Property jobQueue: Computing node added queue.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "jobQueue", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? JobQueue
        {
            get;
            set;
        }

        /// <summary>Property keyPairName: Key pair name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? KeyPairName
        {
            get;
            set;
        }

        /// <summary>Property password: Root password of jump server (login node).</summary>
        /// <remarks>
        /// 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ &amp; * - + = | {} []:; '&lt;&gt;, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Password
        {
            get;
            set;
        }

        /// <summary>Property period: The purchase of long resources, units: week / month / year.</summary>
        /// <remarks>
        /// When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Period
        {
            get;
            set;
        }

        /// <summary>Property periodUnit: The purchase of long-resources unit.</summary>
        /// <remarks>
        /// Alternatively value Week / Month / year.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PeriodUnit
        {
            get;
            set;
        }

        /// <summary>Property postInstallScript:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "postInstallScript", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.PostInstallScriptProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
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
        [JsiiProperty(name: "remoteDirectory", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RemoteDirectory
        {
            get;
            set;
        }

        /// <summary>Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "sccClusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SccClusterId
        {
            get;
            set;
        }

        /// <summary>Property schedulerType: The scheduler type, currently support pbs.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "schedulerType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SchedulerType
        {
            get;
            set;
        }

        /// <summary>Property securityGroupId: Security group ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupId
        {
            get;
            set;
        }

        /// <summary>Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy.</summary>
        /// <remarks>
        /// Format Requirements Reference ECS security group name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupName
        {
            get;
            set;
        }

        /// <summary>Property volumeProtocol: Shared storage network protocols, currently only supports nfs.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "volumeProtocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VolumeProtocol
        {
            get;
            set;
        }

        /// <summary>Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "volumeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VolumeType
        {
            get;
            set;
        }

        /// <summary>Property zoneId: Available area ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ZoneId
        {
            get;
            set;
        }
    }
}
