package datasource


// Properties for defining a `RosEnterpriseDBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbcluster
type RosEnterpriseDBClusterProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

