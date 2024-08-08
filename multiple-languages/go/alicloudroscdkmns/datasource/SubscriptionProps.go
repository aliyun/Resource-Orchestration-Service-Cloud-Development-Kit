package datasource


// Properties for defining a `Subscription`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscription
type SubscriptionProps struct {
	// Property subscriptionName: The name of the subscription.
	SubscriptionName interface{} `field:"required" json:"subscriptionName" yaml:"subscriptionName"`
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

