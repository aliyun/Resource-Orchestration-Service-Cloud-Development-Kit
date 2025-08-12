package datasource


// Properties for defining a `RosGateways`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateways
type RosGatewaysProps struct {
	GatewayId interface{} `field:"optional" json:"gatewayId" yaml:"gatewayId"`
	GatewayName interface{} `field:"optional" json:"gatewayName" yaml:"gatewayName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

