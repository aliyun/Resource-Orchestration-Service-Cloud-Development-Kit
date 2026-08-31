package alicloudroscdkcms2


// Properties for defining a `Workspace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-workspace
type WorkspaceProps struct {
	// Property slsProject: The name of the Log Service (SLS) project.
	SlsProject interface{} `field:"required" json:"slsProject" yaml:"slsProject"`
	// Property workspaceName: The name of the workspace.
	WorkspaceName interface{} `field:"required" json:"workspaceName" yaml:"workspaceName"`
	// Property description: The description of the workspace.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property displayName: The display name of the workspace.
	DisplayName interface{} `field:"optional" json:"displayName" yaml:"displayName"`
}

