package alicloudroscdkgpdb


// Properties for defining a `DBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstance
type DBInstanceProps struct {
	// Property engineVersion: The version of the database engine.
	//
	// For example: 6.0、7.0
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	// Property vSwitchId: The vSwitch ID of the instance.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The zone ID of the instance, such as cn-hangzhou-d.
	//
	// You can call the DescribeRegions
	// operation to query the most recent zone list.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property createSampleData: Whether to load the sample data set after the instance is created.
	//
	// The value can be:
	// true: load the sample dataset.
	// false: not to load the sample dataset.
	CreateSampleData interface{} `field:"optional" json:"createSampleData" yaml:"createSampleData"`
	// Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.
	//
	// This parameter must be passed in to create a storage reservation mode instance.
	DbInstanceCategory interface{} `field:"optional" json:"dbInstanceCategory" yaml:"dbInstanceCategory"`
	// Property dbInstanceClass: The instance type.
	DbInstanceClass interface{} `field:"optional" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	// Property dbInstanceDescription: The description of the instance.
	//
	// The description cannot exceed 256 characters in length.
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	// Property dbInstanceGroupCount: The number of compute nodes in the instance.
	//
	// The value can be 2, 4, 8, 12, 16, 24, 32, 64, 96, or 128.
	DbInstanceGroupCount interface{} `field:"optional" json:"dbInstanceGroupCount" yaml:"dbInstanceGroupCount"`
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
	// Property idleTime: Idle release wait time.
	//
	// That is, when the period of no service traffic reaches the specified period, the instance becomes idle. The unit is second. The minimum value is 60. The default value is 600.
	IdleTime interface{} `field:"optional" json:"idleTime" yaml:"idleTime"`
	// Property instanceSpec: The specification of segment nodes.
	//
	// - When DBInstanceCategory is HighAvailability, Valid values: 2C16G, 4C32G, 8C64G, 16C128G.
	// - When DBInstanceCategory is Basic, Valid values: 2C8G, 4C16G, 8C32G, 16C64G.
	// - When DBInstanceCategory is Serverless, Valid values: 4C16G, 8C32G.
	// This parameter must be passed to create a storage elastic mode instance and a serverless version instance.
	InstanceSpec interface{} `field:"optional" json:"instanceSpec" yaml:"instanceSpec"`
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
	// Property prodType: Prod type.
	//
	// The value can be: standard, cost-effective. The default value is standard.
	ProdType interface{} `field:"optional" json:"prodType" yaml:"prodType"`
	// Property securityIpList: The whitelist of IP addresses that are allowed to access the instance.
	//
	// Default value:
	// 127.0.0.1.
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	// Property segDiskPerformanceLevel: Seg disk performance level.
	//
	// The value can be:
	// pl0、pl1 and pl2.
	SegDiskPerformanceLevel interface{} `field:"optional" json:"segDiskPerformanceLevel" yaml:"segDiskPerformanceLevel"`
	// Property segNodeNum: Calculate the number of nodes.
	//
	// The value can be:
	// - When DBInstanceMode is StorageElastic and DBInstanceCategory is HighAvailability, the value ranges from 4 to 512. The value must be a multiple of 4.
	// - When DBInstanceMode is StorageElastic and DBInstanceCategory is Basic, the value ranges from 2 to 512. The value must be a multiple of 2.
	// - When DBInstanceMode is Serverless, The value ranges from 2 to 512. The value must be a multiple of 2.
	SegNodeNum interface{} `field:"optional" json:"segNodeNum" yaml:"segNodeNum"`
	// Property segStorageType: The disk type of segment nodes.
	//
	// For example: cloud_essd, cloud_efficiency.
	// This parameter must be passed in to create a storage elastic mode instance.
	// Storage Elastic Mode Basic Edition instances only support ESSD cloud disks.
	SegStorageType interface{} `field:"optional" json:"segStorageType" yaml:"segStorageType"`
	// Property serverlessMode: Mode of the Serverless instance.
	//
	// The value can be:
	// Manual: manual scheduling is the default value.
	// Auto: indicates automatic scheduling.
	ServerlessMode interface{} `field:"optional" json:"serverlessMode" yaml:"serverlessMode"`
	// Property serverlessResource: Computing resource threshold.
	//
	// The value ranges from 8 to 32. The step length is 8.
	// The unit is ACU. The default value is 32.
	ServerlessResource interface{} `field:"optional" json:"serverlessResource" yaml:"serverlessResource"`
	// Property storageSize: The storage capacity of per segment node.
	//
	// Unit: GB. Minimum is 50, max is 4000, step is 50.
	StorageSize interface{} `field:"optional" json:"storageSize" yaml:"storageSize"`
	// Property tags: The list of instance tags in the form of key\/value pairs.
	//
	// You can define a maximum of 20 tags for instance.
	Tags *[]*RosDBInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vectorConfigurationStatus: the status of vector configuration.
	//
	// The value can be:Y: Turn on vector engine optimization.N: Turn off vector engine optimization (default value).
	VectorConfigurationStatus interface{} `field:"optional" json:"vectorConfigurationStatus" yaml:"vectorConfigurationStatus"`
	// Property vpcId: The VPC ID of the instance.
	//
	// If you set the InstanceNetworkType parameter to VPC, you
	// must also specify the VPCId parameter. The specified region of the VPC must be the
	// same as the RegionId value.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

