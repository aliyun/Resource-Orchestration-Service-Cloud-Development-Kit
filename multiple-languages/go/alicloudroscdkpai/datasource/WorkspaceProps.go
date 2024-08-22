package datasource


// Properties for defining a `Workspace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace
type WorkspaceProps struct {
	// Property workspaceId: The ID of the workspace.
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

