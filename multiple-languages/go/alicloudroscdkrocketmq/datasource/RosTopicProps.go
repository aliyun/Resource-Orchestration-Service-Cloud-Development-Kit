package datasource


// Properties for defining a `RosTopic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-topic
type RosTopicProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

