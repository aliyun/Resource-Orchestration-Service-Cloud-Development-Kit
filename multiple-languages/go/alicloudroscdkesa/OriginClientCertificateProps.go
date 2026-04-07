package alicloudroscdkesa


// Properties for defining a `OriginClientCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originclientcertificate
type OriginClientCertificateProps struct {
	// Property certificate: The certificate content.
	Certificate interface{} `field:"required" json:"certificate" yaml:"certificate"`
	// Property privateKey: The private key of the certificate.
	PrivateKey interface{} `field:"required" json:"privateKey" yaml:"privateKey"`
	// Property siteId: The website ID.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property hostnames: The domain names to associate.
	Hostnames interface{} `field:"optional" json:"hostnames" yaml:"hostnames"`
	// Property originClientCertificateName: The certificate name.
	OriginClientCertificateName interface{} `field:"optional" json:"originClientCertificateName" yaml:"originClientCertificateName"`
	// Property validityDays: The validity period of the certificate.
	//
	// Unit: day.
	ValidityDays interface{} `field:"optional" json:"validityDays" yaml:"validityDays"`
}

