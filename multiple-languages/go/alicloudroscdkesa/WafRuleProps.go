package alicloudroscdkesa


// Properties for defining a `WafRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-wafrule
type WafRuleProps struct {
	// Property phase: The version of the website.
	Phase interface{} `field:"required" json:"phase" yaml:"phase"`
	// Property siteId: The website ID, which can be obtained by calling the [ListSites](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850189.html) operation.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property config: The configuration of the rule.
	Config interface{} `field:"optional" json:"config" yaml:"config"`
	// Property rulesetId: The ID of the WAF ruleset, which can be obtained by calling the [ListWafRulesets](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850233.html) operation.
	RulesetId interface{} `field:"optional" json:"rulesetId" yaml:"rulesetId"`
	// Property shared: The configurations shared by multiple rules.
	Shared interface{} `field:"optional" json:"shared" yaml:"shared"`
	// Property siteVersion: The website ID, which can be obtained by calling the [ListSites](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850189.html) operation.
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
}

