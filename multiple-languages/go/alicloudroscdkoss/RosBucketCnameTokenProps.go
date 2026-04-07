package alicloudroscdkoss


// Properties for defining a `RosBucketCnameToken`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketcnametoken
type RosBucketCnameTokenProps struct {
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
}

