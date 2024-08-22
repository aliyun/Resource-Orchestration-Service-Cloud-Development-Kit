package alicloudroscdkrds


// Properties for defining a `RosPrepayDBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-prepaydbinstance
type RosPrepayDBInstanceProps struct {
	CommodityCode interface{} `field:"required" json:"commodityCode" yaml:"commodityCode"`
	DbInstanceClass interface{} `field:"required" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	DbInstanceStorage interface{} `field:"required" json:"dbInstanceStorage" yaml:"dbInstanceStorage"`
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	Period interface{} `field:"required" json:"period" yaml:"period"`
	PeriodType interface{} `field:"required" json:"periodType" yaml:"periodType"`
	AllocatePublicConnection interface{} `field:"optional" json:"allocatePublicConnection" yaml:"allocatePublicConnection"`
	ArchiveBackupKeepCount interface{} `field:"optional" json:"archiveBackupKeepCount" yaml:"archiveBackupKeepCount"`
	ArchiveBackupKeepPolicy interface{} `field:"optional" json:"archiveBackupKeepPolicy" yaml:"archiveBackupKeepPolicy"`
	ArchiveBackupRetentionPeriod interface{} `field:"optional" json:"archiveBackupRetentionPeriod" yaml:"archiveBackupRetentionPeriod"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	BackUpCategory interface{} `field:"optional" json:"backUpCategory" yaml:"backUpCategory"`
	BackupPolicyMode interface{} `field:"optional" json:"backupPolicyMode" yaml:"backupPolicyMode"`
	BackupRetentionPeriod interface{} `field:"optional" json:"backupRetentionPeriod" yaml:"backupRetentionPeriod"`
	BurstingEnabled interface{} `field:"optional" json:"burstingEnabled" yaml:"burstingEnabled"`
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	ColdDataEnabled interface{} `field:"optional" json:"coldDataEnabled" yaml:"coldDataEnabled"`
	CompressType interface{} `field:"optional" json:"compressType" yaml:"compressType"`
	ConnectionMode interface{} `field:"optional" json:"connectionMode" yaml:"connectionMode"`
	ConnectionStringPrefix interface{} `field:"optional" json:"connectionStringPrefix" yaml:"connectionStringPrefix"`
	ConnectionStringType interface{} `field:"optional" json:"connectionStringType" yaml:"connectionStringType"`
	CouponCode interface{} `field:"optional" json:"couponCode" yaml:"couponCode"`
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	DbInstanceNetType interface{} `field:"optional" json:"dbInstanceNetType" yaml:"dbInstanceNetType"`
	DbInstanceStorageType interface{} `field:"optional" json:"dbInstanceStorageType" yaml:"dbInstanceStorageType"`
	DbIsIgnoreCase interface{} `field:"optional" json:"dbIsIgnoreCase" yaml:"dbIsIgnoreCase"`
	DbMappings interface{} `field:"optional" json:"dbMappings" yaml:"dbMappings"`
	DbParamGroupId interface{} `field:"optional" json:"dbParamGroupId" yaml:"dbParamGroupId"`
	DbTimeZone interface{} `field:"optional" json:"dbTimeZone" yaml:"dbTimeZone"`
	DedicatedHostGroupId interface{} `field:"optional" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	EnableBackupLog interface{} `field:"optional" json:"enableBackupLog" yaml:"enableBackupLog"`
	EncryptionKey interface{} `field:"optional" json:"encryptionKey" yaml:"encryptionKey"`
	HighSpaceUsageProtection interface{} `field:"optional" json:"highSpaceUsageProtection" yaml:"highSpaceUsageProtection"`
	InstanceNetworkType interface{} `field:"optional" json:"instanceNetworkType" yaml:"instanceNetworkType"`
	IoAccelerationEnabled interface{} `field:"optional" json:"ioAccelerationEnabled" yaml:"ioAccelerationEnabled"`
	LocalLogRetentionHours interface{} `field:"optional" json:"localLogRetentionHours" yaml:"localLogRetentionHours"`
	LocalLogRetentionSpace interface{} `field:"optional" json:"localLogRetentionSpace" yaml:"localLogRetentionSpace"`
	LogBackupFrequency interface{} `field:"optional" json:"logBackupFrequency" yaml:"logBackupFrequency"`
	LogBackupLocalRetentionNumber interface{} `field:"optional" json:"logBackupLocalRetentionNumber" yaml:"logBackupLocalRetentionNumber"`
	LogBackupRetentionPeriod interface{} `field:"optional" json:"logBackupRetentionPeriod" yaml:"logBackupRetentionPeriod"`
	MaintainTime interface{} `field:"optional" json:"maintainTime" yaml:"maintainTime"`
	MasterUsername interface{} `field:"optional" json:"masterUsername" yaml:"masterUsername"`
	MasterUserPassword interface{} `field:"optional" json:"masterUserPassword" yaml:"masterUserPassword"`
	MasterUserType interface{} `field:"optional" json:"masterUserType" yaml:"masterUserType"`
	MultiAz interface{} `field:"optional" json:"multiAz" yaml:"multiAz"`
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	PreferredBackupPeriod interface{} `field:"optional" json:"preferredBackupPeriod" yaml:"preferredBackupPeriod"`
	PreferredBackupTime interface{} `field:"optional" json:"preferredBackupTime" yaml:"preferredBackupTime"`
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	Quantity interface{} `field:"optional" json:"quantity" yaml:"quantity"`
	ReleasedKeepPolicy interface{} `field:"optional" json:"releasedKeepPolicy" yaml:"releasedKeepPolicy"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RoleArn interface{} `field:"optional" json:"roleArn" yaml:"roleArn"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	ServerlessConfig interface{} `field:"optional" json:"serverlessConfig" yaml:"serverlessConfig"`
	SlaveZoneIds interface{} `field:"optional" json:"slaveZoneIds" yaml:"slaveZoneIds"`
	SqlCollectorStatus interface{} `field:"optional" json:"sqlCollectorStatus" yaml:"sqlCollectorStatus"`
	SslSetting interface{} `field:"optional" json:"sslSetting" yaml:"sslSetting"`
	StorageAutoScale interface{} `field:"optional" json:"storageAutoScale" yaml:"storageAutoScale"`
	StorageThreshold interface{} `field:"optional" json:"storageThreshold" yaml:"storageThreshold"`
	StorageUpperBound interface{} `field:"optional" json:"storageUpperBound" yaml:"storageUpperBound"`
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
	TargetDedicatedHostIdForLog interface{} `field:"optional" json:"targetDedicatedHostIdForLog" yaml:"targetDedicatedHostIdForLog"`
	TargetDedicatedHostIdForMaster interface{} `field:"optional" json:"targetDedicatedHostIdForMaster" yaml:"targetDedicatedHostIdForMaster"`
	TargetDedicatedHostIdForSlave interface{} `field:"optional" json:"targetDedicatedHostIdForSlave" yaml:"targetDedicatedHostIdForSlave"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

