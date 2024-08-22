package alicloudroscdkdts


// Properties for defining a `ConsumerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup
type ConsumerGroupProps struct {
	// Property consumerGroupName: Consumer group name.
	ConsumerGroupName interface{} `field:"required" json:"consumerGroupName" yaml:"consumerGroupName"`
	// Property consumerGroupPassword: Password of consumer group.
	ConsumerGroupPassword interface{} `field:"required" json:"consumerGroupPassword" yaml:"consumerGroupPassword"`
	// Property consumerGroupUserName: User name of consumer group.
	ConsumerGroupUserName interface{} `field:"required" json:"consumerGroupUserName" yaml:"consumerGroupUserName"`
	// Property subscriptionInstanceId: Subscription instance ID.
	SubscriptionInstanceId interface{} `field:"required" json:"subscriptionInstanceId" yaml:"subscriptionInstanceId"`
}

