package alicloudroscdkesa


// Properties for defining a `RosClientCaCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcacertificate
type RosClientCaCertificateProps struct {
	Certificate interface{} `field:"required" json:"certificate" yaml:"certificate"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	ClientCaCertName interface{} `field:"optional" json:"clientCaCertName" yaml:"clientCaCertName"`
}

