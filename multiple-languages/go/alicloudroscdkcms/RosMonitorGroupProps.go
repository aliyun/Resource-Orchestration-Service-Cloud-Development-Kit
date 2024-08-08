package alicloudroscdkcms


// Properties for defining a `RosMonitorGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroup
type RosMonitorGroupProps struct {
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	ContactGroups interface{} `field:"optional" json:"contactGroups" yaml:"contactGroups"`
}

