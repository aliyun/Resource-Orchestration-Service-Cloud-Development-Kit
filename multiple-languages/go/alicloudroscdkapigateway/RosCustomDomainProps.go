package alicloudroscdkapigateway


// Properties for defining a `RosCustomDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-customdomain
type RosCustomDomainProps struct {
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	CertificateBody interface{} `field:"optional" json:"certificateBody" yaml:"certificateBody"`
	CertificateName interface{} `field:"optional" json:"certificateName" yaml:"certificateName"`
	CertificatePrivateKey interface{} `field:"optional" json:"certificatePrivateKey" yaml:"certificatePrivateKey"`
}

