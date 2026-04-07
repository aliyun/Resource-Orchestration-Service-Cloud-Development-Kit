package alicloudroscdkdns


// Properties for defining a `MonitorConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
type MonitorConfigProps struct {
	// Property addrPoolId: The ID of the address pool.
	AddrPoolId interface{} `field:"required" json:"addrPoolId" yaml:"addrPoolId"`
	// Property evaluationCount: The evaluation count of the monitor.
	EvaluationCount interface{} `field:"required" json:"evaluationCount" yaml:"evaluationCount"`
	// Property interval: The interval of the monitor.
	Interval interface{} `field:"required" json:"interval" yaml:"interval"`
	// Property ispCityNode: The ISP city node list.
	IspCityNode interface{} `field:"required" json:"ispCityNode" yaml:"ispCityNode"`
	// Property monitorExtendInfo: The extend info of the monitor.
	MonitorExtendInfo interface{} `field:"required" json:"monitorExtendInfo" yaml:"monitorExtendInfo"`
	// Property protocolType: The protocol type of the monitor.
	ProtocolType interface{} `field:"required" json:"protocolType" yaml:"protocolType"`
	// Property timeout: The timeout of the monitor.
	Timeout interface{} `field:"required" json:"timeout" yaml:"timeout"`
}

