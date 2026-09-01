package alicloudroscdkschedulerx


// Properties for defining a `Job`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
type JobProps struct {
	// Property executeMode: The execute mode of the job.
	ExecuteMode interface{} `field:"required" json:"executeMode" yaml:"executeMode"`
	// Property groupId: The group ID of the job.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property jobType: The type of the job.
	JobType interface{} `field:"required" json:"jobType" yaml:"jobType"`
	// Property name: The name of the job.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property namespace: The namespace of the job.
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	// Property timeType: The time type of the job.
	//
	// cron：1
	// fixed_rate：3
	// second_delay：4
	// one_time ：5
	// api：100
	// none：-1.
	TimeType interface{} `field:"required" json:"timeType" yaml:"timeType"`
	// Property attemptInterval: The retry interval for a failed job, in seconds.
	//
	// Defaults to 30.
	AttemptInterval interface{} `field:"optional" json:"attemptInterval" yaml:"attemptInterval"`
	// Property calendar: For a `cron` job, you can specify a custom calendar.
	Calendar interface{} `field:"optional" json:"calendar" yaml:"calendar"`
	// Property className: The fully qualified class name of the job interface.
	//
	// Required for `java` jobs.
	ClassName interface{} `field:"optional" json:"className" yaml:"className"`
	// Property consumerSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of consumer threads per machine for processing subtasks.
	//
	// Defaults to 5.
	ConsumerSize interface{} `field:"optional" json:"consumerSize" yaml:"consumerSize"`
	// Property contactInfo: The contact information for the job.
	//
	// ><notice>
	// This parameter is deprecated.
	// ><\/notice>.
	ContactInfo interface{} `field:"optional" json:"contactInfo" yaml:"contactInfo"`
	// Property content: - For a `python`, `shell`, or `k8s` job, this parameter specifies the script content.
	//
	// - For a `go` job, the content must be in the following format:
	// {"jobName":"HelloWorld"}.
	Content interface{} `field:"optional" json:"content" yaml:"content"`
	// Property dataOffset: The time offset in seconds for a `cron` job.
	DataOffset interface{} `field:"optional" json:"dataOffset" yaml:"dataOffset"`
	// Property description: The description of the job.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property dispatcherSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of threads for dispatching subtasks.
	//
	// Defaults to 5.
	DispatcherSize interface{} `field:"optional" json:"dispatcherSize" yaml:"dispatcherSize"`
	// Property failEnable: Specifies whether to enable alerts for failed jobs.
	//
	// Valid values:
	// - true: Enables failure alerts.
	// - false: Disables failure alerts.
	FailEnable interface{} `field:"optional" json:"failEnable" yaml:"failEnable"`
	// Property failTimes: The number of consecutive failures that triggers an alert.
	FailTimes interface{} `field:"optional" json:"failTimes" yaml:"failTimes"`
	// Property maxAttempt: The maximum number of retries for a failed job.
	//
	// Defaults to 0.
	MaxAttempt interface{} `field:"optional" json:"maxAttempt" yaml:"maxAttempt"`
	// Property maxConcurrency: The maximum number of concurrent job instances.
	//
	// Defaults to 1. If an existing job
	// instance is still running, a new one will not be triggered, even if its scheduled
	// time has passed.
	MaxConcurrency interface{} `field:"optional" json:"maxConcurrency" yaml:"maxConcurrency"`
	// Property missWorkerEnable: Specifies whether to send an alert when no worker is available to run the job.
	//
	// - true: Enables the alert.
	// - false: Disables the alert.
	MissWorkerEnable interface{} `field:"optional" json:"missWorkerEnable" yaml:"missWorkerEnable"`
	// Property namespaceSource: This parameter is required only for specific third-party integrations.
	NamespaceSource interface{} `field:"optional" json:"namespaceSource" yaml:"namespaceSource"`
	// Property pageSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the number of subtasks retrieved per pull.
	//
	// Defaults to 100.
	PageSize interface{} `field:"optional" json:"pageSize" yaml:"pageSize"`
	// Property parameters: The parameters of the job.
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	// Property priority: The job priority.
	//
	// Valid values:
	// - 1: Low
	// - 5: Medium
	// - 10: High
	// - 15: Very High.
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	// Property queueSize: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of subtasks the queue can hold.
	//
	// Defaults to 10000.
	QueueSize interface{} `field:"optional" json:"queueSize" yaml:"queueSize"`
	// Property sendChannel: The channel for sending alerts.
	//
	// - For the default channel of the application group, use `default`.
	// - For a specific channel for the job, use `sms`, `mail`, `phone`, or `webhook`.
	SendChannel interface{} `field:"optional" json:"sendChannel" yaml:"sendChannel"`
	// Property successNoticeEnable: Whether success notice is enabled for the job.
	SuccessNoticeEnable interface{} `field:"optional" json:"successNoticeEnable" yaml:"successNoticeEnable"`
	// Property taskAttemptInterval: \[Advanced] For `parallel` and `grid` jobs, this specifies the retry interval in seconds for a failed subtask.
	//
	// Defaults to 0.
	TaskAttemptInterval interface{} `field:"optional" json:"taskAttemptInterval" yaml:"taskAttemptInterval"`
	// Property taskMaxAttempt: \[Advanced] For `parallel` and `grid` jobs, this specifies the maximum number of retries for a failed subtask.
	//
	// Defaults to 0.
	TaskMaxAttempt interface{} `field:"optional" json:"taskMaxAttempt" yaml:"taskMaxAttempt"`
	// Property timeExpression: The time expression, which depends on the value of `TimeType`.
	//
	// - cron: A standard cron expression.
	// - api: No time expression is required.
	// - fixed_rate: A fixed interval in seconds. For example, a value of 30 triggers
	// the job every 30 seconds.
	// - second_delay: A fixed delay in seconds before the job is executed. Valid
	// values: 1 to 60.
	// - one_time: A specific time in `yyyy-MM-dd HH:mm:ss` format or a Unix timestamp
	// in milliseconds. Example: "2022-10-10 10:10:00".
	TimeExpression interface{} `field:"optional" json:"timeExpression" yaml:"timeExpression"`
	// Property timeout: The timeout threshold in seconds.
	//
	// Defaults to 7200.
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	// Property timeoutEnable: Specifies whether to enable timeout alerts.
	//
	// Valid values:
	// - true: Enables timeout alerts.
	// - false: Disables timeout alerts.
	TimeoutEnable interface{} `field:"optional" json:"timeoutEnable" yaml:"timeoutEnable"`
	// Property timeoutKillEnable: Specifies whether to terminate the job upon timeout.
	//
	// Valid values:
	// - true: Terminates the job if it times out.
	// - false: The job is not terminated if it times out.
	TimeoutKillEnable interface{} `field:"optional" json:"timeoutKillEnable" yaml:"timeoutKillEnable"`
	// Property timezone: The timezone of the job.
	Timezone interface{} `field:"optional" json:"timezone" yaml:"timezone"`
	// Property xAttrs: This parameter is required for `k8s` jobs.<br>For job tasks: {"resource":"job"}<br>For shell tasks: {"image":"busybox","resource":"shell"}<br><br>.
	XAttrs interface{} `field:"optional" json:"xAttrs" yaml:"xAttrs"`
}

