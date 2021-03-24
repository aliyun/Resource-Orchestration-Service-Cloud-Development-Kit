using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci
{
    /// <summary>Properties for defining a `ALIYUN::ECI::ContainerGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IContainerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.ContainerGroupProps")]
    public interface IContainerGroupProps
    {
        /// <summary>Property container: The containers that constitute the container group.</summary>
        [JsiiProperty(name: "container", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ContainerProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Container
        {
            get;
        }

        /// <summary>Property containerGroupName: The name of the container group.</summary>
        /// <remarks>
        /// The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
        /// </remarks>
        [JsiiProperty(name: "containerGroupName", typeJson: "{\"primitive\":\"string\"}")]
        string ContainerGroupName
        {
            get;
        }

        /// <summary>Property securityGroupId: The ID of the security group to which the instance belongs.</summary>
        /// <remarks>
        /// Instances in the same security group can access one another.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}")]
        string SecurityGroupId
        {
            get;
        }

        /// <summary>Property vSwitchId: The ID of the specified VSwitch.</summary>
        /// <remarks>
        /// Currently, ECI instances can only be deployed in VPCs.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
        string VSwitchId
        {
            get;
        }

        /// <summary>Property activeDeadlineSeconds: The validity period in seconds.</summary>
        [JsiiProperty(name: "activeDeadlineSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? ActiveDeadlineSeconds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoMatchImageCache: Specifies whether to automatically match the image cache.</summary>
        [JsiiProperty(name: "autoMatchImageCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoMatchImageCache
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cpu: CPU size.</summary>
        [JsiiProperty(name: "cpu", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Cpu
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dnsConfig: The information about DNS configurations.</summary>
        [JsiiProperty(name: "dnsConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.DnsConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DnsConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property eipInstanceId: Elastic IP ID.</summary>
        [JsiiProperty(name: "eipInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EipInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hostAliase: Customize the hostname mapping of a container inside the pod.</summary>
        [JsiiProperty(name: "hostAliase", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.HostAliaseProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostAliase
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.</summary>
        [JsiiProperty(name: "imageRegistryCredential", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ImageRegistryCredentialProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageRegistryCredential
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageSnapshotId: Image cache ID or snapshot ID.</summary>
        [JsiiProperty(name: "imageSnapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ImageSnapshotId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property initContainer: The containers that constitute the container group for initializing.</summary>
        [JsiiProperty(name: "initContainer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InitContainer
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceType: The type of the ECS instance.</summary>
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6AddressCount: The number of IPv6 addresses.</summary>
        [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Ipv6AddressCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property memory: memory size.</summary>
        [JsiiProperty(name: "memory", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Memory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ramRoleName: The RAM role that the container group assumes.</summary>
        /// <remarks>
        /// ECI and ECS share the same RAM role.
        /// </remarks>
        [JsiiProperty(name: "ramRoleName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RamRoleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property restartPolicy: The policy for restarting the instance.</summary>
        /// <remarks>
        /// Default value: Always.
        /// </remarks>
        [JsiiProperty(name: "restartPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RestartPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.</summary>
        /// <remarks>
        /// Currently only two Sysctl keyNames are supported:
        /// Kernel.shm_rmid_forced
        /// Kernel.msgmax
        /// </remarks>
        [JsiiProperty(name: "securityContextSysctl", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextSysctlProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityContextSysctl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property slsEnable: Enable user log collection.</summary>
        /// <remarks>
        /// The default is False.
        /// </remarks>
        [JsiiProperty(name: "slsEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlsEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property spotPriceLimit: Set the hourly maximum price of the instance.</summary>
        /// <remarks>
        /// It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
        /// </remarks>
        [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? SpotPriceLimit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property spotStrategy: Instance preemption strategy.</summary>
        /// <remarks>
        /// Ranges:
        /// NoSpot (default): normal pay-as-you-go instances.
        /// SpotWithPriceLimit: Preemptive instance that sets a cap price.
        /// SpotAsPriceGo: The system automatically bids, following the current market actual price.
        /// </remarks>
        [JsiiProperty(name: "spotStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SpotStrategy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tag: The list of container group tags in the form of key/value pairs.</summary>
        /// <remarks>
        /// You can define a maximum of 20 tags for each container group.
        /// </remarks>
        [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Tag
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.</summary>
        [JsiiProperty(name: "terminationGracePeriodSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? TerminationGracePeriodSeconds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property volume: The data volume.</summary>
        /// <remarks>
        /// You can specify a maximum of 20 data volumes.
        /// </remarks>
        [JsiiProperty(name: "volume", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.VolumeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Volume
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The ID of the zone in which the instance resides.</summary>
        /// <remarks>
        /// If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECI::ContainerGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IContainerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.ContainerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.IContainerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property container: The containers that constitute the container group.</summary>
            [JsiiProperty(name: "container", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ContainerProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Container
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property containerGroupName: The name of the container group.</summary>
            /// <remarks>
            /// The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
            /// </remarks>
            [JsiiProperty(name: "containerGroupName", typeJson: "{\"primitive\":\"string\"}")]
            public string ContainerGroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property securityGroupId: The ID of the security group to which the instance belongs.</summary>
            /// <remarks>
            /// Instances in the same security group can access one another.
            /// </remarks>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}")]
            public string SecurityGroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property vSwitchId: The ID of the specified VSwitch.</summary>
            /// <remarks>
            /// Currently, ECI instances can only be deployed in VPCs.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
            public string VSwitchId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property activeDeadlineSeconds: The validity period in seconds.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "activeDeadlineSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? ActiveDeadlineSeconds
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property autoMatchImageCache: Specifies whether to automatically match the image cache.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoMatchImageCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoMatchImageCache
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cpu: CPU size.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cpu", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Cpu
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property dnsConfig: The information about DNS configurations.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dnsConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.DnsConfigProperty\"}]}}", isOptional: true)]
            public object? DnsConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property eipInstanceId: Elastic IP ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "eipInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EipInstanceId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property hostAliase: Customize the hostname mapping of a container inside the pod.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "hostAliase", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.HostAliaseProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? HostAliase
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageRegistryCredential", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ImageRegistryCredentialProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ImageRegistryCredential
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageSnapshotId: Image cache ID or snapshot ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageSnapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ImageSnapshotId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property initContainer: The containers that constitute the container group for initializing.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "initContainer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? InitContainer
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceType: The type of the ECS instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InstanceType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property ipv6AddressCount: The number of IPv6 addresses.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Ipv6AddressCount
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property memory: memory size.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "memory", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Memory
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property ramRoleName: The RAM role that the container group assumes.</summary>
            /// <remarks>
            /// ECI and ECS share the same RAM role.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ramRoleName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RamRoleName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property restartPolicy: The policy for restarting the instance.</summary>
            /// <remarks>
            /// Default value: Always.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restartPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RestartPolicy
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.</summary>
            /// <remarks>
            /// Currently only two Sysctl keyNames are supported:
            /// Kernel.shm_rmid_forced
            /// Kernel.msgmax
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityContextSysctl", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextSysctlProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityContextSysctl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property slsEnable: Enable user log collection.</summary>
            /// <remarks>
            /// The default is False.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slsEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlsEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotPriceLimit: Set the hourly maximum price of the instance.</summary>
            /// <remarks>
            /// It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? SpotPriceLimit
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property spotStrategy: Instance preemption strategy.</summary>
            /// <remarks>
            /// Ranges:
            /// NoSpot (default): normal pay-as-you-go instances.
            /// SpotWithPriceLimit: Preemptive instance that sets a cap price.
            /// SpotAsPriceGo: The system automatically bids, following the current market actual price.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotStrategy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SpotStrategy
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tag: The list of container group tags in the form of key/value pairs.</summary>
            /// <remarks>
            /// You can define a maximum of 20 tags for each container group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Tag
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "terminationGracePeriodSeconds", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? TerminationGracePeriodSeconds
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property volume: The data volume.</summary>
            /// <remarks>
            /// You can specify a maximum of 20 data volumes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "volume", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.VolumeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Volume
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The ID of the zone in which the instance resides.</summary>
            /// <remarks>
            /// If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ZoneId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
