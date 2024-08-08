package datasource


// Properties for defining a `Services`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-services
type ServicesProps struct {
	// Property prefix: Qualified returned service names must be prefixed with Prefix.
	//
	// For example, if the Prefix is "a", the returned service names should be started with "a".
	Prefix interface{} `field:"optional" json:"prefix" yaml:"prefix"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

