using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ehpc
{
    /// <summary>A ROS template type:  `ALIYUN::EHPC::Cluster`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ehpc.RosCluster), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.RosCluster", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosCluster : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::EHPC::Cluster`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosCluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ehpc.IRosClusterProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ehpc.RosCluster))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterId: Cluster Id.
        /// </remarks>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.
        /// You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
        /// </remarks>
        [JsiiProperty(name: "attrEcsInfo", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrEcsInfo
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Name: Cluster name.
        /// </remarks>
        [JsiiProperty(name: "attrName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: SecurityGroupId: Security group ID.
        /// </remarks>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSecurityGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
        /// </remarks>
        [JsiiProperty(name: "ecsOrderComputeCount", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double EcsOrderComputeCount
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsOrderComputeInstanceType: Cluster computing node instance specifications.
        /// </remarks>
        [JsiiProperty(name: "ecsOrderComputeInstanceType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string EcsOrderComputeInstanceType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsOrderLoginCount: Login node number can only be 1.
        /// </remarks>
        [JsiiProperty(name: "ecsOrderLoginCount", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double EcsOrderLoginCount
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsOrderLoginInstanceType: Log cluster node instance specifications.
        /// </remarks>
        [JsiiProperty(name: "ecsOrderLoginInstanceType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string EcsOrderLoginInstanceType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsOrderManagerInstanceType: Cluster control node instance specifications.
        /// </remarks>
        [JsiiProperty(name: "ecsOrderManagerInstanceType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string EcsOrderManagerInstanceType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ehpcVersion: E-HPC product version numbers, currently supports 1.0.0
        /// </remarks>
        [JsiiProperty(name: "ehpcVersion", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string EhpcVersion
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
        /// <strong>Property</strong>: name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Name
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: osTag: Operating system image tag. You can call ListImages API to query.
        /// </remarks>
        [JsiiProperty(name: "osTag", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string OsTag
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: volumeId: Ali cloud NAS instance Id. Currently it does not support automatic creation Ali cloud NAS instance.
        /// </remarks>
        [JsiiProperty(name: "volumeId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string VolumeId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: volumeMountpoint: NAS vpc mount point. Currently it does not support automatic creation Ali cloud NAS mount point.
        /// </remarks>
        [JsiiProperty(name: "volumeMountpoint", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string VolumeMountpoint
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: VPC in switch ID. Products currently only supports VPC network.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string VSwitchId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: accountType: Domain service account types, currently supports nis.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AccountType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "application", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? Application
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: true: automatic renewals; false: no automatic renewals.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AutoRenew
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? AutoRenewPeriod
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "computeSpotPriceLimit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ComputeSpotPriceLimit
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "computeSpotStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ComputeSpotStrategy
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
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
        [JsiiProperty(name: "deployMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DeployMode
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Cluster description, 2 to 128 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Description
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ecsChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? EcsChargeType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsOrderManagerCount: Control node number can be 1, 2, 4(HA)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ecsOrderManagerCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? EcsOrderManagerCount
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "haEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? HaEnable
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ImageId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: imageOwnerAlias: Mirror type: system, self, others or marketplace
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageOwnerAlias", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ImageOwnerAlias
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: jobQueue: Computing node added queue
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "jobQueue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? JobQueue
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPairName: Key pair name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? KeyPairName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Password
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? Period
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? PeriodUnit
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: postInstallScript:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "postInstallScript", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosCluster.PostInstallScriptProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? PostInstallScript
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "remoteDirectory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? RemoteDirectory
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sccClusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SccClusterId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: schedulerType: The scheduler type, currently support pbs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "schedulerType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SchedulerType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Security group ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SecurityGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SecurityGroupName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: volumeProtocol: Shared storage network protocols, currently only supports nfs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "volumeProtocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VolumeProtocol
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: volumeType: Network shared storage types, currently supports only Ali cloud NAS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "volumeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VolumeType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: Available area ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ZoneId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IApplicationProperty), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty")]
        public interface IApplicationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: tag: Application software tag (SoftwareTag), for example OpenMPI_11.1.
            /// </remarks>
            [JsiiProperty(name: "tag", typeJson: "{\"primitive\":\"string\"}")]
            string Tag
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IApplicationProperty), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ehpc.RosCluster.IApplicationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: tag: Application software tag (SoftwareTag), for example OpenMPI_11.1.
                /// </remarks>
                [JsiiProperty(name: "tag", typeJson: "{\"primitive\":\"string\"}")]
                public string Tag
                {
                    get => GetInstanceProperty<string>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty")]
        public class ApplicationProperty : AlibabaCloud.SDK.ROS.CDK.Ehpc.RosCluster.IApplicationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: tag: Application software tag (SoftwareTag), for example OpenMPI_11.1.
            /// </remarks>
            [JsiiProperty(name: "tag", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Tag
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPostInstallScriptProperty), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.RosCluster.PostInstallScriptProperty")]
        public interface IPostInstallScriptProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: args: N-th (n numbered starting from 1, you can have multiple, maximum 16) execution parameters after the installation script.
            /// </remarks>
            [JsiiProperty(name: "args", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Args
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: url: N-th (n numbered starting with 1, can have multiple, maximum 16) after installation script Download.
            /// </remarks>
            [JsiiProperty(name: "url", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Url
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPostInstallScriptProperty), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.RosCluster.PostInstallScriptProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ehpc.RosCluster.IPostInstallScriptProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: args: N-th (n numbered starting from 1, you can have multiple, maximum 16) execution parameters after the installation script.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "args", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Args
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: url: N-th (n numbered starting with 1, can have multiple, maximum 16) after installation script Download.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "url", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Url
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ehpc.RosCluster.PostInstallScriptProperty")]
        public class PostInstallScriptProperty : AlibabaCloud.SDK.ROS.CDK.Ehpc.RosCluster.IPostInstallScriptProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: args: N-th (n numbered starting from 1, you can have multiple, maximum 16) execution parameters after the installation script.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "args", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Args
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: url: N-th (n numbered starting with 1, can have multiple, maximum 16) after installation script Download.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "url", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Url
            {
                get;
                set;
            }
        }
    }
}
