package alicloudroscdkecs


// Properties for defining a `RosInstanceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instancegroup
type RosInstanceGroupProps struct {
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	MaxAmount interface{} `field:"required" json:"maxAmount" yaml:"maxAmount"`
	Affinity interface{} `field:"optional" json:"affinity" yaml:"affinity"`
	AllocatePublicIp interface{} `field:"optional" json:"allocatePublicIp" yaml:"allocatePublicIp"`
	AutoReleaseTime interface{} `field:"optional" json:"autoReleaseTime" yaml:"autoReleaseTime"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	CpuOptions interface{} `field:"optional" json:"cpuOptions" yaml:"cpuOptions"`
	CreditSpecification interface{} `field:"optional" json:"creditSpecification" yaml:"creditSpecification"`
	DedicatedHostId interface{} `field:"optional" json:"dedicatedHostId" yaml:"dedicatedHostId"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	DeploymentSetGroupNo interface{} `field:"optional" json:"deploymentSetGroupNo" yaml:"deploymentSetGroupNo"`
	DeploymentSetId interface{} `field:"optional" json:"deploymentSetId" yaml:"deploymentSetId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DiskMappings interface{} `field:"optional" json:"diskMappings" yaml:"diskMappings"`
	EniMappings interface{} `field:"optional" json:"eniMappings" yaml:"eniMappings"`
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	HostNames interface{} `field:"optional" json:"hostNames" yaml:"hostNames"`
	HpcClusterId interface{} `field:"optional" json:"hpcClusterId" yaml:"hpcClusterId"`
	HttpEndpoint interface{} `field:"optional" json:"httpEndpoint" yaml:"httpEndpoint"`
	HttpTokens interface{} `field:"optional" json:"httpTokens" yaml:"httpTokens"`
	ImageFamily interface{} `field:"optional" json:"imageFamily" yaml:"imageFamily"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	ImageOptions interface{} `field:"optional" json:"imageOptions" yaml:"imageOptions"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	Ipv6Addresses interface{} `field:"optional" json:"ipv6Addresses" yaml:"ipv6Addresses"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	LaunchTemplateId interface{} `field:"optional" json:"launchTemplateId" yaml:"launchTemplateId"`
	LaunchTemplateName interface{} `field:"optional" json:"launchTemplateName" yaml:"launchTemplateName"`
	LaunchTemplateVersion interface{} `field:"optional" json:"launchTemplateVersion" yaml:"launchTemplateVersion"`
	NetworkInterfaceQueueNumber interface{} `field:"optional" json:"networkInterfaceQueueNumber" yaml:"networkInterfaceQueueNumber"`
	NetworkOptions interface{} `field:"optional" json:"networkOptions" yaml:"networkOptions"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	PasswordInherit interface{} `field:"optional" json:"passwordInherit" yaml:"passwordInherit"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	PrivatePoolOptions interface{} `field:"optional" json:"privatePoolOptions" yaml:"privatePoolOptions"`
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SchedulerOptions interface{} `field:"optional" json:"schedulerOptions" yaml:"schedulerOptions"`
	SecurityEnhancementStrategy interface{} `field:"optional" json:"securityEnhancementStrategy" yaml:"securityEnhancementStrategy"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	SecurityOptions interface{} `field:"optional" json:"securityOptions" yaml:"securityOptions"`
	SpotDuration interface{} `field:"optional" json:"spotDuration" yaml:"spotDuration"`
	SpotInterruptionBehavior interface{} `field:"optional" json:"spotInterruptionBehavior" yaml:"spotInterruptionBehavior"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	StorageSetId interface{} `field:"optional" json:"storageSetId" yaml:"storageSetId"`
	StorageSetPartitionNumber interface{} `field:"optional" json:"storageSetPartitionNumber" yaml:"storageSetPartitionNumber"`
	SystemDiskAutoSnapshotPolicyId interface{} `field:"optional" json:"systemDiskAutoSnapshotPolicyId" yaml:"systemDiskAutoSnapshotPolicyId"`
	SystemDiskBurstingEnabled interface{} `field:"optional" json:"systemDiskBurstingEnabled" yaml:"systemDiskBurstingEnabled"`
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	SystemDiskDescription interface{} `field:"optional" json:"systemDiskDescription" yaml:"systemDiskDescription"`
	SystemDiskDiskName interface{} `field:"optional" json:"systemDiskDiskName" yaml:"systemDiskDiskName"`
	SystemDiskEncryptAlgorithm interface{} `field:"optional" json:"systemDiskEncryptAlgorithm" yaml:"systemDiskEncryptAlgorithm"`
	SystemDiskEncrypted interface{} `field:"optional" json:"systemDiskEncrypted" yaml:"systemDiskEncrypted"`
	SystemDiskKmsKeyId interface{} `field:"optional" json:"systemDiskKmsKeyId" yaml:"systemDiskKmsKeyId"`
	SystemDiskPerformanceLevel interface{} `field:"optional" json:"systemDiskPerformanceLevel" yaml:"systemDiskPerformanceLevel"`
	SystemDiskProvisionedIops interface{} `field:"optional" json:"systemDiskProvisionedIops" yaml:"systemDiskProvisionedIops"`
	SystemDiskSize interface{} `field:"optional" json:"systemDiskSize" yaml:"systemDiskSize"`
	SystemDiskStorageClusterId interface{} `field:"optional" json:"systemDiskStorageClusterId" yaml:"systemDiskStorageClusterId"`
	Tags *[]*RosInstanceGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Tenancy interface{} `field:"optional" json:"tenancy" yaml:"tenancy"`
	UniqueSuffix interface{} `field:"optional" json:"uniqueSuffix" yaml:"uniqueSuffix"`
	UpdatePolicy interface{} `field:"optional" json:"updatePolicy" yaml:"updatePolicy"`
	UseAdditionalService interface{} `field:"optional" json:"useAdditionalService" yaml:"useAdditionalService"`
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
	ZoneIds interface{} `field:"optional" json:"zoneIds" yaml:"zoneIds"`
}

