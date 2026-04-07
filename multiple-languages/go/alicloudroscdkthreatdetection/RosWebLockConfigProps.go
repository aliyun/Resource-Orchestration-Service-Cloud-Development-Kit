package alicloudroscdkthreatdetection


// Properties for defining a `RosWebLockConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
type RosWebLockConfigProps struct {
	DefenceMode interface{} `field:"required" json:"defenceMode" yaml:"defenceMode"`
	Dir interface{} `field:"required" json:"dir" yaml:"dir"`
	LocalBackupDir interface{} `field:"required" json:"localBackupDir" yaml:"localBackupDir"`
	Uuid interface{} `field:"required" json:"uuid" yaml:"uuid"`
	ExclusiveDir interface{} `field:"optional" json:"exclusiveDir" yaml:"exclusiveDir"`
	ExclusiveFile interface{} `field:"optional" json:"exclusiveFile" yaml:"exclusiveFile"`
	ExclusiveFileType interface{} `field:"optional" json:"exclusiveFileType" yaml:"exclusiveFileType"`
	InclusiveFile interface{} `field:"optional" json:"inclusiveFile" yaml:"inclusiveFile"`
	InclusiveFileType interface{} `field:"optional" json:"inclusiveFileType" yaml:"inclusiveFileType"`
	Mode interface{} `field:"optional" json:"mode" yaml:"mode"`
}

