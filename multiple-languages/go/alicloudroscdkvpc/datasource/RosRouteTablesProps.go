package datasource


// Properties for defining a `RosRouteTables`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables
type RosRouteTablesProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RouterId interface{} `field:"optional" json:"routerId" yaml:"routerId"`
	RouterType interface{} `field:"optional" json:"routerType" yaml:"routerType"`
	RouteTableId interface{} `field:"optional" json:"routeTableId" yaml:"routeTableId"`
	RouteTableName interface{} `field:"optional" json:"routeTableName" yaml:"routeTableName"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

