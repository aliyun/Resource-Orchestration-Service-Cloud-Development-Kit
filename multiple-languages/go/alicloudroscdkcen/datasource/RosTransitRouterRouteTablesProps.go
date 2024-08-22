package datasource


// Properties for defining a `RosTransitRouterRouteTables`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterroutetables
type RosTransitRouterRouteTablesProps struct {
	TransitRouterId interface{} `field:"required" json:"transitRouterId" yaml:"transitRouterId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	TransitRouterRouteTableIds interface{} `field:"optional" json:"transitRouterRouteTableIds" yaml:"transitRouterRouteTableIds"`
	TransitRouterRouteTableNames interface{} `field:"optional" json:"transitRouterRouteTableNames" yaml:"transitRouterRouteTableNames"`
	TransitRouterRouteTableStatus interface{} `field:"optional" json:"transitRouterRouteTableStatus" yaml:"transitRouterRouteTableStatus"`
	TransitRouterRouteTableType interface{} `field:"optional" json:"transitRouterRouteTableType" yaml:"transitRouterRouteTableType"`
}

