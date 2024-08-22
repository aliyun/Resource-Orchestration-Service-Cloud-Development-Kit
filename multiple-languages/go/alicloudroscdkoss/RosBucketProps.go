package alicloudroscdkoss


// Properties for defining a `RosBucket`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
type RosBucketProps struct {
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	AccessControl interface{} `field:"optional" json:"accessControl" yaml:"accessControl"`
	CorsConfiguration interface{} `field:"optional" json:"corsConfiguration" yaml:"corsConfiguration"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	EnableOssHdfsService interface{} `field:"optional" json:"enableOssHdfsService" yaml:"enableOssHdfsService"`
	LifecycleConfiguration interface{} `field:"optional" json:"lifecycleConfiguration" yaml:"lifecycleConfiguration"`
	LoggingConfiguration interface{} `field:"optional" json:"loggingConfiguration" yaml:"loggingConfiguration"`
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
	RedundancyType interface{} `field:"optional" json:"redundancyType" yaml:"redundancyType"`
	RefererConfiguration interface{} `field:"optional" json:"refererConfiguration" yaml:"refererConfiguration"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ServerSideEncryptionConfiguration interface{} `field:"optional" json:"serverSideEncryptionConfiguration" yaml:"serverSideEncryptionConfiguration"`
	StorageClass interface{} `field:"optional" json:"storageClass" yaml:"storageClass"`
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
	VersioningConfiguration interface{} `field:"optional" json:"versioningConfiguration" yaml:"versioningConfiguration"`
	WebsiteConfigurationV2 interface{} `field:"optional" json:"websiteConfigurationV2" yaml:"websiteConfigurationV2"`
}

