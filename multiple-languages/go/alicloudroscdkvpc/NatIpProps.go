package alicloudroscdkvpc


// Properties for defining a `NatIp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natip
type NatIpProps struct {
	// Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway for which you want to create the NAT IP address.
	NatGatewayId interface{} `field:"required" json:"natGatewayId" yaml:"natGatewayId"`
	// Property natIpCidr: The CIDR block to which the NAT IP address belongs.
	NatIpCidr interface{} `field:"required" json:"natIpCidr" yaml:"natIpCidr"`
	// Property natIpDescription: The description of the NAT IP address.
	//
	// The description must be 2 to 256 characters in length. It must start with a letter
	// but cannot start with http:\/\/ or https:\/\/.
	NatIpDescription interface{} `field:"required" json:"natIpDescription" yaml:"natIpDescription"`
	// Property natIpName: The name of the NAT IP address.
	//
	// The name must be 2 to 128 characters in length, and can contain letters, digits, periods
	// (.), underscores (_), and hyphens (-). It must start with a letter. It cannot start
	// with http:\/\/ or https:\/\/.
	NatIpName interface{} `field:"required" json:"natIpName" yaml:"natIpName"`
	// Property ipv4Prefix: The IPv4 prefix of the IP address range to be created.
	//
	// The IPv4 prefix must be within the reserved CIDR block of the switch where the NAT gateway is deployed, and the reserved CIDR block must not be occupied. The prefix length must be \/28.
	Ipv4Prefix interface{} `field:"optional" json:"ipv4Prefix" yaml:"ipv4Prefix"`
	// Property ipv4PrefixCount: The number of IPv4 prefixes to automatically allocate.
	//
	// Randomly allocated from the unassigned reserved CIDR blocks of the switch where the NAT gateway is deployed. Valid values: 1 to 10.
	Ipv4PrefixCount interface{} `field:"optional" json:"ipv4PrefixCount" yaml:"ipv4PrefixCount"`
	// Property natIp: The NAT IP address that you want to create.
	//
	// If you do not specify an IP address, the system selects a random IP address from the
	// specified CIDR block.
	NatIp interface{} `field:"optional" json:"natIp" yaml:"natIp"`
	// Property natIpCidrId: The ID of the CIDR block to which the NAT IP address belongs.
	NatIpCidrId interface{} `field:"optional" json:"natIpCidrId" yaml:"natIpCidrId"`
}

