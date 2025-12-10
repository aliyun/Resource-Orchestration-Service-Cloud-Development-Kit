package alicloudroscdkmse


// Properties for defining a `GatewayService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice
type GatewayServiceProps struct {
	// Property gatewayUniqueId: Unique identifier of the gateway.
	GatewayUniqueId interface{} `field:"required" json:"gatewayUniqueId" yaml:"gatewayUniqueId"`
	// Property name: Name of the service.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property sourceType: Type of service source.
	//
	// Valid values:
	// - MSE: MSE-NACOS
	// - K8s: ACK container service
	// - VIP: Fixed address
	// - DNS: DNS domain name
	// - FC: Function Compute
	// - EDAS: EDAS
	// - MSE_ZK: MSE-Zookeeper
	// - SAE: SAE.
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	// Property dnsServerList: List of DNS servers.
	DnsServerList interface{} `field:"optional" json:"dnsServerList" yaml:"dnsServerList"`
	// Property fcAlias: Function Compute service alias.
	//
	// Used when SourceType is FC.
	FcAlias interface{} `field:"optional" json:"fcAlias" yaml:"fcAlias"`
	// Property fcServiceName: Function Compute service name.
	//
	// Required when SourceType is FC.
	FcServiceName interface{} `field:"optional" json:"fcServiceName" yaml:"fcServiceName"`
	// Property fcVersion: Function Compute service version.
	//
	// Used when SourceType is FC.
	FcVersion interface{} `field:"optional" json:"fcVersion" yaml:"fcVersion"`
	// Property groupName: Group name of the service.
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	// Property ips: List of IPs.
	Ips interface{} `field:"optional" json:"ips" yaml:"ips"`
	// Property namespace: Namespace of the service.
	Namespace interface{} `field:"optional" json:"namespace" yaml:"namespace"`
	// Property saeAppId: SAE application ID.
	SaeAppId interface{} `field:"optional" json:"saeAppId" yaml:"saeAppId"`
	// Property servicePort: Port of the service.
	ServicePort interface{} `field:"optional" json:"servicePort" yaml:"servicePort"`
	// Property serviceProtocol: Protocol of the service.
	ServiceProtocol interface{} `field:"optional" json:"serviceProtocol" yaml:"serviceProtocol"`
	// Property sourceId: Source ID of the service.
	//
	// Used when specifying a source to add services.
	SourceId interface{} `field:"optional" json:"sourceId" yaml:"sourceId"`
	// Property tlsSetting: TLS settings for the service.
	TlsSetting interface{} `field:"optional" json:"tlsSetting" yaml:"tlsSetting"`
}

