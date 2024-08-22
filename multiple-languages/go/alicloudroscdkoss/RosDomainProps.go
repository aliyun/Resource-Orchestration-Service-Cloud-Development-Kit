package alicloudroscdkoss


// Properties for defining a `RosDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
type RosDomainProps struct {
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
}

