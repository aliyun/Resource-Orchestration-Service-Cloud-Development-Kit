package alicloudroscdkgpdb


// Properties for defining a `DBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstance
type DBInstanceProps struct {
	// Property engineVersion: The version of the database engine.
	//
	// For example: 6.0、7.0
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	// Property vSwitchId: The vSwitch ID.
	//
	// > - This parameter is required.
	// >
	// > - The vSwitch must be in the zone specified by `ZoneId`.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The zone ID of the instance, such as cn-hangzhou-d.
	//
	// You can call the DescribeRegions
	// operation to query the most recent zone list.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property aiNodeSpecInfos: AI node spec infos.
	AiNodeSpecInfos interface{} `field:"optional" json:"aiNodeSpecInfos" yaml:"aiNodeSpecInfos"`
	// Property backupId: Backup set ID.
	//
	// You can call DescribeDataBackups to view the backup set IDs of all backup sets under the target instance.
	BackupId interface{} `field:"optional" json:"backupId" yaml:"backupId"`
	// Property cacheStorageSize: The cache size for a serverless instance, in GB.
	CacheStorageSize interface{} `field:"optional" json:"cacheStorageSize" yaml:"cacheStorageSize"`
	// Property createSampleData: Whether to load the sample data set after the instance is created.
	//
	// The value can be:
	// true: load the sample dataset.
	// false: not to load the sample dataset.
	CreateSampleData interface{} `field:"optional" json:"createSampleData" yaml:"createSampleData"`
	// Property dbInstanceCategory: The instance edition.
	//
	// Valid values:
	// - HighAvailability: High-availability Edition
	// - Basic: Basic Edition
	// > This parameter is required for instances in elastic storage mode.
	DbInstanceCategory interface{} `field:"optional" json:"dbInstanceCategory" yaml:"dbInstanceCategory"`
	// Property dbInstanceClass: The instance type.
	//
	// For more information, see the description of the
	// `DBInstanceClass` parameter.
	// > This parameter is required for instances in reserved storage mode.
	DbInstanceClass interface{} `field:"optional" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	// Property dbInstanceDescription: The description of the instance.
	//
	// The description cannot exceed 256 characters in length.
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	// Property dbInstanceGroupCount: The number of compute groups.
	//
	// Valid values: 2, 4, 8, 12, 16, 24, 32, 64, 96, and
	// 128.
	// > This parameter is required for instances in reserved storage mode.
	DbInstanceGroupCount interface{} `field:"optional" json:"dbInstanceGroupCount" yaml:"dbInstanceGroupCount"`
	// Property dbInstanceMode: The db instance mode.
	//
	// Valid values: StorageElastic, Serverless, Classic.
	DbInstanceMode interface{} `field:"optional" json:"dbInstanceMode" yaml:"dbInstanceMode"`
	// Property deployMode: The deployment mode.
	//
	// Valid values:
	// - multiple: multi-AZ deployment.
	// - single: single-AZ deployment.
	// > * If this parameter is not specified, the default value is single.
	// >
	// > * Defaults to `single` (single-AZ deployment), which is the only mode currently
	// supported.
	DeployMode interface{} `field:"optional" json:"deployMode" yaml:"deployMode"`
	// Property enableSsl: Whether to enable SSL encryption.
	//
	// Valid values: true: Enable SSL encryption. false (default): Do not enable SSL encryption.
	EnableSsl interface{} `field:"optional" json:"enableSsl" yaml:"enableSsl"`
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
	// Property idleTime: The period of inactivity, in seconds, after which the instance is considered idle.
	//
	// Minimum value: 60. Default value: 600.
	// > This parameter is required only for serverless instances that use
	// auto-scheduling.
	IdleTime interface{} `field:"optional" json:"idleTime" yaml:"idleTime"`
	// Property instanceSpec: The instance type for the compute nodes.
	//
	// Valid values for a High-availability Edition instance in elastic storage mode:
	// - 2C16G
	// - 4C32G
	// - 16C128G
	// Valid values for a Basic Edition instance in elastic storage mode:
	// - 2C8G
	// - 4C16G
	// - 8C32G
	// - 16C64G
	// Valid values for a serverless instance:
	// - 4C16G
	// - 8C32G
	// > This parameter is required for instances in elastic storage mode or serverless
	// mode.
	InstanceSpec interface{} `field:"optional" json:"instanceSpec" yaml:"instanceSpec"`
	// Property masterAiSpec: If you need to change the Master node to MasterAI node, specify this parameter.
	//
	// This parameter cannot be specified at the same time as MasterCU. Only some regions and availability zones support changing the Master node to MasterAI node. Only Basic edition instances of AnalyticDB PostgreSQL 7.0 support MasterAI nodes. You can query all possible values of this parameter on the Master node reconfiguration sales page.
	MasterAiSpec interface{} `field:"optional" json:"masterAiSpec" yaml:"masterAiSpec"`
	// Property masterCu: The resources for the coordinator node.
	//
	// Valid values:
	// - 2 CU
	// - 4 CU
	// - 8 CU
	// - 16 CU
	// - 32 CU
	// > You are charged for coordinator node resources of 8 CUs or more.
	MasterCu interface{} `field:"optional" json:"masterCu" yaml:"masterCu"`
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
	// Property privateIpAddress: This parameter is deprecated.
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	// Property prodType: Prod type.
	//
	// The value can be: standard, cost-effective. The default value is standard.
	ProdType interface{} `field:"optional" json:"prodType" yaml:"prodType"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityIpList: The IP address whitelist for the instance.
	//
	// A value of 127.0.0.1 blocks all external access. After you create the instance,
	// you can call the [ModifySecurityIps]() operation to modify the IP address
	// whitelist.
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	// Property segDiskPerformanceLevel: The performance level of the ESSDs.
	//
	// Valid values:
	// - pl0: PL0
	// - pl1: PL1
	// - pl2: PL2
	// > * This parameter applies only if the segment node storage type is ESSD.
	// >
	// > * If this parameter is not specified, pl1 is used by default.
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
	// Property serverlessResource: The threshold for computing resources, in AnalyticDB Compute Units (ACUs).
	//
	// The
	// value must be a multiple of 8, ranging from 8 to 32. The default value is 32.
	// > This parameter is required only for serverless instances that use
	// auto-scheduling.
	ServerlessResource interface{} `field:"optional" json:"serverlessResource" yaml:"serverlessResource"`
	// Property srcDbInstanceName: Clone source instance ID.
	//
	// You can call the DescribeDBInstances interface to view the details of all AnalyticDB PostgreSQL instances in the target region, including the instance ID.
	SrcDbInstanceName interface{} `field:"optional" json:"srcDbInstanceName" yaml:"srcDbInstanceName"`
	// Property standbyVSwitchId: The ID of the vSwitch in the standby zone.
	//
	// > - This parameter is required only for a multi-AZ deployment.
	// >
	// > - The vSwitch must be in the standby zone specified in `StandbyZoneId`.
	StandbyVSwitchId interface{} `field:"optional" json:"standbyVSwitchId" yaml:"standbyVSwitchId"`
	// Property standbyZoneId: The ID of the standby zone.
	//
	// > - This parameter is required only for a multi-AZ deployment.
	// >
	// > - You can call the [DescribeRegions]() operation to query the IDs of available
	// zones.
	// >
	// > - The standby zone must be different from the primary zone.
	StandbyZoneId interface{} `field:"optional" json:"standbyZoneId" yaml:"standbyZoneId"`
	// Property storageSize: The storage capacity for the instance, in GB.
	//
	// Valid values: .
	// > This parameter is required for instances in elastic storage mode.
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

