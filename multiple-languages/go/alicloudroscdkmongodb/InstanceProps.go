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
	// Property accountPassword: The password of the root account.
	//
	// The password must meet the following
	// requirements:
	// - It must contain at least three of the following character types: uppercase
	// letters, lowercase letters, digits, and special characters.
	// - Special characters include !@#$%^&\*()_+-=
	// - It must be 8 to 32 characters in length.
	AccountPassword interface{} `field:"optional" json:"accountPassword" yaml:"accountPassword"`
	// Property auditPolicyOptions: Audit policy options.
	AuditPolicyOptions interface{} `field:"optional" json:"auditPolicyOptions" yaml:"auditPolicyOptions"`
	// Property autoRenew: Specifies whether to enable auto-renewal for the instance.
	//
	// Valid values:
	// - true: Auto-renewal is enabled.
	// - false: Auto-renewal is disabled. You must manually renew the instance. This is
	// the default value.
	// > This parameter is optional and takes effect only when you set the ChargeType
	// parameter to PrePaid.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property backupId: The backup point ID.
	//
	// To query the backup point ID, call the [DescribeBackups]()
	// operation.
	// > You must specify this parameter and the SrcDBInstanceId parameter only when you
	// clone an instance based on a backup point.
	BackupId interface{} `field:"optional" json:"backupId" yaml:"backupId"`
	// Property backupPolicyOptions: Backup policy options.
	BackupPolicyOptions interface{} `field:"optional" json:"backupPolicyOptions" yaml:"backupPolicyOptions"`
	// Property businessInfo: The business information.
	//
	// It is an additional parameter.
	BusinessInfo interface{} `field:"optional" json:"businessInfo" yaml:"businessInfo"`
	// Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property clusterId: The dedicated cluster ID.
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	// Property couponNo: Specifies whether to use a coupon.
	//
	// Valid values:
	// - default or null (default): Uses a coupon.
	// - youhuiquan_promotion_option_id_for_blank: Does not use a coupon.
	CouponNo interface{} `field:"optional" json:"couponNo" yaml:"couponNo"`
	// Property databaseNames: The database name.
	//
	// > When you clone an instance, you can specify this parameter to clone specific
	// databases. If you do not specify this parameter, all databases of the instance
	// are cloned.
	DatabaseNames interface{} `field:"optional" json:"databaseNames" yaml:"databaseNames"`
	// Property dbInstanceDescription: The name of the instance.
	//
	// The name must meet the following requirements:
	// - It must start with a Chinese character or a letter.
	// - It can contain digits, Chinese characters, letters, underscores (_), periods
	// (.), and hyphens (-).
	// - It must be 2 to 256 characters in length.
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	// Property dbInstanceReleaseProtection: Enables instance release protection.
	//
	// Values:
	// - true: Enabled.
	// - false: Not enabled.
	DbInstanceReleaseProtection interface{} `field:"optional" json:"dbInstanceReleaseProtection" yaml:"dbInstanceReleaseProtection"`
	// Property encrypted: Whether to enable cloud disk encryption.
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	// Property encryptionKey: Custom key ID.
	EncryptionKey interface{} `field:"optional" json:"encryptionKey" yaml:"encryptionKey"`
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
	// Property privateConnections: Connection configs of private connection.
	PrivateConnections interface{} `field:"optional" json:"privateConnections" yaml:"privateConnections"`
	// Property provisionedIops: Provisioned IOPS.
	//
	// The value range is 0 to 50000.
	ProvisionedIops interface{} `field:"optional" json:"provisionedIops" yaml:"provisionedIops"`
	// Property readonlyReplicas: The number of read-only nodes in the replica set instance.
	//
	// Valid values are
	// integers from 0 to 5. The default value is 0.
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
	// Property restoreType: The method to restore an instance from a backup.
	//
	// - 0: Restores the instance to a specified backup set.
	// - 1: Restores the instance to a specified point in time.
	// - 2: Restores a released instance to a specified backup set.
	// - 3: Restores the instance to a specified geo-redundant backup set.
	RestoreType interface{} `field:"optional" json:"restoreType" yaml:"restoreType"`
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
	//
	// Update to this property will cover the current security ips.
	SecurityIpArray interface{} `field:"optional" json:"securityIpArray" yaml:"securityIpArray"`
	// Property srcDbInstanceId: The source instance ID.
	//
	// > This parameter is required only when you clone an instance by calling this
	// operation. You must also specify the RestoreTime parameter.
	SrcDbInstanceId interface{} `field:"optional" json:"srcDbInstanceId" yaml:"srcDbInstanceId"`
	// Property srcRegion: The source instance region.
	//
	// >- When the backup recovery type is 2 or 3, this parameter is required.
	SrcRegion interface{} `field:"optional" json:"srcRegion" yaml:"srcRegion"`
	// Property sslOptions: SSL options.
	SslOptions interface{} `field:"optional" json:"sslOptions" yaml:"sslOptions"`
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

