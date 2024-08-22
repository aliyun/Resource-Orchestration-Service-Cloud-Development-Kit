package alicloudroscdkhbr


// Properties for defining a `DbPlan`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbplan
type DbPlanProps struct {
	// Property dbPlanName: Display name of the backup plan.
	DbPlanName interface{} `field:"required" json:"dbPlanName" yaml:"dbPlanName"`
	// Property hostUuid: Uuid of the host of the database instance.
	HostUuid interface{} `field:"required" json:"hostUuid" yaml:"hostUuid"`
	// Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	// Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
	VaultId interface{} `field:"required" json:"vaultId" yaml:"vaultId"`
	// Property continuousPlan: Continuous backup plan schedule.
	//
	// Use {   "type": "continuous" }.
	ContinuousPlan interface{} `field:"optional" json:"continuousPlan" yaml:"continuousPlan"`
	// Property cumulativePlan: Cumulative plan schedule, only for mssql.
	//
	// More details see FullPlan.
	CumulativePlan interface{} `field:"optional" json:"cumulativePlan" yaml:"cumulativePlan"`
	// Property fullPlan: Full backup plan schedule.
	//
	// daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
	FullPlan interface{} `field:"optional" json:"fullPlan" yaml:"fullPlan"`
	// Property incPlan: Incremental backup plan schedule.
	//
	// Only for mysql and oracle. More details see FullPlan.
	IncPlan interface{} `field:"optional" json:"incPlan" yaml:"incPlan"`
	// Property instanceUuid: Uuid of database instance.
	InstanceUuid interface{} `field:"optional" json:"instanceUuid" yaml:"instanceUuid"`
	// Property logPlan: Log backup plan schedule.More details see FullPlan.
	LogPlan interface{} `field:"optional" json:"logPlan" yaml:"logPlan"`
	// Property maxRateLimit: Max rate limit for backup job,.
	MaxRateLimit interface{} `field:"optional" json:"maxRateLimit" yaml:"maxRateLimit"`
	// Property maxRetrySeconds: Max retry seconds on network failure.
	MaxRetrySeconds interface{} `field:"optional" json:"maxRetrySeconds" yaml:"maxRetrySeconds"`
	// Property options: Backup options in json format, different for each type of database.
	//
	// For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {\"channels\":4,\"verify\":false,\"compression\":\"lzop\",\"backup_new_databases\":false}.
	Options interface{} `field:"optional" json:"options" yaml:"options"`
	// Property source: Which database instance or database will be backup.
	Source interface{} `field:"optional" json:"source" yaml:"source"`
}

