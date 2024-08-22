package alicloudroscdkcms


// Properties for defining a `RosSlsGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-slsgroup
type RosSlsGroupProps struct {
	SlsGroupConfig interface{} `field:"required" json:"slsGroupConfig" yaml:"slsGroupConfig"`
	SlsGroupName interface{} `field:"required" json:"slsGroupName" yaml:"slsGroupName"`
	SlsGroupDescription interface{} `field:"optional" json:"slsGroupDescription" yaml:"slsGroupDescription"`
}

