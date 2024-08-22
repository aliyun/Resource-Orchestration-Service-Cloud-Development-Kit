package alicloudroscdkcloudsso


// Properties for defining a `RosGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-group
type RosGroupProps struct {
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

