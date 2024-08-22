package alicloudroscdkcen


// Properties for defining a `RosTransitRouterRouteEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterrouteentry
type RosTransitRouterRouteEntryProps struct {
	TransitRouterRouteEntryDestinationCidrBlock interface{} `field:"required" json:"transitRouterRouteEntryDestinationCidrBlock" yaml:"transitRouterRouteEntryDestinationCidrBlock"`
	TransitRouterRouteEntryNextHopType interface{} `field:"required" json:"transitRouterRouteEntryNextHopType" yaml:"transitRouterRouteEntryNextHopType"`
	TransitRouterRouteTableId interface{} `field:"required" json:"transitRouterRouteTableId" yaml:"transitRouterRouteTableId"`
	TransitRouterRouteEntryDescription interface{} `field:"optional" json:"transitRouterRouteEntryDescription" yaml:"transitRouterRouteEntryDescription"`
	TransitRouterRouteEntryName interface{} `field:"optional" json:"transitRouterRouteEntryName" yaml:"transitRouterRouteEntryName"`
	TransitRouterRouteEntryNextHopId interface{} `field:"optional" json:"transitRouterRouteEntryNextHopId" yaml:"transitRouterRouteEntryNextHopId"`
}

