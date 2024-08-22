package datasource


// Properties for defining a `RosTopic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topic
type RosTopicProps struct {
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

