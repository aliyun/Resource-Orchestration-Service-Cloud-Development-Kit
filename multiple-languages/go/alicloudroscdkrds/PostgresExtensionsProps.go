package alicloudroscdkrds


// Properties for defining a `PostgresExtensions`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-postgresextensions
type PostgresExtensionsProps struct {
	// Property accountName: The account of the user who owns the extension.
	//
	// Only privileged accounts are supported.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property dbInstanceId: The instance ID.
	//
	// You can call the DescribeDBInstances operation to query the instance ID.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property dbName: The database name.
	//
	// You can call the DescribeDatabases operation to query the database name.
	DbName interface{} `field:"required" json:"dbName" yaml:"dbName"`
	// Property extensions: The extensions that you want to install.
	Extensions interface{} `field:"optional" json:"extensions" yaml:"extensions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property riskConfirmed: The risk description that you need to confirm.
	//
	// If your instance runs an outdated minor engine version, installing specific extensions on the instance poses security risks. Proceed with the installation only after you acknowledge these risks. Valid values:
	// true
	// false
	// Note For more information about the risks, see Limits on extension creation for ApsaraDB RDS for PostgreSQL instances.
	RiskConfirmed interface{} `field:"optional" json:"riskConfirmed" yaml:"riskConfirmed"`
	// Property sourceDatabase: The source database from which you want to synchronize the extension to the destination database.
	//
	// If you do not specify the Extensions parameter, you must specify this parameter.
	SourceDatabase interface{} `field:"optional" json:"sourceDatabase" yaml:"sourceDatabase"`
}

