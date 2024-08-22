package datasource


// Properties for defining a `RosDBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
type RosDBClusterProps struct {
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

