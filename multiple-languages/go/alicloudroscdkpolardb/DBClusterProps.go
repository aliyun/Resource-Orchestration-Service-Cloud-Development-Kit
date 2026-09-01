package alicloudroscdkpolardb


// Properties for defining a `DBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
type DBClusterProps struct {
	// Property dbNodeClass: The node specification.
	//
	// For more information, see the following topics:
	// - PolarDB for MySQL: Compute node specifications
	// - PolarDB for PostgreSQL (compatible with Oracle): Compute node
	// specifications
	// - PolarDB for PostgreSQL: Compute node specifications
	// > * To create a PolarDB for MySQL Cluster Edition serverless cluster, set this
	// parameter to polar.mysql.sl.small.
	// >
	// > * To create a PolarDB for MySQL Standard Edition serverless cluster, set this
	// parameter to polar.mysql.sl.small.c.
	// >
	// > * To create a PolarDB for PostgreSQL Cluster Edition serverless cluster, set
	// this parameter to polar.pg.sl.small.
	// >
	// > * To create a PolarDB for PostgreSQL Standard Edition serverless cluster, set
	// this parameter to polar.pg.sl.small.c.
	// >
	// > * To create a PolarDB for PostgreSQL (compatible with Oracle) serverless
	// cluster, set this parameter to polar.o.sl.small.
	DbNodeClass interface{} `field:"required" json:"dbNodeClass" yaml:"dbNodeClass"`
	// Property dbType: Database type, value: MySQL PostgreSQL Oracle.
	DbType interface{} `field:"required" json:"dbType" yaml:"dbType"`
	// Property dbVersion: The version of the database engine.
	//
	// - Valid values for MySQL:
	// - 5.6
	// - 5.7
	// - 8.0
	// - Valid values for PostgreSQL:
	// - 11
	// - 14
	// - 15
	// > If you create a serverless cluster for PolarDB for PostgreSQL, you must set
	// this parameter to `14`.
	// \* Valid values for Oracle:
	// \* 11
	// \* 14.
	DbVersion interface{} `field:"required" json:"dbVersion" yaml:"dbVersion"`
	// Property payType: The billing method of the cluster.
	//
	// Valid values:
	// Postpaid: pay-as-you-go
	// Prepaid: subscription.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property allowShutDown: Specifies whether to enable pause on inactivity.
	//
	// Valid values:
	// - true: enables pause on inactivity.
	// - false (default): disables pause on inactivity.
	// > This parameter is supported only for serverless clusters.
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
	// Property backupRetentionPolicyOnClusterDeletion: The backup retention policy to apply when the cluster is deleted.
	//
	// Valid values:
	// - ALL: retains all backup sets.
	// - LATEST: retains only the last backup set. An automatic backup is performed
	// before the cluster is deleted.
	// - NONE: does not retain backup sets.
	// Default value: NONE.
	// > - This parameter is valid only if DBType is set to MySQL.
	// >
	// > - Serverless clusters do not support this parameter.
	BackupRetentionPolicyOnClusterDeletion interface{} `field:"optional" json:"backupRetentionPolicyOnClusterDeletion" yaml:"backupRetentionPolicyOnClusterDeletion"`
	// Property cloneDataPoint: The point in time for the clone.
	//
	// Valid values:
	// - LATEST: The latest point in time.
	// - BackupID: The ID of a historical backup set.
	// - Timestamp: A specific point in time in the `YYYY-MM-DDThh:mm:ssZ` format. The
	// time must be in UTC.
	// Default value: LATEST.
	// > If you set CreationOption to CloneFromRDS, you can set this parameter only to
	// LATEST.
	CloneDataPoint interface{} `field:"optional" json:"cloneDataPoint" yaml:"cloneDataPoint"`
	// Property clusterNetworkType: The network type of the cluster.
	//
	// Currently, only VPC is supported. Default value: VPC.
	ClusterNetworkType interface{} `field:"optional" json:"clusterNetworkType" yaml:"clusterNetworkType"`
	// Property coldStorageOption: The option of cold storage.
	ColdStorageOption interface{} `field:"optional" json:"coldStorageOption" yaml:"coldStorageOption"`
	// Property creationCategory: The edition of the cluster.
	//
	// Valid values:
	// - Normal: Cluster Edition (default)
	// - Basic: Single-node Edition
	// - ArchiveNormal: X-Engine Edition
	// - NormalMultimaster: Multi-master Cluster Edition
	// - SENormal: Standard Edition
	// > * The Basic edition is supported for PolarDB for MySQL 5.6, 5.7, and 8.0;
	// PolarDB for PostgreSQL 14; and PolarDB for PostgreSQL (compatible with Oracle)
	// 2.0.
	// >
	// > * The ArchiveNormal and NormalMultimaster editions are supported for PolarDB
	// for MySQL 8.0.
	// >
	// > * The SENormal edition is supported for PolarDB for MySQL 5.6, 5.7, and 8.0 and
	// PolarDB for PostgreSQL 14.
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
	// Property dbNodeNum: The number of nodes for a Standard Edition or Enterprise Edition cluster.
	//
	// Valid
	// values:
	// - Standard Edition: 1 to 8. A cluster of this edition includes one read\/write
	// node and up to seven read-only nodes.
	// - Enterprise Edition: 1 to 16. A cluster of this edition includes one read\/write
	// node and up to 15 read-only nodes.
	// > * By default, an Enterprise Edition cluster has two nodes and a Standard
	// Edition cluster has one node.
	// >
	// > * This parameter is supported only for PolarDB for MySQL.
	// >
	// > * You cannot change the number of nodes in a Multi-master Cluster Edition
	// cluster.
	DbNodeNum interface{} `field:"optional" json:"dbNodeNum" yaml:"dbNodeNum"`
	// Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System:  The default time zone is the same as the time zone where the region is located.
	//
	// This is default value.
	// Other pickable value range is from -12:00 to +13:00, for example, 00:00.
	// Note: This parameter takes effect only when DBType is MySQL.
	DefaultTimeZone interface{} `field:"optional" json:"defaultTimeZone" yaml:"defaultTimeZone"`
	// Property deletionProtection: Specifies whether to enable the release protection feature for the cluster.
	//
	// Default is false.
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	// Property gdnId: The ID of the Global Database Network (GDN).
	//
	// Note: This parameter is required when the CreationOption is CreateGdnStandby.
	GdnId interface{} `field:"optional" json:"gdnId" yaml:"gdnId"`
	// Property hotStandbyCluster: Specifies whether to enable the hot standby cluster feature.
	//
	// Valid values:
	// - ON (default): enables a hot standby storage cluster.
	// - OFF: disables the hot standby cluster feature.
	// - STANDBY: enables a hot standby cluster.
	// - EQUAL: enables hot standby for both storage and computing resources.
	// - 3AZ: enables multi-AZ strong consistency.
	// > The value STANDBY is valid only for PolarDB for PostgreSQL.
	HotStandbyCluster interface{} `field:"optional" json:"hotStandbyCluster" yaml:"hotStandbyCluster"`
	// Property loosePolarLogBin: Enable the Binlog function, the value range is as follows: ON: The cluster enables the Binlog function OFF: The cluster disables the Binlog function This parameter takes effect only when the parameter DBType is MySQL.
	LoosePolarLogBin interface{} `field:"optional" json:"loosePolarLogBin" yaml:"loosePolarLogBin"`
	// Property looseXEngine: Specifies whether to enable the X-Engine storage engine.
	//
	// Valid values:
	// - ON: enables the X-Engine storage engine.
	// - OFF: disables the X-Engine storage engine.
	// > This parameter is valid only if the CreationOption parameter is not set to
	// CreateGdnStandby, DBType is set to MySQL, and DBVersion is set to 8.0. To enable
	// the X-Engine storage engine, the node must have at least 8 GB of memory.
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
	// Property provisionedIops: The provisioned read\/write IOPS of the ESSD AutoPL cloud disk.
	//
	// Valid values: 0 to
	// min{50,000, 1,000 × Capacity - Baseline IOPS}.
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
	// Property proxyType: The type of the database proxy.
	//
	// Valid values:
	// - EXCLUSIVE: Enterprise Dedicated
	// - GENERAL: Enterprise General-purpose
	// > The proxy type must be consistent with the type that corresponds to the node
	// specification of the cluster:
	// >
	// > - If the node specification is general-purpose, the proxy type must be
	// Enterprise General-purpose.
	// >
	// > - If the node specification is dedicated, the proxy type must be Enterprise
	// Dedicated.
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
	// Property scaleMax: The maximum number of PCUs for a single-node serverless cluster to scale up to.
	//
	// Valid values: 1 to 32.
	// > This parameter is supported only for serverless clusters.
	ScaleMax interface{} `field:"optional" json:"scaleMax" yaml:"scaleMax"`
	// Property scaleMin: The minimum number of PolarDB compute units (PCUs) for a single-node serverless cluster to scale down to.
	//
	// Valid values: 1 to 31.
	// > This parameter is supported only for serverless clusters.
	ScaleMin interface{} `field:"optional" json:"scaleMin" yaml:"scaleMin"`
	// Property scaleRoNumMax: The maximum number of read-only nodes that the serverless cluster scales up to.
	//
	// Valid values: 0 to 15.
	// > This parameter is supported only for serverless clusters.
	ScaleRoNumMax interface{} `field:"optional" json:"scaleRoNumMax" yaml:"scaleRoNumMax"`
	// Property scaleRoNumMin: The minimum number of read-only nodes that the serverless cluster scales down to.
	//
	// Valid values: 0 to 15.
	// > This parameter is supported only for serverless clusters.
	ScaleRoNumMin interface{} `field:"optional" json:"scaleRoNumMin" yaml:"scaleRoNumMin"`
	// Property securityGroupIds: The ID of the security group.
	//
	// You can add up to three security groups to a cluster.
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	// Property securityIpList: The IP whitelist of the PolarDB cluster.
	//
	// > You can specify multiple IP addresses in the IP whitelist. Separate the IP
	// addresses with commas (,).
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	// Property serverlessType: Serverless type.
	ServerlessType interface{} `field:"optional" json:"serverlessType" yaml:"serverlessType"`
	// Property sourceResourceId: The ID of the source ApsaraDB RDS instance or source PolarDB cluster.
	//
	// This
	// parameter is required only if CreationOption is set to MigrationFromRDS,
	// CloneFromRDS, CloneFromPolarDB, or RecoverFromRecyclebin.
	// - If CreationOption is set to MigrationFromRDS or CloneFromRDS, specify the ID of
	// the source ApsaraDB RDS instance. The source ApsaraDB RDS instance must be
	// ApsaraDB RDS for MySQL 5.6, 5.7, or 8.0 High-availability Edition.
	// - If CreationOption is set to CloneFromPolarDB, specify the ID of the source
	// PolarDB cluster. The new cluster must use the same database engine as the source
	// cluster. For example, if the source cluster runs MySQL 8.0, you must set DBType
	// to MySQL and DBVersion to 8.0 for the new cluster.
	// - If CreationOption is set to RecoverFromRecyclebin, specify the ID of the
	// released source PolarDB cluster. The restored cluster must use the same database
	// engine as the source cluster.
	SourceResourceId interface{} `field:"optional" json:"sourceResourceId" yaml:"sourceResourceId"`
	// Property sslEnabled: Modifies the SSL status.
	//
	// Valid values:
	// Disable: disables SSL encryption.
	// Enable: enables SSL encryption.
	// Update: updates the SSL certificate.
	SslEnabled interface{} `field:"optional" json:"sslEnabled" yaml:"sslEnabled"`
	// Property standbyAz: The zone for the hot standby cluster.
	//
	// > This parameter is valid only when the hot standby cluster feature or multi-AZ
	// strong consistency is enabled.
	StandbyAz interface{} `field:"optional" json:"standbyAz" yaml:"standbyAz"`
	// Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters.
	//
	// The value range is as follows:
	// Enable: Enable automatic storage scale.
	// Disable: Disable automatic storage scale.
	StorageAutoScale interface{} `field:"optional" json:"storageAutoScale" yaml:"storageAutoScale"`
	// Property storagePayType: The billing method for storage.
	//
	// Valid values:
	// - Postpaid: pay-by-capacity (a pay-as-you-go method).
	// - Prepaid: pay-by-space (a subscription method).
	StoragePayType interface{} `field:"optional" json:"storagePayType" yaml:"storagePayType"`
	// Property storageSpace: The storage space for a pay-by-space (subscription) cluster.
	//
	// Unit: GB.
	// > - Valid values for a PolarDB for MySQL Enterprise Edition cluster: 10 to 50000.
	// >
	// > - Valid values for a PolarDB for MySQL Standard Edition cluster: 20 to 64000.
	// >
	// > - If the storage type of a Standard Edition cluster is ESSD AutoPL, the storage
	// space must be a multiple of 10 between 40 and 64000.
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
	// Property vSwitchId: The ID of the VSwitch.
	//
	// > If you specify the VPCId parameter, you must also specify this parameter.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The zone ID of the cluster.
	//
	// You can call the DescribeRegions operation to query available zones.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

