package alicloudroscdkoss


// Properties for defining a `BucketLogging`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketlogging
type BucketLoggingProps struct {
	// Property bucket: The name of the bucket.
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	// Property targetBucket: The bucket that stores access logs.
	TargetBucket interface{} `field:"required" json:"targetBucket" yaml:"targetBucket"`
	// Property loggingRole: Authorization role used for bucket logging.
	LoggingRole interface{} `field:"optional" json:"loggingRole" yaml:"loggingRole"`
	// Property targetPrefix: The prefix of the saved log objects.
	//
	// This element can be left empty.
	TargetPrefix interface{} `field:"optional" json:"targetPrefix" yaml:"targetPrefix"`
}

