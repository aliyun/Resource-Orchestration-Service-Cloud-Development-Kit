package datasource


// Properties for defining a `RosRouteTable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
type RosRouteTableProps struct {
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

