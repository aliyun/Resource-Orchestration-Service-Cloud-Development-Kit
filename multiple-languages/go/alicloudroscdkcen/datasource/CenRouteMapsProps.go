package datasource


// Properties for defining a `CenRouteMaps`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps
type CenRouteMapsProps struct {
	// Property cenId: The ID of the CEN instance.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property cenRegionId: The ID of the region where the routing policy is applied.
	CenRegionId interface{} `field:"optional" json:"cenRegionId" yaml:"cenRegionId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property routeMapId: The ID of the routing policy.
	RouteMapId interface{} `field:"optional" json:"routeMapId" yaml:"routeMapId"`
	// Property transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.
	TransitRouterRouteTableId interface{} `field:"optional" json:"transitRouterRouteTableId" yaml:"transitRouterRouteTableId"`
	// Property transmitDirection: The direction in which the routing policy is applied.
	TransmitDirection interface{} `field:"optional" json:"transmitDirection" yaml:"transmitDirection"`
}

