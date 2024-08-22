package datasource


// Properties for defining a `DBClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbclusters
type DBClustersProps struct {
	// Property dbClusterId: The ID of the cluster.
	DbClusterId interface{} `field:"optional" json:"dbClusterId" yaml:"dbClusterId"`
	// Property dbType: The database engine that the cluster runs.
	DbType interface{} `field:"optional" json:"dbType" yaml:"dbType"`
	// Property dbVersion: The version of the database engine that the cluster runs.
	//
	// The range of the MySQL version number is as follows:
	// *** 5.6 * * *
	// *** 5.7 * * *
	// *** 8.0 * * *
	// The value range of PostgreSQL version number is as follows:
	// *** 11 * * *
	// *** 14 * * *
	// The Oracle version number is 11.
	DbVersion interface{} `field:"optional" json:"dbVersion" yaml:"dbVersion"`
	// Property description: The description of the cluster.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property expired: Indicates whether the cluster has expired.
	//
	// Valid values:
	// true
	// false.
	Expired interface{} `field:"optional" json:"expired" yaml:"expired"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

