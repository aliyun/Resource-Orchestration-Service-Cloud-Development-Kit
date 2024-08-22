package alicloudroscdkfc


// Properties for defining a `RosCustomDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-customdomain
type RosCustomDomainProps struct {
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	ApiVersion interface{} `field:"optional" json:"apiVersion" yaml:"apiVersion"`
	CertConfig interface{} `field:"optional" json:"certConfig" yaml:"certConfig"`
	RouteConfig interface{} `field:"optional" json:"routeConfig" yaml:"routeConfig"`
}

