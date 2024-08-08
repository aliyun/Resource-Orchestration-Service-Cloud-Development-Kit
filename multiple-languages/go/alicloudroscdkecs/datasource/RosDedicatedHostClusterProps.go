package datasource


// Properties for defining a `RosDedicatedHostCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostcluster
type RosDedicatedHostClusterProps struct {
	DedicatedHostClusterId interface{} `field:"required" json:"dedicatedHostClusterId" yaml:"dedicatedHostClusterId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

