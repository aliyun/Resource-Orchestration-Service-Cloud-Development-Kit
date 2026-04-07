package alicloudroscdkesa


// Properties for defining a `RosRewriteUrlRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-rewriteurlrule
type RosRewriteUrlRuleProps struct {
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	QueryString interface{} `field:"optional" json:"queryString" yaml:"queryString"`
	RewriteQueryStringType interface{} `field:"optional" json:"rewriteQueryStringType" yaml:"rewriteQueryStringType"`
	RewriteUriType interface{} `field:"optional" json:"rewriteUriType" yaml:"rewriteUriType"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
	Uri interface{} `field:"optional" json:"uri" yaml:"uri"`
}

