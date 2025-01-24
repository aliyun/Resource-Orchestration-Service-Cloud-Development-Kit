package alicloudroscdkecs


// Properties for defining a `RosAssignIpv6Addresses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignipv6addresses
type RosAssignIpv6AddressesProps struct {
	NetworkInterfaceId interface{} `field:"required" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	Ipv6Addresses interface{} `field:"optional" json:"ipv6Addresses" yaml:"ipv6Addresses"`
	Ipv6PrefixCount interface{} `field:"optional" json:"ipv6PrefixCount" yaml:"ipv6PrefixCount"`
	Ipv6Prefixes interface{} `field:"optional" json:"ipv6Prefixes" yaml:"ipv6Prefixes"`
}

