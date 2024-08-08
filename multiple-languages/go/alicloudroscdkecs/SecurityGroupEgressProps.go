package alicloudroscdkecs


// Properties for defining a `SecurityGroupEgress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegress
type SecurityGroupEgressProps struct {
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
	// Property destCidrIp: The destination IPv4 CIDR block to which you want to control access.
	//
	// CIDR blocks and IPv4 addresses are supported.
	DestCidrIp interface{} `field:"optional" json:"destCidrIp" yaml:"destCidrIp"`
	// Property destGroupId: The destination security group ID to which access permissions need to be set.
	//
	// Set at least one of the DestGroupId, DestCidrIp, Ipv6DestCidrIp, or DestPrefixListId parameters.
	// - If DestGroupId is specified without the DestCidrIp parameter, the NicType parameter can only take the value intranet.
	// - If both DestGroupId and DestCidrIp are specified, DestCidrIp is assumed to prevail.
	// You should pay attention to:
	// - Enterprise Security groups do not support authorized security group access.
	// - The maximum number of authorized security groups supported by ordinary security groups is 20.
	DestGroupId interface{} `field:"optional" json:"destGroupId" yaml:"destGroupId"`
	// Property destGroupOwnerId: When setting security group rules across accounts, the Ali Cloud account ID of the destination security group.
	//
	// - If neither DestGroupOwnerId nor DestGroupOwnerAccount is set, it is considered to set the access rights of your other security group.
	// - If you have set the parameter DestCidrIp, the parameter DestGroupOwnerId is invalid.
	DestGroupOwnerId interface{} `field:"optional" json:"destGroupOwnerId" yaml:"destGroupOwnerId"`
	// Property destPrefixListId: The ID of the destination prefix list to which you want to control access.
	//
	// You can call the DescribePrefixLists operation to query the IDs of available prefix lists.Take note of the following items:
	// If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" in Limits.
	// If you specify DestCidrIp, Ipv6DestCidrIp, or DestGroupId, DestPrefixListId is ignored.
	DestPrefixListId interface{} `field:"optional" json:"destPrefixListId" yaml:"destPrefixListId"`
	// Property ipv6DestCidrIp: Destination IPv6 CIDR address block for which access rights need to be set.
	//
	// CIDR format and IPv6 format IP address range are supported.
	Ipv6DestCidrIp interface{} `field:"optional" json:"ipv6DestCidrIp" yaml:"ipv6DestCidrIp"`
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
}

