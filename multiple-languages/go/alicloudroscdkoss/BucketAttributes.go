package alicloudroscdkoss


// A reference to a bucket outside this stack.
type BucketAttributes struct {
	// The domain name of the bucket.
	BucketDomainName *string `field:"optional" json:"bucketDomainName" yaml:"bucketDomainName"`
	// The endpoint of the bucket.
	BucketEndpoint *string `field:"optional" json:"bucketEndpoint" yaml:"bucketEndpoint"`
	// The name of the bucket.
	BucketName *string `field:"optional" json:"bucketName" yaml:"bucketName"`
	// The website URL of the bucket (if static web hosting is enabled).
	BucketWebsiteUrl *string `field:"optional" json:"bucketWebsiteUrl" yaml:"bucketWebsiteUrl"`
	// If this bucket has been configured for static website hosting.
	IsWebsite *bool `field:"optional" json:"isWebsite" yaml:"isWebsite"`
	// The region this existing bucket is in.
	//
	// Features that require the region (e.g. `bucketWebsiteUrl`) won't fully work
	// if the region cannot be correctly inferred.
	Region *string `field:"optional" json:"region" yaml:"region"`
}

