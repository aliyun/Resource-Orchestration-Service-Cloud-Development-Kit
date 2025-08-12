package alicloudroscdkadblake


// Properties for defining a `DBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
type DBClusterProps struct {
	// Property dbClusterVersion: The version of the cluster.
	//
	// Set the value to 5.0.
	DbClusterVersion interface{} `field:"required" json:"dbClusterVersion" yaml:"dbClusterVersion"`
	// Property payType: The billing method of the cluster.
	//
	// Valid values:
	// Postpaid: pay-as-you-go.
	// Prepaid: subscription.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property vpcId: The virtual private cloud (VPC) ID of the cluster.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The vSwitch ID of the cluster.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The zone ID.
	//
	// Note You can call the  DescribeRegions  operation to query the most recent zone list.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property backupSetId: The ID of the backup set that you want to use to restore data.
	//
	// Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
	BackupSetId interface{} `field:"optional" json:"backupSetId" yaml:"backupSetId"`
	// Property cloneSourceRegionId: The ID of the source region where the cluster is located.
	CloneSourceRegionId interface{} `field:"optional" json:"cloneSourceRegionId" yaml:"cloneSourceRegionId"`
	// Property computeResource: The amount of reserved computing resources.
	//
	// Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
	// Note This parameter must be specified with a unit.
	ComputeResource interface{} `field:"optional" json:"computeResource" yaml:"computeResource"`
	// Property dbClusterDescription: The description of the cluster.
	//
	// The description cannot start with http:\/\/ or https:\/\/.
	// The description must be 2 to 256 characters in length.
	DbClusterDescription interface{} `field:"optional" json:"dbClusterDescription" yaml:"dbClusterDescription"`
	// Property dbClusterNetworkType: The network type of the cluster.
	//
	// Valid values:
	// VPC.
	DbClusterNetworkType interface{} `field:"optional" json:"dbClusterNetworkType" yaml:"dbClusterNetworkType"`
	// Property diskEncryption: Specifies whether to encrypt the disk.
	//
	// Valid values:
	// true
	// false (default).
	DiskEncryption interface{} `field:"optional" json:"diskEncryption" yaml:"diskEncryption"`
	// Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group.
	//
	// Valid values:
	// true (default)
	// false.
	EnableDefaultResourcePool interface{} `field:"optional" json:"enableDefaultResourcePool" yaml:"enableDefaultResourcePool"`
	// Property kmsId:.
	KmsId interface{} `field:"optional" json:"kmsId" yaml:"kmsId"`
	// Property period: The subscription duration of the subscription cluster.
	//
	// Valid values when Period is set to Year: 1 to 3 (integer).
	// Valid values when Period is set to Month: 1 to 9 (integer).
	// Note This parameter must be specified when PayType is set to Prepaid.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodType: The subscription type of the subscription cluster.
	//
	// Valid values:
	// Year: subscription on a yearly basis.
	// Month: subscription on a monthly basis.
	// Note This parameter must be specified when PayType is set to Prepaid.
	PeriodType interface{} `field:"optional" json:"periodType" yaml:"periodType"`
	// Property productForm: Valid values: IntegrationForm LegacyForm.
	ProductForm interface{} `field:"optional" json:"productForm" yaml:"productForm"`
	// Property productVersion: The version of the cluster.Note If only ProductForm is set to IntegrationForm, enter this parameter.
	ProductVersion interface{} `field:"optional" json:"productVersion" yaml:"productVersion"`
	// Property reservedNodeCount: The number of reserved nodes.
	//
	// Must be 1 for basic version and multiple
	// of 3 for enterprise version.
	ReservedNodeCount interface{} `field:"optional" json:"reservedNodeCount" yaml:"reservedNodeCount"`
	// Property reservedNodeSize: The size of each reserved node.
	ReservedNodeSize interface{} `field:"optional" json:"reservedNodeSize" yaml:"reservedNodeSize"`
	// Property resourceGroupId: The resource group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property restoreToTime: The point in time to which you want to restore data from the backup set.
	RestoreToTime interface{} `field:"optional" json:"restoreToTime" yaml:"restoreToTime"`
	// Property restoreType: The method that you want to use to restore data.
	//
	// Valid values:
	// backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
	// timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
	RestoreType interface{} `field:"optional" json:"restoreType" yaml:"restoreType"`
	// Property secondaryVSwitchId: The secondary vSwitch ID of the cluster.
	SecondaryVSwitchId interface{} `field:"optional" json:"secondaryVSwitchId" yaml:"secondaryVSwitchId"`
	// Property secondaryZoneId: The secondary zone ID.
	SecondaryZoneId interface{} `field:"optional" json:"secondaryZoneId" yaml:"secondaryZoneId"`
	// Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster.
	//
	// If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
	SourceDbClusterId interface{} `field:"optional" json:"sourceDbClusterId" yaml:"sourceDbClusterId"`
	// Property storageResource: The amount of reserved storage resources.
	//
	// Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
	// Note This parameter must be specified with a unit.
	StorageResource interface{} `field:"optional" json:"storageResource" yaml:"storageResource"`
	// Property tags: Tags to attach to cluster.
	//
	// Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosDBCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

