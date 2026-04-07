package alicloudroscdkvpc


// Properties for defining a `Ipv6EgressRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6egressrule
type Ipv6EgressRuleProps struct {
	// Property instanceId: The ID of the IPv6 address for which you want to create an egress-only rule.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property ipv6GatewayId: The ID of the IPv6 gateway.
	Ipv6GatewayId interface{} `field:"required" json:"ipv6GatewayId" yaml:"ipv6GatewayId"`
	// Property description: The description of the egress-only rule.
	//
	// The description must be 0 to 256 characters in length and cannot start with `http:\/\/` or `https:\/\/`.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property instanceType: The type of the instance to which you want to apply the egress-only rule.
	//
	// Valid values:
	// *   IPv6Address (default)
	// *   IPv6Prefix.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property ipv6EgressRuleName: The name of the egress-only rule.
	//
	// The name must be 0 to 128 characters in length and cannot start with `http:\/\/` or `https:\/\/`.
	Ipv6EgressRuleName interface{} `field:"optional" json:"ipv6EgressRuleName" yaml:"ipv6EgressRuleName"`
}

