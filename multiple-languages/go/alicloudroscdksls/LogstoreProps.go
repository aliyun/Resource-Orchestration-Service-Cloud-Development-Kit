package alicloudroscdksls


// Properties for defining a `Logstore`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logstore
type LogstoreProps struct {
	// Property logstoreName: Logstore name: 1.
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
	// Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
	//
	// Default to false.
	AppendMeta interface{} `field:"optional" json:"appendMeta" yaml:"appendMeta"`
	// Property autoSplit: Whether to automatically split the shard.
	//
	// Default to false.
	AutoSplit interface{} `field:"optional" json:"autoSplit" yaml:"autoSplit"`
	// Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS\/Android\/APP access information.
	//
	// Default to false.
	EnableTracking interface{} `field:"optional" json:"enableTracking" yaml:"enableTracking"`
	// Property encryptConf: Data encryption config.
	EncryptConf interface{} `field:"optional" json:"encryptConf" yaml:"encryptConf"`
	// Property maxSplitShard: The maximum number of shards when splitting automatically.
	//
	// Must be specified if AutoSplit is set to true.
	// Allowed Values: 1-64.
	MaxSplitShard interface{} `field:"optional" json:"maxSplitShard" yaml:"maxSplitShard"`
	// Property preserveStorage: Whether to keep the log permanently.
	//
	// If set to true, TTL will be ignored.
	// Default to false.
	PreserveStorage interface{} `field:"optional" json:"preserveStorage" yaml:"preserveStorage"`
	// Property shardCount: The number of Shards.
	//
	// Allowed Values: 1-100, default to 2.
	ShardCount interface{} `field:"optional" json:"shardCount" yaml:"shardCount"`
	// Property ttl: The lifecycle of log in the logstore in days.
	//
	// Allowed Values: 1-3600, default to 30.
	Ttl interface{} `field:"optional" json:"ttl" yaml:"ttl"`
}

