package alicloudroscdksae


type RosApplicationScalingRule_ScalingRuleTimerProperty struct {
	Period interface{} `field:"required" json:"period" yaml:"period"`
	Schedules interface{} `field:"required" json:"schedules" yaml:"schedules"`
	BeginDate interface{} `field:"optional" json:"beginDate" yaml:"beginDate"`
	EndDate interface{} `field:"optional" json:"endDate" yaml:"endDate"`
}

