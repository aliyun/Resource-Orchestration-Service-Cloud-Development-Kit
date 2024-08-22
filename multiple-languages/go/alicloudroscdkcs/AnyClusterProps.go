package alicloudroscdkcs


// Properties for defining a `AnyCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-anycluster
type AnyClusterProps struct {
	// Property clusterConfig: Cluster config.
	ClusterConfig interface{} `field:"required" json:"clusterConfig" yaml:"clusterConfig"`
}

