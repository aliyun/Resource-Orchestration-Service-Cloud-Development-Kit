package alicloudroscdkcms


// Properties for defining a `MonitorGroupInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroupinstances
type MonitorGroupInstancesProps struct {
	// Property groupId: The ID of the application group.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property instances:.
	Instances interface{} `field:"required" json:"instances" yaml:"instances"`
}

