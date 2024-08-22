package datasource


// Properties for defining a `RosSecretParameters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters
type RosSecretParametersProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecretParameterName interface{} `field:"optional" json:"secretParameterName" yaml:"secretParameterName"`
}

