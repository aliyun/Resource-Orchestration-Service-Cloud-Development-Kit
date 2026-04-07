package alicloudroscdkoss


// Properties for defining a `RosBucketWorm`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketworm
type RosBucketWormProps struct {
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	RetentionPeriodInDays interface{} `field:"required" json:"retentionPeriodInDays" yaml:"retentionPeriodInDays"`
}

