package alicloudroscdkarms


// Properties for defining a `Environment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
type EnvironmentProps struct {
	// Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID.
	//
	// For a Cloud environment, specify the region ID.
	BindResourceId interface{} `field:"required" json:"bindResourceId" yaml:"bindResourceId"`
	// Property environmentName: The name of the environment.
	EnvironmentName interface{} `field:"required" json:"environmentName" yaml:"environmentName"`
	// Property environmentSubType: The subtype of the environment.
	//
	// Valid values:
	// One: CS type environment
	// ACK: CS type environment
	// ECS: ECS type environment
	// Cloud: cloud service.
	EnvironmentSubType interface{} `field:"required" json:"environmentSubType" yaml:"environmentSubType"`
	// Property environmentType: The type of the environment.
	//
	// Valid values:
	// CS: ACK
	// ECS: ECS
	// Cloud: cloud service.
	EnvironmentType interface{} `field:"required" json:"environmentType" yaml:"environmentType"`
	// Property deletePromInstance: Cascade delete Prometheus instance.
	//
	// Default value: true.
	DeletePromInstance interface{} `field:"optional" json:"deletePromInstance" yaml:"deletePromInstance"`
	// Property feePackage: The payable resource plan.
	//
	// Valid values:
	// If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
	// Otherwise, leave the parameter empty.
	FeePackage interface{} `field:"optional" json:"feePackage" yaml:"feePackage"`
	// Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment.
	//
	// When passing space, the default share grafana is used.
	GrafanaWorkspaceId interface{} `field:"optional" json:"grafanaWorkspaceId" yaml:"grafanaWorkspaceId"`
	// Property managedType: Specifies whether agents or exporters are managed.
	//
	// Valid values:
	// none: No. By default, no managed agents or exporters are provided for ACK clusters.
	// agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
	// agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
	ManagedType interface{} `field:"optional" json:"managedType" yaml:"managedType"`
	// Property prometheusInstanceId: The ID of the Prometheus instance.
	//
	// If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
	PrometheusInstanceId interface{} `field:"optional" json:"prometheusInstanceId" yaml:"prometheusInstanceId"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of Environment.
	Tags *[]*RosEnvironment_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

