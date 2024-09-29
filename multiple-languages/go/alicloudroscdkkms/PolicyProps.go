package alicloudroscdkkms


// Properties for defining a `Policy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-policy
type PolicyProps struct {
	// Property accessControlRules: Network Rules info.
	AccessControlRules interface{} `field:"required" json:"accessControlRules" yaml:"accessControlRules"`
	// Property kmsInstanceId: The scope of the permission policy.
	//
	// You need to specify the KMS instance that you want to access.
	KmsInstanceId interface{} `field:"required" json:"kmsInstanceId" yaml:"kmsInstanceId"`
	// Property permissions: The operations that can be performed.
	//
	// Valid values:
	// RbacPermission\/Template\/CryptoServiceKeyUser: allows you to perform cryptographic operations.
	// RbacPermission\/Template\/CryptoServiceSecretUser: allows you to perform secret-related operations.
	Permissions interface{} `field:"required" json:"permissions" yaml:"permissions"`
	// Property policyName: The name of the permission policy.
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	// Property resources: The key and secret that are allowed to access.
	//
	// Supports a maximum of 30 key and secret.
	// Key: Enter a key in the key\/${KeyId} format. To allow access to all keys of a KMS instance, enter key\/*.
	// Secret: Enter a secret in the secret\/${SecretName} format. To allow access to all secrets of a KMS instance, enter secret\/*.
	Resources interface{} `field:"required" json:"resources" yaml:"resources"`
	// Property description: The description of the permission policy.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

