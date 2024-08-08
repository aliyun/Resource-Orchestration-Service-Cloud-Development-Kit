package alicloudroscdkvpc


// Properties for defining a `NatIpCidr`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natipcidr
type NatIpCidrProps struct {
	// Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway with which you want to associate the CIDR block.
	NatGatewayId interface{} `field:"required" json:"natGatewayId" yaml:"natGatewayId"`
	// Property natIpCidr: The NAT CIDR block that you want to associate with the NAT gateway.
	//
	// The new CIDR block must meet the following conditions:
	// The NAT CIDR block must fall within 10.0.0.0\/8, 172.16.0.0\/12, 192.168.0.0\/16, or their subnets.
	// The subnet mask must be 16 to 32 bits in length.
	// The NAT CIDR block cannot overlap with the private CIDR block of the VPC to which the NAT gateway belongs. If you want to use other IP addresses from the private CIDR block of the VPC to provide NAT services, create a vSwitch and attach the vSwitch to another VPC NAT gateway.
	// If you want to use public IP addresses to provide NAT services, make sure that the public IP addresses fall within a customer CIDR block of the VPC to which the VPC NAT gateway belongs. For more information, see What is customer CIDR block?.
	NatIpCidr interface{} `field:"required" json:"natIpCidr" yaml:"natIpCidr"`
	// Property natIpCidrDescription: The description of the NAT CIDR block.
	//
	// The description must be 2 to 256 characters in length and start with a letter. The description cannot start with http:\/\/ or https:\/\/.
	NatIpCidrDescription interface{} `field:"required" json:"natIpCidrDescription" yaml:"natIpCidrDescription"`
	// Property natIpCidrName: The name of the CIDR block.
	//
	// The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter. The name must start with a letter and cannot start with http:\/\/ or https:\/\/.
	NatIpCidrName interface{} `field:"required" json:"natIpCidrName" yaml:"natIpCidrName"`
}

