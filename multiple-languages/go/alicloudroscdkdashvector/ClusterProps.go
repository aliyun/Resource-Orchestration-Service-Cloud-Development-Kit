package alicloudroscdkdashvector


// Properties for defining a `Cluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster
type ClusterProps struct {
	// Property clusterName: The name of cluster.
	ClusterName interface{} `field:"required" json:"clusterName" yaml:"clusterName"`
	// Property clusterType: The type of cluster.
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	// Property replicaCount: The number of replicas.
	ReplicaCount interface{} `field:"required" json:"replicaCount" yaml:"replicaCount"`
	// Property ignoreExisting: Whether to ignore existing dash vector cluster False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored. If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
}

