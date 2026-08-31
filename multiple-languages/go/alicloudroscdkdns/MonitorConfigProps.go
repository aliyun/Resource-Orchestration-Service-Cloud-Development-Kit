package alicloudroscdkdns


// Properties for defining a `MonitorConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
type MonitorConfigProps struct {
	// Property addrPoolId: The ID of the address pool.
	AddrPoolId interface{} `field:"required" json:"addrPoolId" yaml:"addrPoolId"`
	// Property evaluationCount: The evaluation count of the monitor.
	EvaluationCount interface{} `field:"required" json:"evaluationCount" yaml:"evaluationCount"`
	// Property interval: The health check interval.
	//
	// Unit: seconds.
	Interval interface{} `field:"required" json:"interval" yaml:"interval"`
	// Property ispCityNode: The ISP city node list.
	IspCityNode interface{} `field:"required" json:"ispCityNode" yaml:"ispCityNode"`
	// Property monitorExtendInfo: The extended information.
	//
	// The parameters vary based on the protocol type.
	// - HTTP or HTTPS
	// - port: The health check port.
	// - host: The Host header.
	// - path: The URL path.
	// - code: The health check is considered abnormal if the returned HTTP status code
	// is greater than this value.
	// - failureRate: The failure rate.
	// - sni: Specifies whether to enable Server Name Indication (SNI). This parameter
	// is used only when the health check protocol is HTTPS. Valid values:
	// - true
	// - false
	// - nodeType: The type of the monitoring node. This parameter is used when the
	// address pool type is DOMAIN. Valid values:
	// - IPV4
	// - IPV6
	// - PING
	// - failureRate: The failure rate.
	// - packetNum: The number of ping packets.
	// - packetLossRate: The packet loss rate.
	// - nodeType: The type of the monitoring node. This parameter is used when the
	// address pool type is DOMAIN. Valid values:
	// - IPV4
	// - IPV6
	// - TCP
	// - port: The health check port.
	// - failureRate: The failure rate.
	// - nodeType: The type of the monitoring node. This parameter is used when the
	// address pool type is DOMAIN. Valid values:
	// - IPV4
	// - IPV6
	// > This parameter must be a JSON string.
	MonitorExtendInfo interface{} `field:"required" json:"monitorExtendInfo" yaml:"monitorExtendInfo"`
	// Property protocolType: The health check protocol.
	//
	// Valid values:
	// - HTTP
	// - HTTPS
	// - PING
	// - TCP.
	ProtocolType interface{} `field:"required" json:"protocolType" yaml:"protocolType"`
	// Property timeout: The timeout period.
	//
	// Unit: milliseconds.
	Timeout interface{} `field:"required" json:"timeout" yaml:"timeout"`
}

