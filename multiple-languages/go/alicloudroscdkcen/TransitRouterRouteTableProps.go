package alicloudroscdkcen


// Properties for defining a `TransitRouterRouteTable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetable
type TransitRouterRouteTableProps struct {
	// Property transitRouterId: TransitRouterId.
	TransitRouterId interface{} `field:"required" json:"transitRouterId" yaml:"transitRouterId"`
	// Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription.
	TransitRouterRouteTableDescription interface{} `field:"optional" json:"transitRouterRouteTableDescription" yaml:"transitRouterRouteTableDescription"`
	// Property transitRouterRouteTableName: TransitRouterRouteTableName.
	TransitRouterRouteTableName interface{} `field:"optional" json:"transitRouterRouteTableName" yaml:"transitRouterRouteTableName"`
}

