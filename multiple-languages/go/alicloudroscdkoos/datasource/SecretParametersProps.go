package datasource


// Properties for defining a `SecretParameters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters
type SecretParametersProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property secretParameterName: The name of the encryption parameter.
	SecretParameterName interface{} `field:"optional" json:"secretParameterName" yaml:"secretParameterName"`
}

