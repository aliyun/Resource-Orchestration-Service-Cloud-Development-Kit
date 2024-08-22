package datasource


// Properties for defining a `RosTopics`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-topics
type RosTopicsProps struct {
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	TopicName interface{} `field:"optional" json:"topicName" yaml:"topicName"`
}

