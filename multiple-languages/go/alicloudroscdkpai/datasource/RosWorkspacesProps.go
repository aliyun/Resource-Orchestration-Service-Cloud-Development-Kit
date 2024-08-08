package datasource


// Properties for defining a `RosWorkspaces`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaces
type RosWorkspacesProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	WorkspaceId interface{} `field:"optional" json:"workspaceId" yaml:"workspaceId"`
	WorkspaceName interface{} `field:"optional" json:"workspaceName" yaml:"workspaceName"`
}

