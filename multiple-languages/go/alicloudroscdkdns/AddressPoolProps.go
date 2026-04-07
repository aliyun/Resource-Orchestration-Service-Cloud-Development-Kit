package alicloudroscdkdns


// Properties for defining a `AddressPool`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
type AddressPoolProps struct {
	// Property addr: The list of addresses in the address pool.
	Addr interface{} `field:"required" json:"addr" yaml:"addr"`
	// Property instanceId: The ID of the GTM instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property lbaStrategy: The load balancing strategy.
	//
	// Valid values: RoundRobin, Weighted, FallbackToFirst.
	LbaStrategy interface{} `field:"required" json:"lbaStrategy" yaml:"lbaStrategy"`
	// Property name: The name of the address pool.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property type: The type of the address pool.
	//
	// Valid values: Ipv4, Ipv6, Domain.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.
	EvaluationCount interface{} `field:"optional" json:"evaluationCount" yaml:"evaluationCount"`
	// Property interval: The interval between two consecutive health checks, in seconds.
	Interval interface{} `field:"optional" json:"interval" yaml:"interval"`
	// Property ispCityNode: The list of ISP city nodes.
	IspCityNode interface{} `field:"optional" json:"ispCityNode" yaml:"ispCityNode"`
	// Property monitorExtendInfo: The extended information of the health check.
	MonitorExtendInfo interface{} `field:"optional" json:"monitorExtendInfo" yaml:"monitorExtendInfo"`
	// Property monitorStatus: The monitoring status of the address pool.
	MonitorStatus interface{} `field:"optional" json:"monitorStatus" yaml:"monitorStatus"`
	// Property protocolType: The protocol type.
	ProtocolType interface{} `field:"optional" json:"protocolType" yaml:"protocolType"`
	// Property timeout: The timeout period of a health check, in seconds.
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
}

