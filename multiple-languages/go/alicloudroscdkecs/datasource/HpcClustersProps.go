package datasource


// Properties for defining a `HpcClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpcclusters
type HpcClustersProps struct {
	// Property hpcClusterIds: The IDs of the HPC clusters.
	//
	// You can specify up to 100 HPC cluster IDs.
	HpcClusterIds interface{} `field:"optional" json:"hpcClusterIds" yaml:"hpcClusterIds"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

