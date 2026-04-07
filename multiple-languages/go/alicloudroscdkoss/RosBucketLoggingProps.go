package alicloudroscdkoss


// Properties for defining a `RosBucketLogging`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketlogging
type RosBucketLoggingProps struct {
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	TargetBucket interface{} `field:"required" json:"targetBucket" yaml:"targetBucket"`
	LoggingRole interface{} `field:"optional" json:"loggingRole" yaml:"loggingRole"`
	TargetPrefix interface{} `field:"optional" json:"targetPrefix" yaml:"targetPrefix"`
}

