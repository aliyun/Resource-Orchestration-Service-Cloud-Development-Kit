package alicloudroscdkvpc


// Properties for defining a `VSwitchCidrReservation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vswitchcidrreservation
type VSwitchCidrReservationProps struct {
	// Property vSwitchId: The ID of the vSwitch to which the reserved CIDR block belongs.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property ipVersion: The IP version of the reserved CIDR block.
	//
	// Valid values:
	// IPv4 (default)
	// IPv6.
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	// Property tags:.
	Tags *[]*RosVSwitchCidrReservation_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vSwitchCidrReservationCidr: The reserved CIDR block of the vSwitch.
	//
	// When IpVersion is set to IPv4, the reserved CIDR block must be a proper subset of the IPv4 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 28.
	// When IpVersion is set to IPv6, the reserved CIDR block must be a proper subset of the IPv6 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 80.
	// Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
	VSwitchCidrReservationCidr interface{} `field:"optional" json:"vSwitchCidrReservationCidr" yaml:"vSwitchCidrReservationCidr"`
	// Property vSwitchCidrReservationDescription: The description of the reserved CIDR block.
	//
	// This parameter is empty by default.
	// The description must be 2 to 256 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/.
	VSwitchCidrReservationDescription interface{} `field:"optional" json:"vSwitchCidrReservationDescription" yaml:"vSwitchCidrReservationDescription"`
	// Property vSwitchCidrReservationMask: The subnet mask of the reserved CIDR block.
	//
	// When IpVersion is set to IPv4, the subnet mask length of the CIDR block must be greater than the IPv4 subnet mask length of the vSwitch and cannot be greater than 28.
	// When IpVersion is set to IPv6, the subnet mask length of the CIDR block must be greater than the IPv6 subnet mask length of the vSwitch and cannot be greater than 80.
	// Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
	VSwitchCidrReservationMask interface{} `field:"optional" json:"vSwitchCidrReservationMask" yaml:"vSwitchCidrReservationMask"`
	// Property vSwitchCidrReservationName: The name of the reserved CIDR block.
	//
	// The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
	VSwitchCidrReservationName interface{} `field:"optional" json:"vSwitchCidrReservationName" yaml:"vSwitchCidrReservationName"`
	// Property vSwitchCidrReservationType: The type of reserved CIDR block.
	//
	// Set the value to prefix.
	// Note When a user or a cloud service allocates a CIDR block to an elastic network interface (ENI), the CIDR block must be allocated from the reserved CIDR block. If the reserved CIDR block is exhausted, an error is returned.
	VSwitchCidrReservationType interface{} `field:"optional" json:"vSwitchCidrReservationType" yaml:"vSwitchCidrReservationType"`
}

