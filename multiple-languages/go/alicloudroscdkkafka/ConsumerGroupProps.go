package alicloudroscdkkafka


// Properties for defining a `ConsumerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-consumergroup
type ConsumerGroupProps struct {
	// Property consumerId: Group name.
	//
	// Value:
	// Can only contain letters, numbers, dashes (-), underscores (_), and at least one English or number.
	// The length is limited to 3 to 128 characters, and more than 128 characters will be automatically intercepted.
	// Once the group name is created, it cannot be modified.
	ConsumerId interface{} `field:"required" json:"consumerId" yaml:"consumerId"`
	// Property instanceId: Kafka instance id.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property remark: Remark description.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosConsumerGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

