package alicloudroscdkesa


// Properties for defining a `RosOriginClientCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originclientcertificate
type RosOriginClientCertificateProps struct {
	Certificate interface{} `field:"required" json:"certificate" yaml:"certificate"`
	PrivateKey interface{} `field:"required" json:"privateKey" yaml:"privateKey"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	Hostnames interface{} `field:"optional" json:"hostnames" yaml:"hostnames"`
	OriginClientCertificateName interface{} `field:"optional" json:"originClientCertificateName" yaml:"originClientCertificateName"`
	ValidityDays interface{} `field:"optional" json:"validityDays" yaml:"validityDays"`
}

