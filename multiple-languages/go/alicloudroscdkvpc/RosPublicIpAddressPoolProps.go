package alicloudroscdkvpc


// Properties for defining a `RosPublicIpAddressPool`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-publicipaddresspool
type RosPublicIpAddressPoolProps struct {
	BizType interface{} `field:"optional" json:"bizType" yaml:"bizType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Isp interface{} `field:"optional" json:"isp" yaml:"isp"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityProtectionTypes interface{} `field:"optional" json:"securityProtectionTypes" yaml:"securityProtectionTypes"`
	Tags *[]*RosPublicIpAddressPool_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Zones interface{} `field:"optional" json:"zones" yaml:"zones"`
}

