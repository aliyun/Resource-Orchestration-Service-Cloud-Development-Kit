package alicloudroscdkfc3


type RosFunction_RegistryConfigProperty struct {
	CertConfig interface{} `field:"required" json:"certConfig" yaml:"certConfig"`
	AuthConfig interface{} `field:"optional" json:"authConfig" yaml:"authConfig"`
	NetworkConfig interface{} `field:"optional" json:"networkConfig" yaml:"networkConfig"`
}

