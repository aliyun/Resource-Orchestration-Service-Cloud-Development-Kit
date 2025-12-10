package alicloudroscdkmse


// Properties for defining a `RosGatewayService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice
type RosGatewayServiceProps struct {
	GatewayUniqueId interface{} `field:"required" json:"gatewayUniqueId" yaml:"gatewayUniqueId"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	DnsServerList interface{} `field:"optional" json:"dnsServerList" yaml:"dnsServerList"`
	FcAlias interface{} `field:"optional" json:"fcAlias" yaml:"fcAlias"`
	FcServiceName interface{} `field:"optional" json:"fcServiceName" yaml:"fcServiceName"`
	FcVersion interface{} `field:"optional" json:"fcVersion" yaml:"fcVersion"`
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	Ips interface{} `field:"optional" json:"ips" yaml:"ips"`
	Namespace interface{} `field:"optional" json:"namespace" yaml:"namespace"`
	SaeAppId interface{} `field:"optional" json:"saeAppId" yaml:"saeAppId"`
	ServicePort interface{} `field:"optional" json:"servicePort" yaml:"servicePort"`
	ServiceProtocol interface{} `field:"optional" json:"serviceProtocol" yaml:"serviceProtocol"`
	SourceId interface{} `field:"optional" json:"sourceId" yaml:"sourceId"`
	TlsSetting interface{} `field:"optional" json:"tlsSetting" yaml:"tlsSetting"`
}

