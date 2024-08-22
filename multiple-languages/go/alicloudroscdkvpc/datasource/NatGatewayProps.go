package datasource


// Properties for defining a `NatGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateway
type NatGatewayProps struct {
	// Property natGatewayId: The ID of the NAT gateway.
	NatGatewayId interface{} `field:"required" json:"natGatewayId" yaml:"natGatewayId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

