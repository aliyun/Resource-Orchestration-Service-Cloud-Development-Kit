package alicloudroscdkthreatdetection


// Properties for defining a `HoneypotNode`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
type HoneypotNodeProps struct {
	// Property nodeName: The name of the management node.
	NodeName interface{} `field:"required" json:"nodeName" yaml:"nodeName"`
	// Property allowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.
	//
	// Valid values:
	// *   **true**: allows honeypots to access the Internet.
	// *   **false**: does not allow honeypots to access the Internet.
	AllowHoneypotAccessInternet interface{} `field:"optional" json:"allowHoneypotAccessInternet" yaml:"allowHoneypotAccessInternet"`
	// Property availableProbeNum: The number of available probes.
	AvailableProbeNum interface{} `field:"optional" json:"availableProbeNum" yaml:"availableProbeNum"`
	// Property securityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
	SecurityGroupProbeIpList interface{} `field:"optional" json:"securityGroupProbeIpList" yaml:"securityGroupProbeIpList"`
}

