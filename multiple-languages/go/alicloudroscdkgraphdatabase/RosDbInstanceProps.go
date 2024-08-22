package alicloudroscdkgraphdatabase


// Properties for defining a `RosDbInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-dbinstance
type RosDbInstanceProps struct {
	DbInstanceCategory interface{} `field:"required" json:"dbInstanceCategory" yaml:"dbInstanceCategory"`
	DbInstanceNetworkType interface{} `field:"required" json:"dbInstanceNetworkType" yaml:"dbInstanceNetworkType"`
	DbInstanceStorageType interface{} `field:"required" json:"dbInstanceStorageType" yaml:"dbInstanceStorageType"`
	DbNodeClass interface{} `field:"required" json:"dbNodeClass" yaml:"dbNodeClass"`
	DbNodeStorage interface{} `field:"required" json:"dbNodeStorage" yaml:"dbNodeStorage"`
	DbVersion interface{} `field:"required" json:"dbVersion" yaml:"dbVersion"`
	BackupSetId interface{} `field:"optional" json:"backupSetId" yaml:"backupSetId"`
	CreateType interface{} `field:"optional" json:"createType" yaml:"createType"`
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	DbInstanceIpArray interface{} `field:"optional" json:"dbInstanceIpArray" yaml:"dbInstanceIpArray"`
	EcsSecurityGroupRelations interface{} `field:"optional" json:"ecsSecurityGroupRelations" yaml:"ecsSecurityGroupRelations"`
	MaintainTime interface{} `field:"optional" json:"maintainTime" yaml:"maintainTime"`
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RestoreType interface{} `field:"optional" json:"restoreType" yaml:"restoreType"`
	SourceDbInstanceId interface{} `field:"optional" json:"sourceDbInstanceId" yaml:"sourceDbInstanceId"`
	Tags *[]*RosDbInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

