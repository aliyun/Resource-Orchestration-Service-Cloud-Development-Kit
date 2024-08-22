package datasource


// Properties for defining a `HpcCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpccluster
type HpcClusterProps struct {
	// Property hpcClusterId: The ID of cluster.
	HpcClusterId interface{} `field:"required" json:"hpcClusterId" yaml:"hpcClusterId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

