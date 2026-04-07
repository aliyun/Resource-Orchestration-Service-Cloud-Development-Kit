package alicloudroscdkthreatdetection


// Properties for defining a `RosHoneypotNode`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
type RosHoneypotNodeProps struct {
	NodeName interface{} `field:"required" json:"nodeName" yaml:"nodeName"`
	AllowHoneypotAccessInternet interface{} `field:"optional" json:"allowHoneypotAccessInternet" yaml:"allowHoneypotAccessInternet"`
	AvailableProbeNum interface{} `field:"optional" json:"availableProbeNum" yaml:"availableProbeNum"`
	SecurityGroupProbeIpList interface{} `field:"optional" json:"securityGroupProbeIpList" yaml:"securityGroupProbeIpList"`
}

