package datasource


// Properties for defining a `Gateways`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateways
type GatewaysProps struct {
	// Property gatewayId: Cloud-native API Gateway ID.
	GatewayId interface{} `field:"optional" json:"gatewayId" yaml:"gatewayId"`
	// Property gatewayName: The name of the Gateway.
	GatewayName interface{} `field:"optional" json:"gatewayName" yaml:"gatewayName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

