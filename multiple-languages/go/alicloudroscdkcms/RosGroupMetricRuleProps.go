package alicloudroscdkcms


// Properties for defining a `RosGroupMetricRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-groupmetricrule
type RosGroupMetricRuleProps struct {
	Category interface{} `field:"required" json:"category" yaml:"category"`
	Escalations interface{} `field:"required" json:"escalations" yaml:"escalations"`
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	MetricName interface{} `field:"required" json:"metricName" yaml:"metricName"`
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	RuleId interface{} `field:"required" json:"ruleId" yaml:"ruleId"`
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	ContactGroups interface{} `field:"optional" json:"contactGroups" yaml:"contactGroups"`
	Dimensions interface{} `field:"optional" json:"dimensions" yaml:"dimensions"`
	EffectiveInterval interface{} `field:"optional" json:"effectiveInterval" yaml:"effectiveInterval"`
	EmailSubject interface{} `field:"optional" json:"emailSubject" yaml:"emailSubject"`
	ExtraDimensionJson interface{} `field:"optional" json:"extraDimensionJson" yaml:"extraDimensionJson"`
	Interval interface{} `field:"optional" json:"interval" yaml:"interval"`
	NoDataPolicy interface{} `field:"optional" json:"noDataPolicy" yaml:"noDataPolicy"`
	NoEffectiveInterval interface{} `field:"optional" json:"noEffectiveInterval" yaml:"noEffectiveInterval"`
	Options interface{} `field:"optional" json:"options" yaml:"options"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	SilenceTime interface{} `field:"optional" json:"silenceTime" yaml:"silenceTime"`
	Webhook interface{} `field:"optional" json:"webhook" yaml:"webhook"`
}

