package alicloudroscdkrocketmq


// Properties for defining a `Topic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-topic
type TopicProps struct {
	// Property instanceId: The ID of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property messageType: The type of the message.
	//
	// Valid values:
	// 0: normal message
	// 1: partitionally ordered message
	// 2: globally ordered message
	// 4: transactional message
	// 5: scheduled\/delayed message.
	MessageType interface{} `field:"required" json:"messageType" yaml:"messageType"`
	// Property topic: The name of the topic you want to create.
	//
	// Note:
	// "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
	// If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
	// If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
	Topic interface{} `field:"required" json:"topic" yaml:"topic"`
	// Property remark: The remarks on the request.
	//
	// This parameter can be left blank.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

