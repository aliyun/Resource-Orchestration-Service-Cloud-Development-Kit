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
	// Property certIdentifier: The tls Certificate identification.
	CertIdentifier interface{} `field:"optional" json:"certIdentifier" yaml:"certIdentifier"`
	// Property forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
	ForceHttps interface{} `field:"optional" json:"forceHttps" yaml:"forceHttps"`
	// Property http2Option: Whether to enable http2 settings.
	Http2Option interface{} `field:"optional" json:"http2Option" yaml:"http2Option"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tlsCipherSuitesConfig: The configuration of the TLS encryption suite.
	TlsCipherSuitesConfig interface{} `field:"optional" json:"tlsCipherSuitesConfig" yaml:"tlsCipherSuitesConfig"`
	// Property tlsMax: The maximum version of the TLS protocol.
	//
	// The maximum version of the TLS protocol is 1.3.
	TlsMax interface{} `field:"optional" json:"tlsMax" yaml:"tlsMax"`
	// Property tlsMin: The minimum version of the TLS protocol.
	//
	// The minimum version of the TLS protocol is 1.0.
	TlsMin interface{} `field:"optional" json:"tlsMin" yaml:"tlsMin"`
}

