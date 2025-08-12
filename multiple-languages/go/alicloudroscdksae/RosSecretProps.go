package alicloudroscdksae


// Properties for defining a `RosSecret`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-secret
type RosSecretProps struct {
	NamespaceId interface{} `field:"required" json:"namespaceId" yaml:"namespaceId"`
	SecretData interface{} `field:"required" json:"secretData" yaml:"secretData"`
	SecretName interface{} `field:"required" json:"secretName" yaml:"secretName"`
	SecretType interface{} `field:"required" json:"secretType" yaml:"secretType"`
}

