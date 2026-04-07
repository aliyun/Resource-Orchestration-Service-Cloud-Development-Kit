package alicloudroscdkesa


// Properties for defining a `OriginProtection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originprotection
type OriginProtectionProps struct {
	// Property siteId: Site Id.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property originConverge: The IP convergence status.
	//
	// *   on
	// *   off.
	OriginConverge interface{} `field:"optional" json:"originConverge" yaml:"originConverge"`
}

