package datasource


// Properties for defining a `RosSecret`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secret
type RosSecretProps struct {
	SecretName interface{} `field:"required" json:"secretName" yaml:"secretName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

