package alicloudroscdkecs


// Properties for defining a `LaunchTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplate
type LaunchTemplateProps struct {
	// Property launchTemplateName: The name of launch template.
	LaunchTemplateName interface{} `field:"required" json:"launchTemplateName" yaml:"launchTemplateName"`
	// Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time.
	//
	// format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
	AutoReleaseTime interface{} `field:"optional" json:"autoReleaseTime" yaml:"autoReleaseTime"`
	// Property deploymentSetId: The ID of the deployment set.
	DeploymentSetId interface{} `field:"optional" json:"deploymentSetId" yaml:"deploymentSetId"`
	// Property description: Description of the instance, [2, 256] characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property diskMappings: Disk mappings to attach to instance.
	//
	// Max support 16 disks.
	DiskMappings interface{} `field:"optional" json:"diskMappings" yaml:"diskMappings"`
	// Property hostName: Host name of created ecs instance.
	//
	// at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	// Property imageId: Image ID to create ecs instance.
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	// Property imageOwnerAlias: The source of the image.
	//
	// Valid values:
	// system: public images provided by Alibaba Cloud.
	// self: your custom images.
	// others: shared images from other Alibaba Cloud accounts.
	// marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are found, you can use these images without prior subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
	ImageOwnerAlias interface{} `field:"optional" json:"imageOwnerAlias" yaml:"imageOwnerAlias"`
	// Property instanceChargeType: The billing method of the instance.
	//
	// Valid values:
	// PrePaid: subscription. If you set this parameter to PrePaid, make sure that your account supports payment by credit. Otherwise, an InvalidPayMethod error is returned.
	// PostPaid: pay-as-you-go.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property instanceType: Ecs instance supported instance type, make sure it should be correct.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property internetMaxBandwidthOut: Max internet out bandwidth in Mbps(Mega bit per second).
	//
	// Range is [0,200].While the property is not 0, public ip will be assigned for instance.
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	// Property ioOptimized: The 'optimized' instance can provide better IO performance.
	//
	// Support 'none' and 'optimized' only.
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	// Property ipv6AddressCount: The number of IPv6 addresses to be randomly generated for the primary ENI.
	//
	// Valid values: 1 to 10.
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	// Property keyPairName: SSH key pair name.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property networkInterfaces: Elastic network interfaces to be attached to instance.
	NetworkInterfaces interface{} `field:"optional" json:"networkInterfaces" yaml:"networkInterfaces"`
	// Property networkType: Instance network type.
	//
	// Support 'vpc' and 'classic'.
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	// Property passwordInherit: Specifies whether to use the password preset in the image.
	//
	// Note When you use this parameter, leave Password empty and make sure that the selected image has a password preset.
	PasswordInherit interface{} `field:"optional" json:"passwordInherit" yaml:"passwordInherit"`
	// Property period: The subscription period of the instance.
	//
	// Unit: months.
	// This parameter is valid and required only when InstanceChargeType is set to PrePaid.
	// Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property privateIpAddress: The private IP address of the instance.
	//
	// To assign a private IP address to an instance of the VPC type, make sure that the IP address is an idle IP address within the CIDR block of the vSwitch specified by the VSwitchId parameter.
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	// Property ramRoleName: Instance RAM role name.
	//
	// The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	// Property resourceGroupId: The ID of the resource group to which to assign the instance, Elastic Block Storage (EBS) device, and elastic network interface (ENI).
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityEnhancementStrategy: Activate or deactivate security enhancement,Value range: "Active" and "Deactive".
	SecurityEnhancementStrategy interface{} `field:"optional" json:"securityEnhancementStrategy" yaml:"securityEnhancementStrategy"`
	// Property securityGroupId: Security group to create ecs instance.
	//
	// For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property securityGroupIds: The ID of security group list to which to assign the instance.
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	// Property spotDuration: The protection period of the preemptible instance.
	//
	// Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
	// Protection periods of 2, 3, 4, 5, and 6 hours are in invitational preview. If you want to set this parameter to one of these values, submit a ticket.
	// If this parameter is set to 0, no protection period is configured for the preemptible instance.
	// Default value: 1.
	SpotDuration interface{} `field:"optional" json:"spotDuration" yaml:"spotDuration"`
	// Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
	//
	// Three decimals is allowed at most.
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	// Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
	//
	// Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	// Property systemDiskCategory: Category of system disk.
	//
	// support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	// Property systemDiskDeleteWithInstance: Specifies whether to release the system disk when the instance is released.
	//
	// Valid values:
	// true: releases the system disk when the instance is released.
	// false: does not release the system disk when the instance is released.
	// Default value: true.
	SystemDiskDeleteWithInstance interface{} `field:"optional" json:"systemDiskDeleteWithInstance" yaml:"systemDiskDeleteWithInstance"`
	// Property systemDiskDescription: Description of created system disk.
	SystemDiskDescription interface{} `field:"optional" json:"systemDiskDescription" yaml:"systemDiskDescription"`
	// Property systemDiskDiskName: Name of created system disk.
	SystemDiskDiskName interface{} `field:"optional" json:"systemDiskDiskName" yaml:"systemDiskDiskName"`
	// Property systemDiskPerformanceLevel: The performance level of the ESSD that is used as the system disk.
	//
	// Valid values:
	// PL0: A single ESSD can deliver up to 10,000 random read\/write IOPS.
	// PL1: A single ESSD can deliver up to 50,000 random read\/write IOPS.
	// PL2: A single ESSD can deliver up to 100,000 random read\/write IOPS.
	// PL3: A single ESSD can deliver up to 1,000,000 random read\/write IOPS.
	SystemDiskPerformanceLevel interface{} `field:"optional" json:"systemDiskPerformanceLevel" yaml:"systemDiskPerformanceLevel"`
	// Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB.
	//
	// If you specify with your own image, make sure the system disk size bigger than image size.
	SystemDiskSize interface{} `field:"optional" json:"systemDiskSize" yaml:"systemDiskSize"`
	// Property tags: Tags to attach to instance, security group, disk and network interface.
	Tags *[]*RosLaunchTemplate_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property templateResourceGroupId: The ID of the resource group to which to assign the launch template.
	TemplateResourceGroupId interface{} `field:"optional" json:"templateResourceGroupId" yaml:"templateResourceGroupId"`
	// Property templateTags: Template tags to attach to launch template.
	TemplateTags interface{} `field:"optional" json:"templateTags" yaml:"templateTags"`
	// Property userData: User data to pass to instance.
	//
	// [1, 16KB] characters.
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	// Property versionDescription: Description for version 1 of launch template.
	VersionDescription interface{} `field:"optional" json:"versionDescription" yaml:"versionDescription"`
	// Property vSwitchId: The vSwitch Id to create ecs instance.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: Current zone to create the instance.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

