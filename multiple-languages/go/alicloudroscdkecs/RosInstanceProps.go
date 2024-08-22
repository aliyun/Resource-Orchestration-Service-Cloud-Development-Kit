package alicloudroscdkecs


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instance
type RosInstanceProps struct {
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	Affinity interface{} `field:"optional" json:"affinity" yaml:"affinity"`
	AllocatePublicIp interface{} `field:"optional" json:"allocatePublicIp" yaml:"allocatePublicIp"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	CreditSpecification interface{} `field:"optional" json:"creditSpecification" yaml:"creditSpecification"`
	DedicatedHostId interface{} `field:"optional" json:"dedicatedHostId" yaml:"dedicatedHostId"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	DeploymentSetGroupNo interface{} `field:"optional" json:"deploymentSetGroupNo" yaml:"deploymentSetGroupNo"`
	DeploymentSetId interface{} `field:"optional" json:"deploymentSetId" yaml:"deploymentSetId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DiskMappings interface{} `field:"optional" json:"diskMappings" yaml:"diskMappings"`
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	HpcClusterId interface{} `field:"optional" json:"hpcClusterId" yaml:"hpcClusterId"`
	HttpEndpoint interface{} `field:"optional" json:"httpEndpoint" yaml:"httpEndpoint"`
	HttpTokens interface{} `field:"optional" json:"httpTokens" yaml:"httpTokens"`
	ImageFamily interface{} `field:"optional" json:"imageFamily" yaml:"imageFamily"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	PasswordInherit interface{} `field:"optional" json:"passwordInherit" yaml:"passwordInherit"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	PrivatePoolOptions interface{} `field:"optional" json:"privatePoolOptions" yaml:"privatePoolOptions"`
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityEnhancementStrategy interface{} `field:"optional" json:"securityEnhancementStrategy" yaml:"securityEnhancementStrategy"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	SpotDuration interface{} `field:"optional" json:"spotDuration" yaml:"spotDuration"`
	SpotInterruptionBehavior interface{} `field:"optional" json:"spotInterruptionBehavior" yaml:"spotInterruptionBehavior"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	StorageSetId interface{} `field:"optional" json:"storageSetId" yaml:"storageSetId"`
	StorageSetPartitionNumber interface{} `field:"optional" json:"storageSetPartitionNumber" yaml:"storageSetPartitionNumber"`
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	SystemDiskDescription interface{} `field:"optional" json:"systemDiskDescription" yaml:"systemDiskDescription"`
	SystemDiskDiskName interface{} `field:"optional" json:"systemDiskDiskName" yaml:"systemDiskDiskName"`
	SystemDiskPerformanceLevel interface{} `field:"optional" json:"systemDiskPerformanceLevel" yaml:"systemDiskPerformanceLevel"`
	SystemDiskSize interface{} `field:"optional" json:"systemDiskSize" yaml:"systemDiskSize"`
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Tenancy interface{} `field:"optional" json:"tenancy" yaml:"tenancy"`
	UseAdditionalService interface{} `field:"optional" json:"useAdditionalService" yaml:"useAdditionalService"`
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
	ZoneIds interface{} `field:"optional" json:"zoneIds" yaml:"zoneIds"`
}

