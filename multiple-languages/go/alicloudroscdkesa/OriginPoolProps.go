package alicloudroscdkesa


// Properties for defining a `OriginPool`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originpool
type OriginPoolProps struct {
	// Property originPoolName: The source address pool name.
	OriginPoolName interface{} `field:"required" json:"originPoolName" yaml:"originPoolName"`
	// Property siteId: The site ID.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property enabled: Whether the source address pool is enabled: - `true`: Enabled;
	//
	// - `false`: Not enabled.
	Enabled interface{} `field:"optional" json:"enabled" yaml:"enabled"`
	// Property origins: The Source station information added to the source address pool.
	//
	// Multiple Source stations use arrays to transfer values.
	Origins interface{} `field:"optional" json:"origins" yaml:"origins"`
}

