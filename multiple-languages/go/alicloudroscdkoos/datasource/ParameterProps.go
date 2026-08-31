package datasource


// Properties for defining a `Parameter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-parameter
type ParameterProps struct {
	// Property name: The name of the common parameter.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property parameterVersion: The version number of the common parameter.
	ParameterVersion interface{} `field:"optional" json:"parameterVersion" yaml:"parameterVersion"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

