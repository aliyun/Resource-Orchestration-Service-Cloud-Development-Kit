package alicloudroscdkecs


// Properties for defining a `RosLaunchTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplate
type RosLaunchTemplateProps struct {
	LaunchTemplateName interface{} `field:"required" json:"launchTemplateName" yaml:"launchTemplateName"`
	AutoReleaseTime interface{} `field:"optional" json:"autoReleaseTime" yaml:"autoReleaseTime"`
	DeploymentSetId interface{} `field:"optional" json:"deploymentSetId" yaml:"deploymentSetId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DiskMappings interface{} `field:"optional" json:"diskMappings" yaml:"diskMappings"`
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	ImageOwnerAlias interface{} `field:"optional" json:"imageOwnerAlias" yaml:"imageOwnerAlias"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	NetworkInterfaces interface{} `field:"optional" json:"networkInterfaces" yaml:"networkInterfaces"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	PasswordInherit interface{} `field:"optional" json:"passwordInherit" yaml:"passwordInherit"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityEnhancementStrategy interface{} `field:"optional" json:"securityEnhancementStrategy" yaml:"securityEnhancementStrategy"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	SpotDuration interface{} `field:"optional" json:"spotDuration" yaml:"spotDuration"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	SystemDiskDeleteWithInstance interface{} `field:"optional" json:"systemDiskDeleteWithInstance" yaml:"systemDiskDeleteWithInstance"`
	SystemDiskDescription interface{} `field:"optional" json:"systemDiskDescription" yaml:"systemDiskDescription"`
	SystemDiskDiskName interface{} `field:"optional" json:"systemDiskDiskName" yaml:"systemDiskDiskName"`
	SystemDiskPerformanceLevel interface{} `field:"optional" json:"systemDiskPerformanceLevel" yaml:"systemDiskPerformanceLevel"`
	SystemDiskSize interface{} `field:"optional" json:"systemDiskSize" yaml:"systemDiskSize"`
	Tags *[]*RosLaunchTemplate_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TemplateResourceGroupId interface{} `field:"optional" json:"templateResourceGroupId" yaml:"templateResourceGroupId"`
	TemplateTags interface{} `field:"optional" json:"templateTags" yaml:"templateTags"`
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	VersionDescription interface{} `field:"optional" json:"versionDescription" yaml:"versionDescription"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

