using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ehpc
{
    /// <summary>Properties for defining a `ALIYUN::EHPC::Cluster`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.ClusterProps")]
    public interface IClusterProps
    {
        /// <summary>Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.</summary>
        [JsiiProperty(name: "ecsOrderComputeCount", typeJson: "{\"primitive\":\"number\"}")]
        double EcsOrderComputeCount
        {
            get;
        }

        /// <summary>Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderComputeInstanceType", typeJson: "{\"primitive\":\"string\"}")]
        string EcsOrderComputeInstanceType
        {
            get;
        }

        /// <summary>Property ecsOrderLoginCount: Login node number can only be 1.</summary>
        [JsiiProperty(name: "ecsOrderLoginCount", typeJson: "{\"primitive\":\"number\"}")]
        double EcsOrderLoginCount
        {
            get;
        }

        /// <summary>Property ecsOrderLoginInstanceType: Log cluster node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderLoginInstanceType", typeJson: "{\"primitive\":\"string\"}")]
        string EcsOrderLoginInstanceType
        {
            get;
        }

        /// <summary>Property ecsOrderManagerInstanceType: Cluster control node instance specifications.</summary>
        [JsiiProperty(name: "ecsOrderManagerInstanceType", typeJson: "{\"primitive\":\"string\"}")]
        string EcsOrderManagerInstanceType
        {
            get;
        }

        /// <summary>Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0.</summary>
        [JsiiProperty(name: "ehpcVersion", typeJson: "{\"primitive\":\"string\"}")]
        string EhpcVersion
        {
            get;
        }

        /// <summary>Property name: Cluster name.</summary>
        /// <remarks>
        /// 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <summary>Property osTag: Operating system image tag.</summary>
        /// <remarks>
        /// You can call ListImages API to query.
        /// </remarks>
        [JsiiProperty(name: "osTag", typeJson: "{\"primitive\":\"string\"}")]
        string OsTag
        {
            get;
        }

        /// <summary>Property volumeId: Ali cloud NAS instance Id.</summary>
        /// <remarks>
        /// Currently it does not support automatic creation Ali cloud NAS instance.
        /// </remarks>
        [JsiiProperty(name: "volumeId", typeJson: "{\"primitive\":\"string\"}")]
        string VolumeId
        {
            get;
        }

        /// <summary>Property volumeMountpoint: NAS vpc mount point.</summary>
        /// <remarks>
        /// Currently it does not support automatic creation Ali cloud NAS mount point.
        /// </remarks>
        [JsiiProperty(name: "volumeMountpoint", typeJson: "{\"primitive\":\"string\"}")]
        string VolumeMountpoint
        {
            get;
        }

        /// <summary>Property vSwitchId: VPC in switch ID.</summary>
        /// <remarks>
        /// Products currently only supports VPC network.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
        string VSwitchId
        {
            get;
        }

        /// <summary>Property accountType: Domain service account types, currently supports nis.</summary>
        [JsiiProperty(name: "accountType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AccountType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.</summary>
        [JsiiProperty(name: "application", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? AutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.</summary>
        [JsiiProperty(name: "computeSpotPriceLimit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ComputeSpotPriceLimit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.</summary>
        [JsiiProperty(name: "computeSpotStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ComputeSpotStrategy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deployMode: Deployment mode: Standard: account node + scheduling node + login node + computing node.</summary>
        /// <remarks>
        /// Advanced: HA mode.
        /// Simple: (account + schedule) node + login node + compute node.
        /// Tiny: (account + scheduling + login) node + compute node.
        /// OneBox: (account + scheduling + login + compute) node + more compute nodes.
        /// </remarks>
        [JsiiProperty(name: "deployMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DeployMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Cluster description, 2 to 128 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.</summary>
        [JsiiProperty(name: "ecsChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EcsChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA).</summary>
        [JsiiProperty(name: "ecsOrderManagerCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? EcsOrderManagerCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.</summary>
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
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ImageId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageOwnerAlias: Mirror type: system, self, others or marketplace.</summary>
        [JsiiProperty(name: "imageOwnerAlias", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ImageOwnerAlias
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property jobQueue: Computing node added queue.</summary>
        [JsiiProperty(name: "jobQueue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? JobQueue
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keyPairName: Key pair name.</summary>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? KeyPairName
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
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Password
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The purchase of long resources, units: week / month / year.</summary>
        /// <remarks>
        /// When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
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

        /// <summary>Property periodUnit: The purchase of long-resources unit.</summary>
        /// <remarks>
        /// Alternatively value Week / Month / year.
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PeriodUnit
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

        /// <summary>Property remoteDirectory: Mount shared storage remote directory.</summary>
        /// <remarks>
        /// The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        /// </remarks>
        [JsiiProperty(name: "remoteDirectory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RemoteDirectory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.</summary>
        [JsiiProperty(name: "sccClusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SccClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property schedulerType: The scheduler type, currently support pbs.</summary>
        [JsiiProperty(name: "schedulerType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SchedulerType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: Security group ID.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityGroupId
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
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property volumeProtocol: Shared storage network protocols, currently only supports nfs.</summary>
        [JsiiProperty(name: "volumeProtocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VolumeProtocol
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.</summary>
        [JsiiProperty(name: "volumeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VolumeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: Available area ID.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::EHPC::Cluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.ClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ehpc.IClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.</summary>
            [JsiiProperty(name: "ecsOrderComputeCount", typeJson: "{\"primitive\":\"number\"}")]
            public double EcsOrderComputeCount
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.</summary>
            [JsiiProperty(name: "ecsOrderComputeInstanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string EcsOrderComputeInstanceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property ecsOrderLoginCount: Login node number can only be 1.</summary>
            [JsiiProperty(name: "ecsOrderLoginCount", typeJson: "{\"primitive\":\"number\"}")]
            public double EcsOrderLoginCount
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property ecsOrderLoginInstanceType: Log cluster node instance specifications.</summary>
            [JsiiProperty(name: "ecsOrderLoginInstanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string EcsOrderLoginInstanceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property ecsOrderManagerInstanceType: Cluster control node instance specifications.</summary>
            [JsiiProperty(name: "ecsOrderManagerInstanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string EcsOrderManagerInstanceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0.</summary>
            [JsiiProperty(name: "ehpcVersion", typeJson: "{\"primitive\":\"string\"}")]
            public string EhpcVersion
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property name: Cluster name.</summary>
            /// <remarks>
            /// 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property osTag: Operating system image tag.</summary>
            /// <remarks>
            /// You can call ListImages API to query.
            /// </remarks>
            [JsiiProperty(name: "osTag", typeJson: "{\"primitive\":\"string\"}")]
            public string OsTag
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property volumeId: Ali cloud NAS instance Id.</summary>
            /// <remarks>
            /// Currently it does not support automatic creation Ali cloud NAS instance.
            /// </remarks>
            [JsiiProperty(name: "volumeId", typeJson: "{\"primitive\":\"string\"}")]
            public string VolumeId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property volumeMountpoint: NAS vpc mount point.</summary>
            /// <remarks>
            /// Currently it does not support automatic creation Ali cloud NAS mount point.
            /// </remarks>
            [JsiiProperty(name: "volumeMountpoint", typeJson: "{\"primitive\":\"string\"}")]
            public string VolumeMountpoint
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property vSwitchId: VPC in switch ID.</summary>
            /// <remarks>
            /// Products currently only supports VPC network.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
            public string VSwitchId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property accountType: Domain service account types, currently supports nis.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accountType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "application", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? AutoRenewPeriod
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "computeSpotPriceLimit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ComputeSpotPriceLimit
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "computeSpotStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ComputeSpotStrategy
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property deployMode: Deployment mode: Standard: account node + scheduling node + login node + computing node.</summary>
            /// <remarks>
            /// Advanced: HA mode.
            /// Simple: (account + schedule) node + login node + compute node.
            /// Tiny: (account + scheduling + login) node + compute node.
            /// OneBox: (account + scheduling + login + compute) node + more compute nodes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deployMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DeployMode
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property description: Cluster description, 2 to 128 characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecsChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EcsChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecsOrderManagerCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? EcsOrderManagerCount
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.</summary>
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
            [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ImageId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property imageOwnerAlias: Mirror type: system, self, others or marketplace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageOwnerAlias", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ImageOwnerAlias
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property jobQueue: Computing node added queue.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "jobQueue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? JobQueue
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property keyPairName: Key pair name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? KeyPairName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property password: Root password of jump server (login node).</summary>
            /// <remarks>
            /// 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ &amp; * - + = | {} []:; '&lt;&gt;, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Password
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property period: The purchase of long resources, units: week / month / year.</summary>
            /// <remarks>
            /// When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Period
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property periodUnit: The purchase of long-resources unit.</summary>
            /// <remarks>
            /// Alternatively value Week / Month / year.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PeriodUnit
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property postInstallScript:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "postInstallScript", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.PostInstallScriptProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PostInstallScript
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property remoteDirectory: Mount shared storage remote directory.</summary>
            /// <remarks>
            /// The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remoteDirectory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RemoteDirectory
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sccClusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SccClusterId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property schedulerType: The scheduler type, currently support pbs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "schedulerType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SchedulerType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property securityGroupId: Security group ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy.</summary>
            /// <remarks>
            /// Format Requirements Reference ECS security group name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityGroupName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property volumeProtocol: Shared storage network protocols, currently only supports nfs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "volumeProtocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VolumeProtocol
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "volumeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VolumeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property zoneId: Available area ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ZoneId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
