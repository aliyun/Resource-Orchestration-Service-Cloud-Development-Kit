package alicloudroscdkmns


// Properties for defining a `RosSubscription`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-subscription
type RosSubscriptionProps struct {
	Endpoint interface{} `field:"required" json:"endpoint" yaml:"endpoint"`
	SubscriptionName interface{} `field:"required" json:"subscriptionName" yaml:"subscriptionName"`
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	DlqPolicy interface{} `field:"optional" json:"dlqPolicy" yaml:"dlqPolicy"`
	FilterTag interface{} `field:"optional" json:"filterTag" yaml:"filterTag"`
	NotifyContentFormat interface{} `field:"optional" json:"notifyContentFormat" yaml:"notifyContentFormat"`
	NotifyStrategy interface{} `field:"optional" json:"notifyStrategy" yaml:"notifyStrategy"`
	PushType interface{} `field:"optional" json:"pushType" yaml:"pushType"`
}

