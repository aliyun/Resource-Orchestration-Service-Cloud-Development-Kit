package alicloudroscdkdbs


// Properties for defining a `RosDownload`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-download
type RosDownloadProps struct {
	FormatType interface{} `field:"required" json:"formatType" yaml:"formatType"`
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	BakSetId interface{} `field:"optional" json:"bakSetId" yaml:"bakSetId"`
	BakSetSize interface{} `field:"optional" json:"bakSetSize" yaml:"bakSetSize"`
	BakSetType interface{} `field:"optional" json:"bakSetType" yaml:"bakSetType"`
	DeleteBackupSetInOss interface{} `field:"optional" json:"deleteBackupSetInOss" yaml:"deleteBackupSetInOss"`
	DownloadAddressDuration interface{} `field:"optional" json:"downloadAddressDuration" yaml:"downloadAddressDuration"`
	DownloadPointInTime interface{} `field:"optional" json:"downloadPointInTime" yaml:"downloadPointInTime"`
	TargetBucket interface{} `field:"optional" json:"targetBucket" yaml:"targetBucket"`
	TargetOssRegion interface{} `field:"optional" json:"targetOssRegion" yaml:"targetOssRegion"`
	TargetPath interface{} `field:"optional" json:"targetPath" yaml:"targetPath"`
	TargetType interface{} `field:"optional" json:"targetType" yaml:"targetType"`
}

