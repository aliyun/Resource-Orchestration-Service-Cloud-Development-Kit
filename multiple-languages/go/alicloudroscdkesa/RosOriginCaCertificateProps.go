package alicloudroscdkesa


// Properties for defining a `RosOriginCaCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-origincacertificate
type RosOriginCaCertificateProps struct {
	Certificate interface{} `field:"required" json:"certificate" yaml:"certificate"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ValidityDays interface{} `field:"optional" json:"validityDays" yaml:"validityDays"`
}

