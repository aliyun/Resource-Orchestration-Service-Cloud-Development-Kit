package alicloudroscdkmns


// Properties for defining a `Topic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-topic
type TopicProps struct {
	// Property topicName: Topic name.
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	// Property loggingEnabled: Whether to enable log management.
	//
	// "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
	// The default value is false.
	LoggingEnabled interface{} `field:"optional" json:"loggingEnabled" yaml:"loggingEnabled"`
	// Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
	//
	// An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
	MaximumMessageSize interface{} `field:"optional" json:"maximumMessageSize" yaml:"maximumMessageSize"`
}

