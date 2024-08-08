package alicloudroscdkcs


// Properties for defining a `RosAnyCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-anycluster
type RosAnyClusterProps struct {
	ClusterConfig interface{} `field:"required" json:"clusterConfig" yaml:"clusterConfig"`
}

