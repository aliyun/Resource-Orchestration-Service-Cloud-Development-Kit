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
	// Property nextHopType: The next hop type.
	//
	// Now support 'Instance|HaVip|RouterInterface|NetworkInterface|VpnGateway|IPv6Gateway|NatGateway|Attachment'. The default value is Instance.When the NextHopList is specified, the value will be ignored.
	NextHopType interface{} `field:"optional" json:"nextHopType" yaml:"nextHopType"`
}

