package datasource


// Properties for defining a `RosDedicatedBlockStorageClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstorageclusters
type RosDedicatedBlockStorageClustersProps struct {
	DedicatedBlockStorageClusterId interface{} `field:"optional" json:"dedicatedBlockStorageClusterId" yaml:"dedicatedBlockStorageClusterId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

