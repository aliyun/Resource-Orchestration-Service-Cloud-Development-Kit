package alicloudroscdkvpc


// Properties for defining a `VcoRouteEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vcorouteentry
type VcoRouteEntryProps struct {
	// Property nextHop: The next hop of the destination routing entry.
	NextHop interface{} `field:"required" json:"nextHop" yaml:"nextHop"`
	// Property routeDest: The target segment of the destination routing entry.
	RouteDest interface{} `field:"required" json:"routeDest" yaml:"routeDest"`
	// Property vpnConnectionId: IPsec Connection ID.
	VpnConnectionId interface{} `field:"required" json:"vpnConnectionId" yaml:"vpnConnectionId"`
	// Property weight: The weight value of the destination routing entry.Value: 0: Indicates low priority. 100: Indicates high priority.
	Weight interface{} `field:"required" json:"weight" yaml:"weight"`
	// Property description: Descriptive information for the destination routing entry.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

