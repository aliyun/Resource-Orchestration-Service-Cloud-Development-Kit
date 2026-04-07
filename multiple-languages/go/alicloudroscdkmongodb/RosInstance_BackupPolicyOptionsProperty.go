package alicloudroscdkmongodb


type RosInstance_BackupPolicyOptionsProperty struct {
	BackupInterval interface{} `field:"optional" json:"backupInterval" yaml:"backupInterval"`
	BackupRetentionPeriod interface{} `field:"optional" json:"backupRetentionPeriod" yaml:"backupRetentionPeriod"`
	BackupRetentionPolicyOnClusterDeletion interface{} `field:"optional" json:"backupRetentionPolicyOnClusterDeletion" yaml:"backupRetentionPolicyOnClusterDeletion"`
	CrossBackupPeriod interface{} `field:"optional" json:"crossBackupPeriod" yaml:"crossBackupPeriod"`
	CrossBackupType interface{} `field:"optional" json:"crossBackupType" yaml:"crossBackupType"`
	CrossLogRetentionType interface{} `field:"optional" json:"crossLogRetentionType" yaml:"crossLogRetentionType"`
	CrossLogRetentionValue interface{} `field:"optional" json:"crossLogRetentionValue" yaml:"crossLogRetentionValue"`
	CrossRetentionType interface{} `field:"optional" json:"crossRetentionType" yaml:"crossRetentionType"`
	CrossRetentionValue interface{} `field:"optional" json:"crossRetentionValue" yaml:"crossRetentionValue"`
	DestRegion interface{} `field:"optional" json:"destRegion" yaml:"destRegion"`
	EnableBackupLog interface{} `field:"optional" json:"enableBackupLog" yaml:"enableBackupLog"`
	EnableCrossLogBackup interface{} `field:"optional" json:"enableCrossLogBackup" yaml:"enableCrossLogBackup"`
	HighFrequencyBackupRetention interface{} `field:"optional" json:"highFrequencyBackupRetention" yaml:"highFrequencyBackupRetention"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	LogBackupRetentionPeriod interface{} `field:"optional" json:"logBackupRetentionPeriod" yaml:"logBackupRetentionPeriod"`
	PreferredBackupPeriod interface{} `field:"optional" json:"preferredBackupPeriod" yaml:"preferredBackupPeriod"`
	PreferredBackupTime interface{} `field:"optional" json:"preferredBackupTime" yaml:"preferredBackupTime"`
	PreserveOneEachHour interface{} `field:"optional" json:"preserveOneEachHour" yaml:"preserveOneEachHour"`
	SnapshotBackupType interface{} `field:"optional" json:"snapshotBackupType" yaml:"snapshotBackupType"`
	SrcRegion interface{} `field:"optional" json:"srcRegion" yaml:"srcRegion"`
}

