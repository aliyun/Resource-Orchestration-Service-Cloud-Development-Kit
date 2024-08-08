package alicloudroscdkrocketmq5


// Properties for defining a `ConsumerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-consumergroup
type ConsumerGroupProps struct {
	// Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created.
	ConsumeRetryPolicy interface{} `field:"required" json:"consumeRetryPolicy" yaml:"consumeRetryPolicy"`
	// Property consumerGroupId: The ID of the consumer group to be created.
	//
	// Used to identify consumer groups, globally unique.
	// The value description is as follows:
	// Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
	// Length limit: 1-60 characters.
	ConsumerGroupId interface{} `field:"required" json:"consumerGroupId" yaml:"consumerGroupId"`
	// Property deliveryOrderType: Delivery sequence of the consumer group to be created.
	DeliveryOrderType interface{} `field:"required" json:"deliveryOrderType" yaml:"deliveryOrderType"`
	// Property instanceId: The ID of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property remark: The remark of the consumer group to be created.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

