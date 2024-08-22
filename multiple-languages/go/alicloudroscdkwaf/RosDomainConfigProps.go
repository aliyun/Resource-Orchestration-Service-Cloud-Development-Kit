package alicloudroscdkwaf


// Properties for defining a `RosDomainConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domainconfig
type RosDomainConfigProps struct {
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	IsAccessProduct interface{} `field:"required" json:"isAccessProduct" yaml:"isAccessProduct"`
	Protocols interface{} `field:"required" json:"protocols" yaml:"protocols"`
	HttpPort interface{} `field:"optional" json:"httpPort" yaml:"httpPort"`
	HttpsPort interface{} `field:"optional" json:"httpsPort" yaml:"httpsPort"`
	HttpsRedirect interface{} `field:"optional" json:"httpsRedirect" yaml:"httpsRedirect"`
	HttpToUserIp interface{} `field:"optional" json:"httpToUserIp" yaml:"httpToUserIp"`
	LoadBalancing interface{} `field:"optional" json:"loadBalancing" yaml:"loadBalancing"`
	Region interface{} `field:"optional" json:"region" yaml:"region"`
	RsType interface{} `field:"optional" json:"rsType" yaml:"rsType"`
	SourceIps interface{} `field:"optional" json:"sourceIps" yaml:"sourceIps"`
}

