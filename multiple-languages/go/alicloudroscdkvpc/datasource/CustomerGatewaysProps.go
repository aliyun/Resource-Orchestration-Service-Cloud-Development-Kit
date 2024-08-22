package datasource


// Properties for defining a `CustomerGateways`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
type CustomerGatewaysProps struct {
	// Property customerGatewayId: The ID of the customer gateway.
	CustomerGatewayId interface{} `field:"optional" json:"customerGatewayId" yaml:"customerGatewayId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

