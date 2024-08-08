package datasource


// Properties for defining a `RosHpcClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpcclusters
type RosHpcClustersProps struct {
	HpcClusterIds interface{} `field:"optional" json:"hpcClusterIds" yaml:"hpcClusterIds"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

