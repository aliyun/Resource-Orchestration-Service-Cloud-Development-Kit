package datasource


// Properties for defining a `RosDedicatedHostClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostclusters
type RosDedicatedHostClustersProps struct {
	DedicatedHostClusterName interface{} `field:"optional" json:"dedicatedHostClusterName" yaml:"dedicatedHostClusterName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

