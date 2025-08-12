package alicloudroscdkoss


// Properties for defining a `BucketReplication`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketreplication
type BucketReplicationProps struct {
	// Property bucketName: Bucket name.
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	// Property replicationConfiguration: Replication configuration.
	ReplicationConfiguration interface{} `field:"required" json:"replicationConfiguration" yaml:"replicationConfiguration"`
}

