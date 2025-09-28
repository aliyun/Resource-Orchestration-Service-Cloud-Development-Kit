package alicloudroscdkesa


// Properties for defining a `RosOriginPool`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originpool
type RosOriginPoolProps struct {
	OriginPoolName interface{} `field:"required" json:"originPoolName" yaml:"originPoolName"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	Enabled interface{} `field:"optional" json:"enabled" yaml:"enabled"`
	Origins interface{} `field:"optional" json:"origins" yaml:"origins"`
}

