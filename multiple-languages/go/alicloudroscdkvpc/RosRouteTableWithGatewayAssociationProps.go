package alicloudroscdkvpc


// Properties for defining a `RosRouteTableWithGatewayAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetablewithgatewayassociation
type RosRouteTableWithGatewayAssociationProps struct {
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	GatewayType interface{} `field:"required" json:"gatewayType" yaml:"gatewayType"`
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
}

