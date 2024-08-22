package alicloudroscdkoss


// Properties for defining a `RosDirectory`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
type RosDirectoryProps struct {
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	DirectoryName interface{} `field:"required" json:"directoryName" yaml:"directoryName"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
}

