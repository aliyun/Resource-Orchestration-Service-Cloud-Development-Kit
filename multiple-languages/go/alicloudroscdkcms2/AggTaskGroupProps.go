package alicloudroscdkcms2


// Properties for defining a `AggTaskGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-aggtaskgroup
type AggTaskGroupProps struct {
	// Property aggTaskGroupConfig: The config of the agg task group.
	//
	// Only "RecordingRuleYaml" format is supported, which must conform to the RecordingRule format of the open source Prometheus.
	AggTaskGroupConfig interface{} `field:"required" json:"aggTaskGroupConfig" yaml:"aggTaskGroupConfig"`
	// Property aggTaskGroupName: The name of the agg task group.
	AggTaskGroupName interface{} `field:"required" json:"aggTaskGroupName" yaml:"aggTaskGroupName"`
	// Property instanceId: The ID of the source Prometheus instance the agg task group reads data from.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property targetPrometheusId: The ID of the target Prometheus instance of the agg task group.
	TargetPrometheusId interface{} `field:"required" json:"targetPrometheusId" yaml:"targetPrometheusId"`
	// Property aggTaskGroupConfigType: The config type of the agg task group.
	//
	// Default: "RecordingRuleYaml".
	AggTaskGroupConfigType interface{} `field:"optional" json:"aggTaskGroupConfigType" yaml:"aggTaskGroupConfigType"`
	// Property cronExpr: The cron expression used when ScheduleMode is "Cron".
	//
	// For example, "0\/1 * * * *" means scheduling every 1 minute starting from minute 0.
	CronExpr interface{} `field:"optional" json:"cronExpr" yaml:"cronExpr"`
	// Property delay: The fixed delay of the schedule, in seconds.
	//
	// Default: 30.
	Delay interface{} `field:"optional" json:"delay" yaml:"delay"`
	// Property description: The description of the agg task group.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property fromTime: The second-level timestamp corresponding to the schedule start time.
	FromTime interface{} `field:"optional" json:"fromTime" yaml:"fromTime"`
	// Property maxRetries: The maximum number of retries for executing the agg task.
	//
	// Default: 20.
	MaxRetries interface{} `field:"optional" json:"maxRetries" yaml:"maxRetries"`
	// Property maxRunTimeInSeconds: The maximum retry time for executing the agg task, in seconds.
	//
	// Default: 600.
	MaxRunTimeInSeconds interface{} `field:"optional" json:"maxRunTimeInSeconds" yaml:"maxRunTimeInSeconds"`
	// Property overrideIfExists: Whether to override and update an existing agg task group with the same name when creating.
	//
	// Create-only, cannot be updated.
	OverrideIfExists interface{} `field:"optional" json:"overrideIfExists" yaml:"overrideIfExists"`
	// Property precheckString: The precheck config.
	//
	// Not configured by default.
	PrecheckString interface{} `field:"optional" json:"precheckString" yaml:"precheckString"`
	// Property scheduleMode: The schedule mode, "Cron" or "FixedRate".
	//
	// Default: "FixedRate".
	ScheduleMode interface{} `field:"optional" json:"scheduleMode" yaml:"scheduleMode"`
	// Property scheduleTimeExpr: The schedule time expression, "@s" or "@m" is recommended, indicating the rounding granularity of the schedule time window.
	//
	// Default: "@m".
	ScheduleTimeExpr interface{} `field:"optional" json:"scheduleTimeExpr" yaml:"scheduleTimeExpr"`
	// Property status: The status of the agg task group, "Running" or "Stopped".
	//
	// Default: Running.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property tags: The tags of the agg task group.
	Tags *[]*RosAggTaskGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property toTime: The second-level timestamp corresponding to the schedule end time.
	//
	// 0 means the schedule never stops.
	ToTime interface{} `field:"optional" json:"toTime" yaml:"toTime"`
}

