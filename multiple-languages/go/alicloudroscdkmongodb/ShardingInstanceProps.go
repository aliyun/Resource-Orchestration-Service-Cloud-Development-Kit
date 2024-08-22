package alicloudroscdkmongodb


// Properties for defining a `ShardingInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
type ShardingInstanceProps struct {
	// Property configServer:.
	ConfigServer interface{} `field:"required" json:"configServer" yaml:"configServer"`
	// Property mongos:.
	Mongos interface{} `field:"required" json:"mongos" yaml:"mongos"`
	// Property replicaSet:.
	ReplicaSet interface{} `field:"required" json:"replicaSet" yaml:"replicaSet"`
	// Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
	AccountPassword interface{} `field:"optional" json:"accountPassword" yaml:"accountPassword"`
	// Property autoRenew: Indicates whether automatic renewal is enabled for the instance.
	//
	// Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property dbInstanceDescription: Description of created database instance.
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	// Property engineVersion: Database instance version.
	EngineVersion interface{} `field:"optional" json:"engineVersion" yaml:"engineVersion"`
	// Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
	//
	// When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
	// The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
	HiddenZoneId interface{} `field:"optional" json:"hiddenZoneId" yaml:"hiddenZoneId"`
	// Property networkType: The instance network type.
	//
	// Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	// Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property protocolType: Protocol type.
	//
	// Valid value: mongodb or dynamodb.
	ProtocolType interface{} `field:"optional" json:"protocolType" yaml:"protocolType"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property restoreTime: The time to restore the cloned instance to.
	//
	// The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
	RestoreTime interface{} `field:"optional" json:"restoreTime" yaml:"restoreTime"`
	// Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
	//
	// When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
	SecondaryZoneId interface{} `field:"optional" json:"secondaryZoneId" yaml:"secondaryZoneId"`
	// Property securityIpArray: Security ips to add or remove.
	SecurityIpArray interface{} `field:"optional" json:"securityIpArray" yaml:"securityIpArray"`
	// Property srcDbInstanceId: Create an instance of the backup set based on an instance.
	SrcDbInstanceId interface{} `field:"optional" json:"srcDbInstanceId" yaml:"srcDbInstanceId"`
	// Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.
	StorageEngine interface{} `field:"optional" json:"storageEngine" yaml:"storageEngine"`
	// Property storageType: The storage type of the instance.
	//
	// Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
	// Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
	StorageType interface{} `field:"optional" json:"storageType" yaml:"storageType"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosShardingInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
	//
	// Valid values:
	// true: enable TDE
	// false: disable TDE (default)
	// Note: You cannot disable TDE after it is enabled.
	TdeStatus interface{} `field:"optional" json:"tdeStatus" yaml:"tdeStatus"`
	// Property vpcId: The VPC id to create mongodb instance.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The vSwitch Id to create mongodb instance.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: On which zone to create the instance.
	//
	// If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

