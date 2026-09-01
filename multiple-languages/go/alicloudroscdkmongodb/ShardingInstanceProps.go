package alicloudroscdkmongodb


// Properties for defining a `ShardingInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
type ShardingInstanceProps struct {
	// Property configServer: The information of Configserver nodes.
	ConfigServer interface{} `field:"required" json:"configServer" yaml:"configServer"`
	// Property mongos: The information of Mongos nodes.
	Mongos interface{} `field:"required" json:"mongos" yaml:"mongos"`
	// Property replicaSet: The information of shard nodes.
	ReplicaSet interface{} `field:"required" json:"replicaSet" yaml:"replicaSet"`
	// Property accountPassword: The password of the root account.
	//
	// The password must meet the following
	// requirements:
	// - It must contain at least three of the following character types: uppercase
	// letters, lowercase letters, digits, and special characters.
	// - Special characters include !@#$%^&\*()_+-=
	// - It must be 8 to 32 characters in length.
	AccountPassword interface{} `field:"optional" json:"accountPassword" yaml:"accountPassword"`
	// Property autoRenew: Specifies whether to enable auto-renewal for the instance.
	//
	// Valid values:
	// - true: Auto-renewal is enabled.
	// - false: Auto-renewal is disabled. You must manually renew the instance. This is
	// the default value.
	// > This parameter is optional and takes effect only when you set the ChargeType
	// parameter to PrePaid.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property dbInstanceDescription: The name of the instance.
	//
	// The name must meet the following requirements:
	// - It must start with a Chinese character or a letter.
	// - It can contain digits, Chinese characters, letters, underscores (_), periods
	// (.), and hyphens (-).
	// - It must be 2 to 256 characters in length.
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	// Property engineVersion: The database version.
	//
	// Valid values:
	// - 8.0
	// - 7.0
	// - 6.0
	// - 5.0
	// - 4.4
	// - 4.2
	// - 4.0
	// > * When you clone an instance by calling this operation, the value of this
	// parameter must be the same as that of the source instance.
	EngineVersion interface{} `field:"optional" json:"engineVersion" yaml:"engineVersion"`
	// Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
	//
	// When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
	// The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
	HiddenZoneId interface{} `field:"optional" json:"hiddenZoneId" yaml:"hiddenZoneId"`
	// Property period: The subscription duration of the instance.
	//
	// Unit: month.
	// Valid values: 1 to 9 (integer), 12, 24, 36, and 60.
	// > This parameter is required and takes effect only when you set the ChargeType
	// parameter to PrePaid.
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
	//
	// Update to this property will cover the current security ips.
	SecurityIpArray interface{} `field:"optional" json:"securityIpArray" yaml:"securityIpArray"`
	// Property srcDbInstanceId: The source instance ID.
	//
	// > This parameter is required only when you clone an instance by calling this
	// operation. You must also specify the RestoreTime parameter.
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

