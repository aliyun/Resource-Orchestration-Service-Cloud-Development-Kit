package alicloudroscdkkafka


// Properties for defining a `Topic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-topic
type TopicProps struct {
	// Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
	//
	// You can call the GetInstanceList operation to query instances.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property remark: The description of the topic.
	//
	// The value of this parameter must meet the following
	// requirements:
	// The value can only contain letters, digits, hyphens (-), and underscores (_).
	// The value must be 3 to 64 characters in length.
	Remark interface{} `field:"required" json:"remark" yaml:"remark"`
	// Property topic: The name of the topic.
	//
	// The value of this parameter must meet the following requirements:
	// The name can only contain letters, digits, hyphens (-), and underscores (_).
	// The name must be 3 to 64 characters in length, and will be automatically truncated
	// if it contains more characters.
	// The name cannot be modified after being created.
	Topic interface{} `field:"required" json:"topic" yaml:"topic"`
	// Property compactTopic: The log cleanup policy for the topic.
	//
	// This parameter is available when the Local Storage mode is specified for the topic. Valid values:
	// false: uses the default log cleanup policy.
	// true: uses the Apache Kafka log compaction policy.
	CompactTopic interface{} `field:"optional" json:"compactTopic" yaml:"compactTopic"`
	// Property config: Supplementary configuration.
	//
	// Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
	// This parameter can only be specified if the LocalTopic value is true.
	// NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
	Config interface{} `field:"optional" json:"config" yaml:"config"`
	// Property localTopic: The storage engine of the topic.
	//
	// Valid values:
	// false: the Cloud Storage mode.
	// true: the Local Storage mode.
	LocalTopic interface{} `field:"optional" json:"localTopic" yaml:"localTopic"`
	// Property minInsyncReplicas: The minimum number of ISR sync replicas.
	//
	// This parameter can only be specified if the LocalTopic value is true.
	// The value must be less than the number of Topic copies.
	// The number of synchronous replicas is limited to 1~3.
	MinInsyncReplicas interface{} `field:"optional" json:"minInsyncReplicas" yaml:"minInsyncReplicas"`
	// Property partitionNum: The number of partitions in the topic.
	//
	// Valid values:
	// 1 to 48
	// We recommend that you set the number of partitions to a multiple of 6 to reduce the
	// risk of data skew.Note:For special requirements,submit a ticket.
	PartitionNum interface{} `field:"optional" json:"partitionNum" yaml:"partitionNum"`
	// Property replicationFactor: The number of copies of the topic.
	//
	// This parameter can only be specified if the LocalTopic value is true.
	// The number of copies is limited to 1~3.
	// Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
	ReplicationFactor interface{} `field:"optional" json:"replicationFactor" yaml:"replicationFactor"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosTopic_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

