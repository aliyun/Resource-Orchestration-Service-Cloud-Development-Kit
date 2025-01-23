package alicloudroscdkfc3


// Properties for defining a `RosCustomDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
type RosCustomDomainProps struct {
	AuthConfig interface{} `field:"required" json:"authConfig" yaml:"authConfig"`
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	CertConfig interface{} `field:"optional" json:"certConfig" yaml:"certConfig"`
	RouteConfig interface{} `field:"optional" json:"routeConfig" yaml:"routeConfig"`
	TlsConfig interface{} `field:"optional" json:"tlsConfig" yaml:"tlsConfig"`
	WafConfig interface{} `field:"optional" json:"wafConfig" yaml:"wafConfig"`
}

