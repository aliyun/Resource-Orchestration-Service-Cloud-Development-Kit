package alicloudroscdkmse


// Properties for defining a `RosGatewayDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
type RosGatewayDomainProps struct {
	GatewayUniqueId interface{} `field:"required" json:"gatewayUniqueId" yaml:"gatewayUniqueId"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	CertIdentifier interface{} `field:"optional" json:"certIdentifier" yaml:"certIdentifier"`
	Http2 interface{} `field:"optional" json:"http2" yaml:"http2"`
	MustHttps interface{} `field:"optional" json:"mustHttps" yaml:"mustHttps"`
	TlsCipherSuitesConfigJson interface{} `field:"optional" json:"tlsCipherSuitesConfigJson" yaml:"tlsCipherSuitesConfigJson"`
	TlsMax interface{} `field:"optional" json:"tlsMax" yaml:"tlsMax"`
	TlsMin interface{} `field:"optional" json:"tlsMin" yaml:"tlsMin"`
}

