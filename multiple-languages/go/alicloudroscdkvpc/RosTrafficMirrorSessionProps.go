package alicloudroscdkvpc


// Properties for defining a `RosTrafficMirrorSession`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsession
type RosTrafficMirrorSessionProps struct {
	Priority interface{} `field:"required" json:"priority" yaml:"priority"`
	TrafficMirrorFilterId interface{} `field:"required" json:"trafficMirrorFilterId" yaml:"trafficMirrorFilterId"`
	TrafficMirrorSourceIds interface{} `field:"required" json:"trafficMirrorSourceIds" yaml:"trafficMirrorSourceIds"`
	TrafficMirrorTargetId interface{} `field:"required" json:"trafficMirrorTargetId" yaml:"trafficMirrorTargetId"`
	TrafficMirrorTargetType interface{} `field:"required" json:"trafficMirrorTargetType" yaml:"trafficMirrorTargetType"`
	Enabled interface{} `field:"optional" json:"enabled" yaml:"enabled"`
	PacketLength interface{} `field:"optional" json:"packetLength" yaml:"packetLength"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
	TrafficMirrorSessionDescription interface{} `field:"optional" json:"trafficMirrorSessionDescription" yaml:"trafficMirrorSessionDescription"`
	TrafficMirrorSessionName interface{} `field:"optional" json:"trafficMirrorSessionName" yaml:"trafficMirrorSessionName"`
	VirtualNetworkId interface{} `field:"optional" json:"virtualNetworkId" yaml:"virtualNetworkId"`
}

