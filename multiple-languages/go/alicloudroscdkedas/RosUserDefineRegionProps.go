package alicloudroscdkedas


// Properties for defining a `RosUserDefineRegion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-userdefineregion
type RosUserDefineRegionProps struct {
	RegionName interface{} `field:"required" json:"regionName" yaml:"regionName"`
	RegionTag interface{} `field:"required" json:"regionTag" yaml:"regionTag"`
	DebugEnable interface{} `field:"optional" json:"debugEnable" yaml:"debugEnable"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

