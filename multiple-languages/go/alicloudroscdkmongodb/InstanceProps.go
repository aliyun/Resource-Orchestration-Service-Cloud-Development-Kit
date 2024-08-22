package alicloudroscdkmongodb


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
type InstanceProps struct {
	// Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
	DbInstanceClass interface{} `field:"required" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	// Property dbInstanceStorage: Database instance storage size.
	//
	// MongoDB is [5,3000], increased every 10 GB, Unit in GB.
	DbInstanceStorage interface{} `field:"required" json:"dbInstanceStorage" yaml:"dbInstanceStorage"`
	// Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
	AccountPassword interface{} `field:"optional" json:"accountPassword" yaml:"accountPassword"`
	// Property autoRenew: Indicates whether automatic renewal is enabled for the instance.
	//
	// Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property backupId: Specific backup set Id.
	BackupId interface{} `field:"optional" json:"backupId" yaml:"backupId"`
	// Property businessInfo: The business information.
	//
	// It is an additional parameter.
	BusinessInfo interface{} `field:"optional" json:"businessInfo" yaml:"businessInfo"`
	// Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property couponNo: The coupon code.
	//
	// Default value:youhuiquan_promotion_option_id_for_blank.
	CouponNo interface{} `field:"optional" json:"couponNo" yaml:"couponNo"`
	// Property databaseNames: The name of the database.
	DatabaseNames interface{} `field:"optional" json:"databaseNames" yaml:"databaseNames"`
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
	// Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
	ReadonlyReplicas interface{} `field:"optional" json:"readonlyReplicas" yaml:"readonlyReplicas"`
	// Property replicationFactor: The number of nodes in the replica set.
	//
	// Allowed values: [3, 5, 7], default to 3.
	ReplicationFactor interface{} `field:"optional" json:"replicationFactor" yaml:"replicationFactor"`
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
	// Property securityGroupId: The ID of the ECS security group.
	//
	// Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
	// You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
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
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
	//
	// Valid values:
	// true: enable TDE
	// false: disable TDE (default)
	// Note: You cannot disable TDE after it is enabled.
	TdeStatus interface{} `field:"optional" json:"tdeStatus" yaml:"tdeStatus"`
	// Property vpcId: The VPC id to create mongodb instance.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.
	//
	// If set to:
	// - true: enables password free.
	// - false: disables password free.
	VpcPasswordFree interface{} `field:"optional" json:"vpcPasswordFree" yaml:"vpcPasswordFree"`
	// Property vSwitchId: The vSwitch Id to create mongodb instance.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: On which zone to create the instance.
	//
	// If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

