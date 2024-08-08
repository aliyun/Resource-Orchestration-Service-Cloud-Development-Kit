package datasource


// Properties for defining a `RosTopics`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topics
type RosTopicsProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	TopicName interface{} `field:"optional" json:"topicName" yaml:"topicName"`
}

