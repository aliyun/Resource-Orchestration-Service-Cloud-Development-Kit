package alicloudroscdkdatahub


// Properties for defining a `RosTopic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-topic
type RosTopicProps struct {
	Comment interface{} `field:"required" json:"comment" yaml:"comment"`
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	RecordType interface{} `field:"required" json:"recordType" yaml:"recordType"`
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	Lifecycle interface{} `field:"optional" json:"lifecycle" yaml:"lifecycle"`
	RecordSchema interface{} `field:"optional" json:"recordSchema" yaml:"recordSchema"`
	ShardCount interface{} `field:"optional" json:"shardCount" yaml:"shardCount"`
}

