package alicloudroscdkesa


// Properties for defining a `RosCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-certificate
type RosCertificateProps struct {
	CreatedType interface{} `field:"required" json:"createdType" yaml:"createdType"`
	Domains interface{} `field:"required" json:"domains" yaml:"domains"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	CasId interface{} `field:"optional" json:"casId" yaml:"casId"`
	CertId interface{} `field:"optional" json:"certId" yaml:"certId"`
	Certificate interface{} `field:"optional" json:"certificate" yaml:"certificate"`
	CertName interface{} `field:"optional" json:"certName" yaml:"certName"`
	PrivateKey interface{} `field:"optional" json:"privateKey" yaml:"privateKey"`
}

