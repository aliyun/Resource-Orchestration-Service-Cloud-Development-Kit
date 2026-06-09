package alicloudroscdkeflo


// Properties for defining a `RosVpd`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eflo-vpd
type RosVpdProps struct {
	Cidr interface{} `field:"required" json:"cidr" yaml:"cidr"`
	VpdName interface{} `field:"required" json:"vpdName" yaml:"vpdName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecondaryCidrBlocks interface{} `field:"optional" json:"secondaryCidrBlocks" yaml:"secondaryCidrBlocks"`
	Subnets interface{} `field:"optional" json:"subnets" yaml:"subnets"`
	Tags *[]*RosVpd_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

