using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci
{
    /// <summary>Properties for defining a `RosContainerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-containergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosContainerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroupProps")]
    public interface IRosContainerGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: container: The containers that constitute the container group.
        /// </remarks>
        [JsiiProperty(name: "container", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ContainerProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Container
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: containerGroupName: The name of the container group.
        /// The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
        /// </remarks>
        [JsiiProperty(name: "containerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ContainerGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: acrRegistryInfo: Enterprise Edition access credential configuration information.
        /// </remarks>
        [JsiiProperty(name: "acrRegistryInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.AcrRegistryInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AcrRegistryInfo
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: activeDeadlineSeconds: The validity period in seconds.
        /// </remarks>
        [JsiiProperty(name: "activeDeadlineSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ActiveDeadlineSeconds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoMatchImageCache: Specifies whether to automatically match the image cache.
        /// </remarks>
        [JsiiProperty(name: "autoMatchImageCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoMatchImageCache
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: cpu: CPU size
        /// </remarks>
        [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cpu
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dnsConfig: The information about DNS configurations.
        /// </remarks>
        [JsiiProperty(name: "dnsConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.DnsConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DnsConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: eipInstanceId: Elastic IP ID
        /// </remarks>
        [JsiiProperty(name: "eipInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EipInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: hostAliase: Customize the hostname mapping of a container inside the pod
        /// </remarks>
        [JsiiProperty(name: "hostAliase", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.HostAliaseProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostAliase
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
        /// </remarks>
        [JsiiProperty(name: "imageRegistryCredential", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ImageRegistryCredentialProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageRegistryCredential
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: imageSnapshotId: Image cache ID or snapshot ID.
        /// </remarks>
        [JsiiProperty(name: "imageSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageSnapshotId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: initContainer: The containers that constitute the container group for initializing.
        /// </remarks>
        [JsiiProperty(name: "initContainer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InitContainer
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: The type of the ECS instance.
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6AddressCount: The number of IPv6 addresses.
        /// </remarks>
        [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6AddressCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: memory: memory size
        /// </remarks>
        [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Memory
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
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

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
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

        /// <remarks>
        /// <strong>Property</strong>: restartPolicy: The policy for restarting the instance. Default value: Always.
        /// </remarks>
        [JsiiProperty(name: "restartPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestartPolicy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: securityContextSysctl: ECI Sysctl is valid for every container in ECI.
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

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
        /// If no security group is specified, the system automatically uses the default security group in the region you select.
        /// If you do not have a default security group in this region, the system automatically creates a default security group and adds the container protocol and port you declared to the inbound direction rules of this security group.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: slsEnable: Enable user log collection. The default is False.
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

        /// <remarks>
        /// <strong>Property</strong>: spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
        /// </remarks>
        [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotPriceLimit
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: spotStrategy: Instance preemption strategy.
        /// Ranges:
        /// NoSpot (default): normal pay-as-you-go instances.
        /// SpotWithPriceLimit: Preemptive instance that sets a cap price.
        /// SpotAsPriceGo: The system automatically bids, following the current market actual price.
        /// </remarks>
        [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpotStrategy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tag: The list of container group tags in the form of key\/value pairs. You can define a maximum of 20 tags for each container group.
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

        /// <remarks>
        /// <strong>Property</strong>: terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
        /// </remarks>
        [JsiiProperty(name: "terminationGracePeriodSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TerminationGracePeriodSeconds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: volume: The data volume. You can specify a maximum of 20 data volumes.
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

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the specified VSwitch.
        /// If no switch is specified, the system automatically uses the default switch in the default VPC in the selected region.
        /// If no default VPC or default switch is available in the region, the system automatically creates a default VPC and a default switch
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosContainerGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-containergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosContainerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosContainerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.IRosContainerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: container: The containers that constitute the container group.
            /// </remarks>
            [JsiiProperty(name: "container", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ContainerProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Container
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: containerGroupName: The name of the container group.
            /// The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
            /// </remarks>
            [JsiiProperty(name: "containerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ContainerGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: acrRegistryInfo: Enterprise Edition access credential configuration information.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "acrRegistryInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.AcrRegistryInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AcrRegistryInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: activeDeadlineSeconds: The validity period in seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "activeDeadlineSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ActiveDeadlineSeconds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoMatchImageCache: Specifies whether to automatically match the image cache.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoMatchImageCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoMatchImageCache
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: cpu: CPU size
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cpu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dnsConfig: The information about DNS configurations.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dnsConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.DnsConfigProperty\"}]}}", isOptional: true)]
            public object? DnsConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: eipInstanceId: Elastic IP ID
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eipInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EipInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: hostAliase: Customize the hostname mapping of a container inside the pod
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostAliase", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.HostAliaseProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? HostAliase
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageRegistryCredential", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.ImageRegistryCredentialProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ImageRegistryCredential
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageSnapshotId: Image cache ID or snapshot ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageSnapshotId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: initContainer: The containers that constitute the container group for initializing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "initContainer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? InitContainer
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The type of the ECS instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6AddressCount: The number of IPv6 addresses.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6AddressCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: memory: memory size
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Memory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ramRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RamRoleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: restartPolicy: The policy for restarting the instance. Default value: Always.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restartPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestartPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityContextSysctl: ECI Sysctl is valid for every container in ECI.
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

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
            /// If no security group is specified, the system automatically uses the default security group in the region you select.
            /// If you do not have a default security group in this region, the system automatically creates a default security group and adds the container protocol and port you declared to the inbound direction rules of this security group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: slsEnable: Enable user log collection. The default is False.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slsEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlsEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotPriceLimit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: spotStrategy: Instance preemption strategy.
            /// Ranges:
            /// NoSpot (default): normal pay-as-you-go instances.
            /// SpotWithPriceLimit: Preemptive instance that sets a cap price.
            /// SpotAsPriceGo: The system automatically bids, following the current market actual price.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tag: The list of container group tags in the form of key\/value pairs. You can define a maximum of 20 tags for each container group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Tag
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "terminationGracePeriodSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TerminationGracePeriodSeconds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: volume: The data volume. You can specify a maximum of 20 data volumes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "volume", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosContainerGroup.VolumeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Volume
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the specified VSwitch.
            /// If no switch is specified, the system automatically uses the default switch in the default VPC in the selected region.
            /// If no default VPC or default switch is available in the region, the system automatically creates a default VPC and a default switch
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
