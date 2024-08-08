package datasource


// Properties for defining a `RosSubscription`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscription
type RosSubscriptionProps struct {
	SubscriptionName interface{} `field:"required" json:"subscriptionName" yaml:"subscriptionName"`
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

