package datasource


// Properties for defining a `DedicatedBlockStorageClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstorageclusters
type DedicatedBlockStorageClustersProps struct {
	// Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
	DedicatedBlockStorageClusterId interface{} `field:"optional" json:"dedicatedBlockStorageClusterId" yaml:"dedicatedBlockStorageClusterId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

