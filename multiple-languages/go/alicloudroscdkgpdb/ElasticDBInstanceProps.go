package alicloudroscdkgpdb


// Properties for defining a `ElasticDBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-elasticdbinstance
type ElasticDBInstanceProps struct {
	// Property engineVersion: The version of the database engine.
	//
	// For example: 6.0、7.0
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	// Property instanceSpec: The specification of segment nodes.
	//
	// For example: 2C16G, 4C32G, 16C128G.
	InstanceSpec interface{} `field:"required" json:"instanceSpec" yaml:"instanceSpec"`
	// Property segNodeNum: The number of segment nodes.
	//
	// For the high availability version, the value ranges from 4 to 512.
	// The basic version ranges from 2 to 512.
	SegNodeNum interface{} `field:"required" json:"segNodeNum" yaml:"segNodeNum"`
	// Property segStorageType: The disk type of segment nodes.
	//
	// For example: cloud_essd, cloud_efficiency.
	SegStorageType interface{} `field:"required" json:"segStorageType" yaml:"segStorageType"`
	// Property storageSize: The storage capacity of per segment node.
	//
	// Unit: GB. Minimum is 50, max is 4000, step is 50.
	StorageSize interface{} `field:"required" json:"storageSize" yaml:"storageSize"`
	// Property vSwitchId: The vSwitch ID of the instance.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The zone ID of the instance, such as cn-hangzhou-d.
	//
	// You can call the DescribeRegions
	// operation to query the most recent zone list.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
	//
	// This parameter must be passed in to create a storage reservation mode instance.
	DbInstanceCategory interface{} `field:"optional" json:"dbInstanceCategory" yaml:"dbInstanceCategory"`
	// Property dbInstanceDescription: The description of the instance.
	//
	// The description cannot exceed 256 characters in length.
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	// Property dbInstanceMode: The db instance mode.
	//
	// Valid values: StorageElastic, Serverless, Classic.
	DbInstanceMode interface{} `field:"optional" json:"dbInstanceMode" yaml:"dbInstanceMode"`
	// Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter.
	//
	// Otherwise, leave this parameter empty.
	EncryptionKey interface{} `field:"optional" json:"encryptionKey" yaml:"encryptionKey"`
	// Property encryptionType: The type of the encryption.
	//
	// Default value: NULL. Valid values:
	// NULL: Encryption is disabled.
	// CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
	// Note: Disk encryption cannot be disabled after it is enabled.
	EncryptionType interface{} `field:"optional" json:"encryptionType" yaml:"encryptionType"`
	// Property masterNodeNum: The number of master nodes.
	//
	// Minimum is 1, max is 2.
	MasterNodeNum interface{} `field:"optional" json:"masterNodeNum" yaml:"masterNodeNum"`
	// Property payType: The billing method of the instance.
	//
	// Default value: Postpaid. Valid values:
	// Postpaid: pay-as-you-go
	// Prepaid: subscription.
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	// Property period: The subscription period.
	//
	// While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: Unit of subscription period, it could be Month\/Year.
	//
	// Default value is Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property privateIpAddress: Private IP address.
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	// Property securityIpList: The whitelist of IP addresses that are allowed to access the instance.
	//
	// Default value:
	// 127.0.0.1.
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	// Property tags: The list of instance tags in the form of key\/value pairs.
	//
	// You can define a maximum of 20 tags for instance.
	Tags *[]*RosElasticDBInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcId: The VPC ID of the instance.
	//
	// If you set the InstanceNetworkType parameter to VPC, you
	// must also specify the VPCId parameter. The specified region of the VPC must be the
	// same as the RegionId value.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

