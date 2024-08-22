package alicloudroscdkamqp


// Properties for defining a `Binding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
type BindingProps struct {
	// Property argument: X-match Attributes.
	//
	// Valid Values:
	// "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
	// "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
	Argument interface{} `field:"required" json:"argument" yaml:"argument"`
	// Property bindingKey: The Binding Key.
	BindingKey interface{} `field:"required" json:"bindingKey" yaml:"bindingKey"`
	// Property bindingType: The Target Binding Types.
	//
	// Valid values: EXCHANGE, QUEUE.
	BindingType interface{} `field:"required" json:"bindingType" yaml:"bindingType"`
	// Property destinationName: The Target Queue Or Exchange of the Name.
	DestinationName interface{} `field:"required" json:"destinationName" yaml:"destinationName"`
	// Property instanceId: InstanceId.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property sourceExchange: The Source Exchange Name.
	SourceExchange interface{} `field:"required" json:"sourceExchange" yaml:"sourceExchange"`
	// Property virtualHost: The name of the virtual host.
	VirtualHost interface{} `field:"required" json:"virtualHost" yaml:"virtualHost"`
}

