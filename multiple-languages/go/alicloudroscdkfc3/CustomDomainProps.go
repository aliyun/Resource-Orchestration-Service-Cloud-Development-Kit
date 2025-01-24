package alicloudroscdkfc3


// Properties for defining a `CustomDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
type CustomDomainProps struct {
	// Property authConfig: Permission authentication configuration.
	AuthConfig interface{} `field:"required" json:"authConfig" yaml:"authConfig"`
	// Property domainName: Domain name.
	//
	// Fill in the custom domain name that has been filed in Ali cloud or access to the record.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property protocol: Protocol types supported by the domain name.
	//
	// Valid values:
	// - HTTP: Only HTTP protocol is supported.
	// - HTTPS: HTTPS only is supported.
	// - HTTP,HTTPS: Supports HTTP and HTTPS protocols.
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	// Property certConfig: HTTPS certificate information.
	CertConfig interface{} `field:"optional" json:"certConfig" yaml:"certConfig"`
	// Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.
	RouteConfig interface{} `field:"optional" json:"routeConfig" yaml:"routeConfig"`
	// Property tlsConfig: TLS config.
	TlsConfig interface{} `field:"optional" json:"tlsConfig" yaml:"tlsConfig"`
	// Property wafConfig: Web application firewall configuration information.
	WafConfig interface{} `field:"optional" json:"wafConfig" yaml:"wafConfig"`
}

