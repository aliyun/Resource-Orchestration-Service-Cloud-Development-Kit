package alicloudroscdkarms


// Properties for defining a `ManagedPrometheus`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
type ManagedPrometheusProps struct {
	// Property clusterType: The cluster type.
	//
	// Valid values:
	// *   ecs: ECS
	// *   one: ACK One
	// *   ask: ASK
	// *   pro: Container Monitoring Pro.
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
	// Property grafanaInstanceId: The ID of the managed Grafana workspace that is associated with the cluster.
	//
	// If
	// you set this parameter to free or leave this parameter empty, the cluster is
	// associated with a shared Grafana workspace.
	GrafanaInstanceId interface{} `field:"optional" json:"grafanaInstanceId" yaml:"grafanaInstanceId"`
}

