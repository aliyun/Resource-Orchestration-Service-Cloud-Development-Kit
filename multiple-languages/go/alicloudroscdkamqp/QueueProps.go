package alicloudroscdkamqp


// Properties for defining a `Queue`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-queue
type QueueProps struct {
	// Property instanceId: InstanceId.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property queueName: The name of the queue to create.
	//
	// - The queue name can contain only letters, digits, hyphens (-), underscores (_),
	// periods (.), number signs (#), forward slashes (\/), and at signs (@). The name
	// must be 1 to 255 characters in length.
	// - After a queue is created, its name cannot be changed. To change the name,
	// delete the queue and create a new one.
	QueueName interface{} `field:"required" json:"queueName" yaml:"queueName"`
	// Property virtualHost: The name of the vhost to which the queue belongs.
	//
	// The name can contain only letters, digits, hyphens (-), underscores (_), periods
	// (.), number signs (#), forward slashes (\/), and at signs (@). The name must be 1
	// to 255 characters in length.
	VirtualHost interface{} `field:"required" json:"virtualHost" yaml:"virtualHost"`
	// Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.
	//
	// Valid values:
	// true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
	// false: The Auto Delete attribute is not configured.
	AutoDeleteState interface{} `field:"optional" json:"autoDeleteState" yaml:"autoDeleteState"`
	// Property autoExpireState: The auto-expiration time for the queue.
	//
	// The queue is automatically deleted if it
	// is not accessed within the specified time period.
	// Unit: milliseconds.
	// > This feature must be enabled before you can use this parameter. To enable the
	// feature, .
	AutoExpireState interface{} `field:"optional" json:"autoExpireState" yaml:"autoExpireState"`
	// Property deadLetterExchange: The dead-letter exchange.
	//
	// A dead-letter exchange is used to receive rejected messages.
	// If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
	// Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
	DeadLetterExchange interface{} `field:"optional" json:"deadLetterExchange" yaml:"deadLetterExchange"`
	// Property deadLetterRoutingKey: The dead-letter routing key.
	//
	// The key can contain only letters, digits, hyphens (-), underscores (_), periods
	// (.), number signs (#), forward slashes (\/), and at signs (@). The key must be 1
	// to 255 characters in length.
	DeadLetterRoutingKey interface{} `field:"optional" json:"deadLetterRoutingKey" yaml:"deadLetterRoutingKey"`
	// Property exclusiveState: Specifies whether the queue is an exclusive queue.
	//
	// Valid values:
	// - true: The queue is an exclusive queue. An exclusive queue can be used only by
	// the connection that declares it. The queue is automatically deleted after the
	// connection is closed.
	// - false: The queue is not an exclusive queue.
	ExclusiveState interface{} `field:"optional" json:"exclusiveState" yaml:"exclusiveState"`
	// Property maximumPriority: The priority of the queue.
	//
	// The recommended value is an integer from 1 to 10.
	// > This parameter is used for message priority. It is supported only by dedicated
	// instances and can be used only after the message priority feature is enabled. To
	// enable the feature, .
	MaximumPriority interface{} `field:"optional" json:"maximumPriority" yaml:"maximumPriority"`
	// Property maxLength: This parameter is not supported in the current version.
	//
	// The maximum number of messages that can be stored in the queue. If this limit is
	// exceeded, the earliest messages in the queue are deleted.
	MaxLength interface{} `field:"optional" json:"maxLength" yaml:"maxLength"`
	// Property messageTtl: The message TTL of the queue If a message is retained in the Queue longer than the configured message lifetime, the message expires.
	//
	// The value of message lifetime must be a non-negative integer, up to 1 day.
	// The unit is milliseconds.
	MessageTtl interface{} `field:"optional" json:"messageTtl" yaml:"messageTtl"`
}

