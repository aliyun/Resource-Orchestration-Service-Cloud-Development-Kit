package datasource


// Properties for defining a `RosDBClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
type RosDBClustersProps struct {
	DbClusterId interface{} `field:"optional" json:"dbClusterId" yaml:"dbClusterId"`
	DbClusterName interface{} `field:"optional" json:"dbClusterName" yaml:"dbClusterName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

