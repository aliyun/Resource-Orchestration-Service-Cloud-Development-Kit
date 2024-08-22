package datasource


// Properties for defining a `BgpPeer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeer
type BgpPeerProps struct {
	// Property bgpPeerId: The ID of the BGP peer.
	BgpPeerId interface{} `field:"optional" json:"bgpPeerId" yaml:"bgpPeerId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

