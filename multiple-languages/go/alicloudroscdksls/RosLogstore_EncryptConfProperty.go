package alicloudroscdksls


type RosLogstore_EncryptConfProperty struct {
	Enable interface{} `field:"required" json:"enable" yaml:"enable"`
	EncryptType interface{} `field:"required" json:"encryptType" yaml:"encryptType"`
	UserCmkInfo interface{} `field:"optional" json:"userCmkInfo" yaml:"userCmkInfo"`
}

