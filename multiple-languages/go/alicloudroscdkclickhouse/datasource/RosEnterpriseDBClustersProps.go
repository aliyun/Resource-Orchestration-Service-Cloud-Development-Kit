package datasource


// Properties for defining a `RosEnterpriseDBClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbclusters
type RosEnterpriseDBClustersProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

