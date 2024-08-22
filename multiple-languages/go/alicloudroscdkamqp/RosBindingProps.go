package alicloudroscdkamqp


// Properties for defining a `RosBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
type RosBindingProps struct {
	Argument interface{} `field:"required" json:"argument" yaml:"argument"`
	BindingKey interface{} `field:"required" json:"bindingKey" yaml:"bindingKey"`
	BindingType interface{} `field:"required" json:"bindingType" yaml:"bindingType"`
	DestinationName interface{} `field:"required" json:"destinationName" yaml:"destinationName"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	SourceExchange interface{} `field:"required" json:"sourceExchange" yaml:"sourceExchange"`
	VirtualHost interface{} `field:"required" json:"virtualHost" yaml:"virtualHost"`
}

