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
	ExchangeName interface{} `field:"required" json:"exchangeName" yaml:"exchangeName"`
	// Property exchangeType: The type of the exchange.
	//
	// Valid values:
	// FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
	// DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
	// TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
	// HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
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
}

