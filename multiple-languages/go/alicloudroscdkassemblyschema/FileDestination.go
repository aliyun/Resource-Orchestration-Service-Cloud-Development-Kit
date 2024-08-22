package alicloudroscdkassemblyschema


// Where in OSS bucket a file asset needs to be published.
type FileDestination struct {
	// The region where this asset will need to be published.
	Region *string `field:"optional" json:"region" yaml:"region"`
	// The name of the bucket.
	BucketName *string `field:"required" json:"bucketName" yaml:"bucketName"`
	// The destination object key.
	ObjectKey *string `field:"required" json:"objectKey" yaml:"objectKey"`
}

