package alicloudroscdkess


// Properties for defining a `RosScalingConfiguration`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingconfiguration
type RosScalingConfigurationProps struct {
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	Affinity interface{} `field:"optional" json:"affinity" yaml:"affinity"`
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	CreditSpecification interface{} `field:"optional" json:"creditSpecification" yaml:"creditSpecification"`
	DedicatedHostId interface{} `field:"optional" json:"dedicatedHostId" yaml:"dedicatedHostId"`
	DeploymentSetId interface{} `field:"optional" json:"deploymentSetId" yaml:"deploymentSetId"`
	DiskMappings interface{} `field:"optional" json:"diskMappings" yaml:"diskMappings"`
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	HpcClusterId interface{} `field:"optional" json:"hpcClusterId" yaml:"hpcClusterId"`
	ImageFamily interface{} `field:"optional" json:"imageFamily" yaml:"imageFamily"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	ImageName interface{} `field:"optional" json:"imageName" yaml:"imageName"`
	ImageOptionsLoginAsNonRoot interface{} `field:"optional" json:"imageOptionsLoginAsNonRoot" yaml:"imageOptionsLoginAsNonRoot"`
	InstanceDescription interface{} `field:"optional" json:"instanceDescription" yaml:"instanceDescription"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	InstancePatternInfos interface{} `field:"optional" json:"instancePatternInfos" yaml:"instancePatternInfos"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	InstanceTypeOverrides interface{} `field:"optional" json:"instanceTypeOverrides" yaml:"instanceTypeOverrides"`
	InstanceTypes interface{} `field:"optional" json:"instanceTypes" yaml:"instanceTypes"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	InternetMaxBandwidthIn interface{} `field:"optional" json:"internetMaxBandwidthIn" yaml:"internetMaxBandwidthIn"`
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	LoadBalancerWeight interface{} `field:"optional" json:"loadBalancerWeight" yaml:"loadBalancerWeight"`
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	PasswordInherit interface{} `field:"optional" json:"passwordInherit" yaml:"passwordInherit"`
	PrivatePoolOptions interface{} `field:"optional" json:"privatePoolOptions" yaml:"privatePoolOptions"`
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ScalingConfigurationName interface{} `field:"optional" json:"scalingConfigurationName" yaml:"scalingConfigurationName"`
	SecurityEnhancementStrategy interface{} `field:"optional" json:"securityEnhancementStrategy" yaml:"securityEnhancementStrategy"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	SpotDuration interface{} `field:"optional" json:"spotDuration" yaml:"spotDuration"`
	SpotInterruptionBehavior interface{} `field:"optional" json:"spotInterruptionBehavior" yaml:"spotInterruptionBehavior"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	SpotPriceLimitForInstanceType interface{} `field:"optional" json:"spotPriceLimitForInstanceType" yaml:"spotPriceLimitForInstanceType"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	SystemDiskAutoSnapshotPolicyId interface{} `field:"optional" json:"systemDiskAutoSnapshotPolicyId" yaml:"systemDiskAutoSnapshotPolicyId"`
	SystemDiskBurstingEnabled interface{} `field:"optional" json:"systemDiskBurstingEnabled" yaml:"systemDiskBurstingEnabled"`
	SystemDiskCategories interface{} `field:"optional" json:"systemDiskCategories" yaml:"systemDiskCategories"`
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	SystemDiskDescription interface{} `field:"optional" json:"systemDiskDescription" yaml:"systemDiskDescription"`
	SystemDiskDiskName interface{} `field:"optional" json:"systemDiskDiskName" yaml:"systemDiskDiskName"`
	SystemDiskEncryptAlgorithm interface{} `field:"optional" json:"systemDiskEncryptAlgorithm" yaml:"systemDiskEncryptAlgorithm"`
	SystemDiskEncrypted interface{} `field:"optional" json:"systemDiskEncrypted" yaml:"systemDiskEncrypted"`
	SystemDiskKmsKeyId interface{} `field:"optional" json:"systemDiskKmsKeyId" yaml:"systemDiskKmsKeyId"`
	SystemDiskPerformanceLevel interface{} `field:"optional" json:"systemDiskPerformanceLevel" yaml:"systemDiskPerformanceLevel"`
	SystemDiskProvisionedIops interface{} `field:"optional" json:"systemDiskProvisionedIops" yaml:"systemDiskProvisionedIops"`
	SystemDiskSize interface{} `field:"optional" json:"systemDiskSize" yaml:"systemDiskSize"`
	TagList interface{} `field:"optional" json:"tagList" yaml:"tagList"`
	Tenancy interface{} `field:"optional" json:"tenancy" yaml:"tenancy"`
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

