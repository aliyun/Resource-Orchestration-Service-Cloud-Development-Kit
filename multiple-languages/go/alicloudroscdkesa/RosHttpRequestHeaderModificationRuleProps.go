package alicloudroscdkesa


// Properties for defining a `RosHttpRequestHeaderModificationRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httprequestheadermodificationrule
type RosHttpRequestHeaderModificationRuleProps struct {
	RequestHeaderModification interface{} `field:"required" json:"requestHeaderModification" yaml:"requestHeaderModification"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
}

