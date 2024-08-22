package datasource


// Properties for defining a `RosBgpPeers`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeers
type RosBgpPeersProps struct {
	BgpGroupId interface{} `field:"optional" json:"bgpGroupId" yaml:"bgpGroupId"`
	BgpPeerId interface{} `field:"optional" json:"bgpPeerId" yaml:"bgpPeerId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	RouterId interface{} `field:"optional" json:"routerId" yaml:"routerId"`
}

