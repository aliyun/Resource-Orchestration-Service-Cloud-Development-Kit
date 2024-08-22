package datasource


// Properties for defining a `RosDBClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbclusters
type RosDBClustersProps struct {
	DbClusterId interface{} `field:"optional" json:"dbClusterId" yaml:"dbClusterId"`
	DbType interface{} `field:"optional" json:"dbType" yaml:"dbType"`
	DbVersion interface{} `field:"optional" json:"dbVersion" yaml:"dbVersion"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Expired interface{} `field:"optional" json:"expired" yaml:"expired"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

