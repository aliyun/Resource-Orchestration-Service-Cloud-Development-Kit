package alicloudroscdkecs


// Properties for defining a `InstanceClone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instanceclone
type InstanceCloneProps struct {
	// Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance.
	//
	// It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
	SourceInstanceId interface{} `field:"required" json:"sourceInstanceId" yaml:"sourceInstanceId"`
	// Property backendServerWeight: The weight of backend server of load balancer.
	//
	// From 0 to 100, 0 means offline. Default is 100.
	BackendServerWeight interface{} `field:"optional" json:"backendServerWeight" yaml:"backendServerWeight"`
	// Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance.
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	// Property description: Description of the instance, [2, 256] characters.
	//
	// Do not fill or empty, the default is empty.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property diskMappings: Disk mappings to attach to instance.
	//
	// Max support 16 disks.
	// If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
	DiskMappings interface{} `field:"optional" json:"diskMappings" yaml:"diskMappings"`
	// Property imageId: Image ID to create ecs instance.
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	// Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
	//
	// If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
	//
	// The range is [0,200], default is 200 Mbps.
	InternetMaxBandwidthIn interface{} `field:"optional" json:"internetMaxBandwidthIn" yaml:"internetMaxBandwidthIn"`
	// Property keyPairName: SSH key pair name.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property loadBalancerIdToAttach: After the instance is created.
	//
	// Automatic attach it to the load balancer.
	LoadBalancerIdToAttach interface{} `field:"optional" json:"loadBalancerIdToAttach" yaml:"loadBalancerIdToAttach"`
	// Property password: Password of created ecs instance.
	//
	// Must contain at least 3 types of special character, lower character, upper character, number.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property period: Prepaid time period.
	//
	// Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property ramRoleName: Instance RAM role name.
	//
	// The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityGroupId: Security group to create ecs instance.
	//
	// For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
	//
	// Three decimals is allowed at most.
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	// Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
	//
	// Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosInstanceClone_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property zoneId: The ID of the zone to which the instance belongs.
	//
	// For more information,
	// call the DescribeZones operation to query the most recent zone list.
	// Default value is empty, which means random selection.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

