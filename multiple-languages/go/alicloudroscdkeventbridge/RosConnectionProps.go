package alicloudroscdkeventbridge


// Properties for defining a `RosConnection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
type RosConnectionProps struct {
	ConnectionName interface{} `field:"required" json:"connectionName" yaml:"connectionName"`
	NetworkParameters interface{} `field:"required" json:"networkParameters" yaml:"networkParameters"`
	AuthParameters interface{} `field:"optional" json:"authParameters" yaml:"authParameters"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

