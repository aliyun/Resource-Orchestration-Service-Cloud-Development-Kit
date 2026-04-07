package alicloudroscdkdns


// Properties for defining a `RosMonitorConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
type RosMonitorConfigProps struct {
	AddrPoolId interface{} `field:"required" json:"addrPoolId" yaml:"addrPoolId"`
	EvaluationCount interface{} `field:"required" json:"evaluationCount" yaml:"evaluationCount"`
	Interval interface{} `field:"required" json:"interval" yaml:"interval"`
	IspCityNode interface{} `field:"required" json:"ispCityNode" yaml:"ispCityNode"`
	MonitorExtendInfo interface{} `field:"required" json:"monitorExtendInfo" yaml:"monitorExtendInfo"`
	ProtocolType interface{} `field:"required" json:"protocolType" yaml:"protocolType"`
	Timeout interface{} `field:"required" json:"timeout" yaml:"timeout"`
}

