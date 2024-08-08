package alicloudroscdkgraphdatabase


// Properties for defining a `DbInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-dbinstance
type DbInstanceProps struct {
	// Property dbInstanceCategory: The category of the db instance.
	DbInstanceCategory interface{} `field:"required" json:"dbInstanceCategory" yaml:"dbInstanceCategory"`
	// Property dbInstanceNetworkType: The network type of the db instance.
	DbInstanceNetworkType interface{} `field:"required" json:"dbInstanceNetworkType" yaml:"dbInstanceNetworkType"`
	// Property dbInstanceStorageType: Instance storage type, Valid values: - cloud_essd.
	DbInstanceStorageType interface{} `field:"required" json:"dbInstanceStorageType" yaml:"dbInstanceStorageType"`
	// Property dbNodeClass: The class of the db node.
	//
	// Valid values:
	// gdb.r.xlarge, gdb.r.2xlarge, gdb.r.4xlarge, gdb.r.8xlarge,gdb.r.16xlarge, gdb.re.13xlarge, gdb.re.26xlarge, gdb.re.52xlarge
	DbNodeClass interface{} `field:"required" json:"dbNodeClass" yaml:"dbNodeClass"`
	// Property dbNodeStorage: Instance storage space, which is measured in GB.
	//
	// The minimum storage space is 20 GB and the step size is 10GB.
	DbNodeStorage interface{} `field:"required" json:"dbNodeStorage" yaml:"dbNodeStorage"`
	// Property dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher.
	DbVersion interface{} `field:"required" json:"dbVersion" yaml:"dbVersion"`
	// Property backupSetId: Backup set id.
	BackupSetId interface{} `field:"optional" json:"backupSetId" yaml:"backupSetId"`
	// Property createType: The creation method.
	//
	// Valid values:
	// - CreateDBInstance: Create instance
	// - CloneDBInstance: Clone instance
	// - CreateReadDBInstance: Create a read-only instance.
	CreateType interface{} `field:"optional" json:"createType" yaml:"createType"`
	// Property dbInstanceDescription: According to the practical example or notes.
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	// Property dbInstanceIpArray: IP address whitelist for the instance group list.
	DbInstanceIpArray interface{} `field:"optional" json:"dbInstanceIpArray" yaml:"dbInstanceIpArray"`
	// Property ecsSecurityGroupRelations: Security group information array.
	EcsSecurityGroupRelations interface{} `field:"optional" json:"ecsSecurityGroupRelations" yaml:"ecsSecurityGroupRelations"`
	// Property maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
	MaintainTime interface{} `field:"optional" json:"maintainTime" yaml:"maintainTime"`
	// Property paymentType: The resource attribute field representing the paid type is desirable: - PayAsYouGo: Postpaid.
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property restoreType: Restore type.
	RestoreType interface{} `field:"optional" json:"restoreType" yaml:"restoreType"`
	// Property sourceDbInstanceId: Source Instance Id.
	SourceDbInstanceId interface{} `field:"optional" json:"sourceDbInstanceId" yaml:"sourceDbInstanceId"`
	// Property tags: Tags of db instance.
	Tags *[]*RosDbInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcId: The vpc id of the db instance.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The vpc switch id of the resource.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: ZoneId.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

