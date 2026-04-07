package alicloudroscdkoss


// Properties for defining a `BucketAccessMonitor`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketaccessmonitor
type BucketAccessMonitorProps struct {
	// Property bucket: The name of the bucket.
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
}

