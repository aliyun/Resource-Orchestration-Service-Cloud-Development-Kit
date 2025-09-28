package alicloudroscdkesa


// Properties for defining a `Certificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-certificate
type CertificateProps struct {
	// Property createdType: The certificate type.
	//
	// - cas (Certificate Center Certificate)
	// - upload (custom upload certificate)
	// - free( Free certificate).
	CreatedType interface{} `field:"required" json:"createdType" yaml:"createdType"`
	// Property domains: A list of domain names.
	//
	// Multiple domain names are separated by commas.
	Domains interface{} `field:"required" json:"domains" yaml:"domains"`
	// Property siteId: The site ID, which can be obtained by calling the ListSites interface.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property casId: Cloud certificate ID.
	CasId interface{} `field:"optional" json:"casId" yaml:"casId"`
	// Property certId: The certificate Id.
	CertId interface{} `field:"optional" json:"certId" yaml:"certId"`
	// Property certificate: Certificate content.
	Certificate interface{} `field:"optional" json:"certificate" yaml:"certificate"`
	// Property certName: The certificate name.
	CertName interface{} `field:"optional" json:"certName" yaml:"certName"`
	// Property privateKey: The certificate private key.
	PrivateKey interface{} `field:"optional" json:"privateKey" yaml:"privateKey"`
}

