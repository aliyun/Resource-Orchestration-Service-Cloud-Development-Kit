package alicloudroscdkrocketmq


// Properties for defining a `RosTopic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-topic
type RosTopicProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	MessageType interface{} `field:"required" json:"messageType" yaml:"messageType"`
	Topic interface{} `field:"required" json:"topic" yaml:"topic"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

