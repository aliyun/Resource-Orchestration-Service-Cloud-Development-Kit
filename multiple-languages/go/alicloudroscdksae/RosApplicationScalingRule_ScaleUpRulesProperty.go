package alicloudroscdksae


type RosApplicationScalingRule_ScaleUpRulesProperty struct {
	Step interface{} `field:"required" json:"step" yaml:"step"`
	Disabled interface{} `field:"optional" json:"disabled" yaml:"disabled"`
	StabilizationWindowSeconds interface{} `field:"optional" json:"stabilizationWindowSeconds" yaml:"stabilizationWindowSeconds"`
}

