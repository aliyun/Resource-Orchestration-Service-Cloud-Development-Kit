package datasource


// Properties for defining a `RosKubernetesClusters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters
type RosKubernetesClustersProps struct {
	ClusterSpec interface{} `field:"optional" json:"clusterSpec" yaml:"clusterSpec"`
	ClusterType interface{} `field:"optional" json:"clusterType" yaml:"clusterType"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Profile interface{} `field:"optional" json:"profile" yaml:"profile"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

