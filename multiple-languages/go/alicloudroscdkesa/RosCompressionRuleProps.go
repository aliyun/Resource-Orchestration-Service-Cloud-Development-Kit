package alicloudroscdkesa


// Properties for defining a `RosCompressionRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule
type RosCompressionRuleProps struct {
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	Brotli interface{} `field:"optional" json:"brotli" yaml:"brotli"`
	Gzip interface{} `field:"optional" json:"gzip" yaml:"gzip"`
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
	Zstd interface{} `field:"optional" json:"zstd" yaml:"zstd"`
}

