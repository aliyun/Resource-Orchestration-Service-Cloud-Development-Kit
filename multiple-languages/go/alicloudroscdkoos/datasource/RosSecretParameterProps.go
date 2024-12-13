package datasource


// Properties for defining a `RosSecretParameter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameter
type RosSecretParameterProps struct {
	SecretParameterName interface{} `field:"required" json:"secretParameterName" yaml:"secretParameterName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

