package alicloudroscdkoss


// Properties for defining a `Directory`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
type DirectoryProps struct {
	// Property bucketName: bucket name.
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	// Property directoryName: Directory name.
	DirectoryName interface{} `field:"required" json:"directoryName" yaml:"directoryName"`
	// Property deletionForce: Whether force delete the relative objects in the directory.
	//
	// Default value is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
}

