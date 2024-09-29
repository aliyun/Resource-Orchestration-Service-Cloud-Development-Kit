package alicloudroscdkkms


// Properties for defining a `NetworkRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-networkrule
type NetworkRuleProps struct {
	// Property networkRuleName: The name of the access control rule.
	NetworkRuleName interface{} `field:"required" json:"networkRuleName" yaml:"networkRuleName"`
	// Property description: The description of the network rule.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property sourcePrivateIp: VPC network whitelist, The private IP address or private CIDR block, Supports binding up to 800 CIDR blocks or IP addresses.
	SourcePrivateIp interface{} `field:"optional" json:"sourcePrivateIp" yaml:"sourcePrivateIp"`
}

