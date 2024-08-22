package datasource


// Properties for defining a `RosClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-clusters
type RosClustersProps struct {
	ClusterAliasName interface{} `field:"optional" json:"clusterAliasName" yaml:"clusterAliasName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

