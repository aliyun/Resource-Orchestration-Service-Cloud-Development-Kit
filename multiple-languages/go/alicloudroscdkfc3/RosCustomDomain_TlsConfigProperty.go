package alicloudroscdkfc3


type RosCustomDomain_TlsConfigProperty struct {
	CipherSuites interface{} `field:"required" json:"cipherSuites" yaml:"cipherSuites"`
	MinVersion interface{} `field:"required" json:"minVersion" yaml:"minVersion"`
	MaxVersion interface{} `field:"optional" json:"maxVersion" yaml:"maxVersion"`
}

