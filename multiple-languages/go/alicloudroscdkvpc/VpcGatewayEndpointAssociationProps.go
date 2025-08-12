package alicloudroscdkvpc


// Properties for defining a `VpcGatewayEndpointAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpointassociation
type VpcGatewayEndpointAssociationProps struct {
	// Property endpointId: The gateway endpoint instance ID to associate the routing table.
	EndpointId interface{} `field:"required" json:"endpointId" yaml:"endpointId"`
	// Property routeTableIds: The routing table ID to associate.The value range of N is 1~20, that is, a maximum of 20 routing tables can be bound at a time.
	RouteTableIds interface{} `field:"required" json:"routeTableIds" yaml:"routeTableIds"`
}

