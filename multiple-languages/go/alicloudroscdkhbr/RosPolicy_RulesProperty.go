package alicloudroscdkhbr


type RosPolicy_RulesProperty struct {
	RuleType interface{} `field:"required" json:"ruleType" yaml:"ruleType"`
	ArchiveDays interface{} `field:"optional" json:"archiveDays" yaml:"archiveDays"`
	ArchiveVaultId interface{} `field:"optional" json:"archiveVaultId" yaml:"archiveVaultId"`
	BackupType interface{} `field:"optional" json:"backupType" yaml:"backupType"`
	ColdArchiveDays interface{} `field:"optional" json:"coldArchiveDays" yaml:"coldArchiveDays"`
	Continuous interface{} `field:"optional" json:"continuous" yaml:"continuous"`
	DataSourceFilters interface{} `field:"optional" json:"dataSourceFilters" yaml:"dataSourceFilters"`
	DoDetect interface{} `field:"optional" json:"doDetect" yaml:"doDetect"`
	Immutable interface{} `field:"optional" json:"immutable" yaml:"immutable"`
	KeepLatestSnapshots interface{} `field:"optional" json:"keepLatestSnapshots" yaml:"keepLatestSnapshots"`
	ReplicationRegionId interface{} `field:"optional" json:"replicationRegionId" yaml:"replicationRegionId"`
	ReplicationVaultId interface{} `field:"optional" json:"replicationVaultId" yaml:"replicationVaultId"`
	Retention interface{} `field:"optional" json:"retention" yaml:"retention"`
	RetentionRules interface{} `field:"optional" json:"retentionRules" yaml:"retentionRules"`
	Schedule interface{} `field:"optional" json:"schedule" yaml:"schedule"`
	Selector interface{} `field:"optional" json:"selector" yaml:"selector"`
	TagFilters interface{} `field:"optional" json:"tagFilters" yaml:"tagFilters"`
	VaultId interface{} `field:"optional" json:"vaultId" yaml:"vaultId"`
}

