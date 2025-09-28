package alicloudroscdkesa


// Properties for defining a `RosOriginRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originrule
type RosOriginRuleProps struct {
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	DnsRecord interface{} `field:"optional" json:"dnsRecord" yaml:"dnsRecord"`
	Follow302Enable interface{} `field:"optional" json:"follow302Enable" yaml:"follow302Enable"`
	Follow302MaxTries interface{} `field:"optional" json:"follow302MaxTries" yaml:"follow302MaxTries"`
	Follow302RetainArgs interface{} `field:"optional" json:"follow302RetainArgs" yaml:"follow302RetainArgs"`
	Follow302RetainHeader interface{} `field:"optional" json:"follow302RetainHeader" yaml:"follow302RetainHeader"`
	Follow302TargetHost interface{} `field:"optional" json:"follow302TargetHost" yaml:"follow302TargetHost"`
	OriginHost interface{} `field:"optional" json:"originHost" yaml:"originHost"`
	OriginHttpPort interface{} `field:"optional" json:"originHttpPort" yaml:"originHttpPort"`
	OriginHttpsPort interface{} `field:"optional" json:"originHttpsPort" yaml:"originHttpsPort"`
	OriginMtls interface{} `field:"optional" json:"originMtls" yaml:"originMtls"`
	OriginReadTimeout interface{} `field:"optional" json:"originReadTimeout" yaml:"originReadTimeout"`
	OriginScheme interface{} `field:"optional" json:"originScheme" yaml:"originScheme"`
	OriginSni interface{} `field:"optional" json:"originSni" yaml:"originSni"`
	OriginVerify interface{} `field:"optional" json:"originVerify" yaml:"originVerify"`
	Range interface{} `field:"optional" json:"range" yaml:"range"`
	RangeChunkSize interface{} `field:"optional" json:"rangeChunkSize" yaml:"rangeChunkSize"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
}

