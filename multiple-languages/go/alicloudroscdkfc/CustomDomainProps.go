package alicloudroscdkfc


// Properties for defining a `CustomDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-customdomain
type CustomDomainProps struct {
	// Property domainName: domain name.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property protocol: HTTP or HTTP,HTTPS.
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	// Property apiVersion: api version.
	ApiVersion interface{} `field:"optional" json:"apiVersion" yaml:"apiVersion"`
	// Property certConfig: certificate info.
	CertConfig interface{} `field:"optional" json:"certConfig" yaml:"certConfig"`
	// Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.
	RouteConfig interface{} `field:"optional" json:"routeConfig" yaml:"routeConfig"`
}

