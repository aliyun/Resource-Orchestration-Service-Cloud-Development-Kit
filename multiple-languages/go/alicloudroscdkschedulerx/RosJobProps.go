package alicloudroscdkschedulerx


// Properties for defining a `RosJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
type RosJobProps struct {
	ExecuteMode interface{} `field:"required" json:"executeMode" yaml:"executeMode"`
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	JobType interface{} `field:"required" json:"jobType" yaml:"jobType"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	TimeType interface{} `field:"required" json:"timeType" yaml:"timeType"`
	AttemptInterval interface{} `field:"optional" json:"attemptInterval" yaml:"attemptInterval"`
	Calendar interface{} `field:"optional" json:"calendar" yaml:"calendar"`
	ClassName interface{} `field:"optional" json:"className" yaml:"className"`
	ConsumerSize interface{} `field:"optional" json:"consumerSize" yaml:"consumerSize"`
	ContactInfo interface{} `field:"optional" json:"contactInfo" yaml:"contactInfo"`
	Content interface{} `field:"optional" json:"content" yaml:"content"`
	DataOffset interface{} `field:"optional" json:"dataOffset" yaml:"dataOffset"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DispatcherSize interface{} `field:"optional" json:"dispatcherSize" yaml:"dispatcherSize"`
	FailEnable interface{} `field:"optional" json:"failEnable" yaml:"failEnable"`
	FailTimes interface{} `field:"optional" json:"failTimes" yaml:"failTimes"`
	MaxAttempt interface{} `field:"optional" json:"maxAttempt" yaml:"maxAttempt"`
	MaxConcurrency interface{} `field:"optional" json:"maxConcurrency" yaml:"maxConcurrency"`
	MissWorkerEnable interface{} `field:"optional" json:"missWorkerEnable" yaml:"missWorkerEnable"`
	NamespaceSource interface{} `field:"optional" json:"namespaceSource" yaml:"namespaceSource"`
	PageSize interface{} `field:"optional" json:"pageSize" yaml:"pageSize"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	QueueSize interface{} `field:"optional" json:"queueSize" yaml:"queueSize"`
	SendChannel interface{} `field:"optional" json:"sendChannel" yaml:"sendChannel"`
	SuccessNoticeEnable interface{} `field:"optional" json:"successNoticeEnable" yaml:"successNoticeEnable"`
	TaskAttemptInterval interface{} `field:"optional" json:"taskAttemptInterval" yaml:"taskAttemptInterval"`
	TaskMaxAttempt interface{} `field:"optional" json:"taskMaxAttempt" yaml:"taskMaxAttempt"`
	TimeExpression interface{} `field:"optional" json:"timeExpression" yaml:"timeExpression"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	TimeoutEnable interface{} `field:"optional" json:"timeoutEnable" yaml:"timeoutEnable"`
	TimeoutKillEnable interface{} `field:"optional" json:"timeoutKillEnable" yaml:"timeoutKillEnable"`
	Timezone interface{} `field:"optional" json:"timezone" yaml:"timezone"`
	XAttrs interface{} `field:"optional" json:"xAttrs" yaml:"xAttrs"`
}

