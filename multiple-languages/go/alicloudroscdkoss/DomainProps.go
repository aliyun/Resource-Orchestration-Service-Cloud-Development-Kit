package alicloudroscdkoss


// Properties for defining a `Domain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
type DomainProps struct {
	// Property bucketName: bucket name.
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	// Property domainName: Domain name.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
}

