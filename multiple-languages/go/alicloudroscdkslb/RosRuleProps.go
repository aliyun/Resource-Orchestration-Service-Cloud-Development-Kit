package alicloudroscdkslb


// Properties for defining a `RosRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-rule
type RosRuleProps struct {
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	RuleList interface{} `field:"required" json:"ruleList" yaml:"ruleList"`
	ListenerProtocol interface{} `field:"optional" json:"listenerProtocol" yaml:"listenerProtocol"`
}

