package alicloudroscdkpaidswapi


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidswapi-instance
type InstanceProps struct {
	// Property ecsSpec: The ECS specification of the instance.
	EcsSpec interface{} `field:"required" json:"ecsSpec" yaml:"ecsSpec"`
	// Property imageUrl: The mirror address.
	ImageUrl interface{} `field:"required" json:"imageUrl" yaml:"imageUrl"`
	// Property instanceName: The instance name.
	//
	// Format requirements:
	// - Can only contain letters, numbers and underscores (_).
	// - It cannot exceed 27 characters.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property accessibility: Whether the workspace is visible to others.
	//
	// Valid values:
	// - **PUBLIC**: Visible to all users of the workspace.
	// - **PRIVATE**: Only visible to yourself and the administrator of the workspace.
	Accessibility interface{} `field:"optional" json:"accessibility" yaml:"accessibility"`
	// Property datasets: A collection of datasets.
	Datasets interface{} `field:"optional" json:"datasets" yaml:"datasets"`
	// Property environmentVariables: Environment variable.
	EnvironmentVariables interface{} `field:"optional" json:"environmentVariables" yaml:"environmentVariables"`
	// Property labels: User-defined labels.
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	// Property saveImage: Whether to close the instance after saving the environment.
	SaveImage interface{} `field:"optional" json:"saveImage" yaml:"saveImage"`
	// Property userVpc: User vpc configuration.
	UserVpc interface{} `field:"optional" json:"userVpc" yaml:"userVpc"`
	// Property workspaceId: The Id of the workspace.
	WorkspaceId interface{} `field:"optional" json:"workspaceId" yaml:"workspaceId"`
}

