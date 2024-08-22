package datasource


// Properties for defining a `Workspaces`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaces
type WorkspacesProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property workspaceId: The ID of the workspace.
	WorkspaceId interface{} `field:"optional" json:"workspaceId" yaml:"workspaceId"`
	// Property workspaceName: The workspace name.
	//
	// The format is as follows:
	// - 3 to 23 characters in length and can contain letters, underscores, or numbers.
	// - Must start with a large or small letter.
	// - Unique in the current region.
	WorkspaceName interface{} `field:"optional" json:"workspaceName" yaml:"workspaceName"`
}

