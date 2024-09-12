package alicloudroscdkpolardb


// Properties for defining a `DBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
type DBClusterProps struct {
	// Property dbNodeClass: The node specifications of the cluster.
	//
	// For more information, see Specifications and pricing.
	DbNodeClass interface{} `field:"required" json:"dbNodeClass" yaml:"dbNodeClass"`
	// Property dbType: Database type, value: MySQL PostgreSQL Oracle.
	DbType interface{} `field:"required" json:"dbType" yaml:"dbType"`
	// Property dbVersion: The version of the database.
	//
	// Valid values:
	// MySQL: 5.6, 5.7 or 8.0
	// PostgreSQL: 11, 14, 15
	// Oracle: 11, 14.
	DbVersion interface{} `field:"required" json:"dbVersion" yaml:"dbVersion"`
	// Property payType: The billing method of the cluster.
	//
	// Valid values:
	// Postpaid: pay-as-you-go
	// Prepaid: subscription.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property allowShutDown: Whether to turn on No activity pause.
	//
	// The default is false.
	AllowShutDown interface{} `field:"optional" json:"allowShutDown" yaml:"allowShutDown"`
	// Property architecture: The architecture of CPU.
	//
	// Valid values:
	// X86
	// ARM.
	Architecture interface{} `field:"optional" json:"architecture" yaml:"architecture"`
	// Property autoRenewPeriod: Set the cluster auto renewal time.
	//
	// Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	// Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently.
	//
	// LATEST: Permanently keep the last backup (automatic backup before deletion).
	// NONE: The backup set is not retained when the cluster is deleted.
	// When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
	// Note: This parameter takes effect only when the value of DBType is MySQL.
	BackupRetentionPolicyOnClusterDeletion interface{} `field:"optional" json:"backupRetentionPolicyOnClusterDeletion" yaml:"backupRetentionPolicyOnClusterDeletion"`
	// Property cloneDataPoint: The time point of data to be cloned.
	//
	// Valid values:
	// LATEST: clones data of the latest time point.
	// <BackupID>: clones historical backup data. Specify the ID of the specific backup set.
	// <Timestamp>: clones data of a historical time point. Specify the specific time in
	// the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
	// Default value: LATEST.
	// Note
	// This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
	// If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
	CloneDataPoint interface{} `field:"optional" json:"cloneDataPoint" yaml:"cloneDataPoint"`
	// Property clusterNetworkType: The network type of the cluster.
	//
	// Currently, only VPC is supported. Default value: VPC.
	ClusterNetworkType interface{} `field:"optional" json:"clusterNetworkType" yaml:"clusterNetworkType"`
	// Property coldStorageOption: The option of cold storage.
	ColdStorageOption interface{} `field:"optional" json:"coldStorageOption" yaml:"coldStorageOption"`
	// Property creationCategory: Cluster series.
	//
	// The value could be Normal (standard version), Basic, ArchiveNormal, NormalMultimaster and SENormal.
	CreationCategory interface{} `field:"optional" json:"creationCategory" yaml:"creationCategory"`
	// Property creationOption: The method for creating an ApsaraDB for POLARDB cluster.
	//
	// Valid values:
	// Normal: creates an ApsaraDB for POLARDB cluster.
	// CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
	// CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
	// for POLARDB cluster.
	// MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
	// CreateGdnStandby: Create a secondary cluster.
	// RecoverFromRecyclebin: Recovers data from the freed PolarDB cluster to the new PolarDB cluster.
	// UpgradeFromPolarDB: Upgrade migration from PolarDB.
	// Default value: Normal.
	// Note:
	// When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
	// When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
	CreationOption interface{} `field:"optional" json:"creationOption" yaml:"creationOption"`
	// Property dbClusterDescription: The description of the cluster.
	//
	// The description must comply with the following rules:
	// It must start with a Chinese character or an English letter.
	// It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
	// It cannot start with http:\/\/ or https:\/\/.
	// It must be 2 to 256 characters in length.
	DbClusterDescription interface{} `field:"optional" json:"dbClusterDescription" yaml:"dbClusterDescription"`
	// Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
	DbClusterParameters interface{} `field:"optional" json:"dbClusterParameters" yaml:"dbClusterParameters"`
	// Property dbMinorVersion: The minor version of the cluster.
	//
	// Valid values:
	// 8.0.2
	// 8.0.1
	// This parameter is valid only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 8.0.
	DbMinorVersion interface{} `field:"optional" json:"dbMinorVersion" yaml:"dbMinorVersion"`
	// Property dbNodeNum: The number of Standard Edition nodes.
	//
	// Default value: 1. Valid values:
	// 1: only one primary node.
	// 2: one read-only node and one primary node.
	DbNodeNum interface{} `field:"optional" json:"dbNodeNum" yaml:"dbNodeNum"`
	// Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System:  The default time zone is the same as the time zone where the region is located.
	//
	// This is default value.
	// Other pickable value range is from -12:00 to +13:00, for example, 00:00.
	// Note: This parameter takes effect only when DBType is MySQL.
	DefaultTimeZone interface{} `field:"optional" json:"defaultTimeZone" yaml:"defaultTimeZone"`
	// Property gdnId: The ID of the Global Database Network (GDN).
	//
	// Note: This parameter is required when the CreationOption is CreateGdnStandby.
	GdnId interface{} `field:"optional" json:"gdnId" yaml:"gdnId"`
	// Property hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature.
	//
	// Default value: ON. Valid values:
	// ON: enables the hot standby storage cluster feature.
	// OFF: disables the hot standby storage cluster feature
	// STANDBY: enables the hot standby storage cluster feature only for Standard Edition clusters.
	// The default value for Standard Edition clusters is STANDBY.
	HotStandbyCluster interface{} `field:"optional" json:"hotStandbyCluster" yaml:"hotStandbyCluster"`
	// Property loosePolarLogBin: Enable the Binlog function, the value range is as follows: ON: The cluster enables the Binlog function OFF: The cluster disables the Binlog function This parameter takes effect only when the parameter DBType is MySQL.
	LoosePolarLogBin interface{} `field:"optional" json:"loosePolarLogBin" yaml:"loosePolarLogBin"`
	// Property looseXEngine: Enable the X-Engine storage engine function, the value range is as follows: ON: The cluster starts the X-Engine enginen OFF: The cluster shuts down the X-Engine engine This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB.
	LooseXEngine interface{} `field:"optional" json:"looseXEngine" yaml:"looseXEngine"`
	// Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90.
	//
	// This parameter takes effect only when the parameter LooseXEngine is ON.
	LooseXEngineUseMemoryPct interface{} `field:"optional" json:"looseXEngineUseMemoryPct" yaml:"looseXEngineUseMemoryPct"`
	// Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1.
	//
	// Note: This parameter takes effect only when the value of DBType is MySQL.
	LowerCaseTableNames interface{} `field:"optional" json:"lowerCaseTableNames" yaml:"lowerCaseTableNames"`
	// Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ.
	//
	// Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
	MaintainTime interface{} `field:"optional" json:"maintainTime" yaml:"maintainTime"`
	// Property parameterGroupId: The ID of the parameter template.
	//
	// You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
	ParameterGroupId interface{} `field:"optional" json:"parameterGroupId" yaml:"parameterGroupId"`
	// Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36 If periodUnit is year, the valid range is 1, 2, 3.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the subscription duration.
	//
	// Valid values:
	// Month
	// Year
	// Default value: Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property provisionedIops: ESSD AutoPL preconfigured read and write IOPS for cloud disk.
	//
	// Possible values: 0-min {50,000, 1000* capacity - baseline performance}.
	// Baseline performance =min{1,800+50* capacity, 50000}.
	ProvisionedIops interface{} `field:"optional" json:"provisionedIops" yaml:"provisionedIops"`
	// Property proxyClass: The specifications of the Standard Edition PolarProxy.
	//
	// Valid values:
	// polar.maxscale.g2.medium.c: 2 cores
	// polar.maxscale.g2.large.c: 4 cores
	// polar.maxscale.g2.xlarge.c: 8 cores
	// polar.maxscale.g2.2xlarge.c: 16 cores
	// polar.maxscale.g2.3xlarge.c: 24 cores
	// polar.maxscale.g2.4xlarge.c: 32 cores
	// polar.maxscale.g2.8xlarge.c: 64 cores
	ProxyClass interface{} `field:"optional" json:"proxyClass" yaml:"proxyClass"`
	// Property proxyType: The type of PolarProxy.
	//
	// Default value: OFF. Valid values:
	// OFF: disables PolarProxy.
	// EXCLUSIVE: Dedicated Enterprise Edition
	// GENERAL: Standard Enterprise Edition.
	ProxyType interface{} `field:"optional" json:"proxyType" yaml:"proxyType"`
	// Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster.
	//
	// Normal: manually renews the cluster.
	// NotRenewal: does not renew the cluster.
	// Default value: Normal.
	// Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
	// but only sends an SMS message three days before the cluster expires to remind you
	// that the cluster is not renewed.
	RenewalStatus interface{} `field:"optional" json:"renewalStatus" yaml:"renewalStatus"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property restartMasterNode: Whether to restart the master node.
	RestartMasterNode interface{} `field:"optional" json:"restartMasterNode" yaml:"restartMasterNode"`
	// Property scaleMax: Maximum limit of single-node scaling.
	ScaleMax interface{} `field:"optional" json:"scaleMax" yaml:"scaleMax"`
	// Property scaleMin: Minimum limit of single-node scaling.
	ScaleMin interface{} `field:"optional" json:"scaleMin" yaml:"scaleMin"`
	// Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.
	ScaleRoNumMax interface{} `field:"optional" json:"scaleRoNumMax" yaml:"scaleRoNumMax"`
	// Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.
	ScaleRoNumMin interface{} `field:"optional" json:"scaleRoNumMin" yaml:"scaleRoNumMin"`
	// Property securityGroupIds: The ID of the security group.
	//
	// You can add up to three security groups to a cluster.
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	// Property securityIpList: The whitelist of the Apsara PolarDB cluster.
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	// Property serverlessType: Serverless type.
	ServerlessType interface{} `field:"optional" json:"serverlessType" yaml:"serverlessType"`
	// Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
	//
	// Note
	// This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
	// This parameter is required if the CreationOption parameter is not set to Normal.
	SourceResourceId interface{} `field:"optional" json:"sourceResourceId" yaml:"sourceResourceId"`
	// Property standbyAz: The zone where the hot standby storage cluster is stored.
	//
	// This is valid for Standard Edition clusters of Multi-zone Edition.
	// This parameter takes effect only when the multi-zone data consistency feature is enabled.
	StandbyAz interface{} `field:"optional" json:"standbyAz" yaml:"standbyAz"`
	// Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters.
	//
	// The value range is as follows:
	// Enable: Enable automatic storage scale.
	// Disable: Disable automatic storage scale.
	StorageAutoScale interface{} `field:"optional" json:"storageAutoScale" yaml:"storageAutoScale"`
	// Property storagePayType: The storage pay type.
	StoragePayType interface{} `field:"optional" json:"storagePayType" yaml:"storagePayType"`
	// Property storageSpace: The storage space that uses the subscription billing method.
	//
	// Unit: GB.
	// Valid values for PolarDB for MySQL Standard Edition: 20 to 32000.
	StorageSpace interface{} `field:"optional" json:"storageSpace" yaml:"storageSpace"`
	// Property storageType: The storage type.
	//
	// Valid values for Enterprise Edition:
	// PSL5
	// PSL4
	// Valid values for Standard Edition:
	// ESSDPL0
	// ESSDPL1
	// ESSDPL2
	// ESSDPL3
	// ESSDAUTOPL
	// This parameter is invalid for serverless clusters.
	StorageType interface{} `field:"optional" json:"storageType" yaml:"storageType"`
	// Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB.
	//
	// The maximum value is 32000.
	StorageUpperBound interface{} `field:"optional" json:"storageUpperBound" yaml:"storageUpperBound"`
	// Property strictConsistency: Specifies whether to enable the multi-zone data consistency feature.
	//
	// Valid values:
	// ON: enables the multi-zone data consistency feature, which is valid for Standard Edition clusters of Multi-zone Edition.
	// OFF: disables the multi-zone data consistency feature.
	StrictConsistency interface{} `field:"optional" json:"strictConsistency" yaml:"strictConsistency"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosDBCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
	//
	// Valid values:
	// true: enable TDE
	// false: disable TDE (default)
	// Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
	TdeStatus interface{} `field:"optional" json:"tdeStatus" yaml:"tdeStatus"`
	// Property vpcId: The ID of the VPC to connect to.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the VSwitch to connect to.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The zone ID of the cluster.
	//
	// You can call the DescribeRegions operation to query available zones.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

