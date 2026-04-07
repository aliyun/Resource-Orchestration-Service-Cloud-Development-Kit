package alicloudroscdkesa


// Properties for defining a `RosCustomResponseCodeRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customresponsecoderule
type RosCustomResponseCodeRuleProps struct {
	PageId interface{} `field:"required" json:"pageId" yaml:"pageId"`
	ReturnCode interface{} `field:"required" json:"returnCode" yaml:"returnCode"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
}

