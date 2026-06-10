package alicloudroscdkeventbridge


// Properties for defining a `RosApiDestination`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination
type RosApiDestinationProps struct {
	ApiDestinationName interface{} `field:"required" json:"apiDestinationName" yaml:"apiDestinationName"`
	ConnectionName interface{} `field:"required" json:"connectionName" yaml:"connectionName"`
	HttpApiParameters interface{} `field:"required" json:"httpApiParameters" yaml:"httpApiParameters"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

