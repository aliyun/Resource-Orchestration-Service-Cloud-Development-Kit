package alicloudroscdkoss


// Properties for defining a `RosBucketOverwriteConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketoverwriteconfig
type RosBucketOverwriteConfigProps struct {
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
}

