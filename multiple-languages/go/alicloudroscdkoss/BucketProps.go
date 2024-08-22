package alicloudroscdkoss


// Properties for defining a `Bucket`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
type BucketProps struct {
	// Property bucketName: bucket name.
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	// Property accessControl: The access control list.
	AccessControl interface{} `field:"optional" json:"accessControl" yaml:"accessControl"`
	// Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
	CorsConfiguration interface{} `field:"optional" json:"corsConfiguration" yaml:"corsConfiguration"`
	// Property deletionForce: Whether force delete the relative objects in the bucket.
	//
	// Default value is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property enableOssHdfsService: Whether enable OSS-HDFS service.
	//
	// **Note**: Once it's enabled, it can't be disabled again.
	EnableOssHdfsService interface{} `field:"optional" json:"enableOssHdfsService" yaml:"enableOssHdfsService"`
	// Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
	LifecycleConfiguration interface{} `field:"optional" json:"lifecycleConfiguration" yaml:"lifecycleConfiguration"`
	// Property loggingConfiguration: Settings that defines where logs are stored.
	LoggingConfiguration interface{} `field:"optional" json:"loggingConfiguration" yaml:"loggingConfiguration"`
	// Property policy: Bucket policy.
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
	// Property redundancyType: Specifies the data disaster recovery type of the storage space.
	//
	// The value range is as follows:
	// LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
	// ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
	RedundancyType interface{} `field:"optional" json:"redundancyType" yaml:"redundancyType"`
	// Property refererConfiguration: undefined.
	RefererConfiguration interface{} `field:"optional" json:"refererConfiguration" yaml:"refererConfiguration"`
	// Property resourceGroupId: The resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
	ServerSideEncryptionConfiguration interface{} `field:"optional" json:"serverSideEncryptionConfiguration" yaml:"serverSideEncryptionConfiguration"`
	// Property storageClass: Specifies the storage class of the bucket.
	//
	// Default is "Standard".
	StorageClass interface{} `field:"optional" json:"storageClass" yaml:"storageClass"`
	// Property tags: Bucket tags in k-v pairs format.
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
	// Property versioningConfiguration: A state of versioning.
	VersioningConfiguration interface{} `field:"optional" json:"versioningConfiguration" yaml:"versioningConfiguration"`
	// Property websiteConfigurationV2: Website configuration.
	WebsiteConfigurationV2 interface{} `field:"optional" json:"websiteConfigurationV2" yaml:"websiteConfigurationV2"`
}

