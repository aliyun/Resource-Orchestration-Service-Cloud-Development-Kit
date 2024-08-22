package alicloudroscdkdts


// Properties for defining a `RosConsumerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup
type RosConsumerGroupProps struct {
	ConsumerGroupName interface{} `field:"required" json:"consumerGroupName" yaml:"consumerGroupName"`
	ConsumerGroupPassword interface{} `field:"required" json:"consumerGroupPassword" yaml:"consumerGroupPassword"`
	ConsumerGroupUserName interface{} `field:"required" json:"consumerGroupUserName" yaml:"consumerGroupUserName"`
	SubscriptionInstanceId interface{} `field:"required" json:"subscriptionInstanceId" yaml:"subscriptionInstanceId"`
}

