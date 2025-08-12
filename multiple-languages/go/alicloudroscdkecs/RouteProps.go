package alicloudroscdkecs


// Properties for defining a `Route`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-route
type RouteProps struct {
	// Property destinationCidrBlock: The RouteEntry's target network segment.
	DestinationCidrBlock interface{} `field:"required" json:"destinationCidrBlock" yaml:"destinationCidrBlock"`
	// Property routeTableId: RouteTableId of created route entry.
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
	// Property nextHopId: The route entry's next hop.
	//
	// When the NextHopList is specified, the value will be ignored.
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

