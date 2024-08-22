package datasource


// Properties for defining a `RosKubernetesCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
type RosKubernetesClusterProps struct {
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

