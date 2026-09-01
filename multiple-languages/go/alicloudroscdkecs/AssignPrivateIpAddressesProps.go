package alicloudroscdkecs


// Properties for defining a `AssignPrivateIpAddresses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignprivateipaddresses
type AssignPrivateIpAddressesProps struct {
	// Property networkInterfaceId: The ID of the ENI.
	NetworkInterfaceId interface{} `field:"required" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	// Property ipv4PrefixCount: The number of IPv4 prefixes to be randomly generated for the ENI.
	//
	// Valid values: 1
	// to 10.
	// > To assign IPv4 prefixes to the ENI, you must specify the Ipv4Prefix.N or
	// Ipv4PrefixCount parameter, but not both.
	Ipv4PrefixCount interface{} `field:"optional" json:"ipv4PrefixCount" yaml:"ipv4PrefixCount"`
	// Property ipv4Prefixes: One or multiple IPv4 prefixes to be assigned to the ENI.
	Ipv4Prefixes interface{} `field:"optional" json:"ipv4Prefixes" yaml:"ipv4Prefixes"`
	// Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI.
	//
	// Valid values of number of private ip addresses:
	// When the ENI is in the Available state: 1 to 10.
	// When the ENI is in the InUse state: limited by the instance type.
	// For more information, see Instance type families.
	// You must specify either the PrivateIpAddresses parameter or the SecondaryPrivateIpAddressCount parameter to assign secondary private IP addresses.
	PrivateIpAddresses interface{} `field:"optional" json:"privateIpAddresses" yaml:"privateIpAddresses"`
	// Property secondaryPrivateIpAddressCount: The number of private IP addresses to be automatically assigned from the CIDR block of the vSwitch that is connected to the ENI.
	//
	// To assign secondary private IP addresses to the ENI, you must specify
	// `PrivateIpAddress.N` or `SecondaryPrivateIpAddressCount` but not both.
	SecondaryPrivateIpAddressCount interface{} `field:"optional" json:"secondaryPrivateIpAddressCount" yaml:"secondaryPrivateIpAddressCount"`
}

