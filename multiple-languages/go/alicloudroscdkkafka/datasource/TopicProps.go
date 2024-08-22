package datasource


// Properties for defining a `Topic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topic
type TopicProps struct {
	// Property instanceId: Resource id.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property topic: Topic Name.
	Topic interface{} `field:"required" json:"topic" yaml:"topic"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

