package alicloudroscdkesa


// Properties for defining a `OriginCaCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-origincacertificate
type OriginCaCertificateProps struct {
	// Property certificate: Certificate content.
	Certificate interface{} `field:"required" json:"certificate" yaml:"certificate"`
	// Property siteId: The website ID.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property name: The certificate name.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property validityDays: The validity period of the certificate.
	//
	// Unit: day.
	ValidityDays interface{} `field:"optional" json:"validityDays" yaml:"validityDays"`
}

