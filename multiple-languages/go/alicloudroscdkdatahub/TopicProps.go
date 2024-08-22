package alicloudroscdkdatahub


// Properties for defining a `Topic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-topic
type TopicProps struct {
	// Property comment: The comment of topic.
	Comment interface{} `field:"required" json:"comment" yaml:"comment"`
	// Property projectName: The name of the project.
	//
	// Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	// Property recordType: Record type.
	//
	// TUPLE: structured data, BLOB: unstructured data.
	RecordType interface{} `field:"required" json:"recordType" yaml:"recordType"`
	// Property topicName: The name of the topic.
	//
	// Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	// Property lifecycle: Data storage life cycle.
	Lifecycle interface{} `field:"optional" json:"lifecycle" yaml:"lifecycle"`
	// Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
	RecordSchema interface{} `field:"optional" json:"recordSchema" yaml:"recordSchema"`
	// Property shardCount: Initial shard number.
	ShardCount interface{} `field:"optional" json:"shardCount" yaml:"shardCount"`
}

