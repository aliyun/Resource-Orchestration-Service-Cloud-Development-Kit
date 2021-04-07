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
        [JsiiProperty(name: "ecsOrderComputeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object EcsOrderComputeCount
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderComputeInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object EcsOrderComputeInstanceType
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderLoginCount: Login node number can only be 1.</summary>
        [JsiiProperty(name: "ecsOrderLoginCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object EcsOrderLoginCount
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderLoginInstanceType: Log cluster node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderLoginInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object EcsOrderLoginInstanceType
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderManagerInstanceType: Cluster control node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderManagerInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object EcsOrderManagerInstanceType
        {
            get;
            set;
        }

        /// <summary>Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0.</summary>
        [JsiiProperty(name: "ehpcVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object EhpcVersion
        {
            get;
            set;
        }

        /// <summary>Property name: Cluster name.</summary>
        /// <remarks>
        /// 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Name
        {
            get;
            set;
        }

        /// <summary>Property osTag: Operating system image tag.</summary>
        /// <remarks>
        /// You can call ListImages API to query.
        /// </remarks>
        [JsiiProperty(name: "osTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object OsTag
        {
            get;
            set;
        }

        /// <summary>Property volumeId: Ali cloud NAS instance Id.</summary>
        /// <remarks>
        /// Currently it does not support automatic creation Ali cloud NAS instance.
        /// </remarks>
        [JsiiProperty(name: "volumeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VolumeId
        {
            get;
            set;
        }

        /// <summary>Property volumeMountpoint: NAS vpc mount point.</summary>
        /// <remarks>
        /// Currently it does not support automatic creation Ali cloud NAS mount point.
        /// </remarks>
        [JsiiProperty(name: "volumeMountpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VolumeMountpoint
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: VPC in switch ID.</summary>
        /// <remarks>
        /// Products currently only supports VPC network.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property accountType: Domain service account types, currently supports nis.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AccountType
        {
            get;
            set;
        }

        /// <summary>Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "application", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
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
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoRenewPeriod
        {
            get;
            set;
        }

        /// <summary>Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "computeSpotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ComputeSpotPriceLimit
        {
            get;
            set;
        }

        /// <summary>Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "computeSpotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ComputeSpotStrategy
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
        [JsiiProperty(name: "deployMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeployMode
        {
            get;
            set;
        }

        /// <summary>Property description: Cluster description, 2 to 128 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ecsChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EcsChargeType
        {
            get;
            set;
        }

        /// <summary>Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA).</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ecsOrderManagerCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EcsOrderManagerCount
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
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ImageId
        {
            get;
            set;
        }

        /// <summary>Property imageOwnerAlias: Mirror type: system, self, others or marketplace.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "imageOwnerAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ImageOwnerAlias
        {
            get;
            set;
        }

        /// <summary>Property jobQueue: Computing node added queue.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "jobQueue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? JobQueue
        {
            get;
            set;
        }

        /// <summary>Property keyPairName: Key pair name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
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
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
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
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
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
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PeriodUnit
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
        [JsiiProperty(name: "remoteDirectory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RemoteDirectory
        {
            get;
            set;
        }

        /// <summary>Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "sccClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SccClusterId
        {
            get;
            set;
        }

        /// <summary>Property schedulerType: The scheduler type, currently support pbs.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "schedulerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SchedulerType
        {
            get;
            set;
        }

        /// <summary>Property securityGroupId: Security group ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
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
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SecurityGroupName
        {
            get;
            set;
        }

        /// <summary>Property volumeProtocol: Shared storage network protocols, currently only supports nfs.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "volumeProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VolumeProtocol
        {
            get;
            set;
        }

        /// <summary>Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "volumeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VolumeType
        {
            get;
            set;
        }

        /// <summary>Property zoneId: Available area ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ZoneId
        {
            get;
            set;
        }
    }
}
