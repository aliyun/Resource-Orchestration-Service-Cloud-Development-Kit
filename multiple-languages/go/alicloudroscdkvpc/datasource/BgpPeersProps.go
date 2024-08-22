package datasource


// Properties for defining a `BgpPeers`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeers
type BgpPeersProps struct {
	// Property bgpGroupId: The ID of the BGP group to which the BGP peer that you want to query belongs.
	BgpGroupId interface{} `field:"optional" json:"bgpGroupId" yaml:"bgpGroupId"`
	// Property bgpPeerId: The ID of the BGP peer that you want to query.
	BgpPeerId interface{} `field:"optional" json:"bgpPeerId" yaml:"bgpPeerId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property routerId: The ID of the virtual border router (VBR) that is associated with the BGP peer that you want to query.
	RouterId interface{} `field:"optional" json:"routerId" yaml:"routerId"`
}

