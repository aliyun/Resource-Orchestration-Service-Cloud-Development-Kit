package datasource


// Properties for defining a `Subscriptions`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscriptions
type SubscriptionsProps struct {
	// Property topicName: Topic name.
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property subscriptionName: Subscription name.
	SubscriptionName interface{} `field:"optional" json:"subscriptionName" yaml:"subscriptionName"`
}

