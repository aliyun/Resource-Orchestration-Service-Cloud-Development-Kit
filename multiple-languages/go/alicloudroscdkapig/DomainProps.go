package alicloudroscdkapig


// Properties for defining a `Domain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain
type DomainProps struct {
	// Property domainName: The name of the Domain.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property protocol: The types of protocols supported by the domain are as follows: * HTTP: Supports only the HTTP protocol.
	//
	// * HTTPS: Supports only the HTTPS protocol.
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
}

