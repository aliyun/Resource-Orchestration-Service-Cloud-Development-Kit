package datasource


// Properties for defining a `TransitRouterRouteTables`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterroutetables
type TransitRouterRouteTablesProps struct {
	// Property transitRouterId: The ID of the Enterprise Edition transit router.
	TransitRouterId interface{} `field:"required" json:"transitRouterId" yaml:"transitRouterId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property transitRouterRouteTableIds: The ID of the route table.
	//
	// You can query multiple route tables in each call. Maximum value of N: 20.
	TransitRouterRouteTableIds interface{} `field:"optional" json:"transitRouterRouteTableIds" yaml:"transitRouterRouteTableIds"`
	// Property transitRouterRouteTableNames: The name of the route table.
	//
	// You can query multiple route tables in each call. Maximum value of N: 20.
	// Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
	TransitRouterRouteTableNames interface{} `field:"optional" json:"transitRouterRouteTableNames" yaml:"transitRouterRouteTableNames"`
	// Property transitRouterRouteTableStatus: The state of the route table.
	//
	// Valid values:
	// Creating: The route table is being created.
	// Deleting: The route table is being deleted.
	// Active: The route table is available for use.
	TransitRouterRouteTableStatus interface{} `field:"optional" json:"transitRouterRouteTableStatus" yaml:"transitRouterRouteTableStatus"`
	// Property transitRouterRouteTableType: The type of route table.
	//
	// Valid values:
	// Custom: a custom route table
	// System: the default route table.
	TransitRouterRouteTableType interface{} `field:"optional" json:"transitRouterRouteTableType" yaml:"transitRouterRouteTableType"`
}

