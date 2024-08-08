package alicloudroscdkkms


// Properties for defining a `RosKey`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
type RosKeyProps struct {
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DkmsInstanceId interface{} `field:"optional" json:"dkmsInstanceId" yaml:"dkmsInstanceId"`
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	EnableAutomaticRotation interface{} `field:"optional" json:"enableAutomaticRotation" yaml:"enableAutomaticRotation"`
	KeySpec interface{} `field:"optional" json:"keySpec" yaml:"keySpec"`
	KeyUsage interface{} `field:"optional" json:"keyUsage" yaml:"keyUsage"`
	PendingWindowInDays interface{} `field:"optional" json:"pendingWindowInDays" yaml:"pendingWindowInDays"`
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
	ProtectionLevel interface{} `field:"optional" json:"protectionLevel" yaml:"protectionLevel"`
	RotationInterval interface{} `field:"optional" json:"rotationInterval" yaml:"rotationInterval"`
}

