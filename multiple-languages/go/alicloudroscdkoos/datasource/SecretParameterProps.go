package datasource


// Properties for defining a `SecretParameter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameter
type SecretParameterProps struct {
	// Property secretParameterName: The name of the parameter.
	SecretParameterName interface{} `field:"required" json:"secretParameterName" yaml:"secretParameterName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

