package alicloudroscdksls


// Properties for defining a `ConsumerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-consumergroup
type ConsumerGroupProps struct {
	// Property consumerGroup: The name of the consumer group.
	//
	// The name must be unique in a project.
	ConsumerGroup interface{} `field:"required" json:"consumerGroup" yaml:"consumerGroup"`
	// Property logstore: The name of the Logstore.
	Logstore interface{} `field:"required" json:"logstore" yaml:"logstore"`
	// Property order: Specifies whether to consume data in sequence.
	//
	// Valid values:
	// true
	// In a shard, data is consumed in ascending order based on the value of the **__tag__:__receive_time__** field.
	// If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
	// If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
	// false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
	Order interface{} `field:"required" json:"order" yaml:"order"`
	// Property project: The name of the project.
	Project interface{} `field:"required" json:"project" yaml:"project"`
	// Property timeout: The timeout period.
	//
	// If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
	Timeout interface{} `field:"required" json:"timeout" yaml:"timeout"`
}

