package alicloudroscdkoss


// Properties for defining a `BucketPublicAccessBlock`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketpublicaccessblock
type BucketPublicAccessBlockProps struct {
	// Property blockPublicAccess: Whether AlibabaCloud OSS should block public bucket policies and ACL for this bucket.
	BlockPublicAccess interface{} `field:"required" json:"blockPublicAccess" yaml:"blockPublicAccess"`
	// Property bucket: The name of the bucket.
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
}

