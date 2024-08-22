package datasource


// Properties for defining a `Topics`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-topics
type TopicsProps struct {
	// Property instanceId: InstanceId.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property topicName: TopicName.
	TopicName interface{} `field:"optional" json:"topicName" yaml:"topicName"`
}

