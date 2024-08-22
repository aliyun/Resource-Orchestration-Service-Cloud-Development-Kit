package alicloudroscdkrds


// Properties for defining a `DBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstance
type DBInstanceProps struct {
	// Property dbInstanceClass: Database instance type.
	//
	// Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
	DbInstanceClass interface{} `field:"required" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	// Property dbInstanceStorage: The storage capacity of the instance.
	//
	// Unit: GB. The storage capacity increases in increments of 5 GB.
	// You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
	DbInstanceStorage interface{} `field:"required" json:"dbInstanceStorage" yaml:"dbInstanceStorage"`
	// Property engine: Database instance engine type.
	//
	// Support MySQL\/SQLServer\/PostgreSQL\/PPAS\/MariaDB now.
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	// Property engineVersion: Database instance version of the relative engine type.
	//
	// Support:
	// Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
	// Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
	// Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
	// Valid values when you set the Engine parameter to MariaDB: 10.3
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	// Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0\/0 means no limitation.
	SecurityIpList interface{} `field:"required" json:"securityIpList" yaml:"securityIpList"`
	// Property allocatePublicConnection: If true, allocate public connection automate.
	AllocatePublicConnection interface{} `field:"optional" json:"allocatePublicConnection" yaml:"allocatePublicConnection"`
	// Property archiveBackupKeepCount: The number of archived backups that can be retained.
	//
	// Default value: 1. Valid values:
	// The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
	//   parameter is set to ByMonth.
	// The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
	//   parameter is set to ByWeek.
	// Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
	// parameter is set to KeepAll.
	ArchiveBackupKeepCount interface{} `field:"optional" json:"archiveBackupKeepCount" yaml:"archiveBackupKeepCount"`
	// Property archiveBackupKeepPolicy: The period for which to retain archived backups.
	//
	// The number of archived backups that can
	//   be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
	//   Default value: 0. Valid values:
	// ByMonth
	//   ByWeek
	// KeepAll.
	ArchiveBackupKeepPolicy interface{} `field:"optional" json:"archiveBackupKeepPolicy" yaml:"archiveBackupKeepPolicy"`
	// Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
	//
	// The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
	ArchiveBackupRetentionPeriod interface{} `field:"optional" json:"archiveBackupRetentionPeriod" yaml:"archiveBackupRetentionPeriod"`
	// Property autoRenew: Specifies whether to enable auto-renewal.
	//
	// Valid values: true and false. Note
	// :Monthly subscription: The auto-renewal cycle is one month.
	// Annual subscription: The auto-renewal cycle is one year.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property backUpCategory: Specifies whether to enable the second-level backup function.
	//
	// This function allows a backup
	// to be completed within seconds. Valid values:
	// Flash: specifies to enable the second-level backup function.
	//   Standard: specifies to disable the second-level backup function.
	BackUpCategory interface{} `field:"optional" json:"backUpCategory" yaml:"backUpCategory"`
	// Property backupPolicyMode: Backup type,  DataBackupPolicy: data backup  LogBackupPolicy: log backup.
	BackupPolicyMode interface{} `field:"optional" json:"backupPolicyMode" yaml:"backupPolicyMode"`
	// Property backupRetentionPeriod: The retention period of the data backup.
	//
	// Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
	BackupRetentionPeriod interface{} `field:"optional" json:"backupRetentionPeriod" yaml:"backupRetentionPeriod"`
	// Property burstingEnabled: Whether to enable bursting.
	BurstingEnabled interface{} `field:"optional" json:"burstingEnabled" yaml:"burstingEnabled"`
	// Property category: The edition of the instance.
	//
	// Valid values:
	// Basic: RDS Basic Edition
	// HighAvailability: RDS High-availability Edition
	// cluster: RDS Cluster Edition
	// AlwaysOn: RDS Cluster Edition for SQL Server
	// Finance: RDS Enterprise Edition
	// serverless_basic: RDS Serverless Basic Edition.
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	// Property coldDataEnabled: Whether to enable cold data storage.
	ColdDataEnabled interface{} `field:"optional" json:"coldDataEnabled" yaml:"coldDataEnabled"`
	// Property compressType: The format used to compress backups.
	//
	// Valid values:
	//   1: The zlib tool is used to compress backups into .tar.gz files.
	//   4: The QuickLZ tool is used to compress backups into .xb.gz files.
	// This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
	// It can be used to restore individual databases and tables.
	//   8: The QuickLZ tool is used to compress backups into .xb.gz files.
	//   This compression format is supported only when the instance runs MySQL 8.0.
	// It cannot be used to restore individual databases or tables.
	CompressType interface{} `field:"optional" json:"compressType" yaml:"compressType"`
	// Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode.
	//
	// Default is RDS system assigns.
	ConnectionMode interface{} `field:"optional" json:"connectionMode" yaml:"connectionMode"`
	// Property connectionStringPrefix: The prefix of the endpoint.
	//
	// Only the prefix of the CurrentConnectionString parameter value can be modified.
	// The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
	ConnectionStringPrefix interface{} `field:"optional" json:"connectionStringPrefix" yaml:"connectionStringPrefix"`
	// Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.
	ConnectionStringType interface{} `field:"optional" json:"connectionStringType" yaml:"connectionStringType"`
	// Property dbInstanceDescription: Description of created database instance.
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	// Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
	DbInstanceNetType interface{} `field:"optional" json:"dbInstanceNetType" yaml:"dbInstanceNetType"`
	// Property dbInstanceStorageType: The storage type of the instance.
	//
	// Valid values:
	// local_ssd: specifies to use local SSDs. This is the recommended storage type.
	// cloud_ssd: specifies to use standard SSDs.
	// cloud_essd: enhanced SSD of performance level (PL)1.
	// cloud_essd2: enhanced SSD of PL2.
	// cloud_essd3: enhanced SSD of PL3.
	DbInstanceStorageType interface{} `field:"optional" json:"dbInstanceStorageType" yaml:"dbInstanceStorageType"`
	// Property dbIsIgnoreCase: Specifies whether table names are case-sensitive.
	//
	// Valid values:
	// 1: Table names are not case-sensitive. This is the default value.
	// 0: Table names are case-sensitive.
	DbIsIgnoreCase interface{} `field:"optional" json:"dbIsIgnoreCase" yaml:"dbIsIgnoreCase"`
	// Property dbMappings: Database mappings to attach to db instance.
	DbMappings interface{} `field:"optional" json:"dbMappings" yaml:"dbMappings"`
	// Property dbParamGroupId: The ID of the parameter template used by the instance.
	DbParamGroupId interface{} `field:"optional" json:"dbParamGroupId" yaml:"dbParamGroupId"`
	// Property dbTimeZone: The UTC time zone of the instance.
	//
	// Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
	DbTimeZone interface{} `field:"optional" json:"dbTimeZone" yaml:"dbTimeZone"`
	// Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
	DedicatedHostGroupId interface{} `field:"optional" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	// Property enableBackupLog: Specifies whether to enable the log backup function.
	//
	// Valid values:
	// True: specifies to enable the log backup function.
	// False: specifies to disable the log backup function.
	// Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
	EnableBackupLog interface{} `field:"optional" json:"enableBackupLog" yaml:"enableBackupLog"`
	// Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region.
	//
	// You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
	EncryptionKey interface{} `field:"optional" json:"encryptionKey" yaml:"encryptionKey"`
	// Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the    instance exceeds 80% or the remaining space is less than 5 GB.
	//
	// Valid values:
	//   Enable and Disable. You can retain the default value. Note You must specify
	//   this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
	HighSpaceUsageProtection interface{} `field:"optional" json:"highSpaceUsageProtection" yaml:"highSpaceUsageProtection"`
	// Property instanceNetworkType: Instance network type, VPC or Classic.
	InstanceNetworkType interface{} `field:"optional" json:"instanceNetworkType" yaml:"instanceNetworkType"`
	// Property ioAccelerationEnabled: Whether to enable IO Acceleration, 1 for enable 0 for disable.
	IoAccelerationEnabled interface{} `field:"optional" json:"ioAccelerationEnabled" yaml:"ioAccelerationEnabled"`
	// Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
	//
	// Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
	// You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
	// parameter is set to LogBackupPolicy.
	LocalLogRetentionHours interface{} `field:"optional" json:"localLogRetentionHours" yaml:"localLogRetentionHours"`
	// Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
	//
	// If the space usage for log backup files exceeds this percentage, the system deletes earlier
	//   log backup files until the space usage falls below this percentage. Valid values:0 to 50.
	//   You can retain the default value. Note You must specify this parameter when the
	//   BackupPolicyMode parameter is set to LogBackupPolicy.
	LocalLogRetentionSpace interface{} `field:"optional" json:"localLogRetentionSpace" yaml:"localLogRetentionSpace"`
	// Property logBackupFrequency: The frequency at which to back up logs.
	//
	// Valid values:
	// The value LogInterval specifies to back up logs every 30 minutes.
	//   The default value of this parameter is the same as the data backup frequency.
	// Note The value LogInterval is supported only when the instance runs SQL Server.
	LogBackupFrequency interface{} `field:"optional" json:"logBackupFrequency" yaml:"logBackupFrequency"`
	// Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
	//
	// Default value: 60. Valid values: 6 to 100.
	LogBackupLocalRetentionNumber interface{} `field:"optional" json:"logBackupLocalRetentionNumber" yaml:"logBackupLocalRetentionNumber"`
	// Property logBackupRetentionPeriod: The number of days for which to retain log backup files.
	//
	// Valid values: 7 to 730. The log backup
	//   retention period cannot be longer than the data backup retention period.Note If you enable the log
	//   backup function, you can specify the log backup retention period. This applies only when the
	//   instance runs MySQL, PostgreSQL, or PPAS.
	LogBackupRetentionPeriod interface{} `field:"optional" json:"logBackupRetentionPeriod" yaml:"logBackupRetentionPeriod"`
	// Property maintainTime: The period during which the maintenance performs.
	//
	// The format is HH:mmZ-HH:mmZ.
	MaintainTime interface{} `field:"optional" json:"maintainTime" yaml:"maintainTime"`
	// Property masterUsername: The master user name for the database instance.
	MasterUsername interface{} `field:"optional" json:"masterUsername" yaml:"masterUsername"`
	// Property masterUserPassword: The master password for the database instance.
	MasterUserPassword interface{} `field:"optional" json:"masterUserPassword" yaml:"masterUserPassword"`
	// Property masterUserType: Privilege type of account.
	//
	// Normal: Common privilege.
	//   Super: High privilege.
	// Sysadmin: Super privileges (SA) (only supported by SQL Server)
	// The default value is Normal.
	MasterUserType interface{} `field:"optional" json:"masterUserType" yaml:"masterUserType"`
	// Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
	MultiAz interface{} `field:"optional" json:"multiAz" yaml:"multiAz"`
	// Property payType: The charge type of created instance.
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	// Property period: The subscription duration.
	//
	// Valid values:
	// When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
	//   When PeriodType is Year, it could be from 1 to 5.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodType: Charge period for created instances.
	PeriodType interface{} `field:"optional" json:"periodType" yaml:"periodType"`
	// Property port: The port of the database service.
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	// Property preferredBackupPeriod: The backup period.
	//
	// Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
	PreferredBackupPeriod interface{} `field:"optional" json:"preferredBackupPeriod" yaml:"preferredBackupPeriod"`
	// Property preferredBackupTime: The time when the backup task is performed.
	//
	// Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
	PreferredBackupTime interface{} `field:"optional" json:"preferredBackupTime" yaml:"preferredBackupTime"`
	// Property privateIpAddress: The private ip for created instance.
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	// Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released.
	//
	// Default value: None.
	//   Valid values:
	// Lastest: Only the last archived backup is retained.
	//   All: All of the archived backups are retained.
	ReleasedKeepPolicy interface{} `field:"optional" json:"releasedKeepPolicy" yaml:"releasedKeepPolicy"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS.
	//
	// You can copy the ARN from the RAM console.
	RoleArn interface{} `field:"optional" json:"roleArn" yaml:"roleArn"`
	// Property securityGroupId: The ID of the ECS security groups.
	//
	// Each RDS instance can be associated with up to three ECS security groups.
	// You must separate them with commas (,).
	// To delete an ECS Security group, leave this parameter empty.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property serverlessConfig: The config of RDS serverless instance.
	//
	// This is required when creating serverless instance.
	ServerlessConfig interface{} `field:"optional" json:"serverlessConfig" yaml:"serverlessConfig"`
	// Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.
	//
	// Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
	SlaveZoneIds interface{} `field:"optional" json:"slaveZoneIds" yaml:"slaveZoneIds"`
	// Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
	//
	// Valid values:Enable | Disabled.
	SqlCollectorStatus interface{} `field:"optional" json:"sqlCollectorStatus" yaml:"sqlCollectorStatus"`
	// Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.
	//
	// Valid values:
	// Disabled: Disable SSL
	// EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
	// EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
	// Default value is Disabled.
	SslSetting interface{} `field:"optional" json:"sslSetting" yaml:"sslSetting"`
	// Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL.
	StorageAutoScale interface{} `field:"optional" json:"storageAutoScale" yaml:"storageAutoScale"`
	// Property storageThreshold: Storage space automatic expansion trigger threshold (percentage).
	StorageThreshold interface{} `field:"optional" json:"storageThreshold" yaml:"storageThreshold"`
	// Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value.
	StorageUpperBound interface{} `field:"optional" json:"storageUpperBound" yaml:"storageUpperBound"`
	// Property tags: The tags of an instance.
	//
	// You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
	// At most 20 tags can be specified.
	// Key
	// It can be up to 64 characters in length.
	// Cannot begin with aliyun.
	// Cannot begin with http:\/\/ or https:\/\/.
	// Cannot be a null string.
	// Value
	// It can be up to 128 characters in length.
	// Cannot begin with aliyun.
	// Cannot begin with http:\/\/ or https:\/\/.
	// Can be a null string.
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
	// Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
	TargetDedicatedHostIdForLog interface{} `field:"optional" json:"targetDedicatedHostIdForLog" yaml:"targetDedicatedHostIdForLog"`
	// Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
	TargetDedicatedHostIdForMaster interface{} `field:"optional" json:"targetDedicatedHostIdForMaster" yaml:"targetDedicatedHostIdForMaster"`
	// Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
	TargetDedicatedHostIdForSlave interface{} `field:"optional" json:"targetDedicatedHostIdForSlave" yaml:"targetDedicatedHostIdForSlave"`
	// Property vpcId: The VPC id of created database instance.
	//
	// For VPC network, the property is required.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The vSwitch id of created instance.
	//
	// For VPC network, the property is required.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: selected zone to create database instance.
	//
	// You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

