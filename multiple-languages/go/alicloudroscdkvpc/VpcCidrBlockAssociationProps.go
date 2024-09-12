package alicloudroscdkvpc


// Properties for defining a `VpcCidrBlockAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpccidrblockassociation
type VpcCidrBlockAssociationProps struct {
	// Property vpcId: The ID of the VPC to which you want to add a secondary CIDR block.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property ipamPoolId: The ID of the IP Address Manager (IPAM) pool that contains IPv4 addresses.
	IpamPoolId interface{} `field:"optional" json:"ipamPoolId" yaml:"ipamPoolId"`
	// Property iPv6CidrBlock: The IPv6 CIDR block to be added.
	//
	// Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
	IPv6CidrBlock interface{} `field:"optional" json:"iPv6CidrBlock" yaml:"iPv6CidrBlock"`
	// Property ipv6Isp: The type of the IPv6 CIDR block.
	//
	// Valid values:
	// BGP (default)
	// ChinaMobile
	// ChinaUnicom
	// ChinaTelecom
	// Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set this parameter to ChinaTelecom, ChinaUnicom, or ChinaMobile.
	Ipv6Isp interface{} `field:"optional" json:"ipv6Isp" yaml:"ipv6Isp"`
	// Property ipVersion: The version of the IP address.
	//
	// Valid values:
	// IPV4: the IPv4 address.
	// IPV6: the IPv6 address. If you set IpVersion to IPV6 and do not specify SecondaryCidrBlock, you can add a secondary IPv6 CIDR block to the VPC.
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	// Property secondaryCidrBlock: The IPv4 CIDR block to be added.
	//
	// Take note of the following requirements:
	// You can specify one of the following standard IPv4 CIDR blocks or their subnets as the secondary IPv4 CIDR block of the VPC: 192.168.0.0\/16, 172.16.0.0\/12, and 10.0.0.0\/8.
	// You can also use a custom CIDR block other than 100.64.0.0\/10, 224.0.0.0\/4, 127.0.0.0\/8, 169.254.0.0\/16, or their subnets as the secondary IPv4 CIDR block of the VPC.
	// The CIDR block must meet the following requirements:
	// The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
	// The CIDR block cannot overlap with the primary CIDR block or an existing secondary CIDR block of the VPC.
	// Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
	SecondaryCidrBlock interface{} `field:"optional" json:"secondaryCidrBlock" yaml:"secondaryCidrBlock"`
	// Property secondaryCidrMask: Add an additional network segment to the VPC from the iPam address pool by entering a mask.
	//
	// Explain that the designated iPam address pool adds additional network segments to VPC, and the parameter SecondaryCidrblock or SecondaryCidrmask inputs at least one.
	SecondaryCidrMask interface{} `field:"optional" json:"secondaryCidrMask" yaml:"secondaryCidrMask"`
}

