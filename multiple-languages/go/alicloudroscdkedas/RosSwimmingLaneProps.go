package alicloudroscdkedas


// Properties for defining a `RosSwimmingLane`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglane
type RosSwimmingLaneProps struct {
	EntryRules interface{} `field:"required" json:"entryRules" yaml:"entryRules"`
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	LogicalRegionId interface{} `field:"required" json:"logicalRegionId" yaml:"logicalRegionId"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Tag interface{} `field:"required" json:"tag" yaml:"tag"`
	AppInfos interface{} `field:"optional" json:"appInfos" yaml:"appInfos"`
	EnableRules interface{} `field:"optional" json:"enableRules" yaml:"enableRules"`
}

