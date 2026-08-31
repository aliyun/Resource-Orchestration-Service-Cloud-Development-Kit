package alicloudroscdkdns


// Properties for defining a `AddressPool`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
type AddressPoolProps struct {
	// Property addr: The list of addresses in the address pool.
	Addr interface{} `field:"required" json:"addr" yaml:"addr"`
	// Property instanceId: The ID of the GTM instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property lbaStrategy: The load balancing policy.
	//
	// Valid values:
	// - ALL_RR: returns all addresses.
	// - RATIO: returns addresses by weight.
	LbaStrategy interface{} `field:"required" json:"lbaStrategy" yaml:"lbaStrategy"`
	// Property name: The name of the address pool.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property type: The type of the address pool.
	//
	// Valid values:
	// - IPV4: IPv4 address
	// - IPV6: IPv6 address
	// - DOMAIN: domain name.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.
	EvaluationCount interface{} `field:"optional" json:"evaluationCount" yaml:"evaluationCount"`
	// Property interval: The interval between two consecutive health checks, in seconds.
	Interval interface{} `field:"optional" json:"interval" yaml:"interval"`
	// Property ispCityNode: The list of ISP city nodes.
	IspCityNode interface{} `field:"optional" json:"ispCityNode" yaml:"ispCityNode"`
	// Property monitorExtendInfo: The extended information.
	//
	// This parameter is a JSON string. The required
	// parameters vary based on the health check protocol:
	// - HTTP and HTTPS:
	// - port: The health check port.
	// - host: The host settings.
	// - path: The URL path.
	// - code: The return code. A response with a status code greater than this value is
	// considered abnormal. Valid values: 400 and 500.
	// - failureRate: The failure rate.
	// - sni: Specifies whether to enable Server Name Indication (SNI). This parameter
	// is available only for the HTTPS protocol.
	// - true: Enable SNI.
	// - Other values: Disable SNI.
	// - nodeType: The type of the health check node when the address pool type is
	// DOMAIN. Valid values:
	// - IPV4
	// - IPV6
	// - PING:
	// - failureRate: The failure rate.
	// - packetNum: The number of ping packets.
	// - packetLossRate: The packet loss rate.
	// - nodeType: The type of the health check node when the address pool type is
	// DOMAIN. Valid values:
	// - IPV4
	// - IPV6
	// - TCP:
	// - port: The health check port.
	// - failureRate: The failure rate.
	// - nodeType: The type of the health check node when the address pool type is
	// DOMAIN. Valid values:
	// - IPV4
	// - IPV6.
	MonitorExtendInfo interface{} `field:"optional" json:"monitorExtendInfo" yaml:"monitorExtendInfo"`
	// Property monitorStatus: The status of the health check feature.
	//
	// Default value: CLOSE. If you set this
	// parameter to OPEN, the health check configuration is verified. Otherwise, the
	// configuration is ignored.
	// - OPEN: enabled
	// - CLOSE: disabled.
	MonitorStatus interface{} `field:"optional" json:"monitorStatus" yaml:"monitorStatus"`
	// Property protocolType: The protocol type.
	ProtocolType interface{} `field:"optional" json:"protocolType" yaml:"protocolType"`
	// Property timeout: The timeout period of a health check, in seconds.
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
}

