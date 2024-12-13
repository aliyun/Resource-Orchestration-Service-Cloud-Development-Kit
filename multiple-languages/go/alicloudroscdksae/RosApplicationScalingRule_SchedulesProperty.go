package alicloudroscdksae


type RosApplicationScalingRule_SchedulesProperty struct {
	AtTime interface{} `field:"required" json:"atTime" yaml:"atTime"`
	TargetReplicas interface{} `field:"required" json:"targetReplicas" yaml:"targetReplicas"`
}

