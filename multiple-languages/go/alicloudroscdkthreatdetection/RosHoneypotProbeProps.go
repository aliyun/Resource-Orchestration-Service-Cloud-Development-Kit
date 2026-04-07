package alicloudroscdkthreatdetection


// Properties for defining a `RosHoneypotProbe`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
type RosHoneypotProbeProps struct {
	ControlNodeId interface{} `field:"required" json:"controlNodeId" yaml:"controlNodeId"`
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	ProbeType interface{} `field:"required" json:"probeType" yaml:"probeType"`
	Arp interface{} `field:"optional" json:"arp" yaml:"arp"`
	BusinessGroupId interface{} `field:"optional" json:"businessGroupId" yaml:"businessGroupId"`
	HoneypotBindList interface{} `field:"optional" json:"honeypotBindList" yaml:"honeypotBindList"`
	Ping interface{} `field:"optional" json:"ping" yaml:"ping"`
	ProbeVersion interface{} `field:"optional" json:"probeVersion" yaml:"probeVersion"`
	ProxyIp interface{} `field:"optional" json:"proxyIp" yaml:"proxyIp"`
	ServiceIpList interface{} `field:"optional" json:"serviceIpList" yaml:"serviceIpList"`
	Uuid interface{} `field:"optional" json:"uuid" yaml:"uuid"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

