package alicloudroscdkpolardb


// Properties for defining a `RosBackup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-backup
type RosBackupProps struct {
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
}

