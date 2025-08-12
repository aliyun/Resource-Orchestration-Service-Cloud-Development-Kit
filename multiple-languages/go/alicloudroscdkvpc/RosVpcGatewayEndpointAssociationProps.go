package alicloudroscdkvpc


// Properties for defining a `RosVpcGatewayEndpointAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpointassociation
type RosVpcGatewayEndpointAssociationProps struct {
	EndpointId interface{} `field:"required" json:"endpointId" yaml:"endpointId"`
	RouteTableIds interface{} `field:"required" json:"routeTableIds" yaml:"routeTableIds"`
}

