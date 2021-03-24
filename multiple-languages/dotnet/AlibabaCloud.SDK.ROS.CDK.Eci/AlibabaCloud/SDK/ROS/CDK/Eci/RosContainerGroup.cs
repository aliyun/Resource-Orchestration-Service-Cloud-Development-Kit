using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci
{
    /// <summary>A ROS template type:  `ALIYUN::ECI::ContainerGroup`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosContainerGroup : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ECI::ContainerGroup`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosContainerGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Eci.IRosContainerGroupProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosContainerGroup(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosContainerGroup(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ContainerGroupId: The ID of the container group.
        /// </remarks>
        [JsiiProperty(name: "attrContainerGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrContainerGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ContainerGroupName: The name of the container group.
        /// </remarks>
        [JsiiProperty(name: "attrContainerGroupName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrContainerGroupName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: EniInstanceId: ENI instance ID.
        /// </remarks>
        [JsiiProperty(name: "attrEniInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrEniInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InternetIp: Internet IP.
        /// </remarks>
        [JsiiProperty(name: "attrInternetIp", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: IntranetIp: Intranet IP.
        /// </remarks>
        [JsiiProperty(name: "attrIntranetIp", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIntranetIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Ipv6Address: Ipv6 address.
        /// </remarks>
        [JsiiProperty(name: "attrIpv6Address", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIpv6Address
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: RegionId: The ID of the region in which the instance resides.
        /// </remarks>
        [JsiiProperty(name: "attrRegionId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRegionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: SecurityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
        /// </remarks>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSecurityGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: VSwitchId: The ID of the VSwitch. Currently, ECI instances can only be deployed in VPCs.
        /// </remarks>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ZoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        /// </remarks>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: container: The containers that constitute the container group.
        /// </remarks>
        [JsiiProperty(name: "container", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ContainerProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object Container
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: containerGroupName: The name of the container group. 
        /// The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
        /// </remarks>
        [JsiiProperty(name: "containerGroupName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ContainerGroupName
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
        /// <strong>Property</strong>: securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string SecurityGroupId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the specified VSwitch. Currently, ECI instances can only be deployed in VPCs.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string VSwitchId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: activeDeadlineSeconds: The validity period in seconds.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "activeDeadlineSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? ActiveDeadlineSeconds
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoMatchImageCache: Specifies whether to automatically match the image cache.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoMatchImageCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AutoMatchImageCache
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: cpu: CPU size
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cpu", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? Cpu
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dnsConfig: The information about DNS configurations.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dnsConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.DnsConfigProperty\"}]}}", isOptional: true)]
        public virtual object? DnsConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: eipInstanceId: Elastic IP ID
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "eipInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? EipInstanceId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: hostAliase: Customize the hostname mapping of a container inside the pod
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "hostAliase", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.HostAliaseProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? HostAliase
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageRegistryCredential", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ImageRegistryCredentialProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? ImageRegistryCredential
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: imageSnapshotId: Image cache ID or snapshot ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageSnapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ImageSnapshotId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: initContainer: The containers that constitute the container group for initializing.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "initContainer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? InitContainer
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: The type of the ECS instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? InstanceType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6AddressCount: The number of IPv6 addresses.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? Ipv6AddressCount
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: memory: memory size
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "memory", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? Memory
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ramRoleName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? RamRoleName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: restartPolicy: The policy for restarting the instance. Default value: Always.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restartPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? RestartPolicy
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityContextSysctl: ECI Sysctl is valid for every container in ECI.
        /// Currently only two Sysctl keyNames are supported:
        /// Kernel.shm_rmid_forced
        /// Kernel.msgmax
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityContextSysctl", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextSysctlProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? SecurityContextSysctl
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: slsEnable: Enable user log collection. The default is False.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slsEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SlsEnable
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? SpotPriceLimit
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: spotStrategy: Instance preemption strategy.
        /// Ranges:
        /// NoSpot (default): normal pay-as-you-go instances.
        /// SpotWithPriceLimit: Preemptive instance that sets a cap price.
        /// SpotAsPriceGo: The system automatically bids, following the current market actual price.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spotStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SpotStrategy
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tag: The list of container group tags in the form of key/value pairs. You can define a maximum of 20 tags for each container group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? Tag
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "terminationGracePeriodSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? TerminationGracePeriodSeconds
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: volume: The data volume. You can specify a maximum of 20 data volumes.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "volume", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.VolumeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? Volume
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ZoneId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IConfigFileVolumeConfigFileToPathProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty")]
        public interface IConfigFileVolumeConfigFileToPathProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: path: The relative path in the configuration file. You can specify a location of a directory relative to another directory.
            /// </remarks>
            [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}")]
            string Path
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: content: The content of the configuration file. Maximum size: 32 KB.
            /// </remarks>
            [JsiiProperty(name: "content", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Content
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IConfigFileVolumeConfigFileToPathProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IConfigFileVolumeConfigFileToPathProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: path: The relative path in the configuration file. You can specify a location of a directory relative to another directory.
                /// </remarks>
                [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}")]
                public string Path
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: content: The content of the configuration file. Maximum size: 32 KB.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "content", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Content
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty")]
        public class ConfigFileVolumeConfigFileToPathProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IConfigFileVolumeConfigFileToPathProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: path: The relative path in the configuration file. You can specify a location of a directory relative to another directory.
            /// </remarks>
            [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Path
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: content: The content of the configuration file. Maximum size: 32 KB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "content", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Content
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IContainerProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.ContainerProperty")]
        public interface IContainerProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: image: The container image.
            /// </remarks>
            [JsiiProperty(name: "image", typeJson: "{\"primitive\":\"string\"}")]
            string Image
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the container.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            string Name
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
            /// </remarks>
            [JsiiProperty(name: "arg", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string[]? Arg
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
            /// </remarks>
            [JsiiProperty(name: "command", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string[]? Command
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
            /// </remarks>
            [JsiiProperty(name: "cpu", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? Cpu
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: environmentVar: Environment variables in the operating system of the container. Each environment variable is a key/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
            /// </remarks>
            [JsiiProperty(name: "environmentVar", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.EnvironmentVarProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EnvironmentVar
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
            /// </remarks>
            [JsiiProperty(name: "imagePullPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ImagePullPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: livenessProbe: The liveness probe.
            /// </remarks>
            [JsiiProperty(name: "livenessProbe", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.LivenessProbeProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? LivenessProbe
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: memory: The memory assigned to the container. Unit: GiB.
            /// </remarks>
            [JsiiProperty(name: "memory", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? Memory
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The open ports and protocols. You can set a maximum of 100 ports.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.PortProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: readinessProbe: The readiness probe.
            /// </remarks>
            [JsiiProperty(name: "readinessProbe", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ReadinessProbeProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ReadinessProbe
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: securityContext: The security context of the container group.
            /// </remarks>
            [JsiiProperty(name: "securityContext", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SecurityContext
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: stdin: undefined
            /// </remarks>
            [JsiiProperty(name: "stdin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Stdin
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: stdinOnce: undefined
            /// </remarks>
            [JsiiProperty(name: "stdinOnce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? StdinOnce
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tty: undefined
            /// </remarks>
            [JsiiProperty(name: "tty", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Tty
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
            /// </remarks>
            [JsiiProperty(name: "volumeMount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.VolumeMountProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? VolumeMount
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: workingDir: The working directory for the container.
            /// </remarks>
            [JsiiProperty(name: "workingDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? WorkingDir
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IContainerProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.ContainerProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IContainerProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: image: The container image.
                /// </remarks>
                [JsiiProperty(name: "image", typeJson: "{\"primitive\":\"string\"}")]
                public string Image
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: name: The name of the container.
                /// </remarks>
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
                public string Name
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "arg", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
                public string[]? Arg
                {
                    get => GetInstanceProperty<string[]?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "command", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
                public string[]? Command
                {
                    get => GetInstanceProperty<string[]?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cpu", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? Cpu
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: environmentVar: Environment variables in the operating system of the container. Each environment variable is a key/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "environmentVar", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.EnvironmentVarProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? EnvironmentVar
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "imagePullPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ImagePullPolicy
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: livenessProbe: The liveness probe.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "livenessProbe", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.LivenessProbeProperty\"}]}}", isOptional: true)]
                public object? LivenessProbe
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: memory: The memory assigned to the container. Unit: GiB.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "memory", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? Memory
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The open ports and protocols. You can set a maximum of 100 ports.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.PortProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: readinessProbe: The readiness probe.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "readinessProbe", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ReadinessProbeProperty\"}]}}", isOptional: true)]
                public object? ReadinessProbe
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: securityContext: The security context of the container group.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "securityContext", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextProperty\"}]}}", isOptional: true)]
                public object? SecurityContext
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: stdin: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "stdin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Stdin
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: stdinOnce: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "stdinOnce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? StdinOnce
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tty: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tty", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Tty
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "volumeMount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.VolumeMountProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? VolumeMount
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: workingDir: The working directory for the container.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "workingDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? WorkingDir
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.ContainerProperty")]
        public class ContainerProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IContainerProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: image: The container image.
            /// </remarks>
            [JsiiProperty(name: "image", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Image
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the container.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "arg", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
            public string[]? Arg
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "command", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
            public string[]? Command
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpu", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? Cpu
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: environmentVar: Environment variables in the operating system of the container. Each environment variable is a key/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "environmentVar", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.EnvironmentVarProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? EnvironmentVar
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imagePullPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ImagePullPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: livenessProbe: The liveness probe.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "livenessProbe", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.LivenessProbeProperty\"}]}}", isOptional: true, isOverride: true)]
            public object? LivenessProbe
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: memory: The memory assigned to the container. Unit: GiB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "memory", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? Memory
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The open ports and protocols. You can set a maximum of 100 ports.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.PortProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: readinessProbe: The readiness probe.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "readinessProbe", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ReadinessProbeProperty\"}]}}", isOptional: true, isOverride: true)]
            public object? ReadinessProbe
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityContext: The security context of the container group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityContext", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextProperty\"}]}}", isOptional: true, isOverride: true)]
            public object? SecurityContext
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: stdin: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stdin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Stdin
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: stdinOnce: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stdinOnce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? StdinOnce
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tty: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tty", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Tty
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "volumeMount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.VolumeMountProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? VolumeMount
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: workingDir: The working directory for the container.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workingDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? WorkingDir
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IDnsConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.DnsConfigProperty")]
        public interface IDnsConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: nameServer: The list of IP addresses for DNS servers.
            /// </remarks>
            [JsiiProperty(name: "nameServer", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string[]? NameServer
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: option: The list of options. Each option includes a name and a value. The value is optional.
            /// </remarks>
            [JsiiProperty(name: "option", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.OptionProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Option
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: search: The list of DNS search domains.
            /// </remarks>
            [JsiiProperty(name: "search", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string[]? Search
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDnsConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.DnsConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IDnsConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: nameServer: The list of IP addresses for DNS servers.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nameServer", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
                public string[]? NameServer
                {
                    get => GetInstanceProperty<string[]?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: option: The list of options. Each option includes a name and a value. The value is optional.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "option", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.OptionProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Option
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: search: The list of DNS search domains.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "search", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
                public string[]? Search
                {
                    get => GetInstanceProperty<string[]?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.DnsConfigProperty")]
        public class DnsConfigProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IDnsConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: nameServer: The list of IP addresses for DNS servers.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nameServer", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
            public string[]? NameServer
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: option: The list of options. Each option includes a name and a value. The value is optional.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "option", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.OptionProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? Option
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: search: The list of DNS search domains.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "search", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
            public string[]? Search
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IEnvironmentVarProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.EnvironmentVarProperty")]
        public interface IEnvironmentVarProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fieldRefFieldPath: A reference to another variable. Currently, only status.podIP is supported.
            /// </remarks>
            [JsiiProperty(name: "fieldRefFieldPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? FieldRefFieldPath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: key: The name of the variable. The name must be [1,128] characters in length and can contain [, 0-9a-zA-Z, ], and underscores (_). It cannot start with a digit.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Key
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The value of the variable.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IEnvironmentVarProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.EnvironmentVarProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IEnvironmentVarProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: fieldRefFieldPath: A reference to another variable. Currently, only status.podIP is supported.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fieldRefFieldPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? FieldRefFieldPath
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: key: The name of the variable. The name must be [1,128] characters in length and can contain [, 0-9a-zA-Z, ], and underscores (_). It cannot start with a digit.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Key
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: value: The value of the variable.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Value
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.EnvironmentVarProperty")]
        public class EnvironmentVarProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IEnvironmentVarProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fieldRefFieldPath: A reference to another variable. Currently, only status.podIP is supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fieldRefFieldPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? FieldRefFieldPath
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: key: The name of the variable. The name must be [1,128] characters in length and can contain [, 0-9a-zA-Z, ], and underscores (_). It cannot start with a digit.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The value of the variable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Value
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IHostAliaseProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.HostAliaseProperty")]
        public interface IHostAliaseProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: hostname: undefined
            /// </remarks>
            [JsiiProperty(name: "hostname", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string[]? Hostname
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ip: undefined
            /// </remarks>
            [JsiiProperty(name: "ip", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Ip
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IHostAliaseProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.HostAliaseProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IHostAliaseProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: hostname: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "hostname", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
                public string[]? Hostname
                {
                    get => GetInstanceProperty<string[]?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ip: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ip", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Ip
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.HostAliaseProperty")]
        public class HostAliaseProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IHostAliaseProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: hostname: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostname", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
            public string[]? Hostname
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ip: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ip", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Ip
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IImageRegistryCredentialProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.ImageRegistryCredentialProperty")]
        public interface IImageRegistryCredentialProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: password: The password that is used to log on to the image repository.
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}")]
            string Password
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: server: The IP address of the image repository. This address does not include a protocol prefix, such as http:// or https://.
            /// </remarks>
            [JsiiProperty(name: "server", typeJson: "{\"primitive\":\"string\"}")]
            string Server
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: The username that is used to log on to the image repository.
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
            string UserName
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IImageRegistryCredentialProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.ImageRegistryCredentialProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IImageRegistryCredentialProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: password: The password that is used to log on to the image repository.
                /// </remarks>
                [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}")]
                public string Password
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: server: The IP address of the image repository. This address does not include a protocol prefix, such as http:// or https://.
                /// </remarks>
                [JsiiProperty(name: "server", typeJson: "{\"primitive\":\"string\"}")]
                public string Server
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: userName: The username that is used to log on to the image repository.
                /// </remarks>
                [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
                public string UserName
                {
                    get => GetInstanceProperty<string>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.ImageRegistryCredentialProperty")]
        public class ImageRegistryCredentialProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IImageRegistryCredentialProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: password: The password that is used to log on to the image repository.
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Password
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: server: The IP address of the image repository. This address does not include a protocol prefix, such as http:// or https://.
            /// </remarks>
            [JsiiProperty(name: "server", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Server
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: The username that is used to log on to the image repository.
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string UserName
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IInitContainerProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerProperty")]
        public interface IInitContainerProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
            /// </remarks>
            [JsiiProperty(name: "arg", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string[]? Arg
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
            /// </remarks>
            [JsiiProperty(name: "command", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string[]? Command
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
            /// </remarks>
            [JsiiProperty(name: "cpu", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? Cpu
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: environmentVar: Environment variables in the operating system of the container. Each environment variable is a key/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
            /// </remarks>
            [JsiiProperty(name: "environmentVar", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.EnvironmentVarProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EnvironmentVar
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: image: The container image.
            /// </remarks>
            [JsiiProperty(name: "image", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Image
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
            /// </remarks>
            [JsiiProperty(name: "imagePullPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ImagePullPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: memory: The memory assigned to the container. Unit: GiB.
            /// </remarks>
            [JsiiProperty(name: "memory", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? Memory
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the container.
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
            /// <strong>Property</strong>: port: The open ports and protocols. You can set a maximum of 100 ports.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.PortProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: securityContext: The security context of the container group.
            /// </remarks>
            [JsiiProperty(name: "securityContext", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SecurityContext
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
            /// </remarks>
            [JsiiProperty(name: "volumeMount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.VolumeMountProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? VolumeMount
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: workingDir: The working directory for the container.
            /// </remarks>
            [JsiiProperty(name: "workingDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? WorkingDir
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IInitContainerProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IInitContainerProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "arg", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
                public string[]? Arg
                {
                    get => GetInstanceProperty<string[]?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "command", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
                public string[]? Command
                {
                    get => GetInstanceProperty<string[]?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cpu", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? Cpu
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: environmentVar: Environment variables in the operating system of the container. Each environment variable is a key/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "environmentVar", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.EnvironmentVarProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? EnvironmentVar
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: image: The container image.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "image", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Image
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "imagePullPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ImagePullPolicy
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: memory: The memory assigned to the container. Unit: GiB.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "memory", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? Memory
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: name: The name of the container.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Name
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The open ports and protocols. You can set a maximum of 100 ports.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.PortProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: securityContext: The security context of the container group.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "securityContext", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextProperty\"}]}}", isOptional: true)]
                public object? SecurityContext
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "volumeMount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.VolumeMountProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? VolumeMount
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: workingDir: The working directory for the container.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "workingDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? WorkingDir
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerProperty")]
        public class InitContainerProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IInitContainerProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "arg", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
            public string[]? Arg
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "command", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
            public string[]? Command
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpu", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? Cpu
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: environmentVar: Environment variables in the operating system of the container. Each environment variable is a key/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "environmentVar", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.EnvironmentVarProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? EnvironmentVar
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: image: The container image.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "image", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Image
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imagePullPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ImagePullPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: memory: The memory assigned to the container. Unit: GiB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "memory", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? Memory
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the container.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The open ports and protocols. You can set a maximum of 100 ports.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.PortProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityContext: The security context of the container group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityContext", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextProperty\"}]}}", isOptional: true, isOverride: true)]
            public object? SecurityContext
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "volumeMount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.VolumeMountProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? VolumeMount
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: workingDir: The working directory for the container.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workingDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? WorkingDir
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ILivenessProbeProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.LivenessProbeProperty")]
        public interface ILivenessProbeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: execCommand: The commands for running the readiness probe.
            /// </remarks>
            [JsiiProperty(name: "execCommand", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string[]? ExecCommand
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
            /// </remarks>
            [JsiiProperty(name: "failureThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? FailureThreshold
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
            /// </remarks>
            [JsiiProperty(name: "httpGetPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? HttpGetPath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
            /// </remarks>
            [JsiiProperty(name: "httpGetPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? HttpGetPort
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
            /// </remarks>
            [JsiiProperty(name: "httpGetScheme", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? HttpGetScheme
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
            /// </remarks>
            [JsiiProperty(name: "initialDelaySeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? InitialDelaySeconds
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
            /// </remarks>
            [JsiiProperty(name: "periodSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? PeriodSeconds
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
            /// </remarks>
            [JsiiProperty(name: "successThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? SuccessThreshold
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
            /// </remarks>
            [JsiiProperty(name: "tcpSocketPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? TcpSocketPort
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
            /// </remarks>
            [JsiiProperty(name: "timeoutSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? TimeoutSeconds
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ILivenessProbeProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.LivenessProbeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.ILivenessProbeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: execCommand: The commands for running the readiness probe.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "execCommand", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
                public string[]? ExecCommand
                {
                    get => GetInstanceProperty<string[]?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "failureThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? FailureThreshold
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpGetPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? HttpGetPath
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpGetPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? HttpGetPort
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpGetScheme", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? HttpGetScheme
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "initialDelaySeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? InitialDelaySeconds
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "periodSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? PeriodSeconds
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "successThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? SuccessThreshold
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tcpSocketPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? TcpSocketPort
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "timeoutSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? TimeoutSeconds
                {
                    get => GetInstanceProperty<double?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.LivenessProbeProperty")]
        public class LivenessProbeProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.ILivenessProbeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: execCommand: The commands for running the readiness probe.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "execCommand", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
            public string[]? ExecCommand
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "failureThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? FailureThreshold
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpGetPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? HttpGetPath
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpGetPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? HttpGetPort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpGetScheme", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? HttpGetScheme
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "initialDelaySeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? InitialDelaySeconds
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? PeriodSeconds
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "successThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? SuccessThreshold
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tcpSocketPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? TcpSocketPort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeoutSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? TimeoutSeconds
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IOptionProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.OptionProperty")]
        public interface IOptionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: The name of the option.
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
            /// <strong>Property</strong>: value: The value of the option.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IOptionProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.OptionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IOptionProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: The name of the option.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Name
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: value: The value of the option.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Value
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.OptionProperty")]
        public class OptionProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IOptionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: The name of the option.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The value of the option.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Value
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPortProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.PortProperty")]
        public interface IPortProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: port: The port number. Valid values: 1-65535.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: The protocol that the port uses. Valid values: TCP and UDP
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Protocol
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPortProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.PortProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IPortProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The port number. Valid values: 1-65535.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? Port
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: protocol: The protocol that the port uses. Valid values: TCP and UDP
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Protocol
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.PortProperty")]
        public class PortProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IPortProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: port: The port number. Valid values: 1-65535.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: The protocol that the port uses. Valid values: TCP and UDP
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Protocol
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IReadinessProbeProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.ReadinessProbeProperty")]
        public interface IReadinessProbeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: execCommand: The commands for running the readiness probe.
            /// </remarks>
            [JsiiProperty(name: "execCommand", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string[]? ExecCommand
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
            /// </remarks>
            [JsiiProperty(name: "failureThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? FailureThreshold
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
            /// </remarks>
            [JsiiProperty(name: "httpGetPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? HttpGetPath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
            /// </remarks>
            [JsiiProperty(name: "httpGetPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? HttpGetPort
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
            /// </remarks>
            [JsiiProperty(name: "httpGetScheme", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? HttpGetScheme
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
            /// </remarks>
            [JsiiProperty(name: "initialDelaySeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? InitialDelaySeconds
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
            /// </remarks>
            [JsiiProperty(name: "periodSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? PeriodSeconds
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
            /// </remarks>
            [JsiiProperty(name: "successThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? SuccessThreshold
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
            /// </remarks>
            [JsiiProperty(name: "tcpSocketPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? TcpSocketPort
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
            /// </remarks>
            [JsiiProperty(name: "timeoutSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? TimeoutSeconds
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IReadinessProbeProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.ReadinessProbeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IReadinessProbeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: execCommand: The commands for running the readiness probe.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "execCommand", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
                public string[]? ExecCommand
                {
                    get => GetInstanceProperty<string[]?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "failureThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? FailureThreshold
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpGetPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? HttpGetPath
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpGetPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? HttpGetPort
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpGetScheme", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? HttpGetScheme
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "initialDelaySeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? InitialDelaySeconds
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "periodSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? PeriodSeconds
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "successThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? SuccessThreshold
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tcpSocketPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? TcpSocketPort
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "timeoutSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? TimeoutSeconds
                {
                    get => GetInstanceProperty<double?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.ReadinessProbeProperty")]
        public class ReadinessProbeProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IReadinessProbeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: execCommand: The commands for running the readiness probe.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "execCommand", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
            public string[]? ExecCommand
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "failureThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? FailureThreshold
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpGetPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? HttpGetPath
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpGetPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? HttpGetPort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpGetScheme", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? HttpGetScheme
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "initialDelaySeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? InitialDelaySeconds
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? PeriodSeconds
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "successThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? SuccessThreshold
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tcpSocketPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? TcpSocketPort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeoutSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? TimeoutSeconds
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ISecurityContextProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextProperty")]
        public interface ISecurityContextProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: capabilityAdd: undefined
            /// </remarks>
            [JsiiProperty(name: "capabilityAdd", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string[]? CapabilityAdd
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: readOnlyRootFilesystem: Valid value: True.
            /// </remarks>
            [JsiiProperty(name: "readOnlyRootFilesystem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ReadOnlyRootFilesystem
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: runAsUser: User ID.
            /// </remarks>
            [JsiiProperty(name: "runAsUser", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? RunAsUser
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ISecurityContextProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.ISecurityContextProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: capabilityAdd: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "capabilityAdd", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
                public string[]? CapabilityAdd
                {
                    get => GetInstanceProperty<string[]?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: readOnlyRootFilesystem: Valid value: True.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "readOnlyRootFilesystem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ReadOnlyRootFilesystem
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: runAsUser: User ID.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "runAsUser", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? RunAsUser
                {
                    get => GetInstanceProperty<double?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextProperty")]
        public class SecurityContextProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.ISecurityContextProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: capabilityAdd: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "capabilityAdd", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
            public string[]? CapabilityAdd
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: readOnlyRootFilesystem: Valid value: True.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "readOnlyRootFilesystem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ReadOnlyRootFilesystem
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: runAsUser: User ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "runAsUser", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? RunAsUser
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ISecurityContextSysctlProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextSysctlProperty")]
        public interface ISecurityContextSysctlProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: undefined
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
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ISecurityContextSysctlProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextSysctlProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.ISecurityContextSysctlProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Name
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: value: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Value
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextSysctlProperty")]
        public class SecurityContextSysctlProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.ISecurityContextSysctlProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Value
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITagProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.TagProperty")]
        public interface ITagProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The keyword of the tag.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}")]
            string Key
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The value of the tag.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ITagProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.TagProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.ITagProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: The keyword of the tag.
                /// </remarks>
                [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}")]
                public string Key
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: value: The value of the tag.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Value
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.TagProperty")]
        public class TagProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.ITagProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The keyword of the tag.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The value of the tag.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Value
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IVolumeMountProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.VolumeMountProperty")]
        public interface IVolumeMountProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: mountPath: A mount path. The data in the target directory is overwritten by the data in the mounted volume. Therefore, use caution when you mount a volume to a directory.
            /// </remarks>
            [JsiiProperty(name: "mountPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? MountPath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the volume. The name is the same as that specified for the Name parameter in the Volume section.
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
            /// <strong>Property</strong>: readOnly: Default value: False.
            /// </remarks>
            [JsiiProperty(name: "readOnly", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ReadOnly
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IVolumeMountProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.VolumeMountProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IVolumeMountProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: mountPath: A mount path. The data in the target directory is overwritten by the data in the mounted volume. Therefore, use caution when you mount a volume to a directory.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "mountPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? MountPath
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: name: The name of the volume. The name is the same as that specified for the Name parameter in the Volume section.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Name
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: readOnly: Default value: False.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "readOnly", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ReadOnly
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.VolumeMountProperty")]
        public class VolumeMountProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IVolumeMountProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: mountPath: A mount path. The data in the target directory is overwritten by the data in the mounted volume. Therefore, use caution when you mount a volume to a directory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mountPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? MountPath
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the volume. The name is the same as that specified for the Name parameter in the Volume section.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: readOnly: Default value: False.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "readOnly", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ReadOnly
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IVolumeProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.VolumeProperty")]
        public interface IVolumeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: The name of the volume.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            string Name
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of volume. Valid values: EmptyDirVolume, NFSVolume, and ConfigFileVolume.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            string Type
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: configFileVolumeConfigFileToPath: The path to the configuration file.
            /// </remarks>
            [JsiiProperty(name: "configFileVolumeConfigFileToPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ConfigFileVolumeConfigFileToPath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: emptyDirVolumeMedium: The storage medium for EmptyDirVolume. By default, the file system on the node is used. Default value: not specified. Valid value: Memory. If this parameter is set to Memory, the EmptyDirVolume volume is stored in memory.
            /// </remarks>
            [JsiiProperty(name: "emptyDirVolumeMedium", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? EmptyDirVolumeMedium
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: nfsVolumePath: The path to the NFS volume.
            /// </remarks>
            [JsiiProperty(name: "nfsVolumePath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? NfsVolumePath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: nfsVolumeReadOnly: Default value: False.
            /// </remarks>
            [JsiiProperty(name: "nfsVolumeReadOnly", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NfsVolumeReadOnly
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: nfsVolumeServer: The IP address of the NFS server.
            /// </remarks>
            [JsiiProperty(name: "nfsVolumeServer", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? NfsVolumeServer
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IVolumeProperty), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroup.VolumeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IVolumeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: The name of the volume.
                /// </remarks>
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
                public string Name
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: type: The type of volume. Valid values: EmptyDirVolume, NFSVolume, and ConfigFileVolume.
                /// </remarks>
                [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
                public string Type
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: configFileVolumeConfigFileToPath: The path to the configuration file.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "configFileVolumeConfigFileToPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? ConfigFileVolumeConfigFileToPath
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: emptyDirVolumeMedium: The storage medium for EmptyDirVolume. By default, the file system on the node is used. Default value: not specified. Valid value: Memory. If this parameter is set to Memory, the EmptyDirVolume volume is stored in memory.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "emptyDirVolumeMedium", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? EmptyDirVolumeMedium
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: nfsVolumePath: The path to the NFS volume.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nfsVolumePath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? NfsVolumePath
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: nfsVolumeReadOnly: Default value: False.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nfsVolumeReadOnly", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NfsVolumeReadOnly
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: nfsVolumeServer: The IP address of the NFS server.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nfsVolumeServer", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? NfsVolumeServer
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosContainerGroup.VolumeProperty")]
        public class VolumeProperty : AlibabaCloud.SDK.ROS.CDK.Eci.RosContainerGroup.IVolumeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: The name of the volume.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of volume. Valid values: EmptyDirVolume, NFSVolume, and ConfigFileVolume.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Type
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: configFileVolumeConfigFileToPath: The path to the configuration file.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "configFileVolumeConfigFileToPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? ConfigFileVolumeConfigFileToPath
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: emptyDirVolumeMedium: The storage medium for EmptyDirVolume. By default, the file system on the node is used. Default value: not specified. Valid value: Memory. If this parameter is set to Memory, the EmptyDirVolume volume is stored in memory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "emptyDirVolumeMedium", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? EmptyDirVolumeMedium
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: nfsVolumePath: The path to the NFS volume.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nfsVolumePath", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? NfsVolumePath
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: nfsVolumeReadOnly: Default value: False.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nfsVolumeReadOnly", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? NfsVolumeReadOnly
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: nfsVolumeServer: The IP address of the NFS server.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nfsVolumeServer", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? NfsVolumeServer
            {
                get;
                set;
            }
        }
    }
}
