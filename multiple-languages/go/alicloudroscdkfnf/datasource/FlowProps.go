package datasource


// Properties for defining a `Flow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flow
type FlowProps struct {
	// Property flowName: The name of the flow.
	//
	// The name must be unique within a region for the same Alibaba Cloud account.
	FlowName interface{} `field:"required" json:"flowName" yaml:"flowName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

