package datasource


// Properties for defining a `RosSubscriptions`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscriptions
type RosSubscriptionsProps struct {
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	SubscriptionName interface{} `field:"optional" json:"subscriptionName" yaml:"subscriptionName"`
}

