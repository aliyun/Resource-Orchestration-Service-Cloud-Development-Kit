package datasource


// Properties for defining a `Gateways`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-gateways
type GatewaysProps struct {
	// Property gatewayId: The ID of gateway.
	GatewayId interface{} `field:"optional" json:"gatewayId" yaml:"gatewayId"`
	// Property gatewayType: The type of gateway.
	GatewayType interface{} `field:"optional" json:"gatewayType" yaml:"gatewayType"`
	// Property instanceId: The instance ID of gateway.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property name: The name of gateway.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property vpc: The vpc ID of gateway.
	Vpc interface{} `field:"optional" json:"vpc" yaml:"vpc"`
}

