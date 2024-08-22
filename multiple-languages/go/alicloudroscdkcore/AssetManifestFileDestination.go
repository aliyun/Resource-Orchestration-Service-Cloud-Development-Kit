package alicloudroscdkcore


// The destination for a file asset, when it is given to the AssetManifestBuilder.
type AssetManifestFileDestination struct {
	// Bucket name where the file asset should be written.
	BucketName *string `field:"required" json:"bucketName" yaml:"bucketName"`
	// Prefix to prepend to the asset hash.
	BucketPrefix *string `field:"optional" json:"bucketPrefix" yaml:"bucketPrefix"`
}

