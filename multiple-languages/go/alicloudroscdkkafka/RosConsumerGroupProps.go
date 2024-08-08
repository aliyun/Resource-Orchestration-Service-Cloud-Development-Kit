package alicloudroscdkkafka


// Properties for defining a `RosConsumerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-consumergroup
type RosConsumerGroupProps struct {
	ConsumerId interface{} `field:"required" json:"consumerId" yaml:"consumerId"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	Tags *[]*RosConsumerGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

