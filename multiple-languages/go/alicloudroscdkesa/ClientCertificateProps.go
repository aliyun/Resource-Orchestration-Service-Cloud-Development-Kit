package alicloudroscdkesa


// Properties for defining a `ClientCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcertificate
type ClientCertificateProps struct {
	// Property siteId: Site Id.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property validityDays: Certificate validity period.
	ValidityDays interface{} `field:"required" json:"validityDays" yaml:"validityDays"`
	// Property csr: Certificate signing request content.
	Csr interface{} `field:"optional" json:"csr" yaml:"csr"`
	// Property pkeyType: The private key algorithm type.
	PkeyType interface{} `field:"optional" json:"pkeyType" yaml:"pkeyType"`
}

