package datasource


// Properties for defining a `RosCenRouteMaps`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps
type RosCenRouteMapsProps struct {
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	CenRegionId interface{} `field:"optional" json:"cenRegionId" yaml:"cenRegionId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	RouteMapId interface{} `field:"optional" json:"routeMapId" yaml:"routeMapId"`
	TransitRouterRouteTableId interface{} `field:"optional" json:"transitRouterRouteTableId" yaml:"transitRouterRouteTableId"`
	TransmitDirection interface{} `field:"optional" json:"transmitDirection" yaml:"transmitDirection"`
}

