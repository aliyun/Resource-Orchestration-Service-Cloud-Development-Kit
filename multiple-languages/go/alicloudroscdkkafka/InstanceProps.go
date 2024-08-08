package alicloudroscdkkafka


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-instance
type InstanceProps struct {
	// Property deployType: The deployment mode of the Message Queue for Apache Kafka instance.
	//
	// Valid values:
	//    4: Instance of the public type
	// 5: Instance of the VPC type.
	DeployType interface{} `field:"required" json:"deployType" yaml:"deployType"`
	// Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance.
	//
	// Default is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required.
	DeployOption interface{} `field:"optional" json:"deployOption" yaml:"deployOption"`
	// Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
	DiskSize interface{} `field:"optional" json:"diskSize" yaml:"diskSize"`
	// Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance.
	//
	// Valid values:
	// 0: Ultra disk
	// 1: SSD.
	DiskType interface{} `field:"optional" json:"diskType" yaml:"diskType"`
	// Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
	//
	// This parameter must be specified when the DeployType parameter is set to 4.
	EipMax interface{} `field:"optional" json:"eipMax" yaml:"eipMax"`
	// Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
	//
	// For more information about the value range, see Billing.
	IoMax interface{} `field:"optional" json:"ioMax" yaml:"ioMax"`
	// Property ioMaxSpec: Flow specification (recommended)  The IoMax and IoMaxSpec must be optional.
	//
	// When filling in at the same time, subject to IoMaxSpec.
	// It is recommended that you only fill in the flow specification.
	IoMaxSpec interface{} `field:"optional" json:"ioMaxSpec" yaml:"ioMaxSpec"`
	// Property openConnector: Whether open kafka connector or not.
	OpenConnector interface{} `field:"optional" json:"openConnector" yaml:"openConnector"`
	// Property partitionNum: Number of partitions(recommended).
	//
	// The number of partitions to be configured for the Message Queue for Apache Kafka instance.
	// PartitionNum and TopicQuota must be selected.
	// It is recommended that you only fill in the number of partitions.
	PartitionNum interface{} `field:"optional" json:"partitionNum" yaml:"partitionNum"`
	// Property payType: Pay by hour or month.
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	// Property serverlessConfig: Serverless instance related settings.
	ServerlessConfig interface{} `field:"optional" json:"serverlessConfig" yaml:"serverlessConfig"`
	// Property specType: The edition of the Message Queue for Apache Kafka instance.
	//
	// Valid values:
	// professional: Professional Edition
	// normal: Normal version.
	SpecType interface{} `field:"optional" json:"specType" yaml:"specType"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property topicQuota: Number of topics (not recommended).
	//
	// The number of topics to be configured for the Message Queue for Apache Kafka instance.
	// PartitionNum and TopicQuota must be selected.
	// It is recommended that you only fill in the number of partitions.
	// The default value of this parameter varies with different peak traffic values.
	// Additional fees are charged if the default values are exceeded.
	//   Different specifications have different default values, and extra fees are charged.
	// For more information, see Billing.
	TopicQuota interface{} `field:"optional" json:"topicQuota" yaml:"topicQuota"`
}

