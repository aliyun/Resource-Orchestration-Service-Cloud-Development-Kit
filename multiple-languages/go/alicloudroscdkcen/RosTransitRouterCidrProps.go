package alicloudroscdkcen


// Properties for defining a `RosTransitRouterCidr`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutercidr
type RosTransitRouterCidrProps struct {
	Cidr interface{} `field:"required" json:"cidr" yaml:"cidr"`
	TransitRouterId interface{} `field:"required" json:"transitRouterId" yaml:"transitRouterId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	PublishCidrRoute interface{} `field:"optional" json:"publishCidrRoute" yaml:"publishCidrRoute"`
	TransitRouterCidrName interface{} `field:"optional" json:"transitRouterCidrName" yaml:"transitRouterCidrName"`
}

