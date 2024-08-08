package alicloudroscdkecs


// Properties for defining a `RosInstanceClone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instanceclone
type RosInstanceCloneProps struct {
	SourceInstanceId interface{} `field:"required" json:"sourceInstanceId" yaml:"sourceInstanceId"`
	BackendServerWeight interface{} `field:"optional" json:"backendServerWeight" yaml:"backendServerWeight"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DiskMappings interface{} `field:"optional" json:"diskMappings" yaml:"diskMappings"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	InternetMaxBandwidthIn interface{} `field:"optional" json:"internetMaxBandwidthIn" yaml:"internetMaxBandwidthIn"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	LoadBalancerIdToAttach interface{} `field:"optional" json:"loadBalancerIdToAttach" yaml:"loadBalancerIdToAttach"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	Tags *[]*RosInstanceClone_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

