package alicloudroscdkoss


// Properties for defining a `BucketWorm`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketworm
type BucketWormProps struct {
	// Property bucket: The name of the bucket.
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	// Property retentionPeriodInDays: The specified number of days to retain the Object.
	RetentionPeriodInDays interface{} `field:"required" json:"retentionPeriodInDays" yaml:"retentionPeriodInDays"`
}

