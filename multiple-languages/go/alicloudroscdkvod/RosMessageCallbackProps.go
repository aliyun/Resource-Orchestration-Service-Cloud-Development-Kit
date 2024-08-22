package alicloudroscdkvod


// Properties for defining a `RosMessageCallback`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-messagecallback
type RosMessageCallbackProps struct {
	CallbackType interface{} `field:"required" json:"callbackType" yaml:"callbackType"`
	AppId interface{} `field:"optional" json:"appId" yaml:"appId"`
	AuthKey interface{} `field:"optional" json:"authKey" yaml:"authKey"`
	AuthSwitch interface{} `field:"optional" json:"authSwitch" yaml:"authSwitch"`
	CallbackUrl interface{} `field:"optional" json:"callbackUrl" yaml:"callbackUrl"`
	EventTypeList interface{} `field:"optional" json:"eventTypeList" yaml:"eventTypeList"`
	MnsEndpoint interface{} `field:"optional" json:"mnsEndpoint" yaml:"mnsEndpoint"`
	MnsQueueName interface{} `field:"optional" json:"mnsQueueName" yaml:"mnsQueueName"`
}

