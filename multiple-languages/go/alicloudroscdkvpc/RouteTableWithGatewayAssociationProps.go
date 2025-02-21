package alicloudroscdkvpc


// Properties for defining a `RouteTableWithGatewayAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetablewithgatewayassociation
type RouteTableWithGatewayAssociationProps struct {
	// Property gatewayId: The ID of the IPv4 gateway that is to be associated.
	//
	// The IPv4 gateway instance must be activated.
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	// Property gatewayType: Types of the associated gateway instance.
	GatewayType interface{} `field:"required" json:"gatewayType" yaml:"gatewayType"`
	// Property routeTableId: The ID of route table that gateway is to be bound.
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
}

