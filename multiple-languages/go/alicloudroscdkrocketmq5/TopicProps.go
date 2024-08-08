package alicloudroscdkrocketmq5


// Properties for defining a `Topic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-topic
type TopicProps struct {
	// Property instanceId: The ID of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property messageType: The message type of the topic to be created.
	//
	// Valid values:
	// NORMAL
	// FIFO
	// DELAY
	// TRANSACTION.
	MessageType interface{} `field:"required" json:"messageType" yaml:"messageType"`
	// Property topicName: The name of the topic to be created is used to identify the topic and is globally unique.
	//
	// Valid values:
	// Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
	// Length limit: 1-60 characters.
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	// Property remark: The remark of the topic to be created.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

