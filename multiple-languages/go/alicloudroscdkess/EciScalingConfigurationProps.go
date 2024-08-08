package alicloudroscdkess


// Properties for defining a `EciScalingConfiguration`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-eciscalingconfiguration
type EciScalingConfigurationProps struct {
	// Property containerGroupName: The name of the elastic container instance.
	ContainerGroupName interface{} `field:"required" json:"containerGroupName" yaml:"containerGroupName"`
	// Property scalingConfigurationName: The name of the scaling configuration.
	//
	// The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
	// The name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used.
	ScalingConfigurationName interface{} `field:"required" json:"scalingConfigurationName" yaml:"scalingConfigurationName"`
	// Property scalingGroupId: The ID of the scaling group for which you want to create the scaling configuration.
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	// Property securityGroupId: The ID of the security group with which you want to associate the elastic container instance.
	//
	// Elastic container instances that are associated with the same security group can access each other.
	// If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and the port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group and adds the declared container protocols and port numbers to the inbound rules of the security group.
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	// Property acrRegistryInfos:.
	AcrRegistryInfos interface{} `field:"optional" json:"acrRegistryInfos" yaml:"acrRegistryInfos"`
	// Property activeDeadlineSeconds: The validity period of the scaling configuration.
	//
	// Unit: seconds.
	ActiveDeadlineSeconds interface{} `field:"optional" json:"activeDeadlineSeconds" yaml:"activeDeadlineSeconds"`
	// Property autoCreateEip: Specifies whether to automatically create an elastic IP address (EIP) and bind the EIP to the elastic container instance.
	AutoCreateEip interface{} `field:"optional" json:"autoCreateEip" yaml:"autoCreateEip"`
	// Property autoMatchImageCache: Specifies whether to automatically match the image cache.
	//
	// Valid values:
	// true
	// false
	// Default value: false.
	AutoMatchImageCache interface{} `field:"optional" json:"autoMatchImageCache" yaml:"autoMatchImageCache"`
	// Property containers:.
	Containers interface{} `field:"optional" json:"containers" yaml:"containers"`
	// Property costOptimization: Specifies whether to enable the Cost Optimization feature.
	//
	// Valid values:
	// true
	// false
	// Default value: false.
	CostOptimization interface{} `field:"optional" json:"costOptimization" yaml:"costOptimization"`
	// Property cpu: The number of vCPUs that you want to allocate to the elastic container instance.
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	// Property cpuOptionsCore: The number of physical CPU cores.
	//
	// You can specify this parameter for only specific instance types. For more information, see Specify custom CPU options.
	CpuOptionsCore interface{} `field:"optional" json:"cpuOptionsCore" yaml:"cpuOptionsCore"`
	// Property cpuOptionsThreadsPerCore: The number of threads per core.
	//
	// You can specify this parameter for only specific instance types. If you set this parameter to 1, Hyper-Threading is disabled. For more information, see Specify custom CPU options.
	CpuOptionsThreadsPerCore interface{} `field:"optional" json:"cpuOptionsThreadsPerCore" yaml:"cpuOptionsThreadsPerCore"`
	// Property dataCacheBucket: The bucket that stores data caches.
	DataCacheBucket interface{} `field:"optional" json:"dataCacheBucket" yaml:"dataCacheBucket"`
	// Property dataCacheBurstingEnabled: Specifies whether to enable the Performance Burst feature for the ESSD AutoPL disk used for data caching.
	//
	// Valid values:
	// true
	// false
	// Default value: false.
	// Note
	// For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
	DataCacheBurstingEnabled interface{} `field:"optional" json:"dataCacheBurstingEnabled" yaml:"dataCacheBurstingEnabled"`
	// Property dataCachePl: The performance level (PL) of the disk used for data caching.
	//
	// We recommend that you use ESSDs. Valid values if you use ESSDs:
	// PL0: An ESSD can provide up to 10,000 random read\/write IOPS.
	// PL1: An ESSD can provide up to 50,000 random read\/write IOPS.
	// PL2: An ESSD can provide up to 100,000 random read\/write IOPS.
	// PL3: An ESSD can provide up to 1,000,000 random read\/write IOPS.
	// Default value: PL1.
	// Note
	// For more information about ESSDs, see ESSDs.
	DataCachePl interface{} `field:"optional" json:"dataCachePl" yaml:"dataCachePl"`
	// Property dataCacheProvisionedIops: The IOPS provisioned for the ESSD AutoPL disk used for data caching.
	//
	// Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}, where Baseline IOPS = min{1800 + 50 × Capacity - 50000}.
	// Note
	// For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
	DataCacheProvisionedIops interface{} `field:"optional" json:"dataCacheProvisionedIops" yaml:"dataCacheProvisionedIops"`
	// Property dnsConfigNameServers: The IP addresses of the DNS servers.
	DnsConfigNameServers interface{} `field:"optional" json:"dnsConfigNameServers" yaml:"dnsConfigNameServers"`
	// Property dnsConfigOptions:.
	DnsConfigOptions interface{} `field:"optional" json:"dnsConfigOptions" yaml:"dnsConfigOptions"`
	// Property dnsConfigSearches: The search domains of the DNS server.
	DnsConfigSearches interface{} `field:"optional" json:"dnsConfigSearches" yaml:"dnsConfigSearches"`
	// Property dnsPolicy: The Domain Name System (DNS) policy.
	//
	// Valid values:
	// None: uses the DNS that is specified by DnsConfig.
	// Default: uses the DNS that is specified for the runtime environment.
	DnsPolicy interface{} `field:"optional" json:"dnsPolicy" yaml:"dnsPolicy"`
	// Property egressBandwidth: The maximum outbound bandwidth.
	//
	// Unit: bytes.
	EgressBandwidth interface{} `field:"optional" json:"egressBandwidth" yaml:"egressBandwidth"`
	// Property eipBandwidth: The bandwidth of the EIP.
	//
	// Default value: 5. Unit: Mbit\/s.
	EipBandwidth interface{} `field:"optional" json:"eipBandwidth" yaml:"eipBandwidth"`
	// Property ephemeralStorage: The size of the temporary storage space.
	//
	// By default, an enhanced SSD (ESSD) of the PL1 level is used. Unit: GiB.
	EphemeralStorage interface{} `field:"optional" json:"ephemeralStorage" yaml:"ephemeralStorage"`
	// Property hostAliases:.
	HostAliases interface{} `field:"optional" json:"hostAliases" yaml:"hostAliases"`
	// Property hostName: The hostname of the elastic container instance.
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	// Property imageRegistryCredentials:.
	ImageRegistryCredentials interface{} `field:"optional" json:"imageRegistryCredentials" yaml:"imageRegistryCredentials"`
	// Property imageSnapshotId: The ID of the image cache snapshot.
	ImageSnapshotId interface{} `field:"optional" json:"imageSnapshotId" yaml:"imageSnapshotId"`
	// Property ingressBandwidth: The maximum inbound bandwidth.
	//
	// Unit: bytes.
	IngressBandwidth interface{} `field:"optional" json:"ingressBandwidth" yaml:"ingressBandwidth"`
	// Property initContainers:.
	InitContainers interface{} `field:"optional" json:"initContainers" yaml:"initContainers"`
	// Property instanceFamilyLevel: The level of the instance family.
	//
	// You can use this parameter to filter instance types that meet the specified criteria. This parameter takes effect only if you set CostOptimization to true. Valid values:
	// EntryLevel: entry level (shared instance types) Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for scenarios in which CPU utilization is low. For more information, see Shared instance families.
	// EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see Overview of instance families.
	// CreditEntryLevel: credit entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for business scenarios in which CPU utilization is low but may fluctuate in specific scenarios. For more information, see Overview of burstable instances.
	InstanceFamilyLevel interface{} `field:"optional" json:"instanceFamilyLevel" yaml:"instanceFamilyLevel"`
	// Property instanceTypes: The specified ECS instance types.
	//
	// You can specify up to five ECS instance types. For more information, see Specify ECS instance types to create an elastic container instance.
	InstanceTypes interface{} `field:"optional" json:"instanceTypes" yaml:"instanceTypes"`
	// Property ipv6AddressCount: The number of IPv6 addresses.
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	// Property loadBalancerWeight: The weight of the elastic container instance as a backend server.
	//
	// Valid values: 1 to 100.
	// Default value: 50.
	LoadBalancerWeight interface{} `field:"optional" json:"loadBalancerWeight" yaml:"loadBalancerWeight"`
	// Property memory: The memory size that you want to allocate to the elastic container instance.
	//
	// Unit: GiB.
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	// Property ntpServers: The Network Time Protocol (NTP) server.
	NtpServers interface{} `field:"optional" json:"ntpServers" yaml:"ntpServers"`
	// Property ramRoleName: The name of the Resource Access Management (RAM) role that you want to assign to the elastic container instance.
	//
	// Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see Use an instance RAM role by calling API operations.
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property restartPolicy: The restart policy of the elastic container instance.
	//
	// Valid values:
	// Always: always restarts the elastic container instance.
	// Never: never restarts the elastic container instance.
	// OnFailure: restarts the elastic container instance upon failures.
	// Default value: Always.
	RestartPolicy interface{} `field:"optional" json:"restartPolicy" yaml:"restartPolicy"`
	// Property securityContextSysctls:.
	SecurityContextSysctls interface{} `field:"optional" json:"securityContextSysctls" yaml:"securityContextSysctls"`
	// Property spotPriceLimit: The maximum hourly price of the preemptible elastic container instance.
	//
	// The value can be accurate to three decimal places.
	// If you set SpotStrategy to SpotWithPriceLimit, you must specify SpotPriceLimit.
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	// Property spotStrategy: The bidding policy of the instance.
	//
	// Valid values:
	// NoSpot: The instance is created as a pay-as-you-go instance.
	// SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
	// SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is used as the bid price.
	// Default value: NoSpot.
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	// Property tags:.
	Tags *[]*RosEciScalingConfiguration_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property terminationGracePeriodSeconds: The buffer period during which a program handles operations before the program is stopped.
	//
	// Unit: seconds.
	TerminationGracePeriodSeconds interface{} `field:"optional" json:"terminationGracePeriodSeconds" yaml:"terminationGracePeriodSeconds"`
	// Property volumes:.
	Volumes interface{} `field:"optional" json:"volumes" yaml:"volumes"`
}

