package alicloudroscdkrocketmq5


// Properties for defining a `RosTopic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-topic
type RosTopicProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	MessageType interface{} `field:"required" json:"messageType" yaml:"messageType"`
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

