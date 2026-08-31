package alicloudroscdkecs


// Properties for defining a `Route`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-route
type RouteProps struct {
	// Property destinationCidrBlock: The destination CIDR block of the custom route entry.
	//
	// IPv4 CIDR blocks, IPv6 CIDR
	// blocks, and prefix lists are supported. You must specify one of the following
	// parameters: `DestinationCidrBlock` and `DestinationPrefixListId`. The following
	// requirements apply:
	// - The destination CIDR block cannot be 100.64.0.0\/10 or a subset of
	// 100.64.0.0\/10.
	// - The destination CIDR block of a route entry cannot be the same as the
	// destination CIDR block of another route entry in the same route table.
	DestinationCidrBlock interface{} `field:"required" json:"destinationCidrBlock" yaml:"destinationCidrBlock"`
	// Property routeTableId: RouteTableId of created route entry.
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
	// Property nextHopId: The ID of the next hop.
	//
	// > ## If `NextHopType` is set to `Ecr`, you can obtain the `AssociationId` by
	// calling the DescribeExpressConnectRouterAssociation operation and use the ID
	// as the next hop ID.
	NextHopId interface{} `field:"optional" json:"nextHopId" yaml:"nextHopId"`
	// Property nextHopList: The route entry's next hop list.
	//
	// If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
	NextHopList interface{} `field:"optional" json:"nextHopList" yaml:"nextHopList"`
	// Property nextHopType: The route entry next hop type.
	//
	// Valid values:
	// Instance (default): Elastic Compute Service (ECS) instance.
	// HaVip: High Availability Virtual IP (HAVIP).
	// RouterInterface: Router interface.
	// NetworkInterface: Elastic Network Interface (ENI).
	// VpnGateway: VPN gateway.
	// IPv6Gateway: IPv6 gateway.
	// NatGateway: NAT gateway.
	// Attachment: Transit router.
	// VpcPeer: VPC peering connection.
	// Ipv4Gateway: IPv4 gateway.
	// GatewayEndpoint: Gateway endpoint.
	// Ecr: Express Connect router.
	// GatewayLoadBalancerEndpoint: Gateway Load Balancer endpoint.
	// The default value is 'Instance'.
	// If NextHopList is specified, this field will be ignored.
	NextHopType interface{} `field:"optional" json:"nextHopType" yaml:"nextHopType"`
}

