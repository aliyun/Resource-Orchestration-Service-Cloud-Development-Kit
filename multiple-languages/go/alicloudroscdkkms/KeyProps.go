package alicloudroscdkkms


// Properties for defining a `Key`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
type KeyProps struct {
	// Property deletionProtection: Specifies whether to enable the release protection feature for the key.
	//
	// Default is false.
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	// Property description: The description of the CMK.
	//
	// Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property dkmsInstanceId: The ID of the KMS instance.
	//
	// > This parameter is required when you create a key for a KMS instance. This
	// parameter is not required when you create a default key (master key).
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
	// Property protectionLevel: You do not need to specify this parameter.
	//
	// KMS automatically sets an appropriate
	// protection level for your key.
	// The protection level of the key. Valid values:
	// - SOFTWARE
	// - HSM
	// > * If you specify DKMSInstanceId, this parameter is ignored. If the instance is
	// a software key management instance, the protection level is SOFTWARE. If the
	// instance is a hardware key management instance, the protection level is HSM.
	// - If you do not specify DKMSInstanceId, leave this parameter empty. KMS sets the
	// protection level. If a managed HSM is available in the region, KMS sets this
	// parameter to HSM. Otherwise, KMS sets this parameter to SOFTWARE. For more
	// information, see [Managed HSM overview]().
	ProtectionLevel interface{} `field:"optional" json:"protectionLevel" yaml:"protectionLevel"`
	// Property rotationInterval: The automatic rotation period.
	//
	// The format is \`integer\[unit]\`. \`integer\`
	// indicates the length of the period. \`unit\` indicates the unit of time. Valid
	// units: d (day), h (hour), m (minute), and s (second). For example, both 7d and
	// 604800s represent a period of 7 days.
	// - If the key is a default key, the value is 365d.
	// - If the key is a software-protected key, the value can be from 7d to 365d.
	// - If the key is a hardware-protected key, automatic rotation is not supported.
	// > This parameter is required if you set EnableAutomaticRotation to true.
	RotationInterval interface{} `field:"optional" json:"rotationInterval" yaml:"rotationInterval"`
	// Property tags: Tags to attach to key.
	//
	// Max support 20 tags to add during create key. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosKey_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

