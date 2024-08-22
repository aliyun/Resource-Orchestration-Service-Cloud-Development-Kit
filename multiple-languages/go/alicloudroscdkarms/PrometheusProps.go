package alicloudroscdkarms


// Properties for defining a `Prometheus`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
type PrometheusProps struct {
	// Property clusterType: Instance type.
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	// Property grafanaInstanceId: Grafana workspace ID.
	GrafanaInstanceId interface{} `field:"required" json:"grafanaInstanceId" yaml:"grafanaInstanceId"`
	// Property prometheusName: The name of the resource.
	PrometheusName interface{} `field:"required" json:"prometheusName" yaml:"prometheusName"`
	// Property clusterId: The ID of the cluster.
	//
	// This parameter is required if you set ClusterType to ManagedKubernetes.
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityGroupId: The ID of the custom resource group.
	//
	// You can specify this parameter to bind the instance to the resource group.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property subClustersJson: The child instances of the Prometheus instance for GlobalView.
	SubClustersJson interface{} `field:"optional" json:"subClustersJson" yaml:"subClustersJson"`
	// Property tags: Tags of prometheus.
	Tags *[]*RosPrometheus_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcId: The ID of the virtual private cloud (VPC).
	//
	// This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the vSwitch.
	//
	// This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

