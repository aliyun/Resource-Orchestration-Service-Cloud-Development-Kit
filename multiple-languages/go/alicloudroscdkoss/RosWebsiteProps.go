package alicloudroscdkoss


// Properties for defining a `RosWebsite`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
type RosWebsiteProps struct {
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	WebsiteConfiguration interface{} `field:"optional" json:"websiteConfiguration" yaml:"websiteConfiguration"`
}

