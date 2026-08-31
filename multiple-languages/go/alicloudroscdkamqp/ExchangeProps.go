package alicloudroscdkamqp


// Properties for defining a `Exchange`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-exchange
type ExchangeProps struct {
	// Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.
	//
	// Valid values:
	// true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
	// false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
	AutoDeleteState interface{} `field:"required" json:"autoDeleteState" yaml:"autoDeleteState"`
	// Property exchangeName: The name of the exchange.
	//
	// Note:
	// - The name can contain only letters, digits, hyphens (-), underscores (_),
	// periods (.), number signs (#), forward slashes (\/), and at signs (@). The name
	// must be 1 to 255 characters in length.
	// - The name of an exchange cannot be changed after the exchange is created. To
	// change the name, delete the exchange and create a new one.
	ExchangeName interface{} `field:"required" json:"exchangeName" yaml:"exchangeName"`
	// Property exchangeType: The type of the exchange.
	//
	// Valid values:
	// - DIRECT: This routing rule type routes messages to a queue whose binding key
	// exactly matches the routing key of the message.
	// - TOPIC: This type is similar to the DIRECT type. It routes messages to bound
	// queues using routing key pattern matching and string comparison.
	// - FANOUT: This routing rule type is simple. It routes all messages sent to the
	// exchange to all queues that are bound to the exchange. This works like a
	// broadcast feature.
	// - HEADERS: This type is similar to the DIRECT type. It uses header properties
	// instead of a routing key for routing. When a queue is bound to a headers
	// exchange, key-value pairs are defined for the binding. When a message is sent to
	// the exchange, key-value pairs are defined in the message header. The exchange
	// routes the message by comparing the key-value pairs in the header with the
	// key-value pairs of the binding.
	ExchangeType interface{} `field:"required" json:"exchangeType" yaml:"exchangeType"`
	// Property instanceId: InstanceId.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property internal: Specifies whether an exchange is an internal exchange.
	//
	// Valid values:
	// false: The exchange is not an internal exchange.
	// true: The exchange is an internal exchange.
	Internal interface{} `field:"required" json:"internal" yaml:"internal"`
	// Property virtualHost: The name of the virtual host.
	VirtualHost interface{} `field:"required" json:"virtualHost" yaml:"virtualHost"`
	// Property alternateExchange: The alternate exchange.
	//
	// An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
	AlternateExchange interface{} `field:"optional" json:"alternateExchange" yaml:"alternateExchange"`
	// Property xDelayedType: Exchanges of the x-delay-Message type allow you to customize the Header property of the message, and the x-delay specifies the amount of time in milliseconds for the message to be delivered.
	//
	// The routing rules for this class of exchanges depend on the Exchange type specified in the x-delay-type parameter, which specifies the actual Exchange type to which the delayed message will eventually be delivered. Valid values:
	// - DIRECT: Delivers deferred messages to a specified queue bound to an Exchange of type DIRECT.
	// - TOPIC: Delivers deferred messages to the queue bound to the Exchange type TOPIC.
	//   - FANOUT: Delivers deferred messages to a queue bound to an Exchange of type FANOUT.
	// - HEADERS: Deferred messages are delivered to the queue bound to the Exchange HEADERS type.
	//   - X-JMS-TOPIC: Delivers deferred messages to the queue bound to X-JMS-TOPIC.
	XDelayedType interface{} `field:"optional" json:"xDelayedType" yaml:"xDelayedType"`
}

