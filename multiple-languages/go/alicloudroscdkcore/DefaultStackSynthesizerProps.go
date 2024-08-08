package alicloudroscdkcore


// Configuration properties for DefaultStackSynthesizer.
type DefaultStackSynthesizerProps struct {
	// bucketPrefix to use while storing OSS Assets.
	BucketPrefix *string `field:"optional" json:"bucketPrefix" yaml:"bucketPrefix"`
	// Name of the OSS bucket to hold file assets.
	//
	// You must supply this if you have given a non-standard name to the staging bucket.
	//
	// The placeholders `${Qualifier}`, `${ALIYUN::AccountId}` and `${ALIYUN::Region}` will
	// be replaced with the values of qualifier and the stack's account and region,
	// respectively.
	FileAssetsBucketName *string `field:"optional" json:"fileAssetsBucketName" yaml:"fileAssetsBucketName"`
	// Qualifier to disambiguate multiple environments in the same account.
	//
	// You can use this and leave the other naming properties empty if you have deployed
	// the bootstrap environment with standard names but only differnet qualifiers.
	Qualifier *string `field:"optional" json:"qualifier" yaml:"qualifier"`
}

