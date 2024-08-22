package datasource


// Properties for defining a `RosClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-clusters
type RosClustersProps struct {
	LogicalRegionId interface{} `field:"optional" json:"logicalRegionId" yaml:"logicalRegionId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

