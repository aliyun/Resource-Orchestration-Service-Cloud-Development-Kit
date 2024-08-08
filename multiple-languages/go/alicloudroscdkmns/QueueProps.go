package alicloudroscdkmns


// Properties for defining a `Queue`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-queue
type QueueProps struct {
	// Property queueName: Queue name.
	QueueName interface{} `field:"required" json:"queueName" yaml:"queueName"`
	// Property delaySeconds: It is measured in seconds.
	//
	// All messages sent to the queue can be consumed until the DelaySeconds expires.
	// An integer between 0 and 604800 (7 days). The default value is 0
	DelaySeconds interface{} `field:"optional" json:"delaySeconds" yaml:"delaySeconds"`
	// Property loggingEnabled: Whether to enable log management.
	//
	// "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
	// The default value is false.
	LoggingEnabled interface{} `field:"optional" json:"loggingEnabled" yaml:"loggingEnabled"`
	// Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
	//
	// An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
	MaximumMessageSize interface{} `field:"optional" json:"maximumMessageSize" yaml:"maximumMessageSize"`
	// Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds.
	//
	// After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
	// An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
	MessageRetentionPeriod interface{} `field:"optional" json:"messageRetentionPeriod" yaml:"messageRetentionPeriod"`
	// Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue.
	//
	// Measured in seconds.
	// An integer between 0 and 30 seconds. The default value is 0 (seconds)
	PollingWaitSeconds interface{} `field:"optional" json:"pollingWaitSeconds" yaml:"pollingWaitSeconds"`
	// Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue.
	//
	// Measured in seconds.
	// An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
	VisibilityTimeout interface{} `field:"optional" json:"visibilityTimeout" yaml:"visibilityTimeout"`
}

