package alicloudroscdkeci


// Properties for defining a `RosContainerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-containergroup
type RosContainerGroupProps struct {
	Container interface{} `field:"required" json:"container" yaml:"container"`
	ContainerGroupName interface{} `field:"required" json:"containerGroupName" yaml:"containerGroupName"`
	AcrRegistryInfo interface{} `field:"optional" json:"acrRegistryInfo" yaml:"acrRegistryInfo"`
	ActiveDeadlineSeconds interface{} `field:"optional" json:"activeDeadlineSeconds" yaml:"activeDeadlineSeconds"`
	AutoMatchImageCache interface{} `field:"optional" json:"autoMatchImageCache" yaml:"autoMatchImageCache"`
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	DnsConfig interface{} `field:"optional" json:"dnsConfig" yaml:"dnsConfig"`
	EipInstanceId interface{} `field:"optional" json:"eipInstanceId" yaml:"eipInstanceId"`
	HostAliase interface{} `field:"optional" json:"hostAliase" yaml:"hostAliase"`
	ImageRegistryCredential interface{} `field:"optional" json:"imageRegistryCredential" yaml:"imageRegistryCredential"`
	ImageSnapshotId interface{} `field:"optional" json:"imageSnapshotId" yaml:"imageSnapshotId"`
	InitContainer interface{} `field:"optional" json:"initContainer" yaml:"initContainer"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RestartPolicy interface{} `field:"optional" json:"restartPolicy" yaml:"restartPolicy"`
	SecurityContextSysctl interface{} `field:"optional" json:"securityContextSysctl" yaml:"securityContextSysctl"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SlsEnable interface{} `field:"optional" json:"slsEnable" yaml:"slsEnable"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
	TerminationGracePeriodSeconds interface{} `field:"optional" json:"terminationGracePeriodSeconds" yaml:"terminationGracePeriodSeconds"`
	Volume interface{} `field:"optional" json:"volume" yaml:"volume"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

