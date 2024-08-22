package alicloudroscdkfc


type RosCustomDomain_CertConfigProperty struct {
	Certificate interface{} `field:"required" json:"certificate" yaml:"certificate"`
	CertName interface{} `field:"required" json:"certName" yaml:"certName"`
	PrivateKey interface{} `field:"required" json:"privateKey" yaml:"privateKey"`
}

