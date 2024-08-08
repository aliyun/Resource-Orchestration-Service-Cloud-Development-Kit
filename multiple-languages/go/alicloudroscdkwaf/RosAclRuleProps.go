package alicloudroscdkwaf


// Properties for defining a `RosAclRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-aclrule
type RosAclRuleProps struct {
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Rules interface{} `field:"required" json:"rules" yaml:"rules"`
	Region interface{} `field:"optional" json:"region" yaml:"region"`
	RuleId interface{} `field:"optional" json:"ruleId" yaml:"ruleId"`
}

