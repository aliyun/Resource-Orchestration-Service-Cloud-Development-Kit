package alicloudroscdkkms


// Properties for defining a `RosNetworkRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-networkrule
type RosNetworkRuleProps struct {
	NetworkRuleName interface{} `field:"required" json:"networkRuleName" yaml:"networkRuleName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	SourcePrivateIp interface{} `field:"optional" json:"sourcePrivateIp" yaml:"sourcePrivateIp"`
}

