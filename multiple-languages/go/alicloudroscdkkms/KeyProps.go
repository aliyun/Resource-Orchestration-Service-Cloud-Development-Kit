package alicloudroscdkkms


// Properties for defining a `Key`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
type KeyProps struct {
	// Property description: The description of the CMK.
	//
	// Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property dkmsInstanceId: The ID of the dedicated KMS instance.
	DkmsInstanceId interface{} `field:"optional" json:"dkmsInstanceId" yaml:"dkmsInstanceId"`
	// Property enable: Specifies whether the key is enabled.
	//
	// Defaults to true.
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	// Property enableAutomaticRotation: Whether to enable automatic key rotation.
	//
	// Valid value: true\/false (default).
	EnableAutomaticRotation interface{} `field:"optional" json:"enableAutomaticRotation" yaml:"enableAutomaticRotation"`
	// Property keySpec: Key type.
	//
	// Valid value: Aliyun_AES_256\/Aliyun_SM4\/RSA_2048\/EC_P256\/EC_P256K\/EC_SM2.
	KeySpec interface{} `field:"optional" json:"keySpec" yaml:"keySpec"`
	// Property keyUsage: The usage of the CMK.
	//
	// Valid values:
	// ENCRYPT\/DECRYPT: encrypts or decrypts data.
	// SIGN\/VERIFY: generates or verifies a digital signature.
	// If the CMK supports signature verification, the default value is SIGN\/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT\/DECRYPT.
	KeyUsage interface{} `field:"optional" json:"keyUsage" yaml:"keyUsage"`
	// Property pendingWindowInDays: The waiting period, specified in number of days.
	//
	// During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
	PendingWindowInDays interface{} `field:"optional" json:"pendingWindowInDays" yaml:"pendingWindowInDays"`
	// Property policy: The policy of key.
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
	// Property protectionLevel: The protection level of the CMK to create.
	//
	// Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
	// If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
	// If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
	ProtectionLevel interface{} `field:"optional" json:"protectionLevel" yaml:"protectionLevel"`
	// Property rotationInterval: The time period for automatic rotation.
	//
	// The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
	RotationInterval interface{} `field:"optional" json:"rotationInterval" yaml:"rotationInterval"`
}

