package datasource


// Properties for defining a `RosSecrets`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
type RosSecretsProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

