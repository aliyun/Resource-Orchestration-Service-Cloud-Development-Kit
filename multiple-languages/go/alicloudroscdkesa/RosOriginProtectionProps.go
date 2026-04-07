package alicloudroscdkesa


// Properties for defining a `RosOriginProtection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originprotection
type RosOriginProtectionProps struct {
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	OriginConverge interface{} `field:"optional" json:"originConverge" yaml:"originConverge"`
}

