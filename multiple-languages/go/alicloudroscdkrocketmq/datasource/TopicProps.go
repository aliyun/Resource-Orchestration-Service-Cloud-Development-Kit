package datasource


// Properties for defining a `Topic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-topic
type TopicProps struct {
	// Property instanceId: The ID of the instance to which the topic belongs.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property topicName: The name of the topic.
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

