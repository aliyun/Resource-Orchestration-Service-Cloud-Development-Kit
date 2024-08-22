package datasource


// Properties for defining a `RouteEntries`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries
type RouteEntriesProps struct {
	// Property routeTableId: The ID of the route table.
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
	// Property destinationCidrBlock: The destination CIDR block of the route.
	//
	// IPv4 and IPv6 CIDR blocks are supported.
	DestinationCidrBlock interface{} `field:"optional" json:"destinationCidrBlock" yaml:"destinationCidrBlock"`
	// Property ipVersion: The IP version.
	//
	// Valid values:
	// IPv4: IPv4
	// IPv6: IPv6.
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	// Property nextHopId: The ID of the next hop.
	NextHopId interface{} `field:"optional" json:"nextHopId" yaml:"nextHopId"`
	// Property nextHopType: The type of the next hop.
	//
	// Valid values:
	// Instance (default): an Elastic Compute Service (ECS) instance
	// HaVip: a high-availability virtual IP address (HAVIP)
	// VpnGateway: a VPN gateway
	// NatGateway: a NAT gateway
	// NetworkInterface: a secondary elastic network interface (ENI)
	// RouterInterface: a router interface
	// IPv6Gateway: an IPv6 gateway
	// Attachment: a transit router.
	NextHopType interface{} `field:"optional" json:"nextHopType" yaml:"nextHopType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property routeEntryId: The ID of the route.
	RouteEntryId interface{} `field:"optional" json:"routeEntryId" yaml:"routeEntryId"`
	// Property routeEntryName: The name of the route.
	RouteEntryName interface{} `field:"optional" json:"routeEntryName" yaml:"routeEntryName"`
	// Property routeEntryType: The type of the route.
	//
	// Valid values:
	// Custom: a custom route
	// System: a system route
	// BGP: a Border Gateway Protocol (BGP) route
	// CEN: a Cloud Enterprise Network (CEN) route.
	RouteEntryType interface{} `field:"optional" json:"routeEntryType" yaml:"routeEntryType"`
}

