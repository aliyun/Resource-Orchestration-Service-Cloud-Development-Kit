package alicloudroscdkcas


// Properties for defining a `RosPcaCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
type RosPcaCertificateProps struct {
	CommonName interface{} `field:"required" json:"commonName" yaml:"commonName"`
	Locality interface{} `field:"required" json:"locality" yaml:"locality"`
	Organization interface{} `field:"required" json:"organization" yaml:"organization"`
	OrganizationUnit interface{} `field:"required" json:"organizationUnit" yaml:"organizationUnit"`
	State interface{} `field:"required" json:"state" yaml:"state"`
	Years interface{} `field:"required" json:"years" yaml:"years"`
	Algorithm interface{} `field:"optional" json:"algorithm" yaml:"algorithm"`
	CaStatus interface{} `field:"optional" json:"caStatus" yaml:"caStatus"`
	CountryCode interface{} `field:"optional" json:"countryCode" yaml:"countryCode"`
}

