package alicloudroscdkcms


type RosMetricRuleTemplate_AlertTemplatesProperty struct {
	Category interface{} `field:"required" json:"category" yaml:"category"`
	MetricName interface{} `field:"required" json:"metricName" yaml:"metricName"`
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	Escalations interface{} `field:"optional" json:"escalations" yaml:"escalations"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	Selector interface{} `field:"optional" json:"selector" yaml:"selector"`
	Webhook interface{} `field:"optional" json:"webhook" yaml:"webhook"`
}

