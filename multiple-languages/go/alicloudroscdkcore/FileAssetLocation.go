package alicloudroscdkcore


// The location of the published file asset.
//
// This is where the asset
// can be consumed at runtime.
type FileAssetLocation struct {
	// The name of the OSS bucket.
	BucketName *string `field:"required" json:"bucketName" yaml:"bucketName"`
	// The HTTP URL of this asset on OSS.
	//
	// This value suitable for inclusion in a ROS template, and
	// may be an encoded token.
	//
	// Example value: `https://${bucketName}.oss-${region}.aliyuncs.com/${objectKey}`
	HttpUrl *string `field:"required" json:"httpUrl" yaml:"httpUrl"`
	// The path of OSS object.
	ObjectKey *string `field:"required" json:"objectKey" yaml:"objectKey"`
	// The region of the OSS bucket.
	Region *string `field:"optional" json:"region" yaml:"region"`
}

