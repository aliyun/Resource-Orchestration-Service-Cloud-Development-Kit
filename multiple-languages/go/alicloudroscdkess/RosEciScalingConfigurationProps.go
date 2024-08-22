package alicloudroscdkess


// Properties for defining a `RosEciScalingConfiguration`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-eciscalingconfiguration
type RosEciScalingConfigurationProps struct {
	ContainerGroupName interface{} `field:"required" json:"containerGroupName" yaml:"containerGroupName"`
	ScalingConfigurationName interface{} `field:"required" json:"scalingConfigurationName" yaml:"scalingConfigurationName"`
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	AcrRegistryInfos interface{} `field:"optional" json:"acrRegistryInfos" yaml:"acrRegistryInfos"`
	ActiveDeadlineSeconds interface{} `field:"optional" json:"activeDeadlineSeconds" yaml:"activeDeadlineSeconds"`
	AutoCreateEip interface{} `field:"optional" json:"autoCreateEip" yaml:"autoCreateEip"`
	AutoMatchImageCache interface{} `field:"optional" json:"autoMatchImageCache" yaml:"autoMatchImageCache"`
	Containers interface{} `field:"optional" json:"containers" yaml:"containers"`
	CostOptimization interface{} `field:"optional" json:"costOptimization" yaml:"costOptimization"`
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	CpuOptionsCore interface{} `field:"optional" json:"cpuOptionsCore" yaml:"cpuOptionsCore"`
	CpuOptionsThreadsPerCore interface{} `field:"optional" json:"cpuOptionsThreadsPerCore" yaml:"cpuOptionsThreadsPerCore"`
	DataCacheBucket interface{} `field:"optional" json:"dataCacheBucket" yaml:"dataCacheBucket"`
	DataCacheBurstingEnabled interface{} `field:"optional" json:"dataCacheBurstingEnabled" yaml:"dataCacheBurstingEnabled"`
	DataCachePl interface{} `field:"optional" json:"dataCachePl" yaml:"dataCachePl"`
	DataCacheProvisionedIops interface{} `field:"optional" json:"dataCacheProvisionedIops" yaml:"dataCacheProvisionedIops"`
	DnsConfigNameServers interface{} `field:"optional" json:"dnsConfigNameServers" yaml:"dnsConfigNameServers"`
	DnsConfigOptions interface{} `field:"optional" json:"dnsConfigOptions" yaml:"dnsConfigOptions"`
	DnsConfigSearches interface{} `field:"optional" json:"dnsConfigSearches" yaml:"dnsConfigSearches"`
	DnsPolicy interface{} `field:"optional" json:"dnsPolicy" yaml:"dnsPolicy"`
	EgressBandwidth interface{} `field:"optional" json:"egressBandwidth" yaml:"egressBandwidth"`
	EipBandwidth interface{} `field:"optional" json:"eipBandwidth" yaml:"eipBandwidth"`
	EphemeralStorage interface{} `field:"optional" json:"ephemeralStorage" yaml:"ephemeralStorage"`
	HostAliases interface{} `field:"optional" json:"hostAliases" yaml:"hostAliases"`
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	ImageRegistryCredentials interface{} `field:"optional" json:"imageRegistryCredentials" yaml:"imageRegistryCredentials"`
	ImageSnapshotId interface{} `field:"optional" json:"imageSnapshotId" yaml:"imageSnapshotId"`
	IngressBandwidth interface{} `field:"optional" json:"ingressBandwidth" yaml:"ingressBandwidth"`
	InitContainers interface{} `field:"optional" json:"initContainers" yaml:"initContainers"`
	InstanceFamilyLevel interface{} `field:"optional" json:"instanceFamilyLevel" yaml:"instanceFamilyLevel"`
	InstanceTypes interface{} `field:"optional" json:"instanceTypes" yaml:"instanceTypes"`
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	LoadBalancerWeight interface{} `field:"optional" json:"loadBalancerWeight" yaml:"loadBalancerWeight"`
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	NtpServers interface{} `field:"optional" json:"ntpServers" yaml:"ntpServers"`
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RestartPolicy interface{} `field:"optional" json:"restartPolicy" yaml:"restartPolicy"`
	SecurityContextSysctls interface{} `field:"optional" json:"securityContextSysctls" yaml:"securityContextSysctls"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	Tags *[]*RosEciScalingConfiguration_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TerminationGracePeriodSeconds interface{} `field:"optional" json:"terminationGracePeriodSeconds" yaml:"terminationGracePeriodSeconds"`
	Volumes interface{} `field:"optional" json:"volumes" yaml:"volumes"`
}

