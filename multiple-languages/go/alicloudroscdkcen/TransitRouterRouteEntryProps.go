package alicloudroscdkcen


// Properties for defining a `TransitRouterRouteEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterrouteentry
type TransitRouterRouteEntryProps struct {
	// Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.
	TransitRouterRouteEntryDestinationCidrBlock interface{} `field:"required" json:"transitRouterRouteEntryDestinationCidrBlock" yaml:"transitRouterRouteEntryDestinationCidrBlock"`
	// Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.
	TransitRouterRouteEntryNextHopType interface{} `field:"required" json:"transitRouterRouteEntryNextHopType" yaml:"transitRouterRouteEntryNextHopType"`
	// Property transitRouterRouteTableId: TransitRouterRouteTableId.
	TransitRouterRouteTableId interface{} `field:"required" json:"transitRouterRouteTableId" yaml:"transitRouterRouteTableId"`
	// Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.
	TransitRouterRouteEntryDescription interface{} `field:"optional" json:"transitRouterRouteEntryDescription" yaml:"transitRouterRouteEntryDescription"`
	// Property transitRouterRouteEntryName: TransitRouterRouteEntryName.
	TransitRouterRouteEntryName interface{} `field:"optional" json:"transitRouterRouteEntryName" yaml:"transitRouterRouteEntryName"`
	// Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.
	TransitRouterRouteEntryNextHopId interface{} `field:"optional" json:"transitRouterRouteEntryNextHopId" yaml:"transitRouterRouteEntryNextHopId"`
}

