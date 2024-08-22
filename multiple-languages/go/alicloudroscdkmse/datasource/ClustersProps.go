package datasource


// Properties for defining a `Clusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-clusters
type ClustersProps struct {
	// Property clusterAliasName: The alias name of cluster.
	ClusterAliasName interface{} `field:"optional" json:"clusterAliasName" yaml:"clusterAliasName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

