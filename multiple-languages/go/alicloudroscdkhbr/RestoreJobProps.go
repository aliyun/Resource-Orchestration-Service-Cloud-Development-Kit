package alicloudroscdkhbr


// Properties for defining a `RestoreJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-restorejob
type RestoreJobProps struct {
	// Property restoreType: Restore type.
	RestoreType interface{} `field:"required" json:"restoreType" yaml:"restoreType"`
	// Property snapshotId: Snapshot ID.
	SnapshotId interface{} `field:"required" json:"snapshotId" yaml:"snapshotId"`
	// Property sourceClientId: Source client ID.
	//
	// It should be provided when SourceType=FILE.
	SourceClientId interface{} `field:"required" json:"sourceClientId" yaml:"sourceClientId"`
	// Property sourceInstanceId: Source instance ID.
	//
	// It should be provided when SourceType=ECS_FILE.
	SourceInstanceId interface{} `field:"required" json:"sourceInstanceId" yaml:"sourceInstanceId"`
	// Property sourceType: Source type.
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	// Property targetClientId: Target client ID.
	//
	// It should be provided when RestoreType=FILE.
	TargetClientId interface{} `field:"required" json:"targetClientId" yaml:"targetClientId"`
	// Property targetInstanceId: Target instance ID.
	//
	// It should be provided when RestoreType=ECS_FILE.
	TargetInstanceId interface{} `field:"required" json:"targetInstanceId" yaml:"targetInstanceId"`
	// Property targetPath: Target path.
	//
	// For instance, "\/".
	TargetPath interface{} `field:"required" json:"targetPath" yaml:"targetPath"`
	// Property vaultId: Vault ID.
	VaultId interface{} `field:"required" json:"vaultId" yaml:"vaultId"`
}

