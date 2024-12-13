package alicloudroscdksae


type RosApplicationScalingRule_ScalingRuleMetricProperty struct {
	MaxReplicas interface{} `field:"required" json:"maxReplicas" yaml:"maxReplicas"`
	Metrics interface{} `field:"required" json:"metrics" yaml:"metrics"`
	MinReplicas interface{} `field:"required" json:"minReplicas" yaml:"minReplicas"`
	ScaleDownRules interface{} `field:"optional" json:"scaleDownRules" yaml:"scaleDownRules"`
	ScaleUpRules interface{} `field:"optional" json:"scaleUpRules" yaml:"scaleUpRules"`
}

