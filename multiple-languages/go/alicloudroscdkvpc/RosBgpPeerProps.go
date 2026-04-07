package alicloudroscdkvpc


// Properties for defining a `RosBgpPeer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
type RosBgpPeerProps struct {
	BgpGroupId interface{} `field:"required" json:"bgpGroupId" yaml:"bgpGroupId"`
	BfdMultiHop interface{} `field:"optional" json:"bfdMultiHop" yaml:"bfdMultiHop"`
	EnableBfd interface{} `field:"optional" json:"enableBfd" yaml:"enableBfd"`
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	PeerIpAddress interface{} `field:"optional" json:"peerIpAddress" yaml:"peerIpAddress"`
}

