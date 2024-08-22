package alicloudroscdkcms


// Properties for defining a `MonitorGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroup
type MonitorGroupProps struct {
	// Property groupName: The name of the application group.
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	// Property contactGroups: The alert contact group.
	//
	// Alert notifications for the application group are sent to
	// the specified alert contact group.
	ContactGroups interface{} `field:"optional" json:"contactGroups" yaml:"contactGroups"`
}

