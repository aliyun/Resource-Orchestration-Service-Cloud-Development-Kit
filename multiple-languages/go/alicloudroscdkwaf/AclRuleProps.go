package alicloudroscdkwaf


// Properties for defining a `AclRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-aclrule
type AclRuleProps struct {
	// Property domain: Domain name.
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
	// Property instanceId: WAF instance ID.
	//
	// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property rules: Detailed information of precise access control rules, expressed in JSON format strings.
	Rules interface{} `field:"required" json:"rules" yaml:"rules"`
	// Property region: Examples of areas where the WAF.
	//
	// Value:
	// cn: China mainland (default)
	// cn-hongkong: China HongKong and other overseas.
	Region interface{} `field:"optional" json:"region" yaml:"region"`
	// Property ruleId: Precise access control rule ID.
	RuleId interface{} `field:"optional" json:"ruleId" yaml:"ruleId"`
}

