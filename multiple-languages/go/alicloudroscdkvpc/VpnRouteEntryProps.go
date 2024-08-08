package alicloudroscdkvpc


// Properties for defining a `VpnRouteEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnrouteentry
type VpnRouteEntryProps struct {
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
}

