package alicloudroscdkcms


// Properties for defining a `RosResourceMetricRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-resourcemetricrule
type RosResourceMetricRuleProps struct {
	ContactGroups interface{} `field:"required" json:"contactGroups" yaml:"contactGroups"`
	Escalations interface{} `field:"required" json:"escalations" yaml:"escalations"`
	MetricName interface{} `field:"required" json:"metricName" yaml:"metricName"`
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	Resources interface{} `field:"required" json:"resources" yaml:"resources"`
	CompositeExpression interface{} `field:"optional" json:"compositeExpression" yaml:"compositeExpression"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	EffectiveInterval interface{} `field:"optional" json:"effectiveInterval" yaml:"effectiveInterval"`
	EmailSubject interface{} `field:"optional" json:"emailSubject" yaml:"emailSubject"`
	Interval interface{} `field:"optional" json:"interval" yaml:"interval"`
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	NoDataPolicy interface{} `field:"optional" json:"noDataPolicy" yaml:"noDataPolicy"`
	NoEffectiveInterval interface{} `field:"optional" json:"noEffectiveInterval" yaml:"noEffectiveInterval"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	Prometheus interface{} `field:"optional" json:"prometheus" yaml:"prometheus"`
	RuleId interface{} `field:"optional" json:"ruleId" yaml:"ruleId"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	SilenceTime interface{} `field:"optional" json:"silenceTime" yaml:"silenceTime"`
	Webhook interface{} `field:"optional" json:"webhook" yaml:"webhook"`
}

