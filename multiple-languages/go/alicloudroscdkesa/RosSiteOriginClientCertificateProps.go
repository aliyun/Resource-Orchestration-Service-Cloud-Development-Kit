package alicloudroscdkesa


// Properties for defining a `RosSiteOriginClientCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-siteoriginclientcertificate
type RosSiteOriginClientCertificateProps struct {
	Certificate interface{} `field:"required" json:"certificate" yaml:"certificate"`
	PrivateKey interface{} `field:"required" json:"privateKey" yaml:"privateKey"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	SiteOriginClientCertificateName interface{} `field:"optional" json:"siteOriginClientCertificateName" yaml:"siteOriginClientCertificateName"`
	ValidityDays interface{} `field:"optional" json:"validityDays" yaml:"validityDays"`
}

