package alicloudroscdkoss


// Properties for defining a `Website`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
type WebsiteProps struct {
	// Property bucketName: Bucket name.
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	// Property websiteConfiguration: Website configuration.
	WebsiteConfiguration interface{} `field:"optional" json:"websiteConfiguration" yaml:"websiteConfiguration"`
}

