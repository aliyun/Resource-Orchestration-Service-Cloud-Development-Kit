package alicloudroscdkamqp


// Properties for defining a `Queue`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-queue
type QueueProps struct {
	// Property instanceId: InstanceId.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property queueName: The name of the queue.
	QueueName interface{} `field:"required" json:"queueName" yaml:"queueName"`
	// Property virtualHost: The name of the virtual host.
	VirtualHost interface{} `field:"required" json:"virtualHost" yaml:"virtualHost"`
	// Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.
	//
	// Valid values:
	// true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
	// false: The Auto Delete attribute is not configured.
	AutoDeleteState interface{} `field:"optional" json:"autoDeleteState" yaml:"autoDeleteState"`
	// Property autoExpireState: The validity period after which the queue is automatically deleted.
	//
	// If the queue is not accessed within a specified period of time, it is automatically deleted.
	AutoExpireState interface{} `field:"optional" json:"autoExpireState" yaml:"autoExpireState"`
	// Property deadLetterExchange: The dead-letter exchange.
	//
	// A dead-letter exchange is used to receive rejected messages.
	// If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
	// Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
	DeadLetterExchange interface{} `field:"optional" json:"deadLetterExchange" yaml:"deadLetterExchange"`
	// Property deadLetterRoutingKey: The dead letter routing key.
	DeadLetterRoutingKey interface{} `field:"optional" json:"deadLetterRoutingKey" yaml:"deadLetterRoutingKey"`
	// Property exclusiveState: Specifies whether the queue is an exclusive queue.
	//
	// Valid values:
	// true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
	// false: The Auto Delete attribute is not configured.
	ExclusiveState interface{} `field:"optional" json:"exclusiveState" yaml:"exclusiveState"`
	// Property maximumPriority: The priority function is not supported.
	MaximumPriority interface{} `field:"optional" json:"maximumPriority" yaml:"maximumPriority"`
	// Property maxLength: The maximum number of messages that can be stored in the queue.
	//
	// If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
	MaxLength interface{} `field:"optional" json:"maxLength" yaml:"maxLength"`
	// Property messageTtl: The message TTL of the queue If a message is retained in the Queue longer than the configured message lifetime, the message expires.
	//
	// The value of message lifetime must be a non-negative integer, up to 1 day.
	// The unit is milliseconds.
	MessageTtl interface{} `field:"optional" json:"messageTtl" yaml:"messageTtl"`
}

