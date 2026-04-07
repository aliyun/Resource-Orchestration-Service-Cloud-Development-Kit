package alicloudroscdkthreatdetection


// Properties for defining a `HoneypotProbe`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
type HoneypotProbeProps struct {
	// Property controlNodeId: The ID of the management node.
	//
	// > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
	ControlNodeId interface{} `field:"required" json:"controlNodeId" yaml:"controlNodeId"`
	// Property displayName: The name of the probe.
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	// Property probeType: The type of the probe.
	//
	// Valid values:
	// *   **host_probe**: host probe
	// *   **vpc_black_hole_probe**: virtual private cloud (VPC) probe.
	ProbeType interface{} `field:"required" json:"probeType" yaml:"probeType"`
	// Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
	//
	// Valid values:
	// *   **true**: yes
	// *   **false**: no.
	Arp interface{} `field:"optional" json:"arp" yaml:"arp"`
	// Property businessGroupId: Business grouping.
	BusinessGroupId interface{} `field:"optional" json:"businessGroupId" yaml:"businessGroupId"`
	// Property honeypotBindList: The configuration of the probe.
	HoneypotBindList interface{} `field:"optional" json:"honeypotBindList" yaml:"honeypotBindList"`
	// Property ping: Specifies whether to enable ping scan.
	//
	// Valid values:
	// *   **true**: yes
	// *   **false**: no.
	Ping interface{} `field:"optional" json:"ping" yaml:"ping"`
	// Property probeVersion: The version of the probe.
	ProbeVersion interface{} `field:"optional" json:"probeVersion" yaml:"probeVersion"`
	// Property proxyIp: The IP address of the proxy.
	ProxyIp interface{} `field:"optional" json:"proxyIp" yaml:"proxyIp"`
	// Property serviceIpList: Listen to the IP address list.
	ServiceIpList interface{} `field:"optional" json:"serviceIpList" yaml:"serviceIpList"`
	// Property uuid: The UUID of the instance.
	//
	// > If **ProbeType** is set to **host_probe**, this parameter is required.
	Uuid interface{} `field:"optional" json:"uuid" yaml:"uuid"`
	// Property vpcId: The ID of the VPC.
	//
	// > **ProbeType** is **vpc\_Black \_hole\_probe**. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

