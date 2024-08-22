package alicloudroscdksls


// Properties for defining a `RosMetricStore`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-metricstore
type RosMetricStoreProps struct {
	LogstoreName interface{} `field:"required" json:"logstoreName" yaml:"logstoreName"`
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	PreserveStorage interface{} `field:"optional" json:"preserveStorage" yaml:"preserveStorage"`
	ShardCount interface{} `field:"optional" json:"shardCount" yaml:"shardCount"`
	Ttl interface{} `field:"optional" json:"ttl" yaml:"ttl"`
}

