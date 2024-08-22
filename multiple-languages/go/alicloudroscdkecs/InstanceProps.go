package alicloudroscdkecs


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instance
type InstanceProps struct {
	// Property instanceType: Ecs instance supported instance type, make sure it should be correct.
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	// Property affinity: Specifies whether to associate the instance on a dedicated host with the dedicated host.
	//
	// Valid values:
	// - **default**: does not associate the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool if the available resources of the original dedicated host are insufficient.
	// - **host**: associates the ECS instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance remains on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance cannot start.
	// Default value: **default**.
	Affinity interface{} `field:"optional" json:"affinity" yaml:"affinity"`
	// Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip.
	//
	// If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
	AllocatePublicIp interface{} `field:"optional" json:"allocatePublicIp" yaml:"allocatePublicIp"`
	// Property autoRenew: Whether renew the fee automatically?
	//
	// When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewPeriod: The time period of auto renew.
	//
	// When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	// Property creditSpecification: The performance mode of the burstable instance.
	//
	// Valid values:
	// - **Standard**: the standard mode.
	// - **Unlimited**: the unlimited mode.
	CreditSpecification interface{} `field:"optional" json:"creditSpecification" yaml:"creditSpecification"`
	// Property dedicatedHostId: which dedicated host will be deployed.
	DedicatedHostId interface{} `field:"optional" json:"dedicatedHostId" yaml:"dedicatedHostId"`
	// Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance.
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	// Property deploymentSetGroupNo: The number of the deployment set group to which to deploy the instance.
	//
	// If the deployment set specified by **DeploymentSetId** uses the high availability group strategy (AvailabilityGroup), you can use **DeploymentSetGroupNo** to specify a deployment set group in the deployment set. Valid values: 1 to 7.
	DeploymentSetGroupNo interface{} `field:"optional" json:"deploymentSetGroupNo" yaml:"deploymentSetGroupNo"`
	// Property deploymentSetId: Deployment set ID.
	DeploymentSetId interface{} `field:"optional" json:"deploymentSetId" yaml:"deploymentSetId"`
	// Property description: Description of the instance, [2, 256] characters.
	//
	// Do not fill or empty, the default is empty.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property diskMappings: Disk mappings to attach to instance.
	//
	// Max support 16 disks.
	// If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
	DiskMappings interface{} `field:"optional" json:"diskMappings" yaml:"diskMappings"`
	// Property hostName: Host name of created ecs instance.
	//
	// at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 64 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	// Property hpcClusterId: The HPC cluster ID to which the instance belongs.
	HpcClusterId interface{} `field:"optional" json:"hpcClusterId" yaml:"hpcClusterId"`
	// Property httpEndpoint: Specifies whether the access channel is enabled for instance metadata.
	//
	// Valid values:
	// - **enabled**
	// - **disabled**
	// Default value: **enabled**.
	HttpEndpoint interface{} `field:"optional" json:"httpEndpoint" yaml:"httpEndpoint"`
	// Property httpTokens: Specifies whether the security hardening mode (IMDSv2) is forcefully used to access instance metadata.
	//
	// Valid values:
	// - **optional**: does not forcefully use the security-enhanced mode (IMDSv2).
	// - **required**: forcefully uses the security-enhanced mode (IMDSv2). After you set this parameter to required, you cannot access instance metadata in normal mode.
	// Default value: **optional**.
	HttpTokens interface{} `field:"optional" json:"httpTokens" yaml:"httpTokens"`
	// Property imageFamily: The name of the image family.
	//
	// You can set this parameter to obtain the latest available custom image from the specified image family to create the instance.
	// - **ImageFamily** must be empty if **ImageId** is specified.
	// - **ImageFamily** can be specified if **ImageId** is not specified.
	ImageFamily interface{} `field:"optional" json:"imageFamily" yaml:"imageFamily"`
	// Property imageId: Image ID to create ecs instance.
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	// Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
	//
	// If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property internetMaxBandwidthOut: Set internet output bandwidth of instance.
	//
	// Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	// Property ioOptimized: The 'optimized' instance can provide better IO performance.
	//
	// Support 'none' and 'optimized' only, default is 'optimized'.
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	// Property keyPairName: SSH key pair name.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property password: Password of created ecs instance.
	//
	// Must contain at least 3 types of special character, lower character, upper character, number.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property passwordInherit: Specifies whether to use the password preset in the image.
	//
	// To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
	PasswordInherit interface{} `field:"optional" json:"passwordInherit" yaml:"passwordInherit"`
	// Property period: Prepaid time period.
	//
	// Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year.
	//
	// Default value is Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property privateIpAddress: Private IP for the instance created.
	//
	// Only works for VPC instance and cannot duplicated with existing instance.
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	// Property privatePoolOptions: The options of the private pool.
	PrivatePoolOptions interface{} `field:"optional" json:"privatePoolOptions" yaml:"privatePoolOptions"`
	// Property ramRoleName: Instance RAM role name.
	//
	// The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityEnhancementStrategy:.
	SecurityEnhancementStrategy interface{} `field:"optional" json:"securityEnhancementStrategy" yaml:"securityEnhancementStrategy"`
	// Property securityGroupId: Security group to create ecs instance.
	//
	// For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property securityGroupIds: The ID list of security group to which to assign the instance.
	//
	// The max length is based on the maximum number of security groups to which an instance can belong. For more information, see the "Security group limits" section in Limits.
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	// Property spotDuration: The protection period of the preemptible instance.
	//
	// Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
	// Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
	// If this parameter is set to 0, no protection period is configured for the preemptible instance.
	// Default value: 1.
	SpotDuration interface{} `field:"optional" json:"spotDuration" yaml:"spotDuration"`
	// Property spotInterruptionBehavior: The interruption mode of the preemptible instance.
	//
	// Default value: Terminate. Set the value to Terminate, which specifies to release the instance.
	SpotInterruptionBehavior interface{} `field:"optional" json:"spotInterruptionBehavior" yaml:"spotInterruptionBehavior"`
	// Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
	//
	// Three decimals is allowed at most.
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	// Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
	//
	// Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	// Property storageSetId: The storage set ID.
	StorageSetId interface{} `field:"optional" json:"storageSetId" yaml:"storageSetId"`
	// Property storageSetPartitionNumber: The maximum number of partitions in the storage set.
	//
	// The value must be greater than or equal to 2.
	StorageSetPartitionNumber interface{} `field:"optional" json:"storageSetPartitionNumber" yaml:"storageSetPartitionNumber"`
	// Property systemDiskCategory: Category of system disk.
	//
	// Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	// Property systemDiskDescription: Description of created system disk.
	SystemDiskDescription interface{} `field:"optional" json:"systemDiskDescription" yaml:"systemDiskDescription"`
	// Property systemDiskDiskName: Name of created system disk.
	SystemDiskDiskName interface{} `field:"optional" json:"systemDiskDiskName" yaml:"systemDiskDiskName"`
	// Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read\/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read\/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read\/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read\/write IOPS.
	SystemDiskPerformanceLevel interface{} `field:"optional" json:"systemDiskPerformanceLevel" yaml:"systemDiskPerformanceLevel"`
	// Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB.
	//
	// If you specify with your own image, make sure the system disk size bigger than image size.
	SystemDiskSize interface{} `field:"optional" json:"systemDiskSize" yaml:"systemDiskSize"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property tenancy: Specifies whether to create the instance on a dedicated host.
	//
	// Valid values:
	// - **default**: creates the instance on a non-dedicated host.
	// - **host**: creates the instance on a dedicated host. If you do not specify **DedicatedHostId**, Alibaba Cloud selects a dedicated host for the instance.
	// Default value: **default**.
	Tenancy interface{} `field:"optional" json:"tenancy" yaml:"tenancy"`
	// Property useAdditionalService: Specifies whether to use the system configurations for virtual machines provided by Alibaba Cloud.
	//
	// System configurations for Windows: NTP and KMS. System configurations for Linux: NTP and YUM.
	UseAdditionalService interface{} `field:"optional" json:"useAdditionalService" yaml:"useAdditionalService"`
	// Property userData: User data to pass to instance.
	//
	// [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	// Property vpcId: The VPC id to create ecs instance.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The vSwitch Id to create ecs instance.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The ID of the zone to which the instance belongs.
	//
	// For more information,
	// call the DescribeZones operation to query the most recent zone list.
	// Default value is empty, which means random selection.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
	// Property zoneIds: Zone ids for query parameters.
	ZoneIds interface{} `field:"optional" json:"zoneIds" yaml:"zoneIds"`
}

