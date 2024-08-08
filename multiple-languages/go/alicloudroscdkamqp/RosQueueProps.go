package alicloudroscdkamqp


// Properties for defining a `RosQueue`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-queue
type RosQueueProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	QueueName interface{} `field:"required" json:"queueName" yaml:"queueName"`
	VirtualHost interface{} `field:"required" json:"virtualHost" yaml:"virtualHost"`
	AutoDeleteState interface{} `field:"optional" json:"autoDeleteState" yaml:"autoDeleteState"`
	AutoExpireState interface{} `field:"optional" json:"autoExpireState" yaml:"autoExpireState"`
	DeadLetterExchange interface{} `field:"optional" json:"deadLetterExchange" yaml:"deadLetterExchange"`
	DeadLetterRoutingKey interface{} `field:"optional" json:"deadLetterRoutingKey" yaml:"deadLetterRoutingKey"`
	ExclusiveState interface{} `field:"optional" json:"exclusiveState" yaml:"exclusiveState"`
	MaximumPriority interface{} `field:"optional" json:"maximumPriority" yaml:"maximumPriority"`
	MaxLength interface{} `field:"optional" json:"maxLength" yaml:"maxLength"`
	MessageTtl interface{} `field:"optional" json:"messageTtl" yaml:"messageTtl"`
}

