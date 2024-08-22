package alicloudroscdkvpc


// Properties for defining a `RosHaVip`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havip
type RosHaVipProps struct {
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	IpAddress interface{} `field:"optional" json:"ipAddress" yaml:"ipAddress"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosHaVip_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

