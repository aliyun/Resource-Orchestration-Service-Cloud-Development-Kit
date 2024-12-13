package datasource


// Properties for defining a `SyntheticTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictask
type SyntheticTaskProps struct {
	// Property taskId: The ID of the synthetic monitoring task.
	TaskId interface{} `field:"required" json:"taskId" yaml:"taskId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

