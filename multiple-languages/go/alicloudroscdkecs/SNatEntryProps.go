package alicloudroscdkecs


// Properties for defining a `SNatEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snatentry
type SNatEntryProps struct {
	// Property sNatIp: Source IP, must belongs to bandwidth package internet IP.
	SNatIp interface{} `field:"required" json:"sNatIp" yaml:"sNatIp"`
	// Property sNatTableId: Create SNAT entry in specified SNAT table.
	SNatTableId interface{} `field:"required" json:"sNatTableId" yaml:"sNatTableId"`
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
	// Property sourceVSwitchId: The ID of the vSwitch.
	//
	// *   When you add an SNAT entry to an Internet NAT gateway, this parameter
	// specifies that ECS instances in the vSwitch can use the SNAT entry to access the
	// Internet. If you select multiple elastic IP addresses (EIPs) to create an SNAT
	// address pool, connections are hashed to these EIPs. Network traffic may not be
	// evenly distributed to the EIPs because the amount of traffic that passes through
	// each connection varies. We recommend that you associate these EIPs with the same
	// EIP bandwidth plan to prevent service interruptions due to the bandwidth limits
	// on individual EIPs.
	// *   When you add an SNAT entry to a VPC NAT gateway, this parameter specifies
	// that ECS instances in the vSwitch can use the SNAT entry to access external
	// networks.
	SourceVSwitchId interface{} `field:"optional" json:"sourceVSwitchId" yaml:"sourceVSwitchId"`
}

