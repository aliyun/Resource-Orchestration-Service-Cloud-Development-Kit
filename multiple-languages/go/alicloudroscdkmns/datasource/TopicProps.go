package datasource


// Properties for defining a `Topic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topic
type TopicProps struct {
	// Property topicName: The name of the resource.
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

