package alicloudroscdkesa


// Properties for defining a `SiteOriginClientCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-siteoriginclientcertificate
type SiteOriginClientCertificateProps struct {
	// Property certificate: The certificate content.
	Certificate interface{} `field:"required" json:"certificate" yaml:"certificate"`
	// Property privateKey: The private key of the certificate.
	PrivateKey interface{} `field:"required" json:"privateKey" yaml:"privateKey"`
	// Property siteId: Site ID.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property siteOriginClientCertificateName: The certificate name.
	SiteOriginClientCertificateName interface{} `field:"optional" json:"siteOriginClientCertificateName" yaml:"siteOriginClientCertificateName"`
	// Property validityDays: The validity period of the certificate.
	//
	// Unit: day.
	ValidityDays interface{} `field:"optional" json:"validityDays" yaml:"validityDays"`
}

