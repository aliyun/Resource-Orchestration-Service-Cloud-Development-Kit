package alicloudroscdkcloudstoragegateway


// Properties for defining a `ExpressSync`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync
type ExpressSyncProps struct {
	// Property bucketName: The name of the OSS bucket.
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	// Property bucketRegion: The region of the OSS bucket.
	BucketRegion interface{} `field:"required" json:"bucketRegion" yaml:"bucketRegion"`
	// Property name: The name of the ExpressSync.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property bucketPrefix: The prefix of the OSS bucket.
	BucketPrefix interface{} `field:"optional" json:"bucketPrefix" yaml:"bucketPrefix"`
	// Property description: The description of the ExpressSync.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

