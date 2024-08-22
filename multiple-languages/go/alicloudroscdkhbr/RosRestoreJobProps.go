package alicloudroscdkhbr


// Properties for defining a `RosRestoreJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-restorejob
type RosRestoreJobProps struct {
	RestoreType interface{} `field:"required" json:"restoreType" yaml:"restoreType"`
	SnapshotId interface{} `field:"required" json:"snapshotId" yaml:"snapshotId"`
	SourceClientId interface{} `field:"required" json:"sourceClientId" yaml:"sourceClientId"`
	SourceInstanceId interface{} `field:"required" json:"sourceInstanceId" yaml:"sourceInstanceId"`
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	TargetClientId interface{} `field:"required" json:"targetClientId" yaml:"targetClientId"`
	TargetInstanceId interface{} `field:"required" json:"targetInstanceId" yaml:"targetInstanceId"`
	TargetPath interface{} `field:"required" json:"targetPath" yaml:"targetPath"`
	VaultId interface{} `field:"required" json:"vaultId" yaml:"vaultId"`
}

