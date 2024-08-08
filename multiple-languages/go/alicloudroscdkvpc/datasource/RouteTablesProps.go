package datasource


// Properties for defining a `RouteTables`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables
type RouteTablesProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the route table belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property routerId: The ID of the VRouter to which the route table belongs.
	RouterId interface{} `field:"optional" json:"routerId" yaml:"routerId"`
	// Property routerType: The type of the VRouter to which the route table belongs.
	//
	// Valid values:
	// VRouter (default): VRouter.
	// VBR: Virtual Border Router (VBR).
	RouterType interface{} `field:"optional" json:"routerType" yaml:"routerType"`
	// Property routeTableId: The ID of the route table.
	RouteTableId interface{} `field:"optional" json:"routeTableId" yaml:"routeTableId"`
	// Property routeTableName: The name of the route table.
	RouteTableName interface{} `field:"optional" json:"routeTableName" yaml:"routeTableName"`
	// Property vpcId: The ID of the VRouter to which the route table belongs.
	//
	// The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

