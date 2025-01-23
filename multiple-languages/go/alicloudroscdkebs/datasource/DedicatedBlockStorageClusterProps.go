package datasource


// Properties for defining a `DedicatedBlockStorageCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstoragecluster
type DedicatedBlockStorageClusterProps struct {
	// Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
	DedicatedBlockStorageClusterId interface{} `field:"required" json:"dedicatedBlockStorageClusterId" yaml:"dedicatedBlockStorageClusterId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

