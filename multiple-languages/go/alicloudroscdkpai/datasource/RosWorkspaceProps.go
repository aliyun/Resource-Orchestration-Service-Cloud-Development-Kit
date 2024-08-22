package datasource


// Properties for defining a `RosWorkspace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace
type RosWorkspaceProps struct {
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

