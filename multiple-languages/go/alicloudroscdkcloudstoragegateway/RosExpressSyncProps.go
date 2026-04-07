package alicloudroscdkcloudstoragegateway


// Properties for defining a `RosExpressSync`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync
type RosExpressSyncProps struct {
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	BucketRegion interface{} `field:"required" json:"bucketRegion" yaml:"bucketRegion"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	BucketPrefix interface{} `field:"optional" json:"bucketPrefix" yaml:"bucketPrefix"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

