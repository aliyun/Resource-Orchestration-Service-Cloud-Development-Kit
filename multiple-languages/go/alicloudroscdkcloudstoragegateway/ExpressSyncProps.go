package alicloudroscdkcloudstoragegateway


// Properties for defining a `ExpressSync`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync
type ExpressSyncProps struct {
	// Property bucketName: The name of the bucket.
	//
	// Note:
	// - You can specify only one OSS bucket for a synchronization group. All data
	// changes in the bucket are synchronized to your on-premises environment.
	// - If you have not created a share for the OSS bucket, you must first create a
	// share between the file gateway and the OSS bucket.
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	// Property bucketRegion: The region of the OSS bucket.
	BucketRegion interface{} `field:"required" json:"bucketRegion" yaml:"bucketRegion"`
	// Property name: The name of the express synchronization group.
	//
	// The name must be 1 to 128
	// characters in length and can contain letters, Chinese characters, digits, periods
	// (.), underscores (_), and hyphens (-). The name must start with a letter or a
	// Chinese character.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property bucketPrefix: The prefix of the OSS bucket.
	BucketPrefix interface{} `field:"optional" json:"bucketPrefix" yaml:"bucketPrefix"`
	// Property description: The description of the express synchronization group.
	//
	// The description can be up
	// to 255 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

