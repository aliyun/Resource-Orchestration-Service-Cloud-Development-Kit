package datasource


// Properties for defining a `Ipv4Gateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
type Ipv4GatewayProps struct {
	// Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
	Ipv4GatewayId interface{} `field:"required" json:"ipv4GatewayId" yaml:"ipv4GatewayId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

