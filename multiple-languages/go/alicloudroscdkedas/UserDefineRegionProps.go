package alicloudroscdkedas


// Properties for defining a `UserDefineRegion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-userdefineregion
type UserDefineRegionProps struct {
	// Property regionName: Logical region (or namespace) name.
	RegionName interface{} `field:"required" json:"regionName" yaml:"regionName"`
	// Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier").
	RegionTag interface{} `field:"required" json:"regionTag" yaml:"regionTag"`
	// Property debugEnable: Whether debug is enable.
	DebugEnable interface{} `field:"optional" json:"debugEnable" yaml:"debugEnable"`
	// Property description: Logic region (or namespace) description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

