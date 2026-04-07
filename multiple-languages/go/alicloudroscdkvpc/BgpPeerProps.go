package alicloudroscdkvpc


// Properties for defining a `BgpPeer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
type BgpPeerProps struct {
	// Property bgpGroupId: The ID of the BGP group.
	BgpGroupId interface{} `field:"required" json:"bgpGroupId" yaml:"bgpGroupId"`
	// Property bfdMultiHop: The BFD hop count.
	//
	// Valid values: **1** to **255**.
	// When enabling BFD, this parameter must be configured.
	// It specifies the maximum number of hops that a packet can traverse from source to destination. You can set different hop counts based on actual physical link conditions.
	// When using BFD in a multi-cloud environment or direct fiber connection without intermediate bridging devices, change the default BFD hop count from **255** to **1**.
	BfdMultiHop interface{} `field:"optional" json:"bfdMultiHop" yaml:"bfdMultiHop"`
	// Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
	//
	// Valid values:
	// true: enables BFD.
	// false: disables BFD.
	EnableBfd interface{} `field:"optional" json:"enableBfd" yaml:"enableBfd"`
	// Property ipVersion: The IP version.
	//
	// Valid values:
	// - **IPv4** (default): IPv4 version.
	// - **IPv6**: IPv6 version. IPv6 is supported only when the VBR associated with the BGP group has IPv6 enabled.
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	// Property peerIpAddress: The IP address of the BGP peer.
	PeerIpAddress interface{} `field:"optional" json:"peerIpAddress" yaml:"peerIpAddress"`
}

