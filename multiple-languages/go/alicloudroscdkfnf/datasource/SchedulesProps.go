package datasource


// Properties for defining a `Schedules`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedules
type SchedulesProps struct {
	// Property flowName: The name of the flow that is bound to the time-based schedule.
	//
	// The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
	// The name can contain letters, digits, underscores (_), and hyphens (-).
	// The name must start with a letter or an underscore (_).
	// The name is case-sensitive.
	// The name must be 1 to 128 characters in length.
	FlowName interface{} `field:"required" json:"flowName" yaml:"flowName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

