package alicloudroscdksae


// Properties for defining a `Secret`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-secret
type SecretProps struct {
	// Property namespaceId: The namespace ID where the Secret instance resides.
	//
	// If the namespace you are in is the default namespace, you just need to fill in the RegionId.
	NamespaceId interface{} `field:"required" json:"namespaceId" yaml:"namespaceId"`
	// Property secretData: Secret key-value pair data, required.The format is as follows: {"Data":"{"k1":"v1", "k2":"v2"}"} k represents the key and v represents the value.
	SecretData interface{} `field:"required" json:"secretData" yaml:"secretData"`
	// Property secretName: Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters.
	SecretName interface{} `field:"required" json:"secretName" yaml:"secretName"`
	// Property secretType: The currently supported Secret instance type.The values are as follows: kubernetes.io\/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment.
	SecretType interface{} `field:"required" json:"secretType" yaml:"secretType"`
}

