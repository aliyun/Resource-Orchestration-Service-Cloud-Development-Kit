package datasource


// Properties for defining a `CustomerGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
type CustomerGatewayProps struct {
	// Property customerGatewayId: The ID of the customer gateway.
	CustomerGatewayId interface{} `field:"required" json:"customerGatewayId" yaml:"customerGatewayId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

