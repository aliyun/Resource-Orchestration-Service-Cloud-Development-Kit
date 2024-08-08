package alicloudroscdkrds


// Properties for defining a `RosDBInstanceClone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstanceclone
type RosDBInstanceCloneProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	AllocatePublicConnection interface{} `field:"optional" json:"allocatePublicConnection" yaml:"allocatePublicConnection"`
	BackupId interface{} `field:"optional" json:"backupId" yaml:"backupId"`
	BackupRetentionPeriod interface{} `field:"optional" json:"backupRetentionPeriod" yaml:"backupRetentionPeriod"`
	BackupType interface{} `field:"optional" json:"backupType" yaml:"backupType"`
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	ConnectionStringPrefix interface{} `field:"optional" json:"connectionStringPrefix" yaml:"connectionStringPrefix"`
	ConnectionStringType interface{} `field:"optional" json:"connectionStringType" yaml:"connectionStringType"`
	DbInstanceClass interface{} `field:"optional" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	DbInstanceStorage interface{} `field:"optional" json:"dbInstanceStorage" yaml:"dbInstanceStorage"`
	DbInstanceStorageType interface{} `field:"optional" json:"dbInstanceStorageType" yaml:"dbInstanceStorageType"`
	DbMappings interface{} `field:"optional" json:"dbMappings" yaml:"dbMappings"`
	DbNames interface{} `field:"optional" json:"dbNames" yaml:"dbNames"`
	DedicatedHostGroupId interface{} `field:"optional" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	InstanceNetworkType interface{} `field:"optional" json:"instanceNetworkType" yaml:"instanceNetworkType"`
	MaintainTime interface{} `field:"optional" json:"maintainTime" yaml:"maintainTime"`
	MasterUsername interface{} `field:"optional" json:"masterUsername" yaml:"masterUsername"`
	MasterUserPassword interface{} `field:"optional" json:"masterUserPassword" yaml:"masterUserPassword"`
	MasterUserType interface{} `field:"optional" json:"masterUserType" yaml:"masterUserType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodType interface{} `field:"optional" json:"periodType" yaml:"periodType"`
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	PreferredBackupPeriod interface{} `field:"optional" json:"preferredBackupPeriod" yaml:"preferredBackupPeriod"`
	PreferredBackupTime interface{} `field:"optional" json:"preferredBackupTime" yaml:"preferredBackupTime"`
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	RestoreTable interface{} `field:"optional" json:"restoreTable" yaml:"restoreTable"`
	RestoreTime interface{} `field:"optional" json:"restoreTime" yaml:"restoreTime"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	SlaveZoneIds interface{} `field:"optional" json:"slaveZoneIds" yaml:"slaveZoneIds"`
	SqlCollectorStatus interface{} `field:"optional" json:"sqlCollectorStatus" yaml:"sqlCollectorStatus"`
	SslSetting interface{} `field:"optional" json:"sslSetting" yaml:"sslSetting"`
	TableMeta interface{} `field:"optional" json:"tableMeta" yaml:"tableMeta"`
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
	TimeoutInMinutes interface{} `field:"optional" json:"timeoutInMinutes" yaml:"timeoutInMinutes"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

