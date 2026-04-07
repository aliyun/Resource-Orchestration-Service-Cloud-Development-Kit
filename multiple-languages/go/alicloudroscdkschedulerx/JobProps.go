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
	// Property attemptInterval: The attempt interval of the job.
	AttemptInterval interface{} `field:"optional" json:"attemptInterval" yaml:"attemptInterval"`
	// Property calendar: The calendar of the job.
	Calendar interface{} `field:"optional" json:"calendar" yaml:"calendar"`
	// Property className: The class name of the job.
	ClassName interface{} `field:"optional" json:"className" yaml:"className"`
	// Property consumerSize: The consumer size of the job.
	ConsumerSize interface{} `field:"optional" json:"consumerSize" yaml:"consumerSize"`
	// Property contactInfo: The contact info of the job.
	ContactInfo interface{} `field:"optional" json:"contactInfo" yaml:"contactInfo"`
	// Property content: The content of the job.
	Content interface{} `field:"optional" json:"content" yaml:"content"`
	// Property dataOffset: The data offset of the job.
	DataOffset interface{} `field:"optional" json:"dataOffset" yaml:"dataOffset"`
	// Property description: The description of the job.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property dispatcherSize: The dispatcher size of the job.
	DispatcherSize interface{} `field:"optional" json:"dispatcherSize" yaml:"dispatcherSize"`
	// Property failEnable: Whether fail is enabled for the job.
	FailEnable interface{} `field:"optional" json:"failEnable" yaml:"failEnable"`
	// Property failTimes: The fail times of the job.
	FailTimes interface{} `field:"optional" json:"failTimes" yaml:"failTimes"`
	// Property maxAttempt: The max attempt of the job.
	MaxAttempt interface{} `field:"optional" json:"maxAttempt" yaml:"maxAttempt"`
	// Property maxConcurrency: The max concurrency of the job.
	MaxConcurrency interface{} `field:"optional" json:"maxConcurrency" yaml:"maxConcurrency"`
	// Property missWorkerEnable: Whether miss worker is enabled for the job.
	MissWorkerEnable interface{} `field:"optional" json:"missWorkerEnable" yaml:"missWorkerEnable"`
	// Property namespaceSource: The namespace source of the job.
	NamespaceSource interface{} `field:"optional" json:"namespaceSource" yaml:"namespaceSource"`
	// Property pageSize: Advanced configuration for parallel grid tasks, the default number of sub-tasks pulled at a time is 100.
	PageSize interface{} `field:"optional" json:"pageSize" yaml:"pageSize"`
	// Property parameters: The parameters of the job.
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	// Property priority: The priority of the job.
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	// Property queueSize: The queue size of the job.
	QueueSize interface{} `field:"optional" json:"queueSize" yaml:"queueSize"`
	// Property sendChannel: The send channel of the job.
	SendChannel interface{} `field:"optional" json:"sendChannel" yaml:"sendChannel"`
	// Property successNoticeEnable: Whether success notice is enabled for the job.
	SuccessNoticeEnable interface{} `field:"optional" json:"successNoticeEnable" yaml:"successNoticeEnable"`
	// Property taskAttemptInterval: The task attempt interval of the job.
	TaskAttemptInterval interface{} `field:"optional" json:"taskAttemptInterval" yaml:"taskAttemptInterval"`
	// Property taskMaxAttempt: The task max attempt of the job.
	TaskMaxAttempt interface{} `field:"optional" json:"taskMaxAttempt" yaml:"taskMaxAttempt"`
	// Property timeExpression: The time expression of the job.
	TimeExpression interface{} `field:"optional" json:"timeExpression" yaml:"timeExpression"`
	// Property timeout: The timeout of the job.
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	// Property timeoutEnable: Whether timeout is enabled for the job.
	TimeoutEnable interface{} `field:"optional" json:"timeoutEnable" yaml:"timeoutEnable"`
	// Property timeoutKillEnable: Whether timeout kill is enabled for the job.
	TimeoutKillEnable interface{} `field:"optional" json:"timeoutKillEnable" yaml:"timeoutKillEnable"`
	// Property timezone: The timezone of the job.
	Timezone interface{} `field:"optional" json:"timezone" yaml:"timezone"`
	// Property xAttrs: The extended attributes of the job.
	XAttrs interface{} `field:"optional" json:"xAttrs" yaml:"xAttrs"`
}

