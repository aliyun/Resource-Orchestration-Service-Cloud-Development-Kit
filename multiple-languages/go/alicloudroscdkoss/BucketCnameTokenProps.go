package alicloudroscdkoss


// Properties for defining a `BucketCnameToken`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketcnametoken
type BucketCnameTokenProps struct {
	// Property bucket: The name of the bucket.
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	// Property domain: The custom domain.
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
}

