package alicloudroscdkvpc


// Properties for defining a `RosVpnRouteEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnrouteentry
type RosVpnRouteEntryProps struct {
	NextHop interface{} `field:"required" json:"nextHop" yaml:"nextHop"`
	PublishVpc interface{} `field:"required" json:"publishVpc" yaml:"publishVpc"`
	RouteDest interface{} `field:"required" json:"routeDest" yaml:"routeDest"`
	VpnGatewayId interface{} `field:"required" json:"vpnGatewayId" yaml:"vpnGatewayId"`
	Weight interface{} `field:"required" json:"weight" yaml:"weight"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	OverlayMode interface{} `field:"optional" json:"overlayMode" yaml:"overlayMode"`
}

