package alicloudroscdkamqp


// Properties for defining a `RosExchange`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-exchange
type RosExchangeProps struct {
	AutoDeleteState interface{} `field:"required" json:"autoDeleteState" yaml:"autoDeleteState"`
	ExchangeName interface{} `field:"required" json:"exchangeName" yaml:"exchangeName"`
	ExchangeType interface{} `field:"required" json:"exchangeType" yaml:"exchangeType"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Internal interface{} `field:"required" json:"internal" yaml:"internal"`
	VirtualHost interface{} `field:"required" json:"virtualHost" yaml:"virtualHost"`
	AlternateExchange interface{} `field:"optional" json:"alternateExchange" yaml:"alternateExchange"`
}

