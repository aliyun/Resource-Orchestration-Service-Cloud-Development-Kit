package datasource


// Properties for defining a `Triggers`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-triggers
type TriggersProps struct {
	// Property functionName: Function name.
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	// Property serviceName: Service name.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property prefix: Qualified returned trigger names must be prefixed with Prefix.
	//
	// For example, if the Prefix is "a", the returned trigger names should be started with "a".
	Prefix interface{} `field:"optional" json:"prefix" yaml:"prefix"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

