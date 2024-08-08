package alicloudroscdkvpc


// Properties for defining a `BgpPeer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
type BgpPeerProps struct {
	// Property bgpGroupId: The ID of the BGP group.
	BgpGroupId interface{} `field:"required" json:"bgpGroupId" yaml:"bgpGroupId"`
	// Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
	//
	// Valid values:
	// true: enables BFD.
	// false: disables BFD.
	EnableBfd interface{} `field:"optional" json:"enableBfd" yaml:"enableBfd"`
	// Property peerIpAddress: The IP address of the BGP peer.
	PeerIpAddress interface{} `field:"optional" json:"peerIpAddress" yaml:"peerIpAddress"`
}

