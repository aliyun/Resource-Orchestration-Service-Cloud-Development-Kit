package alicloudroscdkecs


// Properties for defining a `RosInstanceGroupClone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instancegroupclone
type RosInstanceGroupCloneProps struct {
	MaxAmount interface{} `field:"required" json:"maxAmount" yaml:"maxAmount"`
	SourceInstanceId interface{} `field:"required" json:"sourceInstanceId" yaml:"sourceInstanceId"`
	AutoReleaseTime interface{} `field:"optional" json:"autoReleaseTime" yaml:"autoReleaseTime"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	BackendServerWeight interface{} `field:"optional" json:"backendServerWeight" yaml:"backendServerWeight"`
	CpuOptions interface{} `field:"optional" json:"cpuOptions" yaml:"cpuOptions"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	DeploymentSetId interface{} `field:"optional" json:"deploymentSetId" yaml:"deploymentSetId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DiskMappings interface{} `field:"optional" json:"diskMappings" yaml:"diskMappings"`
	EniMappings interface{} `field:"optional" json:"eniMappings" yaml:"eniMappings"`
	HostNames interface{} `field:"optional" json:"hostNames" yaml:"hostNames"`
	HpcClusterId interface{} `field:"optional" json:"hpcClusterId" yaml:"hpcClusterId"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	ImageOptions interface{} `field:"optional" json:"imageOptions" yaml:"imageOptions"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	InternetMaxBandwidthIn interface{} `field:"optional" json:"internetMaxBandwidthIn" yaml:"internetMaxBandwidthIn"`
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	Ipv6Addresses interface{} `field:"optional" json:"ipv6Addresses" yaml:"ipv6Addresses"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	LaunchTemplateId interface{} `field:"optional" json:"launchTemplateId" yaml:"launchTemplateId"`
	LaunchTemplateName interface{} `field:"optional" json:"launchTemplateName" yaml:"launchTemplateName"`
	LaunchTemplateVersion interface{} `field:"optional" json:"launchTemplateVersion" yaml:"launchTemplateVersion"`
	LoadBalancerIdToAttach interface{} `field:"optional" json:"loadBalancerIdToAttach" yaml:"loadBalancerIdToAttach"`
	NetworkInterfaceQueueNumber interface{} `field:"optional" json:"networkInterfaceQueueNumber" yaml:"networkInterfaceQueueNumber"`
	NetworkOptions interface{} `field:"optional" json:"networkOptions" yaml:"networkOptions"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	PasswordInherit interface{} `field:"optional" json:"passwordInherit" yaml:"passwordInherit"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	SecurityOptions interface{} `field:"optional" json:"securityOptions" yaml:"securityOptions"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	SystemDiskAutoSnapshotPolicyId interface{} `field:"optional" json:"systemDiskAutoSnapshotPolicyId" yaml:"systemDiskAutoSnapshotPolicyId"`
	SystemDiskBurstingEnabled interface{} `field:"optional" json:"systemDiskBurstingEnabled" yaml:"systemDiskBurstingEnabled"`
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	SystemDiskDescription interface{} `field:"optional" json:"systemDiskDescription" yaml:"systemDiskDescription"`
	SystemDiskDiskName interface{} `field:"optional" json:"systemDiskDiskName" yaml:"systemDiskDiskName"`
	SystemDiskEncryptAlgorithm interface{} `field:"optional" json:"systemDiskEncryptAlgorithm" yaml:"systemDiskEncryptAlgorithm"`
	SystemDiskEncrypted interface{} `field:"optional" json:"systemDiskEncrypted" yaml:"systemDiskEncrypted"`
	SystemDiskKmsKeyId interface{} `field:"optional" json:"systemDiskKmsKeyId" yaml:"systemDiskKmsKeyId"`
	SystemDiskProvisionedIops interface{} `field:"optional" json:"systemDiskProvisionedIops" yaml:"systemDiskProvisionedIops"`
	SystemDiskStorageClusterId interface{} `field:"optional" json:"systemDiskStorageClusterId" yaml:"systemDiskStorageClusterId"`
	Tags *[]*RosInstanceGroupClone_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	UniqueSuffix interface{} `field:"optional" json:"uniqueSuffix" yaml:"uniqueSuffix"`
	UpdatePolicy interface{} `field:"optional" json:"updatePolicy" yaml:"updatePolicy"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

