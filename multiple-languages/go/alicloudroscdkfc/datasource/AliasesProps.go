package datasource


// Properties for defining a `Aliases`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-aliases
type AliasesProps struct {
	// Property serviceName: Service name.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property prefix: Qualified returned alias names must be prefixed with Prefix.
	//
	// For example, if the Prefix is "a", the returned alias names should be started with "a".
	Prefix interface{} `field:"optional" json:"prefix" yaml:"prefix"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

