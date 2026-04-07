package alicloudroscdkesa


// Properties for defining a `RosWafRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-wafrule
type RosWafRuleProps struct {
	Phase interface{} `field:"required" json:"phase" yaml:"phase"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	Config interface{} `field:"optional" json:"config" yaml:"config"`
	RulesetId interface{} `field:"optional" json:"rulesetId" yaml:"rulesetId"`
	Shared interface{} `field:"optional" json:"shared" yaml:"shared"`
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
}

