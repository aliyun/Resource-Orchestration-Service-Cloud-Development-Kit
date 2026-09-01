package alicloudroscdkkafka


// Properties for defining a `ConsumerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-consumergroup
type ConsumerGroupProps struct {
	// Property consumerId: Group name.
	//
	// - Reserved instance: Supports uppercase and lowercase letters, numbers,
	// underscores (_), hyphens (-), and periods (.), limited to 3-64 characters.
	// - Serverless instance: Can only contain letters, numbers, and special characters
	// "@._\*$#^!&-", limited to 1-249 characters.
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

