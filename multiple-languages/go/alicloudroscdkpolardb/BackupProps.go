package alicloudroscdkpolardb


// Properties for defining a `Backup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-backup
type BackupProps struct {
	// Property dbClusterId: The cluster ID.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
}

