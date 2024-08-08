package alicloudroscdkrds


// Properties for defining a `DBInstanceClone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstanceclone
type DBInstanceCloneProps struct {
	// Property dbInstanceId: Instance id.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property payType: The charge type of created instance.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property allocatePublicConnection: If true, allocate public connection automate.
	AllocatePublicConnection interface{} `field:"optional" json:"allocatePublicConnection" yaml:"allocatePublicConnection"`
	// Property backupId: The ID of the backup set that you want to use.
	//
	// You can call the DescribeBackups operation to query the most recent backup set list.
	// Note You must specify at least one of the BackupId and RestoreTime parameters.
	BackupId interface{} `field:"optional" json:"backupId" yaml:"backupId"`
	// Property backupRetentionPeriod: The retention period of the data backup.
	//
	// Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
	BackupRetentionPeriod interface{} `field:"optional" json:"backupRetentionPeriod" yaml:"backupRetentionPeriod"`
	// Property backupType: The type of backup used by the new instance.
	//
	// Valid values:
	//   - FullBackup: full backup
	// - IncrementalBackup: incremental backup.
	BackupType interface{} `field:"optional" json:"backupType" yaml:"backupType"`
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
	// Property connectionStringPrefix: The prefix of the endpoint.
	//
	// Only the prefix of the CurrentConnectionString parameter value can be modified.
	// The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
	ConnectionStringPrefix interface{} `field:"optional" json:"connectionStringPrefix" yaml:"connectionStringPrefix"`
	// Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.
	ConnectionStringType interface{} `field:"optional" json:"connectionStringType" yaml:"connectionStringType"`
	// Property dbInstanceClass: Database instance type.
	//
	// Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
	DbInstanceClass interface{} `field:"optional" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	// Property dbInstanceDescription: Description of created database instance.
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	// Property dbInstanceStorage: The storage capacity of the instance.
	//
	// Unit: GB. The storage capacity increases in increments of 5 GB.
	// You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
	DbInstanceStorage interface{} `field:"optional" json:"dbInstanceStorage" yaml:"dbInstanceStorage"`
	// Property dbInstanceStorageType: The storage type of the instance.
	//
	// Valid values:
	// local_ssd: specifies to use local SSDs. This is the recommended storage type.
	// cloud_ssd: specifies to use standard SSDs.
	// cloud_essd: enhanced SSD of performance level (PL)1.
	// cloud_essd2: enhanced SSD of PL2.
	// cloud_essd3: enhanced SSD of PL3.
	DbInstanceStorageType interface{} `field:"optional" json:"dbInstanceStorageType" yaml:"dbInstanceStorageType"`
	// Property dbMappings: Database mappings to attach to db instance.
	DbMappings interface{} `field:"optional" json:"dbMappings" yaml:"dbMappings"`
	// Property dbNames: The names of the databases that you want to create on the new instance.
	DbNames interface{} `field:"optional" json:"dbNames" yaml:"dbNames"`
	// Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
	DedicatedHostGroupId interface{} `field:"optional" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	// Property instanceNetworkType: The network type of the new instance.
	//
	// Valid values:
	// - VPC
	// - Classic
	// The default value is the network type of the original instance.
	InstanceNetworkType interface{} `field:"optional" json:"instanceNetworkType" yaml:"instanceNetworkType"`
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
	// Property restoreTable: Specifies whether to restore specific databases and tables.
	//
	// The value 1 specifies to restore specific databases and tables.
	// If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
	RestoreTable interface{} `field:"optional" json:"restoreTable" yaml:"restoreTable"`
	// Property restoreTime: The point in time to which you want to restore the data of the original instance.
	//
	// The point in time must fall within the specified log backup retention period.
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
	// The time must be in UTC.
	RestoreTime interface{} `field:"optional" json:"restoreTime" yaml:"restoreTime"`
	// Property securityGroupId: The ID of the ECS security groups.
	//
	// Each RDS instance can be associated with up to three ECS security groups.
	// You must separate them with commas (,).
	// To delete an ECS Security group, leave this parameter empty.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0\/0 means no limitation.
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
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
	// Property tableMeta: The information about the databases and tables that you want to restore.
	TableMeta interface{} `field:"optional" json:"tableMeta" yaml:"tableMeta"`
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
	// Property timeoutInMinutes: The timeout period for creating the clone instance resource.
	//
	// Unit: Minute. Default: 120.
	TimeoutInMinutes interface{} `field:"optional" json:"timeoutInMinutes" yaml:"timeoutInMinutes"`
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

