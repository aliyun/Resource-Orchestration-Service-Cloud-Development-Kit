package datasource


// Properties for defining a `Ipv4Gateways`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways
type Ipv4GatewaysProps struct {
	// Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
	Ipv4GatewayId interface{} `field:"optional" json:"ipv4GatewayId" yaml:"ipv4GatewayId"`
	// Property ipv4GatewayName: Resource name.
	Ipv4GatewayName interface{} `field:"optional" json:"ipv4GatewayName" yaml:"ipv4GatewayName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

