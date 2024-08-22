package alicloudroscdkapigateway


// Properties for defining a `CustomDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-customdomain
type CustomDomainProps struct {
	// Property domainName: Custom domain name.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property groupId: The id of the Group.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property certificateBody: SSL certificate body.
	CertificateBody interface{} `field:"optional" json:"certificateBody" yaml:"certificateBody"`
	// Property certificateName: SSL certificate name.
	CertificateName interface{} `field:"optional" json:"certificateName" yaml:"certificateName"`
	// Property certificatePrivateKey: SSL certificate key.
	CertificatePrivateKey interface{} `field:"optional" json:"certificatePrivateKey" yaml:"certificatePrivateKey"`
}

