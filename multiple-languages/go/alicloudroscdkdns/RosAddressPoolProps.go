package alicloudroscdkdns


// Properties for defining a `RosAddressPool`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
type RosAddressPoolProps struct {
	Addr interface{} `field:"required" json:"addr" yaml:"addr"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	LbaStrategy interface{} `field:"required" json:"lbaStrategy" yaml:"lbaStrategy"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	EvaluationCount interface{} `field:"optional" json:"evaluationCount" yaml:"evaluationCount"`
	Interval interface{} `field:"optional" json:"interval" yaml:"interval"`
	IspCityNode interface{} `field:"optional" json:"ispCityNode" yaml:"ispCityNode"`
	MonitorExtendInfo interface{} `field:"optional" json:"monitorExtendInfo" yaml:"monitorExtendInfo"`
	MonitorStatus interface{} `field:"optional" json:"monitorStatus" yaml:"monitorStatus"`
	ProtocolType interface{} `field:"optional" json:"protocolType" yaml:"protocolType"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
}

