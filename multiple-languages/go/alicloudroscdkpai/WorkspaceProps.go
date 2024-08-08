package alicloudroscdkpai


// Properties for defining a `Workspace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspace
type WorkspaceProps struct {
	// Property description: Workspace description, no more than 80 characters.
	Description interface{} `field:"required" json:"description" yaml:"description"`
	// Property envTypes: Environments contained in the workspace: - Simple mode only production environment (prod).
	//
	// - Standard mode includes development environment (dev) and production environment (prod).
	EnvTypes interface{} `field:"required" json:"envTypes" yaml:"envTypes"`
	// Property workspaceName: The workspace name.
	//
	// The format is as follows:
	// - 3 to 23 characters in length and can contain letters, underscores, or numbers.
	// - Must start with a large or small letter.
	// - Unique in the current region.
	WorkspaceName interface{} `field:"required" json:"workspaceName" yaml:"workspaceName"`
	// Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace.
	//
	// If not configured, the default value is the workspace name. The format is as follows:
	// - 3 to 23 characters in length and can contain letters, underscores, or numbers.
	// - Must start with a large or small letter.
	// - Unique in the current region.
	DisplayName interface{} `field:"optional" json:"displayName" yaml:"displayName"`
}

