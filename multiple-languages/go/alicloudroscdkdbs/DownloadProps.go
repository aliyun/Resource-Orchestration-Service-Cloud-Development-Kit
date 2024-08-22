package alicloudroscdkdbs


// Properties for defining a `Download`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-download
type DownloadProps struct {
	// Property formatType: The format to which the downloaded backup set is converted.
	//
	// Valid values: CSV|SQL|Parquet.
	FormatType interface{} `field:"required" json:"formatType" yaml:"formatType"`
	// Property instanceName: The ID of the instance.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property bakSetId: The ID of the backup set.
	//
	// You can call the DescribeBackups operation to query the ID of the backup set.
	// This parameter is required if the BakSetType parameter is set to full.
	BakSetId interface{} `field:"optional" json:"bakSetId" yaml:"bakSetId"`
	// Property bakSetSize: The size of the full backup set.
	//
	// Unit: bytes.
	// You can call the DescribeBackups operation to query the size of the full backup set.
	BakSetSize interface{} `field:"optional" json:"bakSetSize" yaml:"bakSetSize"`
	// Property bakSetType: The type of the download task.
	//
	// Valid values:
	// full: downloads a full backup set
	// pitr: downloads a backup set at a specific point in time.
	BakSetType interface{} `field:"optional" json:"bakSetType" yaml:"bakSetType"`
	// Property deleteBackupSetInOss: Whether to delete the backup set in OSS when deleting the stack.
	//
	// Valid values: true|false, default is true.
	DeleteBackupSetInOss interface{} `field:"optional" json:"deleteBackupSetInOss" yaml:"deleteBackupSetInOss"`
	// Property downloadAddressDuration: When the download target is a URL, set the link validity period.
	//
	// The default URL validity period is 7200 seconds.
	// The effective duration range can be set from 300 seconds to 86400 seconds.
	DownloadAddressDuration interface{} `field:"optional" json:"downloadAddressDuration" yaml:"downloadAddressDuration"`
	// Property downloadPointInTime: The point in time at which the backup set is downloaded.
	//
	// Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
	// This parameter is required if the BakSetType parameter is set to pitr.
	DownloadPointInTime interface{} `field:"optional" json:"downloadPointInTime" yaml:"downloadPointInTime"`
	// Property targetBucket: The name of the OSS bucket that is used to store the backup set.
	//
	// This parameter is required if the TargetType parameter is set to OSS.
	// Make sure that your account is granted the AliyunDBSDefaultRole permission.
	// For more information, see Use RAM for resource authorization.
	// You can also grant permissions based on the operation instructions in the Resource Access Management (RAM) console.
	TargetBucket interface{} `field:"optional" json:"targetBucket" yaml:"targetBucket"`
	// Property targetOssRegion: The region in which the OSS bucket resides.
	//
	// This parameter is required if the TargetType parameter is set to OSS.
	TargetOssRegion interface{} `field:"optional" json:"targetOssRegion" yaml:"targetOssRegion"`
	// Property targetPath: The destination path to which the backup set is downloaded.
	//
	// This parameter is required if the TargetType parameter is set to OSS.
	TargetPath interface{} `field:"optional" json:"targetPath" yaml:"targetPath"`
	// Property targetType: The type of the destination to which the backup set is downloaded.
	//
	// Valid values: OSS|URL.
	TargetType interface{} `field:"optional" json:"targetType" yaml:"targetType"`
}

