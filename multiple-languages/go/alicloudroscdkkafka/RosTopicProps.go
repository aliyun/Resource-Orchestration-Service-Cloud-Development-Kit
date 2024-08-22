package alicloudroscdkkafka


// Properties for defining a `RosTopic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-topic
type RosTopicProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Remark interface{} `field:"required" json:"remark" yaml:"remark"`
	Topic interface{} `field:"required" json:"topic" yaml:"topic"`
	CompactTopic interface{} `field:"optional" json:"compactTopic" yaml:"compactTopic"`
	Config interface{} `field:"optional" json:"config" yaml:"config"`
	LocalTopic interface{} `field:"optional" json:"localTopic" yaml:"localTopic"`
	MinInsyncReplicas interface{} `field:"optional" json:"minInsyncReplicas" yaml:"minInsyncReplicas"`
	PartitionNum interface{} `field:"optional" json:"partitionNum" yaml:"partitionNum"`
	ReplicationFactor interface{} `field:"optional" json:"replicationFactor" yaml:"replicationFactor"`
	Tags *[]*RosTopic_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

