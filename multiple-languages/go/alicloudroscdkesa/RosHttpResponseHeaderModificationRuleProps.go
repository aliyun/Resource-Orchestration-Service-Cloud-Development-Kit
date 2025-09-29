package alicloudroscdkesa


// Properties for defining a `RosHttpResponseHeaderModificationRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpresponseheadermodificationrule
type RosHttpResponseHeaderModificationRuleProps struct {
	ResponseHeaderModification interface{} `field:"required" json:"responseHeaderModification" yaml:"responseHeaderModification"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
}

