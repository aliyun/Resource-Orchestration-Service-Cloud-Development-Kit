package alicloudroscdkthreatdetection


// Properties for defining a `ContainerDefenseRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule
type ContainerDefenseRuleProps struct {
	// Property description: Rule description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property ruleAction: The action that is performed when the rule is hit.
	//
	// Valid values:
	// - **1**: alert
	// - **2**: block.
	RuleAction interface{} `field:"optional" json:"ruleAction" yaml:"ruleAction"`
	// Property ruleId: Rule Id.
	RuleId interface{} `field:"optional" json:"ruleId" yaml:"ruleId"`
	// Property ruleName: The name of the rule.
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	// Property ruleSwitch: The switch of the rule.
	//
	// Valid values:
	// * 0: off.
	// * 1: on.
	RuleSwitch interface{} `field:"optional" json:"ruleSwitch" yaml:"ruleSwitch"`
	// Property ruleType: The rule type.
	//
	// Value:
	// * 2: User Rules.
	RuleType interface{} `field:"optional" json:"ruleType" yaml:"ruleType"`
	// Property scope: Rule scope.
	Scope interface{} `field:"optional" json:"scope" yaml:"scope"`
	// Property whitelist: The whitelist of rule.
	Whitelist interface{} `field:"optional" json:"whitelist" yaml:"whitelist"`
	// Property whitelistHash: The whitelist Hash.
	WhitelistHash interface{} `field:"optional" json:"whitelistHash" yaml:"whitelistHash"`
}

