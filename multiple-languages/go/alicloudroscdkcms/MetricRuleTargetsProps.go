package alicloudroscdkcms


// Properties for defining a `MetricRuleTargets`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletargets
type MetricRuleTargetsProps struct {
	// Property ruleId: The ID of the alert rule.
	RuleId interface{} `field:"required" json:"ruleId" yaml:"ruleId"`
	// Property targets: undefined.
	Targets interface{} `field:"required" json:"targets" yaml:"targets"`
}

