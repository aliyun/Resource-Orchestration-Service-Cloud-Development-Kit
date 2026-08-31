package alicloudroscdkvpc


// Properties for defining a `SnatEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-snatentry
type SnatEntryProps struct {
	// Property snatIp: The public IP address.
	//
	// Separate multiple EIPs with commas.
	SnatIp interface{} `field:"required" json:"snatIp" yaml:"snatIp"`
	// Property snatTableId: The ID of the SNAT table.
	SnatTableId interface{} `field:"required" json:"snatTableId" yaml:"snatTableId"`
	// Property eipAffinity: Specifies whether to enable EIP affinity.
	//
	// Valid values:
	// 0: no
	// 1: yes
	// If EIP affinity is enabled and the SNAT entry is associated with multiple EIPs, a client uses the same EIP to access the Internet. Otherwise, the client uses an EIP selected from the associated EIPs to access the Internet.
	EipAffinity interface{} `field:"optional" json:"eipAffinity" yaml:"eipAffinity"`
	// Property networkInterfaceId: The ID of the elastic network interface.
	//
	// The IPv4 addresses of the elastic network interface will be used as the SNAT IP addresses.
	NetworkInterfaceId interface{} `field:"optional" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	// Property snatEntryName: The name of the SNAT entry.
	//
	// The name must be 2 to 128 characters in length. It must start with a letter but
	// cannot start with `http:\/\/` or `https:\/\/`.
	SnatEntryName interface{} `field:"optional" json:"snatEntryName" yaml:"snatEntryName"`
	// Property sourceCidr: You can specify the CIDR block of a VPC, a vSwitch, or an ECS instance or enter a custom CIDR block.
	//
	// You can specify an SNAT entry in the following ways:
	// *   You can specify the CIDR block of the VPC where the NAT gateway is deployed.
	// Then, all ECS instances in the VPC can access the Internet or external networks
	// by using SNAT.
	// *   You can specify the CIDR block of a vSwitch, for example, 192.168.1.0\/24.
	// Then, the ECS instances in the vSwitch can access the Internet or external
	// networks by using SNAT.
	// *   You can specify the IP address of an ECS instance, for example,
	// 192.168.1.1\/32. Then, the ECS instance can access the Internet or external
	// networks by using SNAT.
	// *   You can specify a custom CIDR block. Then, all ECS instances within the
	// specified CIDR block can access the Internet or external networks by using SNAT.
	// When you add an SNAT entry to an Internet NAT gateway, if SnatIp is set to an
	// EIP, the ECS instance uses the specified EIP to access the Internet.
	// If SnatIp is set to multiple EIPs, the ECS instance randomly selects an EIP
	// specified in the SnatIp parameter to access the Internet.
	// You cannot specify this parameter and SourceVSwtichId at the same time. If
	// SourceVSwitchId is specified, you cannot specify SourceCIDR. If SourceCIDR is
	// specified, you cannot specify SourceVSwitchId.
	SourceCidr interface{} `field:"optional" json:"sourceCidr" yaml:"sourceCidr"`
	// Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
	//
	// When updating this list parameter, a new item will lead to a creation of new Snat Entry with latest properties, a removed item will lead to a deletion of the attached SnatEntry.
	SourceVSwitchIds interface{} `field:"optional" json:"sourceVSwitchIds" yaml:"sourceVSwitchIds"`
}

