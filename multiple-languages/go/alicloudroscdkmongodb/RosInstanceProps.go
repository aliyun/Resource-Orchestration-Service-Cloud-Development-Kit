package alicloudroscdkmongodb


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
type RosInstanceProps struct {
	DbInstanceClass interface{} `field:"required" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	DbInstanceStorage interface{} `field:"required" json:"dbInstanceStorage" yaml:"dbInstanceStorage"`
	AccountPassword interface{} `field:"optional" json:"accountPassword" yaml:"accountPassword"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	BackupId interface{} `field:"optional" json:"backupId" yaml:"backupId"`
	BusinessInfo interface{} `field:"optional" json:"businessInfo" yaml:"businessInfo"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	CouponNo interface{} `field:"optional" json:"couponNo" yaml:"couponNo"`
	DatabaseNames interface{} `field:"optional" json:"databaseNames" yaml:"databaseNames"`
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	EngineVersion interface{} `field:"optional" json:"engineVersion" yaml:"engineVersion"`
	HiddenZoneId interface{} `field:"optional" json:"hiddenZoneId" yaml:"hiddenZoneId"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	ReadonlyReplicas interface{} `field:"optional" json:"readonlyReplicas" yaml:"readonlyReplicas"`
	ReplicationFactor interface{} `field:"optional" json:"replicationFactor" yaml:"replicationFactor"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RestoreTime interface{} `field:"optional" json:"restoreTime" yaml:"restoreTime"`
	SecondaryZoneId interface{} `field:"optional" json:"secondaryZoneId" yaml:"secondaryZoneId"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SecurityIpArray interface{} `field:"optional" json:"securityIpArray" yaml:"securityIpArray"`
	SrcDbInstanceId interface{} `field:"optional" json:"srcDbInstanceId" yaml:"srcDbInstanceId"`
	StorageEngine interface{} `field:"optional" json:"storageEngine" yaml:"storageEngine"`
	StorageType interface{} `field:"optional" json:"storageType" yaml:"storageType"`
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TdeStatus interface{} `field:"optional" json:"tdeStatus" yaml:"tdeStatus"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VpcPasswordFree interface{} `field:"optional" json:"vpcPasswordFree" yaml:"vpcPasswordFree"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

