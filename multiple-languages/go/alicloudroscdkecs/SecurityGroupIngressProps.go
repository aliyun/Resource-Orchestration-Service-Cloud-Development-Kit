package alicloudroscdkecs


// Properties for defining a `SecurityGroupIngress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingress
type SecurityGroupIngressProps struct {
	// Property ipProtocol: Ip protocol for in rule.
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	// Property portRange: Ip protocol relative port range.
	//
	// For tcp and udp, the port rang is [1,65535], using format '1\/200'For icmp|gre|all protocel, the port range should be '-1\/-1'.
	PortRange interface{} `field:"required" json:"portRange" yaml:"portRange"`
	// Property description: Description of the security group rule, [1, 512] characters.
	//
	// The default is empty.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property ipv6SourceCidrIp: Source IPv6 CIDR address segment.
	//
	// Supports IP address ranges in CIDR format and IPv6 format.
	// Note Only VPC type IP addresses are supported.
	Ipv6SourceCidrIp interface{} `field:"optional" json:"ipv6SourceCidrIp" yaml:"ipv6SourceCidrIp"`
	// Property nicType: Network type, could be 'internet' or 'intranet'.
	//
	// Default value is internet.
	NicType interface{} `field:"optional" json:"nicType" yaml:"nicType"`
	// Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access).
	//
	// Default value is accept.
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
	// Property priority: Authorization policies priority range[1, 100].
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	// Property securityGroupId: Id of the security group.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property sourceCidrIp: The source IPv4 CIDR block to which you want to control access.
	//
	// CIDR blocks and IPv4 addresses are supported.
	SourceCidrIp interface{} `field:"optional" json:"sourceCidrIp" yaml:"sourceCidrIp"`
	// Property sourceGroupId: Source Group Id.
	SourceGroupId interface{} `field:"optional" json:"sourceGroupId" yaml:"sourceGroupId"`
	// Property sourceGroupOwnerId: Source Group Owner Account ID.
	SourceGroupOwnerId interface{} `field:"optional" json:"sourceGroupOwnerId" yaml:"sourceGroupOwnerId"`
	// Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol.
	//
	// Valid values: TCP\/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (\/). Correct example: 1\/200. Incorrect example: 200\/1.ICMP: -1\/-1.GRE: -1\/-1.ALL: -1\/-1.
	SourcePortRange interface{} `field:"optional" json:"sourcePortRange" yaml:"sourcePortRange"`
	// Property sourcePrefixListId: The ID of the source prefix list to which you want to control access.
	//
	// You can call the DescribePrefixLists operation to query the IDs of available prefix lists. Take note of the following items:
	// - If a security group is in the classic network, you cannot configure prefix lists in the security group rules.
	// - If you specify the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameter, this parameter is ignored.
	SourcePrefixListId interface{} `field:"optional" json:"sourcePrefixListId" yaml:"sourcePrefixListId"`
}

