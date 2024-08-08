package alicloudroscdkcas


// Properties for defining a `RosCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate
type RosCertificateProps struct {
	Cert interface{} `field:"required" json:"cert" yaml:"cert"`
	Key interface{} `field:"required" json:"key" yaml:"key"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	SourceIp interface{} `field:"optional" json:"sourceIp" yaml:"sourceIp"`
}

