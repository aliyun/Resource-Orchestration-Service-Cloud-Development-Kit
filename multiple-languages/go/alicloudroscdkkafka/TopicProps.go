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
	// - Reserved instance: The name can contain uppercase letters, lowercase letters,
	// digits, underscores (_), hyphens (-), and periods (.). The name must be 3 to 64
	// characters in length.
	// - Serverless instance: The name can contain uppercase letters, lowercase letters,
	// digits, underscores (_), hyphens (-), and periods (.). The name must be 1 to 249
	// characters in length.
	Topic interface{} `field:"required" json:"topic" yaml:"topic"`
	// Property compactTopic: The log cleanup policy for the topic.
	//
	// This parameter is available when the Local Storage mode is specified for the topic. Valid values:
	// false: uses the default log cleanup policy.
	// true: uses the Apache Kafka log compaction policy.
	CompactTopic interface{} `field:"optional" json:"compactTopic" yaml:"compactTopic"`
	// Property config: The advanced configurations of the topic.
	//
	// - Configure this parameter in the JSON format.
	// - This parameter is available only if LocalTopic is set to true.
	// - The following configurations are supported for reserved instances:
	// - retention.ms: The message retention period. The value must be an integer from
	// 3,600,000 to 31,536,000,000. Unit: milliseconds.
	// - max.message.bytes: The maximum size of a message that can be sent. The value
	// must be an integer from 1,048,576 to 10,485,760. Unit: bytes.
	// - message.timestamp.type: The timestamp type of a message. Valid values:
	// CreateTime or LogAppendTime. CreateTime indicates that the message timestamp is
	// the time when the producer creates the message. If you do not specify a
	// timestamp, the client time is used. LogAppendTime indicates that the message
	// timestamp is the time when the server stores the message. The default value is
	// CreateTime. We recommend that you set this parameter to LogAppendTime.
	// - The following configurations are supported for Serverless instances:
	// - retention.hours: The message retention period. The value is of the string type.
	// The value must be an integer from 24 to 8,760.
	// - max.message.bytes: The maximum size of a message that can be sent. The value is
	// of the string type. The value must be an integer from 1,048,576 to 10,485,760.
	// - message.timestamp.type: The timestamp type of a message. Valid values:
	// CreateTime or LogAppendTime. CreateTime indicates that the message timestamp is
	// the time when the producer creates the message. If you do not specify a
	// timestamp, the client time is used. LogAppendTime indicates that the message
	// timestamp is the time when the server stores the message. The default value is
	// CreateTime. We recommend that you set this parameter to LogAppendTime.
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
	// - The value must be an integer from 1 to 360.
	// - The console suggests a number of partitions based on the instance type. Follow
	// the suggestion to reduce the risk of data skew.
	// Default value:
	// - Reserved instance: 12
	// - Serverless instance: 3.
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

