package alicloudroscdkrocketmq5


// Properties for defining a `RosConsumerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-consumergroup
type RosConsumerGroupProps struct {
	ConsumeRetryPolicy interface{} `field:"required" json:"consumeRetryPolicy" yaml:"consumeRetryPolicy"`
	ConsumerGroupId interface{} `field:"required" json:"consumerGroupId" yaml:"consumerGroupId"`
	DeliveryOrderType interface{} `field:"required" json:"deliveryOrderType" yaml:"deliveryOrderType"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

