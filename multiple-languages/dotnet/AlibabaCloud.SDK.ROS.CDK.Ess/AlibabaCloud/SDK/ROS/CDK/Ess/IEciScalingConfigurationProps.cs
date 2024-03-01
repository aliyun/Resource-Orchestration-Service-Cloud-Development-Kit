using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `EciScalingConfiguration`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-eciscalingconfiguration
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEciScalingConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.EciScalingConfigurationProps")]
    public interface IEciScalingConfigurationProps
    {
        /// <summary>Property containerGroupName: The name of the elastic container instance.</summary>
        [JsiiProperty(name: "containerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ContainerGroupName
        {
            get;
        }

        /// <summary>Property scalingConfigurationName: The name of the scaling configuration.</summary>
        /// <remarks>
        /// The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
        /// The name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used.
        /// </remarks>
        [JsiiProperty(name: "scalingConfigurationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingConfigurationName
        {
            get;
        }

        /// <summary>Property scalingGroupId: The ID of the scaling group for which you want to create the scaling configuration.</summary>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingGroupId
        {
            get;
        }

        /// <summary>Property securityGroupId: The ID of the security group with which you want to associate the elastic container instance.</summary>
        /// <remarks>
        /// Elastic container instances that are associated with the same security group can access each other.
        /// If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and the port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group and adds the declared container protocols and port numbers to the inbound rules of the security group.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityGroupId
        {
            get;
        }

        /// <summary>Property acrRegistryInfos:.</summary>
        [JsiiProperty(name: "acrRegistryInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.AcrRegistryInfosProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AcrRegistryInfos
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property activeDeadlineSeconds: The validity period of the scaling configuration.</summary>
        /// <remarks>
        /// Unit: seconds.
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

        /// <summary>Property autoCreateEip: Specifies whether to automatically create an elastic IP address (EIP) and bind the EIP to the elastic container instance.</summary>
        [JsiiProperty(name: "autoCreateEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoCreateEip
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoMatchImageCache: Specifies whether to automatically match the image cache.</summary>
        /// <remarks>
        /// Valid values:
        /// true
        /// false
        /// Default value: false.
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

        /// <summary>Property containers:.</summary>
        [JsiiProperty(name: "containers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.ContainersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Containers
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property costOptimization: Specifies whether to enable the Cost Optimization feature.</summary>
        /// <remarks>
        /// Valid values:
        /// true
        /// false
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "costOptimization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CostOptimization
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cpu: The number of vCPUs that you want to allocate to the elastic container instance.</summary>
        [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cpu
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cpuOptionsCore: The number of physical CPU cores.</summary>
        /// <remarks>
        /// You can specify this parameter for only specific instance types. For more information, see Specify custom CPU options.
        /// </remarks>
        [JsiiProperty(name: "cpuOptionsCore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CpuOptionsCore
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cpuOptionsThreadsPerCore: The number of threads per core.</summary>
        /// <remarks>
        /// You can specify this parameter for only specific instance types. If you set this parameter to 1, Hyper-Threading is disabled. For more information, see Specify custom CPU options.
        /// </remarks>
        [JsiiProperty(name: "cpuOptionsThreadsPerCore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CpuOptionsThreadsPerCore
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataCacheBucket: The bucket that stores data caches.</summary>
        [JsiiProperty(name: "dataCacheBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataCacheBucket
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataCacheBurstingEnabled: Specifies whether to enable the Performance Burst feature for the ESSD AutoPL disk used for data caching.</summary>
        /// <remarks>
        /// Valid values:
        /// true
        /// false
        /// Default value: false.
        /// Note
        /// For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
        /// </remarks>
        [JsiiProperty(name: "dataCacheBurstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataCacheBurstingEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataCachePl: The performance level (PL) of the disk used for data caching.</summary>
        /// <remarks>
        /// We recommend that you use ESSDs. Valid values if you use ESSDs:
        /// PL0: An ESSD can provide up to 10,000 random read/write IOPS.
        /// PL1: An ESSD can provide up to 50,000 random read/write IOPS.
        /// PL2: An ESSD can provide up to 100,000 random read/write IOPS.
        /// PL3: An ESSD can provide up to 1,000,000 random read/write IOPS.
        /// Default value: PL1.
        /// Note
        /// For more information about ESSDs, see ESSDs.
        /// </remarks>
        [JsiiProperty(name: "dataCachePl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataCachePl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataCacheProvisionedIops: The IOPS provisioned for the ESSD AutoPL disk used for data caching.</summary>
        /// <remarks>
        /// Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}, where Baseline IOPS = min{1800 + 50 × Capacity - 50000}.
        /// Note
        /// For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
        /// </remarks>
        [JsiiProperty(name: "dataCacheProvisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataCacheProvisionedIops
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dnsConfigNameServers: The IP addresses of the DNS servers.</summary>
        [JsiiProperty(name: "dnsConfigNameServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DnsConfigNameServers
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dnsConfigOptions:.</summary>
        [JsiiProperty(name: "dnsConfigOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.DnsConfigOptionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DnsConfigOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dnsConfigSearches: The search domains of the DNS server.</summary>
        [JsiiProperty(name: "dnsConfigSearches", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DnsConfigSearches
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dnsPolicy: The Domain Name System (DNS) policy.</summary>
        /// <remarks>
        /// Valid values:
        /// None: uses the DNS that is specified by DnsConfig.
        /// Default: uses the DNS that is specified for the runtime environment.
        /// </remarks>
        [JsiiProperty(name: "dnsPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DnsPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property egressBandwidth: The maximum outbound bandwidth.</summary>
        /// <remarks>
        /// Unit: bytes.
        /// </remarks>
        [JsiiProperty(name: "egressBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EgressBandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property eipBandwidth: The bandwidth of the EIP.</summary>
        /// <remarks>
        /// Default value: 5. Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "eipBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EipBandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ephemeralStorage: The size of the temporary storage space.</summary>
        /// <remarks>
        /// By default, an enhanced SSD (ESSD) of the PL1 level is used. Unit: GiB.
        /// </remarks>
        [JsiiProperty(name: "ephemeralStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EphemeralStorage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hostAliases:.</summary>
        [JsiiProperty(name: "hostAliases", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.HostAliasesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostAliases
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hostName: The hostname of the elastic container instance.</summary>
        [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageRegistryCredentials:.</summary>
        [JsiiProperty(name: "imageRegistryCredentials", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.ImageRegistryCredentialsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageRegistryCredentials
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageSnapshotId: The ID of the image cache snapshot.</summary>
        [JsiiProperty(name: "imageSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageSnapshotId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ingressBandwidth: The maximum inbound bandwidth.</summary>
        /// <remarks>
        /// Unit: bytes.
        /// </remarks>
        [JsiiProperty(name: "ingressBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IngressBandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property initContainers:.</summary>
        [JsiiProperty(name: "initContainers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.InitContainersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InitContainers
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceFamilyLevel: The level of the instance family.</summary>
        /// <remarks>
        /// You can use this parameter to filter instance types that meet the specified criteria. This parameter takes effect only if you set CostOptimization to true. Valid values:
        /// EntryLevel: entry level (shared instance types) Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for scenarios in which CPU utilization is low. For more information, see Shared instance families.
        /// EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see Overview of instance families.
        /// CreditEntryLevel: credit entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for business scenarios in which CPU utilization is low but may fluctuate in specific scenarios. For more information, see Overview of burstable instances.
        /// </remarks>
        [JsiiProperty(name: "instanceFamilyLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceFamilyLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceTypes: The specified ECS instance types.</summary>
        /// <remarks>
        /// You can specify up to five ECS instance types. For more information, see Specify ECS instance types to create an elastic container instance.
        /// </remarks>
        [JsiiProperty(name: "instanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceTypes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6AddressCount: The number of IPv6 addresses.</summary>
        [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6AddressCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerWeight: The weight of the elastic container instance as a backend server.</summary>
        /// <remarks>
        /// Valid values: 1 to 100.
        /// Default value: 50.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerWeight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerWeight
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property memory: The memory size that you want to allocate to the elastic container instance.</summary>
        /// <remarks>
        /// Unit: GiB.
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

        /// <summary>Property ntpServers: The Network Time Protocol (NTP) server.</summary>
        [JsiiProperty(name: "ntpServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NtpServers
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ramRoleName: The name of the Resource Access Management (RAM) role that you want to assign to the elastic container instance.</summary>
        /// <remarks>
        /// Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see Use an instance RAM role by calling API operations.
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

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property restartPolicy: The restart policy of the elastic container instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Always: always restarts the elastic container instance.
        /// Never: never restarts the elastic container instance.
        /// OnFailure: restarts the elastic container instance upon failures.
        /// Default value: Always.
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

        /// <summary>Property securityContextSysctls:.</summary>
        [JsiiProperty(name: "securityContextSysctls", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.SecurityContextSysctlsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityContextSysctls
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property spotPriceLimit: The maximum hourly price of the preemptible elastic container instance.</summary>
        /// <remarks>
        /// The value can be accurate to three decimal places.
        /// If you set SpotStrategy to SpotWithPriceLimit, you must specify SpotPriceLimit.
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

        /// <summary>Property spotStrategy: The bidding policy of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// NoSpot: The instance is created as a pay-as-you-go instance.
        /// SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
        /// SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is used as the bid price.
        /// Default value: NoSpot.
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

        /// <summary>Property tags:.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ess.RosEciScalingConfiguration.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property terminationGracePeriodSeconds: The buffer period during which a program handles operations before the program is stopped.</summary>
        /// <remarks>
        /// Unit: seconds.
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

        /// <summary>Property volumes:.</summary>
        [JsiiProperty(name: "volumes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.VolumesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Volumes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `EciScalingConfiguration`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-eciscalingconfiguration
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEciScalingConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.EciScalingConfigurationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IEciScalingConfigurationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property containerGroupName: The name of the elastic container instance.</summary>
            [JsiiProperty(name: "containerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ContainerGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scalingConfigurationName: The name of the scaling configuration.</summary>
            /// <remarks>
            /// The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
            /// The name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used.
            /// </remarks>
            [JsiiProperty(name: "scalingConfigurationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScalingConfigurationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scalingGroupId: The ID of the scaling group for which you want to create the scaling configuration.</summary>
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScalingGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property securityGroupId: The ID of the security group with which you want to associate the elastic container instance.</summary>
            /// <remarks>
            /// Elastic container instances that are associated with the same security group can access each other.
            /// If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and the port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group and adds the declared container protocols and port numbers to the inbound rules of the security group.
            /// </remarks>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property acrRegistryInfos:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "acrRegistryInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.AcrRegistryInfosProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AcrRegistryInfos
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property activeDeadlineSeconds: The validity period of the scaling configuration.</summary>
            /// <remarks>
            /// Unit: seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "activeDeadlineSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ActiveDeadlineSeconds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoCreateEip: Specifies whether to automatically create an elastic IP address (EIP) and bind the EIP to the elastic container instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoCreateEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoCreateEip
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoMatchImageCache: Specifies whether to automatically match the image cache.</summary>
            /// <remarks>
            /// Valid values:
            /// true
            /// false
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoMatchImageCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoMatchImageCache
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property containers:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "containers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.ContainersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Containers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property costOptimization: Specifies whether to enable the Cost Optimization feature.</summary>
            /// <remarks>
            /// Valid values:
            /// true
            /// false
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "costOptimization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CostOptimization
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cpu: The number of vCPUs that you want to allocate to the elastic container instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cpu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cpuOptionsCore: The number of physical CPU cores.</summary>
            /// <remarks>
            /// You can specify this parameter for only specific instance types. For more information, see Specify custom CPU options.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpuOptionsCore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CpuOptionsCore
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cpuOptionsThreadsPerCore: The number of threads per core.</summary>
            /// <remarks>
            /// You can specify this parameter for only specific instance types. If you set this parameter to 1, Hyper-Threading is disabled. For more information, see Specify custom CPU options.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpuOptionsThreadsPerCore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CpuOptionsThreadsPerCore
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataCacheBucket: The bucket that stores data caches.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataCacheBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataCacheBucket
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataCacheBurstingEnabled: Specifies whether to enable the Performance Burst feature for the ESSD AutoPL disk used for data caching.</summary>
            /// <remarks>
            /// Valid values:
            /// true
            /// false
            /// Default value: false.
            /// Note
            /// For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataCacheBurstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataCacheBurstingEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataCachePl: The performance level (PL) of the disk used for data caching.</summary>
            /// <remarks>
            /// We recommend that you use ESSDs. Valid values if you use ESSDs:
            /// PL0: An ESSD can provide up to 10,000 random read/write IOPS.
            /// PL1: An ESSD can provide up to 50,000 random read/write IOPS.
            /// PL2: An ESSD can provide up to 100,000 random read/write IOPS.
            /// PL3: An ESSD can provide up to 1,000,000 random read/write IOPS.
            /// Default value: PL1.
            /// Note
            /// For more information about ESSDs, see ESSDs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataCachePl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataCachePl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataCacheProvisionedIops: The IOPS provisioned for the ESSD AutoPL disk used for data caching.</summary>
            /// <remarks>
            /// Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}, where Baseline IOPS = min{1800 + 50 × Capacity - 50000}.
            /// Note
            /// For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataCacheProvisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataCacheProvisionedIops
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dnsConfigNameServers: The IP addresses of the DNS servers.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dnsConfigNameServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DnsConfigNameServers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dnsConfigOptions:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dnsConfigOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.DnsConfigOptionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DnsConfigOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dnsConfigSearches: The search domains of the DNS server.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dnsConfigSearches", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DnsConfigSearches
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dnsPolicy: The Domain Name System (DNS) policy.</summary>
            /// <remarks>
            /// Valid values:
            /// None: uses the DNS that is specified by DnsConfig.
            /// Default: uses the DNS that is specified for the runtime environment.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dnsPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DnsPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property egressBandwidth: The maximum outbound bandwidth.</summary>
            /// <remarks>
            /// Unit: bytes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "egressBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EgressBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property eipBandwidth: The bandwidth of the EIP.</summary>
            /// <remarks>
            /// Default value: 5. Unit: Mbit/s.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eipBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EipBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ephemeralStorage: The size of the temporary storage space.</summary>
            /// <remarks>
            /// By default, an enhanced SSD (ESSD) of the PL1 level is used. Unit: GiB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ephemeralStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EphemeralStorage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hostAliases:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "hostAliases", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.HostAliasesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? HostAliases
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hostName: The hostname of the elastic container instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageRegistryCredentials:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageRegistryCredentials", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.ImageRegistryCredentialsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ImageRegistryCredentials
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageSnapshotId: The ID of the image cache snapshot.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageSnapshotId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ingressBandwidth: The maximum inbound bandwidth.</summary>
            /// <remarks>
            /// Unit: bytes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ingressBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IngressBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property initContainers:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "initContainers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.InitContainersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? InitContainers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceFamilyLevel: The level of the instance family.</summary>
            /// <remarks>
            /// You can use this parameter to filter instance types that meet the specified criteria. This parameter takes effect only if you set CostOptimization to true. Valid values:
            /// EntryLevel: entry level (shared instance types) Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for scenarios in which CPU utilization is low. For more information, see Shared instance families.
            /// EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see Overview of instance families.
            /// CreditEntryLevel: credit entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for business scenarios in which CPU utilization is low but may fluctuate in specific scenarios. For more information, see Overview of burstable instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceFamilyLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceFamilyLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceTypes: The specified ECS instance types.</summary>
            /// <remarks>
            /// You can specify up to five ECS instance types. For more information, see Specify ECS instance types to create an elastic container instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? InstanceTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6AddressCount: The number of IPv6 addresses.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6AddressCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerWeight: The weight of the elastic container instance as a backend server.</summary>
            /// <remarks>
            /// Valid values: 1 to 100.
            /// Default value: 50.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerWeight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerWeight
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property memory: The memory size that you want to allocate to the elastic container instance.</summary>
            /// <remarks>
            /// Unit: GiB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Memory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ntpServers: The Network Time Protocol (NTP) server.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ntpServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? NtpServers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ramRoleName: The name of the Resource Access Management (RAM) role that you want to assign to the elastic container instance.</summary>
            /// <remarks>
            /// Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see Use an instance RAM role by calling API operations.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ramRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RamRoleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property restartPolicy: The restart policy of the elastic container instance.</summary>
            /// <remarks>
            /// Valid values:
            /// Always: always restarts the elastic container instance.
            /// Never: never restarts the elastic container instance.
            /// OnFailure: restarts the elastic container instance upon failures.
            /// Default value: Always.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restartPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestartPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityContextSysctls:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityContextSysctls", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.SecurityContextSysctlsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityContextSysctls
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotPriceLimit: The maximum hourly price of the preemptible elastic container instance.</summary>
            /// <remarks>
            /// The value can be accurate to three decimal places.
            /// If you set SpotStrategy to SpotWithPriceLimit, you must specify SpotPriceLimit.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotPriceLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotPriceLimit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spotStrategy: The bidding policy of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// NoSpot: The instance is created as a pay-as-you-go instance.
            /// SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
            /// SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is used as the bid price.
            /// Default value: NoSpot.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spotStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpotStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ess.RosEciScalingConfiguration.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ess.RosEciScalingConfiguration.ITagsProperty[]?>();
            }

            /// <summary>Property terminationGracePeriodSeconds: The buffer period during which a program handles operations before the program is stopped.</summary>
            /// <remarks>
            /// Unit: seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "terminationGracePeriodSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TerminationGracePeriodSeconds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property volumes:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "volumes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosEciScalingConfiguration.VolumesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Volumes
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
