package alicloudroscdkeci


// Properties for defining a `ContainerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-containergroup
type ContainerGroupProps struct {
	// Property container: The containers that constitute the container group.
	Container interface{} `field:"required" json:"container" yaml:"container"`
	// Property containerGroupName: The name of the container group.
	//
	// The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
	ContainerGroupName interface{} `field:"required" json:"containerGroupName" yaml:"containerGroupName"`
	// Property acrRegistryInfo: Enterprise Edition access credential configuration information.
	AcrRegistryInfo interface{} `field:"optional" json:"acrRegistryInfo" yaml:"acrRegistryInfo"`
	// Property activeDeadlineSeconds: The validity period in seconds.
	ActiveDeadlineSeconds interface{} `field:"optional" json:"activeDeadlineSeconds" yaml:"activeDeadlineSeconds"`
	// Property autoMatchImageCache: Specifies whether to automatically match the image cache.
	AutoMatchImageCache interface{} `field:"optional" json:"autoMatchImageCache" yaml:"autoMatchImageCache"`
	// Property cpu: CPU size.
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	// Property dnsConfig: The information about DNS configurations.
	DnsConfig interface{} `field:"optional" json:"dnsConfig" yaml:"dnsConfig"`
	// Property eipInstanceId: Elastic IP ID.
	EipInstanceId interface{} `field:"optional" json:"eipInstanceId" yaml:"eipInstanceId"`
	// Property hostAliase: Customize the hostname mapping of a container inside the pod.
	HostAliase interface{} `field:"optional" json:"hostAliase" yaml:"hostAliase"`
	// Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
	ImageRegistryCredential interface{} `field:"optional" json:"imageRegistryCredential" yaml:"imageRegistryCredential"`
	// Property imageSnapshotId: Image cache ID or snapshot ID.
	ImageSnapshotId interface{} `field:"optional" json:"imageSnapshotId" yaml:"imageSnapshotId"`
	// Property initContainer: The containers that constitute the container group for initializing.
	InitContainer interface{} `field:"optional" json:"initContainer" yaml:"initContainer"`
	// Property instanceType: The type of the ECS instance.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property ipv6AddressCount: The number of IPv6 addresses.
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	// Property memory: memory size.
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	// Property ramRoleName: The RAM role that the container group assumes.
	//
	// ECI and ECS share the same RAM role.
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property restartPolicy: The policy for restarting the instance.
	//
	// Default value: Always.
	RestartPolicy interface{} `field:"optional" json:"restartPolicy" yaml:"restartPolicy"`
	// Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.
	//
	// Currently only two Sysctl keyNames are supported:
	// Kernel.shm_rmid_forced
	// Kernel.msgmax
	SecurityContextSysctl interface{} `field:"optional" json:"securityContextSysctl" yaml:"securityContextSysctl"`
	// Property securityGroupId: The ID of the security group to which the instance belongs.
	//
	// Instances in the same security group can access one another.
	// If no security group is specified, the system automatically uses the default security group in the region you select.
	// If you do not have a default security group in this region, the system automatically creates a default security group and adds the container protocol and port you declared to the inbound direction rules of this security group.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property slsEnable: Enable user log collection.
	//
	// The default is False.
	SlsEnable interface{} `field:"optional" json:"slsEnable" yaml:"slsEnable"`
	// Property spotPriceLimit: Set the hourly maximum price of the instance.
	//
	// It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	// Property spotStrategy: Instance preemption strategy.
	//
	// Ranges:
	// NoSpot (default): normal pay-as-you-go instances.
	// SpotWithPriceLimit: Preemptive instance that sets a cap price.
	// SpotAsPriceGo: The system automatically bids, following the current market actual price.
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	// Property tag: The list of container group tags in the form of key\/value pairs.
	//
	// You can define a maximum of 20 tags for each container group.
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
	// Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
	TerminationGracePeriodSeconds interface{} `field:"optional" json:"terminationGracePeriodSeconds" yaml:"terminationGracePeriodSeconds"`
	// Property volume: The data volume.
	//
	// You can specify a maximum of 20 data volumes.
	Volume interface{} `field:"optional" json:"volume" yaml:"volume"`
	// Property vSwitchId: The ID of the specified VSwitch.
	//
	// If no switch is specified, the system automatically uses the default switch in the default VPC in the selected region.
	// If no default VPC or default switch is available in the region, the system automatically creates a default VPC and a default switch.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The ID of the zone in which the instance resides.
	//
	// If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

