package alicloudroscdkmns


// Properties for defining a `RosTopic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-topic
type RosTopicProps struct {
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	LoggingEnabled interface{} `field:"optional" json:"loggingEnabled" yaml:"loggingEnabled"`
	MaximumMessageSize interface{} `field:"optional" json:"maximumMessageSize" yaml:"maximumMessageSize"`
}

