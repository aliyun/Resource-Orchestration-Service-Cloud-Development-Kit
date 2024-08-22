package alicloudroscdkcas


// Properties for defining a `Certificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate
type CertificateProps struct {
	// Property cert: Specify the content of the certificate.
	//
	// To use the PEM encoding format.
	Cert interface{} `field:"required" json:"cert" yaml:"cert"`
	// Property key: Specify the certificate private key content.
	//
	// To use the PEM encoding format.
	Key interface{} `field:"required" json:"key" yaml:"key"`
	// Property name: Custom certificate name.
	//
	// The certificate name under a user cannot be duplicated.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property lang: Specifies the language type for requesting and receiving messages.
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	// Property sourceIp: Specifies the source IP address of the request.
	SourceIp interface{} `field:"optional" json:"sourceIp" yaml:"sourceIp"`
}

