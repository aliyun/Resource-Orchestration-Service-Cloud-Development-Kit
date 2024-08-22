package alicloudroscdksls


// Properties for defining a `MetricStore`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-metricstore
type MetricStoreProps struct {
	// Property logstoreName: Metric store name: 1.
	//
	// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
	// 2. Must start and end with lowercase letters and numbers.
	// 3. The name length is 3-63 characters.
	LogstoreName interface{} `field:"required" json:"logstoreName" yaml:"logstoreName"`
	// Property projectName: Project name: 1.
	//
	// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
	// 2. Must start and end with lowercase letters and numbers.
	// 3. The name length is 3-63 characters.
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	// Property preserveStorage: Whether to keep the log permanently.
	//
	// If set to true, TTL will be ignored.
	// Default to false.
	PreserveStorage interface{} `field:"optional" json:"preserveStorage" yaml:"preserveStorage"`
	// Property shardCount: The number of Shards.
	//
	// Allowed Values: 1-10, default to 2.
	ShardCount interface{} `field:"optional" json:"shardCount" yaml:"shardCount"`
	// Property ttl: The lifecycle of log in the metrice store in days.
	//
	// Allowed Values: 1-3000, default to 30.
	Ttl interface{} `field:"optional" json:"ttl" yaml:"ttl"`
}

