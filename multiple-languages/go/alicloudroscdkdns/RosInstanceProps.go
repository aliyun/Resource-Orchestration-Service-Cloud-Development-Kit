package alicloudroscdkdns


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
type RosInstanceProps struct {
	DnsSecurity interface{} `field:"required" json:"dnsSecurity" yaml:"dnsSecurity"`
	DomainNumbers interface{} `field:"required" json:"domainNumbers" yaml:"domainNumbers"`
	Period interface{} `field:"required" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"required" json:"periodUnit" yaml:"periodUnit"`
	Version interface{} `field:"required" json:"version" yaml:"version"`
	Domain interface{} `field:"optional" json:"domain" yaml:"domain"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	RenewalStatus interface{} `field:"optional" json:"renewalStatus" yaml:"renewalStatus"`
}

