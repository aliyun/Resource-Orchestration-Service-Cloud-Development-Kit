package alicloudroscdkmns


// Properties for defining a `RosQueue`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-queue
type RosQueueProps struct {
	QueueName interface{} `field:"required" json:"queueName" yaml:"queueName"`
	DelaySeconds interface{} `field:"optional" json:"delaySeconds" yaml:"delaySeconds"`
	LoggingEnabled interface{} `field:"optional" json:"loggingEnabled" yaml:"loggingEnabled"`
	MaximumMessageSize interface{} `field:"optional" json:"maximumMessageSize" yaml:"maximumMessageSize"`
	MessageRetentionPeriod interface{} `field:"optional" json:"messageRetentionPeriod" yaml:"messageRetentionPeriod"`
	PollingWaitSeconds interface{} `field:"optional" json:"pollingWaitSeconds" yaml:"pollingWaitSeconds"`
	VisibilityTimeout interface{} `field:"optional" json:"visibilityTimeout" yaml:"visibilityTimeout"`
}

