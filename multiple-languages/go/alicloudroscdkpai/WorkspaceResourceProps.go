package alicloudroscdkpai


// Properties for defining a `WorkspaceResource`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresource
type WorkspaceResourceProps struct {
	// Property envType: Environment type, possible values: - dev: Development environment.
	//
	// - prod: Production environment.
	EnvType interface{} `field:"required" json:"envType" yaml:"envType"`
	// Property resourceType: The resource types.
	//
	// Valid values:
	// MaxCompute
	// ECS
	// Lingjun
	// ACS
	// FLINK.
	ResourceType interface{} `field:"required" json:"resourceType" yaml:"resourceType"`
	// Property workspaceId: The ID of the workspace to which the workspace belongs.
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	// Property workspaceResourceName: The resource name.
	WorkspaceResourceName interface{} `field:"required" json:"workspaceResourceName" yaml:"workspaceResourceName"`
	// Property groupName: Resource group name.
	//
	// If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	// Property isDefault: Whether it is the default resource, each resource type has a default resource.
	//
	// Possible values:
	// - true: is the default resource.
	// - false: Not the default resource.
	IsDefault interface{} `field:"optional" json:"isDefault" yaml:"isDefault"`
	// Property spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
}

