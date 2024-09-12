package alicloudroscdkvpc


// Properties for defining a `VpcIpv6CidrAllocation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcipv6cidrallocation
type VpcIpv6CidrAllocationProps struct {
	// Property addressPoolType: The type of the IPv6 address pool.
	//
	// Set the value to custom.
	// Note This parameter is required.
	AddressPoolType interface{} `field:"optional" json:"addressPoolType" yaml:"addressPoolType"`
	// Property ipv6CidrBlock: The IPv6 CIDR block that you want to reserve.
	Ipv6CidrBlock interface{} `field:"optional" json:"ipv6CidrBlock" yaml:"ipv6CidrBlock"`
	// Property ipv6Isp: The type of IPv6 CIDR block.
	//
	// Valid values:
	// BGP (default)
	// BGP_International
	// ChinaMobile
	// ChinaUnicom
	// ChinaTelecom
	// ChinaMobile_L2
	// ChinaUnicom_L2
	// ChinaTelecom_L2
	// Note
	// If your Alibaba Cloud account is allowed to use single-ISP bandwidth, valid values are: ChinaTelecom, ChinaUnicom, and ChinaMobile.
	// You can reserve only one IPv6 CIDR block of each type. After a reserved IPv6 CIDR block of a type is allocated to a VPC, you can reserve another IPv6 CIDR of the type.
	Ipv6Isp interface{} `field:"optional" json:"ipv6Isp" yaml:"ipv6Isp"`
}

