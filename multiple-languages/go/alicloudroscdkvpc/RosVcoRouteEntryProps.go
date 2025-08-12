package alicloudroscdkvpc


// Properties for defining a `RosVcoRouteEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vcorouteentry
type RosVcoRouteEntryProps struct {
	NextHop interface{} `field:"required" json:"nextHop" yaml:"nextHop"`
	RouteDest interface{} `field:"required" json:"routeDest" yaml:"routeDest"`
	VpnConnectionId interface{} `field:"required" json:"vpnConnectionId" yaml:"vpnConnectionId"`
	Weight interface{} `field:"required" json:"weight" yaml:"weight"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

