package datasource


// Properties for defining a `ServiceObservability`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms2-serviceobservability
type ServiceObservabilityProps struct {
	// Property type: The type of service observability.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property workspace: The workspace name.
	Workspace interface{} `field:"required" json:"workspace" yaml:"workspace"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

