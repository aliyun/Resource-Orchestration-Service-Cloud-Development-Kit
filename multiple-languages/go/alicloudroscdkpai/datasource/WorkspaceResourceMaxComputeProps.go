package datasource


// Properties for defining a `WorkspaceResourceMaxCompute`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcompute
type WorkspaceResourceMaxComputeProps struct {
	// Property groupName: Resource group name.
	//
	// If you want to obtain a resource group name.
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	// Property workspaceId: The ID of the workspace to which the workspace belongs.
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

