package alicloudroscdkdrds


// Properties for defining a `DrdsDB`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsdb
type DrdsDBProps struct {
	// Property drdsInstanceId: DRDS instance ID.
	DrdsInstanceId interface{} `field:"required" json:"drdsInstanceId" yaml:"drdsInstanceId"`
	// Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
	AccountName interface{} `field:"optional" json:"accountName" yaml:"accountName"`
	// Property dbInstanceIsCreating: Specifies whether the required ApsaraDB RDS for MySQL instance is being created.
	DbInstanceIsCreating interface{} `field:"optional" json:"dbInstanceIsCreating" yaml:"dbInstanceIsCreating"`
	// Property dbInstType: The type of the storage instances that are used by the PolarDB-X 1.0 database. Set the value to RDS.
	DbInstType interface{} `field:"optional" json:"dbInstType" yaml:"dbInstType"`
	// Property dbName: Database Name.
	DbName interface{} `field:"optional" json:"dbName" yaml:"dbName"`
	// Property encode: The encoding method that is used by the database.
	Encode interface{} `field:"optional" json:"encode" yaml:"encode"`
	// Property instDbName: List of databases.
	InstDbName interface{} `field:"optional" json:"instDbName" yaml:"instDbName"`
	// Property password: The logon password of the database instance.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property rdsInstance: List of RDS instances.
	RdsInstance interface{} `field:"optional" json:"rdsInstance" yaml:"rdsInstance"`
	// Property type: Database Sharding method.
	//
	// For more information, see scalability principle. Valid values:
	// HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
	// and table sharding.
	// VERTICAL: indicates VERTICAL partitioning.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

