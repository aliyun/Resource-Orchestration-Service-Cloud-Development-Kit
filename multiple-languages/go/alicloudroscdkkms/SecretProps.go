package alicloudroscdkkms


// Properties for defining a `Secret`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
type SecretProps struct {
	// Property secretData: The value of the secret that you want to create.
	//
	// Secrets Manager encrypts the secret
	// value and stores it in the initial version.
	SecretData interface{} `field:"required" json:"secretData" yaml:"secretData"`
	// Property secretName: The name of the secret.
	SecretName interface{} `field:"required" json:"secretName" yaml:"secretName"`
	// Property versionId: The version number of the initial version.
	//
	// Version numbers are unique in each secret
	// object.
	VersionId interface{} `field:"required" json:"versionId" yaml:"versionId"`
	// Property description: The description of the secret.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property dkmsInstanceId: The ID of the dedicated KMS instance.
	DkmsInstanceId interface{} `field:"optional" json:"dkmsInstanceId" yaml:"dkmsInstanceId"`
	// Property enableAutomaticRotation: Specifies whether to enable automatic rotation.
	//
	// Valid values:
	// true: specifies to enable automatic rotation.
	// false: specifies to disable automatic rotation. This is the default value.
	EnableAutomaticRotation interface{} `field:"optional" json:"enableAutomaticRotation" yaml:"enableAutomaticRotation"`
	// Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
	//
	// If you do not specify this parameter, Secrets Manager automatically creates an encryption
	// key to encrypt the secret.
	// Note The KMS CMK must be a symmetric key.
	EncryptionKeyId interface{} `field:"optional" json:"encryptionKeyId" yaml:"encryptionKeyId"`
	// Property extendedConfig: The extended configuration of the secret.
	//
	// This parameter specifies the properties of the secret of the specific type.
	ExtendedConfig interface{} `field:"optional" json:"extendedConfig" yaml:"extendedConfig"`
	// Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.
	//
	// If this parameter is set to true, the secret cannot be recovered. Valid values:
	// true
	// false (default value).
	ForceDeleteWithoutRecovery interface{} `field:"optional" json:"forceDeleteWithoutRecovery" yaml:"forceDeleteWithoutRecovery"`
	// Property policy: The specific content of the credential policy in JSON format.
	//
	// Maximum length is 32768 bytes.
	// If this parameter is not specified, the default credential policy is used.
	// The policy content includes:
	// - Version: The version of the policy. Currently, only version 1 is supported.
	// - Statement: A list of statements, each containing:
	//    - Sid (optional): A custom statement identifier. Up to 128 characters, including letters, digits, and _\/+=.@-.
	//    - Effect (required): Whether the statement allows or denies permissions. Valid values: Allow, Deny.
	//    - Principal (required): The entity to which the permissions are granted. Can be the current Alibaba Cloud account, RAM users or roles under the current or other accounts.
	//    - Action (required): The API actions allowed or denied. Must start with "kms:". For valid actions, see   - Resource (required): Must be "*", representing this KMS secret.
	//    - Condition (optional): Conditions that limit when the policy is effective. Format: `"Condition": {"condition operator": {"condition key": "condition value"}}`. See documentation for details.
	// > After granting permissions to RAM users or roles under another Alibaba Cloud account, you must also use RAM to authorize that user or role to use this secret.
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
	// Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.
	//
	// Default value: 30.
	RecoveryWindowInDays interface{} `field:"optional" json:"recoveryWindowInDays" yaml:"recoveryWindowInDays"`
	// Property rotationInterval: The interval for automatic rotation.
	//
	// Valid values: 6 hours to 8,760 hours (365 days).
	// The value is in the integer[unit] format.
	// The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
	RotationInterval interface{} `field:"optional" json:"rotationInterval" yaml:"rotationInterval"`
	// Property secretDataType: The type of the secret value.
	//
	// Valid values:
	// text (default value)
	// binary.
	SecretDataType interface{} `field:"optional" json:"secretDataType" yaml:"secretDataType"`
	// Property secretType: The type of the secret.
	//
	// Valid values:
	// Generic: specifies a generic secret.
	// Rds: specifies a managed ApsaraDB RDS secret.
	// RAMCredentials: specifies a managed RAM secret.
	// ECS: specifies a managed ECS secret.
	SecretType interface{} `field:"optional" json:"secretType" yaml:"secretType"`
	// Property tags: Tags to attach to secret.
	//
	// Max support 20 tags to add during create secret. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosSecret_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property versionStages: The stage labels that mark the secret version.
	//
	// ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
	VersionStages interface{} `field:"optional" json:"versionStages" yaml:"versionStages"`
}

