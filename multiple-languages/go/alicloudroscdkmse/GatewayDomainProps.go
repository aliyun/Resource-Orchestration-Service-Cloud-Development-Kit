package alicloudroscdkmse


// Properties for defining a `GatewayDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
type GatewayDomainProps struct {
	// Property gatewayUniqueId: The unique identifier of the gateway.
	GatewayUniqueId interface{} `field:"required" json:"gatewayUniqueId" yaml:"gatewayUniqueId"`
	// Property name: The domain name.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property protocol: The protocol type: HTTP, HTTPS.
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	// Property certIdentifier: Certificate ID.
	CertIdentifier interface{} `field:"optional" json:"certIdentifier" yaml:"certIdentifier"`
	// Property http2: Whether to enable Http2: open, close, globalConfig.
	Http2 interface{} `field:"optional" json:"http2" yaml:"http2"`
	// Property mustHttps: Whether to enable HTTPS.
	MustHttps interface{} `field:"optional" json:"mustHttps" yaml:"mustHttps"`
	// Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.
	TlsCipherSuitesConfigJson interface{} `field:"optional" json:"tlsCipherSuitesConfigJson" yaml:"tlsCipherSuitesConfigJson"`
	// Property tlsMax: The maximum TLS version.
	TlsMax interface{} `field:"optional" json:"tlsMax" yaml:"tlsMax"`
	// Property tlsMin: The minimum TLS version.
	TlsMin interface{} `field:"optional" json:"tlsMin" yaml:"tlsMin"`
}

