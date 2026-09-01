package alicloudroscdkecs


// Properties for defining a `AssignIpv6Addresses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignipv6addresses
type AssignIpv6AddressesProps struct {
	// Property networkInterfaceId: Elastic network interface ID.
	NetworkInterfaceId interface{} `field:"required" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	// Property ipv6AddressCount: The number of IPv6 addresses to randomly generate for the ENI.
	//
	// Valid values: 1 to
	// 10.
	// > You must specify `Ipv6Addresses.N` or `Ipv6AddressCount`, but not both.
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	// Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC.
	//
	// Currently, the maximum list size is 10. Example value: 2001:db8:1234:1a00::*** .
	// Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
	Ipv6Addresses interface{} `field:"optional" json:"ipv6Addresses" yaml:"ipv6Addresses"`
	// Property ipv6PrefixCount: The number of IPv6 prefixes to assign to the ENI.
	//
	// Valid values: 1 to 10.
	// > To assign IPv6 prefixes to the ENI, you must specify Ipv6Prefix.N or
	// Ipv6PrefixCount, but not both.
	Ipv6PrefixCount interface{} `field:"optional" json:"ipv6PrefixCount" yaml:"ipv6PrefixCount"`
	// Property ipv6Prefixes: Specify one or more IPv6 prefixes for the elastic NIC.
	Ipv6Prefixes interface{} `field:"optional" json:"ipv6Prefixes" yaml:"ipv6Prefixes"`
}

