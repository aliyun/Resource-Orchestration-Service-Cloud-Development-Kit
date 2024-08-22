package alicloudroscdksls


type RosAlert_ScheduleProperty struct {
	Type interface{} `field:"required" json:"type" yaml:"type"`
	CronExpression interface{} `field:"optional" json:"cronExpression" yaml:"cronExpression"`
	DayOfWeek interface{} `field:"optional" json:"dayOfWeek" yaml:"dayOfWeek"`
	Delay interface{} `field:"optional" json:"delay" yaml:"delay"`
	Hour interface{} `field:"optional" json:"hour" yaml:"hour"`
	Interval interface{} `field:"optional" json:"interval" yaml:"interval"`
	RunImmediately interface{} `field:"optional" json:"runImmediately" yaml:"runImmediately"`
}

