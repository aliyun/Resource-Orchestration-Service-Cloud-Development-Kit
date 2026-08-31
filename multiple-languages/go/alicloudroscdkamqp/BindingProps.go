package alicloudroscdkamqp


// Properties for defining a `Binding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
type BindingProps struct {
	// Property argument: The key-value pairs for the message header attributes.
	//
	// The message header
	// attributes consist of one or more key-value pairs. The x-match attribute is
	// required. Other attributes are custom. The x-match attribute supports the
	// following values:
	// - all: This is the default value. All key-value pairs in the message header must
	// match.
	// - any: At least one key-value pair in the message header must match.
	// Separate attributes with semicolons (;) and separate keys from values with colons
	// (:). Example: x-match:all;type:report;format:pdf
	// This parameter is valid only for headers exchanges. For other types of exchanges,
	// this parameter is ignored.
	Argument interface{} `field:"required" json:"argument" yaml:"argument"`
	// Property bindingKey: The binding key.
	//
	// - If the source exchange is not a topic exchange:
	// - It can contain letters, digits, hyphens (-), underscores (_), periods (.),
	// forward slashes (\/), and at signs (@).
	// - The length must be 1 to 255 characters.
	// - If the source exchange is a topic exchange:
	// - It can contain letters, digits, hyphens (-), underscores (_), asterisks (\*),
	// periods (.), number signs (#), forward slashes (\/), and at signs (@).
	// - The key cannot start or end with a period (.). If the key starts with a number
	// sign (#) or an asterisk (\*), a period (.) must immediately follow. If the key
	// ends with a number sign (#) or an asterisk (\*), a period (.) must immediately
	// precede it. If a number sign (#) or an asterisk (\*) is in the middle of the key,
	// it must have a period (.) on both sides.
	// - The length must be 1 to 255 characters.
	BindingKey interface{} `field:"required" json:"bindingKey" yaml:"bindingKey"`
	// Property bindingType: The type of the destination object.
	//
	// Valid values:
	// - 0: Queue
	// - 1: Exchange.
	BindingType interface{} `field:"required" json:"bindingType" yaml:"bindingType"`
	// Property destinationName: The name of the binding destination.
	//
	// The destination must be created in the
	// console. It must belong to the same vhost as `SourceExchange`. The `VirtualHost`
	// parameter specifies the vhost.
	DestinationName interface{} `field:"required" json:"destinationName" yaml:"destinationName"`
	// Property instanceId: InstanceId.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property sourceExchange: The Source Exchange Name.
	SourceExchange interface{} `field:"required" json:"sourceExchange" yaml:"sourceExchange"`
	// Property virtualHost: The name of the virtual host.
	VirtualHost interface{} `field:"required" json:"virtualHost" yaml:"virtualHost"`
}

