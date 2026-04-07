package alicloudroscdkoss


// Properties for defining a `RosBucketPublicAccessBlock`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketpublicaccessblock
type RosBucketPublicAccessBlockProps struct {
	BlockPublicAccess interface{} `field:"required" json:"blockPublicAccess" yaml:"blockPublicAccess"`
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
}

