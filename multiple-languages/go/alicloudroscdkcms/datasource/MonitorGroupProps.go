package datasource


// Properties for defining a `MonitorGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroup
type MonitorGroupProps struct {
	// Property groupId: GroupId.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

