package alicloudroscdkvod


// Properties for defining a `MessageCallback`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-messagecallback
type MessageCallbackProps struct {
	// Property callbackType: Callback method.
	CallbackType interface{} `field:"required" json:"callbackType" yaml:"callbackType"`
	// Property appId: App ID.
	//
	// If it is not passed, it is the ID of the default
	// application of the system, with a fixed value: app-1000000.
	AppId interface{} `field:"optional" json:"appId" yaml:"appId"`
	// Property authKey: Authentication Key, up to 32 characters, must contain both uppercase  and lowercase letters and numbers.
	//
	// This parameter can be set when the callback method is HTTP.
	AuthKey interface{} `field:"optional" json:"authKey" yaml:"authKey"`
	// Property authSwitch: The authentication switch of the HTTP callback,  this parameter is valid when the callback method is set to HTTP.
	AuthSwitch interface{} `field:"optional" json:"authSwitch" yaml:"authSwitch"`
	// Property callbackUrl: Callback address.
	//
	// When the callback method is HTTP,
	// this parameter needs to be set. The length of the callback address
	// URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
	CallbackUrl interface{} `field:"optional" json:"callbackUrl" yaml:"callbackUrl"`
	// Property eventTypeList: Callback event type.
	//
	// When the value is empty, all message notifications are turned off,
	// and when the value is ALL, all message notifications are turned on.
	// You can also specify to enable certain message notifications,
	// and use a comma (,) to separate multiple event types.
	EventTypeList interface{} `field:"optional" json:"eventTypeList" yaml:"eventTypeList"`
	// Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the  message queue public network endpoint.
	//
	// You can log in to the message service
	// console and click the Get Endpoint button in the upper right corner to get it.
	MnsEndpoint interface{} `field:"optional" json:"mnsEndpoint" yaml:"mnsEndpoint"`
	// Property mnsQueueName: The name of the message queue, which can be viewed in the queue  list by logging in to the message service console.
	//
	// When the callback method is MNS, this parameter needs to be set.
	MnsQueueName interface{} `field:"optional" json:"mnsQueueName" yaml:"mnsQueueName"`
}

