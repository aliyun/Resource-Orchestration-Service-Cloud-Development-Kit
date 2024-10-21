package datasource


// Properties for defining a `RosConsumerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroup
type RosConsumerGroupProps struct {
	ConsumerGroupId interface{} `field:"required" json:"consumerGroupId" yaml:"consumerGroupId"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

