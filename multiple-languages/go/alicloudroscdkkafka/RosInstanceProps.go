package alicloudroscdkkafka


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-instance
type RosInstanceProps struct {
	DeployType interface{} `field:"required" json:"deployType" yaml:"deployType"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	DeployOption interface{} `field:"optional" json:"deployOption" yaml:"deployOption"`
	DiskSize interface{} `field:"optional" json:"diskSize" yaml:"diskSize"`
	DiskType interface{} `field:"optional" json:"diskType" yaml:"diskType"`
	EipMax interface{} `field:"optional" json:"eipMax" yaml:"eipMax"`
	IoMax interface{} `field:"optional" json:"ioMax" yaml:"ioMax"`
	IoMaxSpec interface{} `field:"optional" json:"ioMaxSpec" yaml:"ioMaxSpec"`
	OpenConnector interface{} `field:"optional" json:"openConnector" yaml:"openConnector"`
	PartitionNum interface{} `field:"optional" json:"partitionNum" yaml:"partitionNum"`
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	ServerlessConfig interface{} `field:"optional" json:"serverlessConfig" yaml:"serverlessConfig"`
	SpecType interface{} `field:"optional" json:"specType" yaml:"specType"`
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TopicQuota interface{} `field:"optional" json:"topicQuota" yaml:"topicQuota"`
}

