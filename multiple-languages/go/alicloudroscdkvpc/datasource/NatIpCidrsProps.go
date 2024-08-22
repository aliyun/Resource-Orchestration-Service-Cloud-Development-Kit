package datasource


// Properties for defining a `NatIpCidrs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natipcidrs
type NatIpCidrsProps struct {
	// Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.
	NatGatewayId interface{} `field:"required" json:"natGatewayId" yaml:"natGatewayId"`
	// Property natIpCidr: Create a NAT IP ADDRESS.
	//
	// The new address segment must meet the following conditions: belong to 10.0.0.0\/8, 172.16.0.0\/12 or 192.168.0.0\/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
	NatIpCidr interface{} `field:"optional" json:"natIpCidr" yaml:"natIpCidr"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

