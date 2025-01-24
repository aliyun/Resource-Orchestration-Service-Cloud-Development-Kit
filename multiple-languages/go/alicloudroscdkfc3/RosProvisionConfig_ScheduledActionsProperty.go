package alicloudroscdkfc3


type RosProvisionConfig_ScheduledActionsProperty struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Target interface{} `field:"required" json:"target" yaml:"target"`
	EndTime interface{} `field:"optional" json:"endTime" yaml:"endTime"`
	ScheduleExpression interface{} `field:"optional" json:"scheduleExpression" yaml:"scheduleExpression"`
	StartTime interface{} `field:"optional" json:"startTime" yaml:"startTime"`
	TimeZone interface{} `field:"optional" json:"timeZone" yaml:"timeZone"`
}

