using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ehpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EHPC::Cluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ehpc.RosClusterProps")]
    public class RosClusterProps : AlibabaCloud.SDK.ROS.CDK.Ehpc.IRosClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
        /// </remarks>
        [JsiiProperty(name: "ecsOrderComputeCount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double EcsOrderComputeCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsOrderComputeInstanceType: Cluster computing node instance specifications.
        /// </remarks>
        [JsiiProperty(name: "ecsOrderComputeInstanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string EcsOrderComputeInstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsOrderLoginCount: Login node number can only be 1.
        /// </remarks>
        [JsiiProperty(name: "ecsOrderLoginCount", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double EcsOrderLoginCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsOrderLoginInstanceType: Log cluster node instance specifications.
        /// </remarks>
        [JsiiProperty(name: "ecsOrderLoginInstanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string EcsOrderLoginInstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsOrderManagerInstanceType: Cluster control node instance specifications.
        /// </remarks>
        [JsiiProperty(name: "ecsOrderManagerInstanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string EcsOrderManagerInstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ehpcVersion: E-HPC product version numbers, currently supports 1.0.0
        /// </remarks>
        [JsiiProperty(name: "ehpcVersion", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string EhpcVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: osTag: Operating system image tag. You can call ListImages API to query.
        /// </remarks>
        [JsiiProperty(name: "osTag", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string OsTag
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: volumeId: Ali cloud NAS instance Id. Currently it does not support automatic creation Ali cloud NAS instance.
        /// </remarks>
        [JsiiProperty(name: "volumeId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VolumeId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: volumeMountpoint: NAS vpc mount point. Currently it does not support automatic creation Ali cloud NAS mount point.
        /// </remarks>
        [JsiiProperty(name: "volumeMountpoint", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VolumeMountpoint
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: VPC in switch ID. Products currently only supports VPC network.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountType: Domain service account types, currently supports nis.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AccountType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "application", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? Application
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: true: automatic renewals; false: no automatic renewals.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? AutoRenewPeriod
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "computeSpotPriceLimit", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ComputeSpotPriceLimit
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "computeSpotStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ComputeSpotStrategy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deployMode: Deployment mode:
        /// Standard: account node + scheduling node + login node + computing node.
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

        /// <remarks>
        /// <strong>Property</strong>: description: Cluster description, 2 to 128 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ecsChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EcsChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsOrderManagerCount: Control node number can be 1, 2, 4(HA)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ecsOrderManagerCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? EcsOrderManagerCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "haEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? HaEnable
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ImageId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: imageOwnerAlias: Mirror type: system, self, others or marketplace
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageOwnerAlias", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ImageOwnerAlias
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: jobQueue: Computing node added queue
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "jobQueue", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? JobQueue
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPairName: Key pair name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? KeyPairName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Password
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PeriodUnit
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: postInstallScript:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "postInstallScript", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.PostInstallScriptProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? PostInstallScript
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "remoteDirectory", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RemoteDirectory
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sccClusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SccClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: schedulerType: The scheduler type, currently support pbs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "schedulerType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SchedulerType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Security group ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: volumeProtocol: Shared storage network protocols, currently only supports nfs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "volumeProtocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VolumeProtocol
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: volumeType: Network shared storage types, currently supports only Ali cloud NAS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "volumeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VolumeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: Available area ID.
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
