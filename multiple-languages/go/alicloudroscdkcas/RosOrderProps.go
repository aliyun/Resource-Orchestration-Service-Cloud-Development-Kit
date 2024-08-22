package alicloudroscdkcas


// Properties for defining a `RosOrder`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order
type RosOrderProps struct {
	CertBrand interface{} `field:"required" json:"certBrand" yaml:"certBrand"`
	CertType interface{} `field:"required" json:"certType" yaml:"certType"`
	DomainCnt interface{} `field:"optional" json:"domainCnt" yaml:"domainCnt"`
	DomainType interface{} `field:"optional" json:"domainType" yaml:"domainType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	Service interface{} `field:"optional" json:"service" yaml:"service"`
}

