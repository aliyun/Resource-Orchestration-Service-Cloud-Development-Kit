package alicloudroscdkvpc


// Properties for defining a `TrafficMirrorSession`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsession
type TrafficMirrorSessionProps struct {
	// Property priority: The priority of the traffic mirror session.
	//
	// Valid values: **1 to 32766**.
	// A smaller value indicates a higher priority. You cannot specify identical priorities for traffic mirror sessions that are created in the same region by using the same account.
	Priority interface{} `field:"required" json:"priority" yaml:"priority"`
	// Property trafficMirrorFilterId: The ID of the filter.
	TrafficMirrorFilterId interface{} `field:"required" json:"trafficMirrorFilterId" yaml:"trafficMirrorFilterId"`
	// Property trafficMirrorSourceIds: undefined.
	TrafficMirrorSourceIds interface{} `field:"required" json:"trafficMirrorSourceIds" yaml:"trafficMirrorSourceIds"`
	// Property trafficMirrorTargetId: The ID of the traffic mirror destination.
	//
	// You can specify only an elastic network interface (ENI) or a Server Load Balancer (SLB) instance as a traffic mirror destination.
	TrafficMirrorTargetId interface{} `field:"required" json:"trafficMirrorTargetId" yaml:"trafficMirrorTargetId"`
	// Property trafficMirrorTargetType: The type of the traffic mirror destination.
	//
	// Valid values:
	// - **NetworkInterface**: an ENI
	// - **SLB**: an SLB instance.
	TrafficMirrorTargetType interface{} `field:"required" json:"trafficMirrorTargetType" yaml:"trafficMirrorTargetType"`
	// Property enabled: Specifies whether to enable the traffic mirror session.
	//
	// Valid values:
	// - **false** (default): does not enable the traffic mirror session.
	// - **true**: enables the traffic mirror session.
	Enabled interface{} `field:"optional" json:"enabled" yaml:"enabled"`
	// Property packetLength: The maximum transmission unit (MTU).
	//
	// Default value: **1500**.
	PacketLength interface{} `field:"optional" json:"packetLength" yaml:"packetLength"`
	// Property resourceGroupId: The ID of the resource group to which the mirrored traffic belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tag:.
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
	// Property trafficMirrorSessionDescription: The description of the traffic mirror session.
	//
	// The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	TrafficMirrorSessionDescription interface{} `field:"optional" json:"trafficMirrorSessionDescription" yaml:"trafficMirrorSessionDescription"`
	// Property trafficMirrorSessionName: The name of the traffic mirror session.
	//
	// The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
	TrafficMirrorSessionName interface{} `field:"optional" json:"trafficMirrorSessionName" yaml:"trafficMirrorSessionName"`
	// Property virtualNetworkId: The VXLAN network identifier (VNI).
	//
	// Valid values: **0 to 16777215**.
	// You can use VNIs to identify mirrored traffic from different sessions at the traffic mirror destination. You can specify a custom VNI or use a random VNI allocated by the system. If you want the system to randomly allocate a VNI, do not enter a value.
	VirtualNetworkId interface{} `field:"optional" json:"virtualNetworkId" yaml:"virtualNetworkId"`
}

