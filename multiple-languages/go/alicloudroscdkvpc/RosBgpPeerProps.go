package alicloudroscdkvpc


// Properties for defining a `RosBgpPeer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
type RosBgpPeerProps struct {
	BgpGroupId interface{} `field:"required" json:"bgpGroupId" yaml:"bgpGroupId"`
	EnableBfd interface{} `field:"optional" json:"enableBfd" yaml:"enableBfd"`
	PeerIpAddress interface{} `field:"optional" json:"peerIpAddress" yaml:"peerIpAddress"`
}

