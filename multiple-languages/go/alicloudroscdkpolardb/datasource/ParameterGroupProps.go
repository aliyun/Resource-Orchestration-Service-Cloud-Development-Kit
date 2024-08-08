package datasource


// Properties for defining a `ParameterGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroup
type ParameterGroupProps struct {
	// Property parameterGroupId: The ID of the parameter template.
	ParameterGroupId interface{} `field:"required" json:"parameterGroupId" yaml:"parameterGroupId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

