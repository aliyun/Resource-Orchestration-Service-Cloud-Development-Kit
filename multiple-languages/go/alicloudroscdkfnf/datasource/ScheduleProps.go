package datasource


// Properties for defining a `Schedule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedule
type ScheduleProps struct {
	// Property flowName: The name of the flow that is associated with the time-based schedule.
	//
	// The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
	// The name can contain letters, digits, underscores (_), and hyphens (-).
	// The name must start with a letter or an underscore (_).
	// The name is case-sensitive.
	// The name must be 1 to 128 characters in length.
	FlowName interface{} `field:"required" json:"flowName" yaml:"flowName"`
	// Property scheduleName: The name of the time-based schedule.
	//
	// The name must meet the following conventions:
	// The name can contain letters, digits, underscores (_), and hyphens (-).
	// The name must start with a letter or an underscore (_).
	// The name is case-sensitive.
	// The name must be 1 to 128 characters in length.
	ScheduleName interface{} `field:"required" json:"scheduleName" yaml:"scheduleName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

