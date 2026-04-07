package alicloudroscdkoss


// Properties for defining a `BucketOverwriteConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketoverwriteconfig
type BucketOverwriteConfigProps struct {
	// Property bucket: The name of the bucket.
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	// Property rule: Forbid overwrite rule.
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
}

