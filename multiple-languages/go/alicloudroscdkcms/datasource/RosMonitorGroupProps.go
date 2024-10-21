package datasource


// Properties for defining a `RosMonitorGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroup
type RosMonitorGroupProps struct {
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

