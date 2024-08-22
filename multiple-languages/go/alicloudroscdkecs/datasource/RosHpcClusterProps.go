package datasource


// Properties for defining a `RosHpcCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpccluster
type RosHpcClusterProps struct {
	HpcClusterId interface{} `field:"required" json:"hpcClusterId" yaml:"hpcClusterId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

