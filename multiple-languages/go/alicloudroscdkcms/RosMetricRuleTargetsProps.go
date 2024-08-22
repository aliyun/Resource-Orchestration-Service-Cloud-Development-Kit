package alicloudroscdkcms


// Properties for defining a `RosMetricRuleTargets`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletargets
type RosMetricRuleTargetsProps struct {
	RuleId interface{} `field:"required" json:"ruleId" yaml:"ruleId"`
	Targets interface{} `field:"required" json:"targets" yaml:"targets"`
}

