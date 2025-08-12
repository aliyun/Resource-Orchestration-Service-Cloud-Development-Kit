package datasource


// Properties for defining a `Gateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateway
type GatewayProps struct {
	// Property gatewayId: Cloud-native API Gateway ID.
	GatewayId interface{} `field:"required" json:"gatewayId" yaml:"gatewayId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

