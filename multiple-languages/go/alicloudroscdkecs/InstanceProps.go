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
	// Property dedicatedHostId: The ID of the dedicated host.
	//
	// You can call the [DescribeDedicatedHosts]() operation to query the list of
	// dedicated host IDs.
	// > Spot instances cannot be created on dedicated hosts. If you specify
	// DedicatedHostId, SpotStrategy and SpotPriceLimit are automatically ignored.
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
	// Property hpcClusterId: The ID of the high performance computing (HPC) cluster to which the instance belongs.
	//
	// This parameter is required when you create instances of a Supper Computing
	// Cluster (SCC) instance type. For information about how to create an HPC cluster,
	// see [CreateHpcCluster]().
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
	// Property imageId: The image ID.
	//
	// <details>
	// <summary>
	// Naming convention for image IDs
	// <\/summary>
	// - Public images: Named based on the operating system version, architecture,
	// language, and published date.
	// - Custom images, shared images, cloud marketplace images, and community
	// images: Start with the letter `m`.
	// <\/details>.
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	// Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
	//
	// If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property internetMaxBandwidthOut: The maximum outbound public bandwidth.
	//
	// Unit: Mbit\/s. Valid values: 0 to 100.
	// Default value: 0.
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	// Property ioOptimized: Specifies whether the instance is I\/O optimized.
	//
	// For instances of [retired
	// instance types](), the default value is none. For instances of other instance
	// types, the default value is optimized. Valid values:
	// - none: The instance is not I\/O optimized.
	// - optimized: The instance is I\/O optimized.
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	// Property keyPairName: SSH key pair name.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property password: Password of created ecs instance.
	//
	// Must contain at least 3 types of special character, lower character, upper character, number.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property passwordInherit: Specifies whether to use the password preset in the image.
	//
	// Valid values:
	// - true: uses the preset password.
	// - false: does not use the preset password.
	// Default value: false.
	// > If you set this parameter to true, make sure that you leave the Password
	// parameter empty and the selected image has a preset password.
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
	// Property securityEnhancementStrategy: Specifies whether to enable security hardening.
	//
	// Valid values:
	// - Active: enables security hardening. This value is applicable only to public
	// images.
	// - Deactive: does not enable security hardening. This value is applicable to all
	// images.
	SecurityEnhancementStrategy interface{} `field:"optional" json:"securityEnhancementStrategy" yaml:"securityEnhancementStrategy"`
	// Property securityGroupId: Security group to create ecs instance.
	//
	// For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property securityGroupIds: The ID list of security group to which to assign the instance.
	//
	// The max length is based on the maximum number of security groups to which an instance can belong. For more information, see the "Security group limits" section in Limits.
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	// Property spotDuration: The protection period of the spot instance.
	//
	// Unit: hours. Valid values:
	// - 1: After a spot instance is created, the system ensures that the instance is not
	// automatically released within 1 hour. After the 1-hour protection period ends, the system
	// compares the bid price with the market price and checks the resource inventory to
	// determine whether to retain or release the instance.
	// - 0: After a spot instance is created, the system does not ensure that the instance
	// can run for one hour. The system compares the biding price with the market prices and
	// checks the resource inventory to determine whether to retain or release the instance.
	// Default value: 1.
	// >
	// - You can set this parameter only to 0 or 1.
	// - The spot instance is billed by second. Specify an appropriate protection period.
	// - The system sends an ECS system event to notify you 5 minutes before the instance is
	// released.
	SpotDuration interface{} `field:"optional" json:"spotDuration" yaml:"spotDuration"`
	// Property spotInterruptionBehavior: The interruption mode of the spot instance.
	//
	// Valid values:
	// - Terminate: The instance is released.
	// - Stop: The instance is stopped in economical mode.
	// For information about the economical mode, see [Economical mode]().
	// Default value: Terminate.
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
	// Valid values: integers
	// greater than or equal to 2.
	StorageSetPartitionNumber interface{} `field:"optional" json:"storageSetPartitionNumber" yaml:"storageSetPartitionNumber"`
	// Property subscriptionDeletionForce: This option is only applicable to subscription instances.
	//
	// For subscription instances, if this option is true, the instance will be converted to a postpaid instance before being deleted. If false, the forced deletion will not be performed. This operation will incur additional fees, so choose carefully.
	SubscriptionDeletionForce interface{} `field:"optional" json:"subscriptionDeletionForce" yaml:"subscriptionDeletionForce"`
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
	// Property userData: The user data of the instance.
	//
	// You must specify Base64-encoded data. The instance
	// user data cannot exceed 32 KB in size before Base64 encoding.
	// For information about the limits, formats, and running frequencies of instance
	// user data, see [Instance user data]().
	// > To ensure security, we recommend that you do not use plaintext to pass in
	// confidential information, such as passwords or private keys, as user data. If you
	// need to pass in confidential information, we recommend that you encrypt and
	// encode the information in Base64 and then decode and decrypt the information in
	// the same manner in the instance.
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	// Property vpcId: The VPC id to create ecs instance.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the vSwitch to which to connect to the instance.
	//
	// You must set this
	// parameter when you create an instance of the VPC type. The specified vSwitch and
	// security group must belong to the same VPC. You can call the
	// [DescribeVSwitches]() operation to query available vSwitches.
	// Take note of the following items:
	// - If you specify the `VSwitchId` parameter, the zone specified by the `ZoneId`
	// parameter must be the zone where the specified vSwitch is located. You can also
	// leave the `ZoneId` parameter empty. Then, the system selects the zone where the
	// specified vSwitch resides.
	// - If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify
	// `VSwitchId` but can specify `NetworkInterface.N.VSwitchId`.
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

