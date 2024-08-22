package alicloudroscdkcms


// Properties for defining a `RosMonitorGroupInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroupinstances
type RosMonitorGroupInstancesProps struct {
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	Instances interface{} `field:"required" json:"instances" yaml:"instances"`
}

