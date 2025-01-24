package alicloudroscdkfc3


type RosFunction_CertConfigProperty struct {
	Insecure interface{} `field:"required" json:"insecure" yaml:"insecure"`
	RootCaCertBase64 interface{} `field:"optional" json:"rootCaCertBase64" yaml:"rootCaCertBase64"`
}

