package alicloudroscdkdashvector


// Properties for defining a `RosCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster
type RosClusterProps struct {
	ClusterName interface{} `field:"required" json:"clusterName" yaml:"clusterName"`
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	ReplicaCount interface{} `field:"required" json:"replicaCount" yaml:"replicaCount"`
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
}

