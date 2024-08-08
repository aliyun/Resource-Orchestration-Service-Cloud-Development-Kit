package datasource


// Properties for defining a `RouteTable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
type RouteTableProps struct {
	// Property routeTableId: The ID of the routing table.
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

