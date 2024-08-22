package datasource


// Properties for defining a `FlowLog`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
type FlowLogProps struct {
	// Property flowLogId: The flow log ID.
	FlowLogId interface{} `field:"required" json:"flowLogId" yaml:"flowLogId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

