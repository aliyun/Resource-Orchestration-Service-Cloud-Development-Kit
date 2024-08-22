package datasource


// Properties for defining a `RosBgpPeer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeer
type RosBgpPeerProps struct {
	BgpPeerId interface{} `field:"optional" json:"bgpPeerId" yaml:"bgpPeerId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

