package alicloudroscdkeventbridge


// Properties for defining a `Connection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
type ConnectionProps struct {
	// Property connectionName: The connection configuration name.
	//
	// The maximum length is 127 characters. Minimum length 2 characters.
	ConnectionName interface{} `field:"required" json:"connectionName" yaml:"connectionName"`
	// Property networkParameters: Network Configuration Data Structure.
	NetworkParameters interface{} `field:"required" json:"networkParameters" yaml:"networkParameters"`
	// Property authParameters: Authentication Data Structure.
	AuthParameters interface{} `field:"optional" json:"authParameters" yaml:"authParameters"`
	// Property description: The connection configuration description.
	//
	// The maximum length is 255 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

