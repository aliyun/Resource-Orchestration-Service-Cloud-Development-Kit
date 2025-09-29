package alicloudroscdkesa


// Properties for defining a `ClientCaCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcacertificate
type ClientCaCertificateProps struct {
	// Property certificate: Certificate content.
	Certificate interface{} `field:"required" json:"certificate" yaml:"certificate"`
	// Property siteId: Site Id.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property clientCaCertName: The certificate name.
	ClientCaCertName interface{} `field:"optional" json:"clientCaCertName" yaml:"clientCaCertName"`
}

