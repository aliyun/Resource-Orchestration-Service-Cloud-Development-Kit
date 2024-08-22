package alicloudroscdkarms


// Properties for defining a `ManagedPrometheus`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
type ManagedPrometheusProps struct {
	// Property clusterType: The type of the cluster.
	//
	// Currently, only ask, ecs and one clusters are supported. Default is ecs.
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	// Property securityGroupId: The security group ID of the cluster.
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	// Property vpcId: The vpc ID of the cluster.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The vswith ID of the cluster.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	// Property clusterName: The name of the cluster.
	//
	// Required when the ClusterType is ecs.
	ClusterName interface{} `field:"optional" json:"clusterName" yaml:"clusterName"`
	// Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster.
	//
	// When empty or "free", binds to the shared version of Grafana.
	GrafanaInstanceId interface{} `field:"optional" json:"grafanaInstanceId" yaml:"grafanaInstanceId"`
}

