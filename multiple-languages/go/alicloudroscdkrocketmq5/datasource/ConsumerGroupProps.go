package datasource


// Properties for defining a `ConsumerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroup
type ConsumerGroupProps struct {
	// Property consumerGroupId: The ID of the consumer group.
	ConsumerGroupId interface{} `field:"required" json:"consumerGroupId" yaml:"consumerGroupId"`
	// Property instanceId: The ID of the instance to which the consumer group belongs.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

