package alicloudroscdksls


// Properties for defining a `RosLogstore`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logstore
type RosLogstoreProps struct {
	LogstoreName interface{} `field:"required" json:"logstoreName" yaml:"logstoreName"`
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	AppendMeta interface{} `field:"optional" json:"appendMeta" yaml:"appendMeta"`
	AutoSplit interface{} `field:"optional" json:"autoSplit" yaml:"autoSplit"`
	EnableTracking interface{} `field:"optional" json:"enableTracking" yaml:"enableTracking"`
	EncryptConf interface{} `field:"optional" json:"encryptConf" yaml:"encryptConf"`
	MaxSplitShard interface{} `field:"optional" json:"maxSplitShard" yaml:"maxSplitShard"`
	PreserveStorage interface{} `field:"optional" json:"preserveStorage" yaml:"preserveStorage"`
	ShardCount interface{} `field:"optional" json:"shardCount" yaml:"shardCount"`
	Ttl interface{} `field:"optional" json:"ttl" yaml:"ttl"`
}

