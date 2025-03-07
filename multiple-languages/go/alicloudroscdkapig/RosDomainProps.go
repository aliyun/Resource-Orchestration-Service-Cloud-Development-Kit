package alicloudroscdkapig


// Properties for defining a `RosDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain
type RosDomainProps struct {
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	CertIdentifier interface{} `field:"optional" json:"certIdentifier" yaml:"certIdentifier"`
	ForceHttps interface{} `field:"optional" json:"forceHttps" yaml:"forceHttps"`
	Http2Option interface{} `field:"optional" json:"http2Option" yaml:"http2Option"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	TlsCipherSuitesConfig interface{} `field:"optional" json:"tlsCipherSuitesConfig" yaml:"tlsCipherSuitesConfig"`
	TlsMax interface{} `field:"optional" json:"tlsMax" yaml:"tlsMax"`
	TlsMin interface{} `field:"optional" json:"tlsMin" yaml:"tlsMin"`
}

