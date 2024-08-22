package alicloudroscdkvpc


// Properties for defining a `VpnPbrRouteEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnpbrrouteentry
type VpnPbrRouteEntryProps struct {
	// Property nextHop: The next hop of the destination route entry.
	NextHop interface{} `field:"required" json:"nextHop" yaml:"nextHop"`
	// Property publishVpc: Indicates whether to publish the destination route to the VPC.
	//
	// Valid values:
	// true: Publish the destination route to the VPC.
	// false: Do not publish the destination route to the VPC.
	PublishVpc interface{} `field:"required" json:"publishVpc" yaml:"publishVpc"`
	// Property routeDest: The destination CIDR block of the destination route.
	RouteDest interface{} `field:"required" json:"routeDest" yaml:"routeDest"`
	// Property routeSource: The source CIDR block of the policy-based route.
	RouteSource interface{} `field:"required" json:"routeSource" yaml:"routeSource"`
	// Property vpnGatewayId: The ID of the VPN Gateway.
	VpnGatewayId interface{} `field:"required" json:"vpnGatewayId" yaml:"vpnGatewayId"`
	// Property weight: The weight of the destination route.
	//
	// Valid values: 0|100.
	Weight interface{} `field:"required" json:"weight" yaml:"weight"`
	// Property description: The description of the VPN destination route.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property overlayMode: The overlay mode.
	OverlayMode interface{} `field:"optional" json:"overlayMode" yaml:"overlayMode"`
	// Property priority: Policy priority for policy routing.
	//
	// Range: 1-100 Default value: 10.
	// The smaller the policy priority number, the higher the priority of the policy route.
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
}

