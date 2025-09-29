package alicloudroscdkesa


// Properties for defining a `RosRedirectRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-redirectrule
type RosRedirectRuleProps struct {
	ReserveQueryString interface{} `field:"required" json:"reserveQueryString" yaml:"reserveQueryString"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	StatusCode interface{} `field:"required" json:"statusCode" yaml:"statusCode"`
	TargetUrl interface{} `field:"required" json:"targetUrl" yaml:"targetUrl"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
}

