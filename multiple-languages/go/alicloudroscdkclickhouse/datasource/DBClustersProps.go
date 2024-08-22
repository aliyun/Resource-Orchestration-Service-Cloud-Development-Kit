package datasource


// Properties for defining a `DBClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
type DBClustersProps struct {
	// Property dbClusterId: Instance ID.
	DbClusterId interface{} `field:"optional" json:"dbClusterId" yaml:"dbClusterId"`
	// Property dbClusterName: The cluster description information.
	DbClusterName interface{} `field:"optional" json:"dbClusterName" yaml:"dbClusterName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

