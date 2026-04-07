package alicloudroscdkesa


// Properties for defining a `WaitingRoomRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomrule
type WaitingRoomRuleProps struct {
	// Property rule: The content of the rule, the implemented policy or conditional expression.
	Rule interface{} `field:"required" json:"rule" yaml:"rule"`
	// Property ruleEnable: Rule switch.
	//
	// When adding global configuration, this parameter does not need to be set. Value range:
	// - on: open.
	// - off: close.
	RuleEnable interface{} `field:"required" json:"ruleEnable" yaml:"ruleEnable"`
	// Property ruleName: Rule name, optional, used to query by waiting room bypass rule name.
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	// Property siteId: The site ID, which can be obtained by calling the ListSites API.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property waitingRoomId: Waiting room ID, used to identify a specific waiting room.
	//
	// It can be obtained by calling the [listwaitingroom](https:\/\/help.aliyun.com\/document_detail\/2850279.html) interface.
	WaitingRoomId interface{} `field:"required" json:"waitingRoomId" yaml:"waitingRoomId"`
}

