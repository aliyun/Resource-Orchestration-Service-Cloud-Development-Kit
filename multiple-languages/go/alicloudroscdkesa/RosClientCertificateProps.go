package alicloudroscdkesa


// Properties for defining a `RosClientCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcertificate
type RosClientCertificateProps struct {
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	ValidityDays interface{} `field:"required" json:"validityDays" yaml:"validityDays"`
	Csr interface{} `field:"optional" json:"csr" yaml:"csr"`
	PkeyType interface{} `field:"optional" json:"pkeyType" yaml:"pkeyType"`
}

