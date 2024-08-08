package alicloudroscdkkms


// Properties for defining a `RosSecret`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
type RosSecretProps struct {
	SecretData interface{} `field:"required" json:"secretData" yaml:"secretData"`
	SecretName interface{} `field:"required" json:"secretName" yaml:"secretName"`
	VersionId interface{} `field:"required" json:"versionId" yaml:"versionId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DkmsInstanceId interface{} `field:"optional" json:"dkmsInstanceId" yaml:"dkmsInstanceId"`
	EnableAutomaticRotation interface{} `field:"optional" json:"enableAutomaticRotation" yaml:"enableAutomaticRotation"`
	EncryptionKeyId interface{} `field:"optional" json:"encryptionKeyId" yaml:"encryptionKeyId"`
	ExtendedConfig interface{} `field:"optional" json:"extendedConfig" yaml:"extendedConfig"`
	ForceDeleteWithoutRecovery interface{} `field:"optional" json:"forceDeleteWithoutRecovery" yaml:"forceDeleteWithoutRecovery"`
	RecoveryWindowInDays interface{} `field:"optional" json:"recoveryWindowInDays" yaml:"recoveryWindowInDays"`
	RotationInterval interface{} `field:"optional" json:"rotationInterval" yaml:"rotationInterval"`
	SecretDataType interface{} `field:"optional" json:"secretDataType" yaml:"secretDataType"`
	SecretType interface{} `field:"optional" json:"secretType" yaml:"secretType"`
	VersionStages interface{} `field:"optional" json:"versionStages" yaml:"versionStages"`
}

