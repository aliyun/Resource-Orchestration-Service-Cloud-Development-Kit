package alicloudroscdkoss


// Properties for defining a `RosBucketReplication`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketreplication
type RosBucketReplicationProps struct {
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	ReplicationConfiguration interface{} `field:"required" json:"replicationConfiguration" yaml:"replicationConfiguration"`
}

