package alicloudroscdkcas


// Properties for defining a `RosSslCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-sslcertificate
type RosSslCertificateProps struct {
	CertBrand interface{} `field:"optional" json:"certBrand" yaml:"certBrand"`
	CertType interface{} `field:"optional" json:"certType" yaml:"certType"`
	CompanyName interface{} `field:"optional" json:"companyName" yaml:"companyName"`
	Csr interface{} `field:"optional" json:"csr" yaml:"csr"`
	Domains interface{} `field:"optional" json:"domains" yaml:"domains"`
	DomainType interface{} `field:"optional" json:"domainType" yaml:"domainType"`
	Email interface{} `field:"optional" json:"email" yaml:"email"`
	Phone interface{} `field:"optional" json:"phone" yaml:"phone"`
	ProductCode interface{} `field:"optional" json:"productCode" yaml:"productCode"`
	Username interface{} `field:"optional" json:"username" yaml:"username"`
	ValidateType interface{} `field:"optional" json:"validateType" yaml:"validateType"`
}

