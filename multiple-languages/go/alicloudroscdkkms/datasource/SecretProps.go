package datasource


// Properties for defining a `Secret`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secret
type SecretProps struct {
	// Property secretName: The name of the secret.
	SecretName interface{} `field:"required" json:"secretName" yaml:"secretName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

