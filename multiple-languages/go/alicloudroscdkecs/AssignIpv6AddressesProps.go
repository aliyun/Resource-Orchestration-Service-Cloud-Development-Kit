package alicloudroscdkecs


// Properties for defining a `AssignIpv6Addresses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignipv6addresses
type AssignIpv6AddressesProps struct {
	// Property networkInterfaceId: Elastic network interface ID.
	NetworkInterfaceId interface{} `field:"required" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	// Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
	//
	// Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	// Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC.
	//
	// Currently, the maximum list size is 10. Example value: 2001:db8:1234:1a00::*** .
	// Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
	Ipv6Addresses interface{} `field:"optional" json:"ipv6Addresses" yaml:"ipv6Addresses"`
	// Property ipv6PrefixCount: IPv6 prefix specified number of randomly generated interfaces elasticity.
	Ipv6PrefixCount interface{} `field:"optional" json:"ipv6PrefixCount" yaml:"ipv6PrefixCount"`
	// Property ipv6Prefixes: Specify one or more IPv6 prefixes for the elastic NIC.
	Ipv6Prefixes interface{} `field:"optional" json:"ipv6Prefixes" yaml:"ipv6Prefixes"`
}

